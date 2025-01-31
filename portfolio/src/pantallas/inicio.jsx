import Navbar from "../componentes/navegacion";
import '../App.css';
import foto from '../img/imgmia.png';

export function Inicio (){




    return(
        <div className="container-fluid">
        <div className="row justify-content-center text-center my-4">
            <h2 className="fw-bold">¡Hola! Mi nombre es Giuliano</h2>
        </div>
        
        <div className="row align-items-center justify-content-center p-4 gap-4">
            <div className="col-md-6">
                <p className="fs-5">
                    Soy un <strong>Desarrollador Web Full Stack</strong> con el objetivo de diseñar soluciones digitales que sean funcionales y fáciles de usar. Me apasiona la tecnología, 
                    la resolución de problemas y el aprendizaje continuo. Amante del fútbol y 
                    siempre en busca de nuevos retos.
                </p>
            </div>
            
            <div className="col-md-4 text-center">
                <img 
                    className="img-fluid rounded-circle shadow-lg imgFondo" 
                    src={foto} 
                    alt="Imagen de Giuliano" 
                    style={{ maxWidth: "250px" }}
                />
            </div>
        </div>
    </div>
    
    )
}