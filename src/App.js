import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Menu from './components/Menu';
import HomePage from './components/HomePage';
import CabanasPage from './components/CabanasPage';
import ActividadesPage from './components/ActividadesPage';
import PreguntasPage from './components/PreguntasPage';
import ContactoPage from './components/ContactoPage';

const App = () => {
  return (
    <Router>
      <div>
        <Menu />
        <Routes> {/* Usa <Routes> en lugar de <Route> */}
          <Route path="/" element={<HomePage />} />
          <Route path="/cabanas" element={<CabanasPage />} />
          <Route path="/actividades" element={<ActividadesPage />} />
          <Route path="/preguntas" element={<PreguntasPage />} />
          <Route path="/contacto" element={<ContactoPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

