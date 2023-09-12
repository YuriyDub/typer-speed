import { Route, Routes } from 'react-router-dom';
import { Container } from './components/Container';
import { Header } from './components/Header';
import { HomePage } from './components/Pages/HomePage';
import { WarmUpPage } from './components/Pages/WarmUpPage';

import './styles/App.scss';
import { Challenges, ChallengesPage } from './components/Pages/ChallengesPage';
import { ReactionPage } from './components/Pages/ReactionPage';

function App() {
  return (
    <div className="background">
      <Header />
      <Container>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="warm-up" element={<WarmUpPage />} />
          <Route path="challenges" element={<ChallengesPage />}>
            <Route index element={<Challenges />} />
            <Route path="reaction-test" element={<ReactionPage />} />
          </Route>
          <Route path="records" />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
