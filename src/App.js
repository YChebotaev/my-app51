import logo from './logo.svg';
import { Routes, Route, useNavigate } from "react-router-dom";
import './App.css';
import Main from './Components/Main';
import Chat from './Components/Chats';
import Article from './Components/Article';
import ArticleCreate from './Components/ArticleCreate';

function App() {
  return (
    <div className="App">
     <Routes>
      <Route path="" element={<Main/>} />
      <Route path="/chat" element={<Chat/>} />
      <Route path="/article" element={<Article/>} />
      <Route path="/createArticle" element={<ArticleCreate/>} />
     </Routes>
    </div>
  );
}

export default App;
