import '../App.css'
import lista from '../img/Imagenlista.png'
import tienda from '../img/Imagentienda.png'
import remeras from '../img/Imagenremeras.png'

export function Proyectos(){

    return(
        <div className="container-fluid" >
            <h1 className="text-center">Proyectos</h1>
            <div className="col text-center">
                <div className="row mb-3 d-flex justify-content-center my-5">
                    <div className="col-md-6 col-12 mt-3 mt-md-auto">
                        <img src={lista} 
                            alt="aplicacion lista supermercado" 
                            className="img-fluid contenedorImgExp imagenExp"/>
                        <h3>Lista de compras</h3>
                        <p>Es una lista de compras comun y corriente pero cuenta con funciones como: marcar como comprado, eliminar producto, editar item, entre otras</p>
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
                        <h3>app mercado libre</h3>
                        <p>Es una lista de compras comun y corriente pero cuenta con funciones como: marcar como comprado, eliminar producto, editar item, entre otras</p>
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
                        <p>Es una lista de compras comun y corriente pero cuenta con funciones como: marcar como comprado, eliminar producto, editar item, entre otras</p>
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
                        <p>Es una lista de compras comun y corriente pero cuenta con funciones como: marcar como comprado, eliminar producto, editar item, entre otras</p>
                        <a href="https://cinematicapp-54c02.firebaseapp.com/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className='nav-link navMio m-2'>Visita la Página Aquí</a>
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