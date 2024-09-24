import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import QuemSomos from './pages/QuemSomos'
import Informacoes from './pages/Informacoes'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/quem_somos" element={<QuemSomos />} />
            <Route path="/informacoes" element={<Informacoes />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
