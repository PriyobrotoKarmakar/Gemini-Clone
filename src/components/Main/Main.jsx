import React, { useContext } from "react";
import "./Main.css";
import { assets } from "../../assets/assets";
import { Context } from "../../context/context";
const Main = () => {
  const {
    onSent,
    recentPrompts,
    showResult,
    loading,
    result,
    setInput,
    input,
  } = useContext(Context);
  return (
    <div className="main">
      <div className="nav">
        <p>Gemini</p>
        <img src={assets.user_icon} alt="" />
      </div>
      <div className="main-container">
        {!showResult ? (
          <>
            <div className="greet">
              <p>
                <span>Hello P</span>
              </p>
              <p>How can I help you today?</p>
            </div>
            <div className="cards">
              <div className="card">
                <p>Suggest a roadmap to get 50 LPA</p>
                <img src={assets.compass_icon} alt="" />
              </div>
              <div className="card">
                <p>Explain the code</p>
                <img src={assets.bulb_icon} alt="" />
              </div>
              <div className="card">
                <p>Optimize the Leetcode 431 Solution</p>
                <img src={assets.message_icon} alt="" />
              </div>
              <div className="card">
                <p>Scintific Tips to stay more productive</p>
                <img src={assets.code_icon} alt="" />
              </div>
            </div>
          </>
        ) : (
          <div className="result">
            <div className="result-title">
              <img src={assets.user_icon} alt="" />
              <p>{recentPrompts}</p>
            </div>
            <div className="result-data">
              <img src={assets.gemini_icon} alt="" />
              {loading ? (
                <div className="loader">
                  <hr />
                  <hr />
                  <hr />
                </div>
              ) : (
                <p dangerouslySetInnerHTML={{ __html: result }}></p>
              )}
            </div>
          </div>
        )}

        <div className="main-bottom">
          <div className="search-box">
            <input
              onChange={(event) => setInput(event.target.value)}
              value={input}
              type="text"
              className="text"
              placeholder="Enter a Promt here"
            />
            <div>
              <img src={assets.gallery_icon} alt="" />
              <img src={assets.mic_icon} alt="" />
              {input ? (
                <img
                  onClick={() => onSent(input)}
                  src={assets.send_icon}
                  alt=""
                />
              ) : null}
            </div>
          </div>
          <div className="bottom-info">
            <p>Gemini may generate inappropriate info</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
