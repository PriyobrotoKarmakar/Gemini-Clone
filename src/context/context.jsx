import { createContext } from "react";
import { run } from "../config/gemini";
import { useState } from "react";
export const Context = createContext();

const ContextProvider = ({ children }) => {
  const [input, setInput] = useState("");
  const [recentPrompts, setRecentPrompts] = useState("");
  const [prevPrompts, setPrevPrompts] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("");

  const delayPara = (index, nextWord) => {
    setTimeout(function () {
      setResult((prev) => prev + nextWord);
    }, 10 * index);
  };

  const newChat = ()=>{
    setLoading(false);
    setShowResult(false);

  }

  const onSent = async (prompt) => {
    setResult("");
    setLoading(true);
    setShowResult(true);
    let response;
    if (prompt !== undefined) {
      response = await run(prompt);
      setRecentPrompts(prompt);
      setPrevPrompts((prev) => [...prev, prompt]); // Ensure prevPrompts is updated
    } 
    // else {
    //   setPrevPrompts(prev => [...prev, input]);
    //   setRecentPrompts(input);
    //   response = await run(input);
    // }

    let responseArray = response.split("**");
    let newResponse = "";
    for (let i = 0; i < responseArray.length; i++) {
      if (i === 0 || i % 2 === 0) {
        newResponse += responseArray[i];
      } else {
        newResponse += "<b>" + responseArray[i] + "</b>";
      }
    }
    let newResponse2 = newResponse.split("*").join("</br>");

    let newResponseArray = newResponse2.split(" ");
    for (let i = 0; i < newResponseArray.length; i++) {
      delayPara(i, newResponseArray[i] + " ");
    }
    setLoading(false);
    setInput("");
  };

  const contextValue = {
    prevPrompts,
    setPrevPrompts,
    onSent,
    setRecentPrompts,
    recentPrompts,
    showResult,
    loading,
    result,
    input,
    setInput,
    newChat
  };

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};
export default ContextProvider;
