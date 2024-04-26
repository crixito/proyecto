import './estiloPrueba.css';
import imagen from '../images/aprendizaje.png';

function Pruebas() {
    return (
        <section className="pruebas-section">
        <div className="pruebas-card">
            <h2>¡Prepárate para la Aventura!</h2>
            <p>Desafía tus conocimientos con nuestras emocionantes pruebas de vocabulario. ¡Descubre cuánto sabes y mejora tus habilidades!</p>
            <img src={imagen} alt="Imagen de Pruebas" className="pruebas-image" />
            <a href="#" className="btn-pruebas">¡Comenzar Pruebas!</a>
        </div>
        </section>  
    );
}
  
  export default Pruebas;
  