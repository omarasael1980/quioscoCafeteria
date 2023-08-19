import { useState, useEffect, createContext } from "react";
import axios from 'axios'
import { toast } from 'react-toastify'
import { useRouter } from 'next/router'

const QuioscoContext = createContext()
const QuioscoProvider =({children})=>{
    const [categorias, setCategorias] = useState([])
    const [categoriaActual, setCategoriaActual] = useState({})
    const [producto, setProducto] = useState({})
    const [modal, setModal] = useState(false)
    const [pedido, setPedido]=useState([])
    const router = useRouter()
    const obtenerCategorias =async()=>{
        
        const {data} =await axios('/api/categorias')
        setCategorias(data)
         
    }
    useEffect(()=>{
        obtenerCategorias()
         
    },[  ])
    useEffect(()=>{
       setCategoriaActual(categorias[0])
       //  setCategoriaActual(categorias[0])
    },[categorias ])
   
    const handleClickCategoria = id=>{
        const categoria = categorias.filter(cate=> cate.id ===id)
        setCategoriaActual(categoria[0])
        router.push('/')
    }
    const handleChangeModal=()=>{
        setModal(!modal)

       
    }
    const handleSetProducto= producto=>{
        setProducto(producto)
    }
    const handleSetPedido = ({categoriaId, ...producto}) => {
        if(pedido.some(productoState => productoState.id === producto.id)) {
           // Actualizar la cantidad
           const pedidoActualizado = pedido.map(productoState => productoState.id === producto.id ? producto : productoState)
           setPedido(pedidoActualizado)

            toast.success('Guardado Correctamente')
        } else {
            setPedido([...pedido, producto])
            toast.success('Agregado al Pedido')
        }

        setModal(false)
        
    }
    const handleEditarCantidades = (id)=>{
                console.log(id)
                const productoActualizar=pedido.filter(producto=>producto.id ===id)
                setProducto(productoActualizar[0])
                setModal(!modal)
                
    }
    const handleEliminarProducto =(id)=>{
        const productoActualizar=pedido.filter(producto=> producto.id !=  id)
        setPedido(productoActualizar)
          
    }
  return(  <QuioscoContext.Provider
    value={{
         categorias,
         handleClickCategoria,
         categoriaActual,
         handleChangeModal,
         producto,
         handleSetProducto,
         modal,
         handleSetPedido,
         pedido,
         handleEditarCantidades,
         handleEliminarProducto
       
    }}
    >
        {children}
    </QuioscoContext.Provider>
  )
}
export {    
    QuioscoProvider
}
export default QuioscoContext
