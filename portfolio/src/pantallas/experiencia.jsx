import estacionamientoimg from '../img/estacionamiento.png'
import clases from '../img/clases.png'


export function Experiencia(){

    return (
            <div className="container-fluid">
              <h1 className="text-center mt-2 mb-4">Experiencias</h1>
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
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia ab cupiditate hic
                    voluptatum molestias doloribus maxime distinctio laudantium aliquam, deserunt
                    nostrum deleniti. Optio blanditiis molestias labore assumenda ducimus aliquid.
                    Facilis?
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
                  <h3>Clases de programación</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum et tempore ullam a
                    deserunt impedit blanditiis quaerat! Saepe sint culpa, dignissimos explicabo
                    excepturi sapiente, odio impedit voluptatum aut velit repudiandae?
                  </p>
                </div>
              </div>
            </div>
        

    )



}