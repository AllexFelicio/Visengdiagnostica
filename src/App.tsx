import Home from './pages/Home'
import { Routes, Route } from 'react-router-dom';
import PortfolioDetail from './components/Portfolio/PortfolioDetails';
import { WhatsAppButton } from './components/WhatsAppButton/WhatsAppButton'
import PortfolioList from './components/Portfolio/PortfolioList';

export function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<PortfolioList />} />
        <Route path="/portfolio/:id" element={<PortfolioDetail />} />
      </Routes>
      <WhatsAppButton />
    </>
  )
}

export default App
