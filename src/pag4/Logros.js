import './estiloLogro.css';
import {Logro} from './Logro';

function Logros() {
    return (
      <>
        {/* <h1>Logros</h1> */}

        <section className="contenedor-logros">
          <Logro />
          <Logro />
          <Logro />
          <Logro />
          <Logro />
          <Logro />
        </section>
      </>
    );
}

export default Logros;