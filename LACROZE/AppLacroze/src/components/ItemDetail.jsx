import { useEffect } from 'react'
import '../Item.css';
function ItemList({ item }) {

    try {
        if (item.length = 1) {
            return (
                <div>
                    <div className="container">
                        <div className="card-detail">
                            <img src={item.img}></img>
                        </div>
                        <div className="card-detail">
                            <h4>{item.title}</h4>
                            <p class="titulo">Precio</p>
                            <p id="descripcion-precio">${item.price}</p>
                            <p class="titulo">Descripcion</p>
                            <p id="descripcion-item">{item.description}</p>
                            <button id="button-carro">Agregar al carro</button>
                        </div>
                    </div>
                </div>
            )
        }
    }
    catch (e) {
        return (
            <div>
                <h4>Error no se encuentra el detalle del producto.</h4>
            </div>
        )
    }
}
export default ItemList