import Home from './pages/Home'
import { Routes, Route } from 'react-router-dom';
import { WhatsAppButton } from './components/WhatsAppButton/WhatsAppButton'

export function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <WhatsAppButton />
    </>
  )
}

export default App
