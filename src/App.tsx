// src/App.tsx
import React from 'react'
import Home from './pages/Home'
import { WhatsAppButton } from './components/WhatsAppButton/WhatsAppButton'

export function App() {
  return (
    <>
      <Home />
      <WhatsAppButton />
    </>
  )
}

export default App
