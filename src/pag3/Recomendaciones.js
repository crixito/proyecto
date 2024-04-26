import './estiloRecomendacion.css';
import {Recomendacion} from './Recomendacion';

function Recomendaciones() {
    return (
        <>
            {/* <h1>Recomendaciones de Aprendizaje</h1> */}

            <section className="contenedor-recomendaciones">
                <Recomendacion />
                <Recomendacion />
                <Recomendacion />
                <Recomendacion />
            </section>
        </>
    );
}

export default Recomendaciones;