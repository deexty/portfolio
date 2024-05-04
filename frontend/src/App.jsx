import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/home'
import HeaderNav from './components/HeaderNav'
import Projects from './pages/projects'
import DetalhesProjeto from './pages/projects/detalhes'

function App() {

  return (
    <>
      <BrowserRouter>
        <HeaderNav></HeaderNav>
        <Routes className="relative">
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/projetos' element={<Projects></Projects>}></Route>
          <Route path='/projetos/1' element={<DetalhesProjeto></DetalhesProjeto>}></Route>
        </Routes>
        <p className='w-full text-center py-3 absolute text-sm -mt-11'>Desenvolvido por: Eduardo Soares</p>
      </BrowserRouter>
    </>
  )
}

export default App
