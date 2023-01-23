import { Routes, Route, useLocation } from "react-router-dom";
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import { Main } from './pages/Main';
import Chat from './pages/Chats';
import { Article } from './pages/Article';
import { ArticleCreate } from './pages/ArticleCreate';
import Leaderboard from "./pages/Leaderboard";
import { Account } from './pages/Account'
import { Networking } from './pages/Networking'
import { NetworkingMe } from './pages/NetworkingMe'
import { NetworkingCreate } from './pages/NetworkingCreate'
import { NetworkingCard } from './pages/NetworkingCard'
import { Draft } from './pages/Draft'
import { Moove } from './pages/Moove'
import './styles/style.css'
import './styles/fonts/stylesheet.css'
import './styles/toggle.css'

function App({ isFirstTime }) {
  const location = useLocation()

  return (
    <div className="App">
      <TransitionGroup component={null}>
        <CSSTransition key={location.key} classNames="app-fade" timeout={250}>
          <Routes location={location}>
            <Route path="" element={<Main isFirstTime={isFirstTime} />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/article" element={<Article />} />
            <Route path="/createArticle" element={<ArticleCreate />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
            <Route path="/account" element={<Account />} />
            <Route path="/networking/me" element={<NetworkingMe />} />
            <Route path="/networking/create" element={<NetworkingCreate />} />
            <Route path="/networking/:username" element={<NetworkingCard />} />
            <Route path="/networking" element={<Networking />} />
            <Route path="/draft/:postId" element={<Draft />} />
            <Route path="/moove" element={<Moove />} />
          </Routes>
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
}

export default App;
