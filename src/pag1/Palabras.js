import './estiloPalabra.css';

function Palabras() {
    return (
        <section className='palabras-section'>
            <form action="mi_servidor">            
                <input type="text" id="nombrePalabra" name="nombrePalabra"
                    placeholder="Escribe el nombre de la palabra" required /><br />
                <textarea name="significadoPalabra" id="significadoPalabra" cols="40" rows="10"
                    placeholder="Escribe el significado de la palabra" required></textarea><br />  
                <div>
                    <input type="submit" value="Guardar" />
                    <input type="submit" value="Buscar otra palabra" />            
                </div>         
            </form>
        </section>  
    );
  }
  
  export default Palabras;
  