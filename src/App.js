import { Routes, Route } from "react-router-dom";
import './App.css';
import Main from './Components/Main';
import Chat from './Components/Chats';
import Article from './Components/Article';
import ArticleCreate from './Components/ArticleCreate';
import Leaderboard from "./Components/Leaderboard";

import './styles/fonts/stylesheet.css'

function App() {
  window.Telegram.WebApp.backgroundColor = "#1E1E1E";
  return (
    <div className="App">
     <Routes>
      <Route path="" element={<Main/>} />
      <Route path="/chat" element={<Chat/>} />
      <Route path="/article" element={<Article/>} />
      <Route path="/createArticle" element={<ArticleCreate/>} />
      <Route path="/leaderboard" element={<Leaderboard />} />
     </Routes>
    </div>
  );
}

export default App;
