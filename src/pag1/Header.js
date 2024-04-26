import './estiloHeader.css';
import imagen from '../images/aprendizaje.png';

function Header() {
  return (
      <header>
          <nav> 
              <img src={imagen} alt=""/>
              <div className="menu_lateral" id="menu_lateral">
                  <a href="/">Palabras</a>
                  <a href="pruebas">Pruebas</a>
                  <a href="recomendaciones">Recomendaciones</a>
                  <a href="logros">Logros</a>
              </div>
              <div className="abrir" id="abrir">
                  <span>&#9776</span>
              </div>
          </nav>
          <h1>SmartCrix</h1> 
      </header>      
  );
}

export default Header;
