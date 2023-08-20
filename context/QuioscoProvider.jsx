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
    const [nombre, setNombre] = useState('')
    const [total ,setTotal] = useState(0)
    const router = useRouter()
    const obtenerCategorias =async()=>{
        
        const {data} =await axios('/api/categorias')
        setCategorias(data)
         
    }
    useEffect(()=>{
        obtenerCategorias()
         
    },[  ])
    useEffect(()=>{
        const calcularTotal =pedido.reduce((total, producto)=>(
             producto.precio*producto.cantidad
        )+total,0)
        setTotal(calcularTotal)
    },[pedido])
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

            toast.success('Guardado Correctamente',{autoClose: 1000,})
        } else {
            setPedido([...pedido, producto])
            toast.success('Agregado al Pedido',{autoClose: 1000,})
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
    const colocarOrden = async(e)=>{
        
        e.preventDefault()
        //establecer la conexion para insertar ordenes 
        try {
            await axios.post('/api/ordenes',{pedido, nombre, total, fecha:Date.now().toString()})
            //reiniciar App
            setCategoriaActual(categorias[0])
            setPedido([])
             setNombre('')
             setTotal (0)
             // mensaje de confimacion
             toast.success('Pedido realizado correctamente')
             setTimeout(()=>{
                router.push("/")
             },2000)
             
           
        } catch (error) {
            console.log(error)
        }
        
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
         handleEliminarProducto,
         nombre,
         setNombre,
         colocarOrden, 
         total
       
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
