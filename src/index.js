import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Header from './pag1/Header';
import Palabras from './pag1/Palabras';
import Pruebas from './pag2/Pruebas';
import Recomendaciones from './pag3/Recomendaciones';
import Logros from './pag4/Logros';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={ <Palabras />} />
        <Route path="/pruebas" element={ <Pruebas />} />
        <Route path="/recomendaciones" element={ <Recomendaciones />} />
        <Route path="/logros" element={ <Logros />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
