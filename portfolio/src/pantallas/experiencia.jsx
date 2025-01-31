import estacionamientoimg from '../img/estacionamiento.png'
import clases from '../img/clases.png'


export function Experiencia(){

    return (
            <div className="container-fluid">
              <h2 className="text-center mt-2 mb-4 tituloo">Experiencias</h2>
              <div className="row">
                <div className="col-md-6 col-12 contenedorExp text-center">
                  <div className="contenedorImgExp d-flex justify-content-center">
                    <img
                      className="imagenExp img-fluid"
                      src={estacionamientoimg}
                      alt="aplicacion estacionamiento"
                    />
                  </div>
                  <h3>Estacionamiento UTN</h3>
                  <p>
                  Desarrollo de una aplicación para gestionar la disponibilidad y reservas de espacios de estacionamiento dentro de la facultad. La app incluye un sistema de gestión de usuarios y permite obtener estadísticas sobre el uso del estacionamiento. (Junio 2024 - Noviembre 2024).
                  </p>
                </div>
                <div className="col-md-6 col-12 text-center contenedorExp">
                    <div className='contenedorImgExp d-flex justify-content-center'>
                        <img
                    className="img-fluid"
                    src={clases}
                    alt="clases programacion"
                  />
                    </div>
                  <h3>Clases de Programación (Instructor)</h3>
                  <p>
                  Enseñé programación a estudiantes de primer año de la facultad, cubriendo los lenguajes C y Python. Esta experiencia me permitió fortalecer mis habilidades técnicas y desarrollar la capacidad de comunicar conceptos complejos de manera clara y accesible. (Abril 2024 - Noviembre 2024)
                  </p>
                </div>
              </div>
            </div>
        

    )



}