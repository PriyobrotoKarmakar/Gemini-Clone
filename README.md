# 🤖 Gemini Clone

A sleek, modern, and responsive AI chatbot application built with React and powered by Google's Gemini Pro API. This clone replicates the core features and aesthetic of the Gemini interface, providing a premium user experience.

![Gemini Clone Preview](https://github.com/PriyobrotoKarmakar/Gemini-Clone/raw/main/public/preview.png)

## ✨ Features

- **Gemini AI Integration**: Seamless communication with Google's latest `gemini-2.0-flash` (or latest) model.
- **Responsive Design**: Fully functional on desktop, tablet, and mobile devices.
- **Dynamic Sidebar**: Manage recent chats and collapse/expand for a cleaner workspace.
- **Real-time Interaction**: Instant AI responses with smooth loading animations.
- **Modern UI**: Dark-themed, glassmorphic design inspired by the official Gemini interface.

## 🚀 Tech Stack

- **Frontend**: [React.js](https://reactjs.org/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **AI Model**: [Google Generative AI SDK](https://www.npmjs.com/package/@google/generative-ai)
- **Styling**: Vanilla CSS (Custom Hooks & Components)
- **Icons**: FontAwesome / Custom Assets

## 🛠️ Installation & Setup

1. **Clone the repository:**

   ```bash
   git clone https://github.com/PriyobrotoKarmakar/Gemini-Clone.git
   cd Gemini-Clone
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Configure Environment Variables:**
   Create a `.env` file in the root directory and add your API key:

   ```env
   VITE_GEMINI_API_KEY=your_api_key_here
   ```

   _Get your API key from [Google AI Studio](https://aistudio.google.com/app/apikey)._

4. **Run the development server:**

   ```bash
   npm run dev
   ```

5. **Build for production:**
   ```bash
   npm run build
   ```

## 🏗️ Project Structure

```text
src/
├── assets/          # Images and static assets
├── components/      # Reusable UI components (Main, Sidebar)
├── config/          # Gemini API configuration
├── context/         # React Context for state management
├── App.jsx          # Root component
└── main.jsx         # Entry point
```

## 🛡️ Security Note

This project uses an `.env` file to protect the Google API Key. Ensure `.env` is listed in your `.gitignore` before pushing to any public repository.

---

Made with ❤️ by [Priyobroto Karmakar](https://github.com/PriyobrotoKarmakar)
