import { Routes, Route } from "react-router-dom";
import Main from './pages/Main';
import Chat from './pages/Chats';
import Article from './pages/Article';
import { ArticleCreate } from './pages/ArticleCreate';
import Leaderboard from "./pages/Leaderboard";
import { Account } from './pages/Account'
import { Networking } from './pages/Networking'
import './styles/fonts/stylesheet.css'

function App({ isFirstTime }) {
  window.Telegram.WebApp.backgroundColor = "#1E1E1E";

  return (
    <div className="App">
      <Routes>
        <Route path="" element={<Main isFirstTime={isFirstTime} />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/article" element={<Article />} />
        <Route path="/createArticle" element={<ArticleCreate />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/account" element={<Account />} />
        <Route path="/networking" element={<Networking />} />
      </Routes>
    </div>
  );
}

export default App;
