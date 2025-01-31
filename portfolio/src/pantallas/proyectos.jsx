import '../App.css'
import lista from '../img/Imagenlista.png'
import tienda from '../img/Imagentienda.png'
import remeras from '../img/Imagenremeras.png'

export function Proyectos(){

    return(
        <div className="container-fluid" >
            <h2 className="text-center tituloo">Proyectos</h2>
            <div className="col text-center">
                <div className="row mb-3 d-flex justify-content-center my-5">
                    <div className="col-md-6 col-12 mt-3 mt-md-auto">
                        <img src={lista} 
                            alt="aplicacion lista supermercado" 
                            className="img-fluid contenedorImgExp imagenExp"/>
                        <h3>Lista de compras</h3>
                        <p>Una aplicación web para crear y gestionar listas de compras, donde los usuarios pueden agregar, editar, eliminar ítems y organizarlos por categorías, brindando control total sobre la lista.</p>
                        <a href="https://listacomprassuper.netlify.app/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className='nav-link navMio m-2'>Visita la Página Aquí</a>
                    </div>
                    <div class="col-md-6 d-flex flex-column pt-md-5 ">

                        <h4 className='text-center'>Tecnologias</h4>
                        <ul className=''>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>React</li>
                            <li>Bootstrap</li>
                        </ul>
                    </div>
                </div>
                <div className="row mb-3 d-flex justify-content-center my-5">
                    <div className="col-md-6 col-12 mt-3 mt-md-auto">
                        <img src={tienda} 
                            alt="aplicacion lista supermercado" 
                            className="img-fluid contenedorImgExp imagenExp"/>
                        <h3>App con API de Mercado Libre:</h3>
                        <p>Una app que muestra productos en tiempo real utilizando la API de Mercado Libre, permitiendo buscar, filtrar y ver detalles de productos disponibles.</p>
                        <a href="https://app-mercadolibre.netlify.app/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className='nav-link navMio m-2'>Visita la Página Aquí</a>
                    </div>
                    <div className="col-md-6 d-flex flex-column pt-md-5">
                        
                        <h4 className='text-center'>Tecnologias</h4>
                        <ul className='text-center'>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>React</li>
                            <li>Bootstrap</li>
                            <li>API Mercado Libre</li>
                        </ul>
                    </div>
                </div>
                <div className="row mb-3 d-flex justify-content-center my-5">
                    <div className="col-md-6 col-12 mt-3 mt-md-auto">
                        <img src={remeras} 
                            alt="aplicacion lista supermercado" 
                            className="img-fluid contenedorImgExp imagenExp"/>
                        <h3>Tienda de remeras</h3>
                        <p>Una tienda en línea para comprar remeras personalizadas, con opciones de diseño propio, selección de estilos y tallas, y un sistema de login y autenticación para gestionar cuentas de usuario.</p>
                        <p className='nav-link navMio m-2 text-danger'>Página no disponible</p>
                    </div>
                    <div className="col-md-6 d-flex flex-column pt-md-5">
                        
                        <h4 className='text-center'>Tecnologias</h4>
                        <ul>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JavaScript</li>
                            <li>PHP</li>
                            <li>SQL Server</li>
                        </ul>
                    </div>
                </div>
                <div className="row mb-3 d-flex justify-content-center my-5">
                    <div className="col-md-6 col-12 mt-3 mt-md-auto">
                        <img src={lista} 
                            alt="aplicacion lista supermercado" 
                            className="img-fluid contenedorImgExp imagenExp"/>
                        <h3>CineMatic</h3>
                        <p>Una aplicación para consultar horarios de cine, ver trailers, leer críticas y comprar boletos, con un sistema de gestión de usuarios para facilitar la compra y seguimiento de actividades.</p>
                        <p className='nav-link navMio m-2 text-danger'>Página no disponible</p>
                    </div>
                    <div className="col-md-6 d-flex flex-column pt-md-5">
                        
                        <h4 className='text-center'>Tecnologias</h4>
                        <ul>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>React</li>
                            <li>Bootstrap</li>
                            <li>ExpressJS</li>
                            <li>Sequelize</li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>

    )
}