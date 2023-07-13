import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Inicio from './pages/Inicio';
import Header from './components/Header';
import { ExperienciasProvider } from './context/ExperienciasContext';

function AppRoutes() {
  return (
    <>
      <BrowserRouter>
        <ExperienciasProvider>
          <Header></Header>
          <Routes>
            <Route path='/' element={<Inicio></Inicio>}></Route>
          </Routes>
        </ExperienciasProvider>
      </BrowserRouter>
    </>
  );
}

export default AppRoutes;
