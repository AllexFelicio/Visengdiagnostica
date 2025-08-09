// src/components/Layout/Layout.tsx
import { Outlet } from 'react-router-dom'
import { Navbar } from '../Navbar/Navbar'
import { Footer } from '../Footer/Footer'

export default function Layout() {
  return (
    <>
      <Navbar />
      {/* Aqui entram as páginas filhas (Home, Detail, etc.) */}
      <Outlet />
      <Footer />
    </>
  )
}
