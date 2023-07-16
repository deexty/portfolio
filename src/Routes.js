import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Inicio from './pages/Inicio';
import Header from './components/Header';
import { ExperienciasProvider } from './context/ExperienciasContext';
import { ProjetosProvider } from './context/ProjetosContext';
import Footer from './components/Footer';
import Projetos from './pages/Projetos';

function AppRoutes() {
  return (
    <>
      <BrowserRouter>
        <ExperienciasProvider>
          <ProjetosProvider>
            <Header></Header>
            <Routes>
              <Route path='/' element={<Inicio></Inicio>}></Route>
              <Route path='/projetos' element={<Projetos></Projetos>}></Route>
            </Routes>
            <Footer></Footer>
          </ProjetosProvider>
        </ExperienciasProvider>
      </BrowserRouter>
    </>
  );
}

export default AppRoutes;
