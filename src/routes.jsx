import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Films from './pages/Films';
import Header from './components/Header';
import Erro from './pages/Erro';
import Favorites from './pages/Favorites';

function RoutesApp(){
  return(
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/filme/:id" element={ <Films/> } />
        <Route path='/favoritos' element={<Favorites/> } />

        <Route path='*' element={ <Erro/> } />
      </Routes>
    </BrowserRouter>
  )
}

export default RoutesApp;