import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/home'
import HeaderNav from './components/HeaderNav'
import Projects from './pages/projects'
import DetalhesProjeto from './pages/projects/detalhes'
import Admin from './pages/admin'
import { useState } from 'react'
import Login from './pages/login'
import Page404 from './pages/404'

function App() {
  const [usuarioLogado, setUsuarioLogado] = useState(false)

  return (
    <>
      <BrowserRouter>
        <HeaderNav></HeaderNav>
        <Routes className="relative">
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/projetos' element={<Projects></Projects>}></Route>
          <Route path='/projetos/:id' element={<DetalhesProjeto></DetalhesProjeto>}></Route>
          <Route path='/admin' element={<Admin usuarioLogado={usuarioLogado}></Admin>}></Route>
          <Route path='/login' element={<Login setUsuarioLogado={setUsuarioLogado}></Login>}></Route>
          <Route path='*' element={<Page404></Page404>}></Route>
        </Routes>
        <p className='w-full text-center py-3 absolute text-sm -mt-11'>Desenvolvido por: Eduardo Soares</p>
      </BrowserRouter>
    </>
  )
}

export default App
