import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import Footer from './components/Footer.tsx'
import LegalMentions from './pages/LegalMentions.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <div className="flex-1 flex flex-col">
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/mentions-legales" element={<LegalMentions />} />
            <Route path="*" element={<App />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  </StrictMode>,
)
