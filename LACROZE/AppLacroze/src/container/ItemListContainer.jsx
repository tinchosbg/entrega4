import ItemList from "../components/ItemList"
import {useState,useEffect} from 'react'
import { useParams } from "react-router-dom"

function ItemListContainer({Mensaje}) {
    const estilos={
        fontSize:'20px'
    }
    const productos=[{ id: '0', title: 'Nike air force one', price: 70000,'category':'Hombre', img: 'https://nikeclprod.vteximg.com.br/arquivos/ids/158944-1000-1000/CT2302_100_A_PREM.jpg?v=637654374150800000' },{ id: '1', title: 'Zapatilla nike air max', price: 85000,'category':'Hombre', img: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/w2ldynwtyuspv6r5rffj/air-max-90-zapatillas-dlXJdc.png' },{ id: '2', title: 'Zapatilla nike huarache', price: 78000,'category':'Hombre', img: 'https://storage.googleapis.com/sportshowroom.cl/products/26db3f71802e11b2a5f1f79502fd6416.jpg'},
    { id: '3', title: 'Nike air max dia', price: 50000,'category':'Mujer', img: 'https://www.lapolar.cl/dw/image/v2/BCPP_PRD/on/demandware.static/-/Sites-master-catalog/default/dw33cd740a/images/large/533781-beige.jpg?sw=400&sh=400&sm=fit' },{id: '4', title: 'Nike downshifter', price: 40000,'category':'Mujer', img: 'https://home.ripley.cl/store/Attachment/WOP/D317/2000387606824/2000387606824_2.jpg'}]
    const [productoState, setProductoState] = useState([])

    useEffect(() => {
        getProductos()
        console.log('Efecto realizado con éxito')
    },[productos])

    const {categoryId}=useParams()
    const getProductos = () => {
        const getProductosPromesa = new Promise((resolve, reject) => {
            setTimeout(() => {
                if(categoryId!=null && (categoryId==="Hombre" || categoryId==="Mujer")){
                    const productos_arreglo=productos.filter(p=>{return p.category===categoryId})
                    resolve(setProductoState(productos_arreglo))
                }
                else{
                    resolve(setProductoState(productos))
                }
            }, 2000);
        })
        getProductosPromesa.then(response => {
            console.log(response)
        })
    }



    return (
        <div>
            <span style={estilos}>{Mensaje}</span>
            <ItemList productos={productoState}></ItemList>    
        </div>
    )
}
export default ItemListContainer