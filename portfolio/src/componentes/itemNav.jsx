import '../App.css';


export function ItemNav ({nombre, activo}){

    return(
        <div>
            <a href="#" className={activo? ("nav-link itemsNavActivo "): ("itemsNav nav-link")} >{nombre}</a>
        </div>
    )
}