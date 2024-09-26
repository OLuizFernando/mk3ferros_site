import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import QuemSomos from './pages/QuemSomos'
import Informacoes from './pages/Informacoes'
import Produto from './pages/Produto'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/quem_somos' element={<QuemSomos />} />
            <Route path='/informacoes' element={<Informacoes />} />
            <Route path='/barras_chatas' element={<Produto produtoId='barras_chatas' />} />
            <Route path='/barras_quadradas' element={<Produto produtoId='barras_quadradas' />} />
            <Route path='/barras_redondas' element={<Produto produtoId='barras_redondas' />} />
            <Route path='/cantoneiras' element={<Produto produtoId='cantoneiras' />} />
            <Route path='/chapas' element={<Produto produtoId='chapas' />} />
            <Route path='/metalons' element={<Produto produtoId='metalons' />} />
            <Route path='/vigas_perfil_u' element={<Produto produtoId='vigas_perfil_u' />} />
            <Route path='/vigas_perfil_w' element={<Produto produtoId='vigas_perfil_w' />} />
            <Route path='/telhas_galvalume' element={<Produto produtoId='telhas_galvalume' />} />
            <Route path='/tubos' element={<Produto produtoId='tubos' />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
