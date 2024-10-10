import './App.css';
import { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Fallback from './components/Fallback';
const Homepage = lazy(() => import('./components/Homepage'))
const Page2 = lazy(() => import('./components/Explore/Page2'))
const Page3 = lazy(() => import('./components/Explore/Page3'))
const Shader = lazy(() => import('./components/Shader'))

function App() {
  return (
    <Suspense fallback={<Fallback />}>
      <Shader />
      <Router>
        <Routes>
          <Route className="homepage" path="/" element={<Homepage />} />
          <Route path="/landingpage" style={{ position: 'relative', top: '5.6rem', overflow: 'hidden' }} element={<Page2 />} />
          <Route path="/AdminDashboard" style={{ position: 'relative', top: '5.6rem', overflow: 'hidden' }} element={<Page3 />} />
        </Routes>
      </Router>
    </Suspense>

  );
}

export default App;
