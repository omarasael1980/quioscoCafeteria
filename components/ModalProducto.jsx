import { useState, useEffect } from "react"
import Image from "next/image" 
import useQuiosco from "../hooks/useQuiosco"
import {formatearDinero} from '../helpers'

  const ModalProducto = () => {
  const [cantidad, setCantidad] =useState(1)
  const [edicion, setEdicion] = useState(false)
   
  const {producto,  handleChangeModal, handleSetPedido, pedido} =useQuiosco()

  useEffect(() => {
    if (pedido.some((pedidoState) => pedidoState.id === producto.id)) {
      const productoEdicion = pedido.find(
        (pedidoState) => pedidoState.id === producto.id
      );
      setEdicion(true);
      setCantidad(productoEdicion.cantidad);
    }
  }, [producto, pedido]);

  return (
    <div className="md:flex gap-10">
        <div className="md:w-1/3 ">
          <Image
            width={300}
            height={400}
            src={`/assets/img/${producto.img}.jpg`}
            alt={`Imagen de producto ${producto.nombre}`}
          />
        </div>
        <div className="md:w-2/3 ">
          <div className="flex justify-end">
            <button
            onClick={()=>handleChangeModal()}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-9 h-9">
            <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 
            011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 
            5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 
            12 5.47 6.53a.75.75 0 010-1.06z" clipRule="evenodd" />
            </svg>


            </button>
          </div >
          <h1 className="text-3xl text-center font-bold mt-5"> {producto.nombre   }</h1>
          <p className="mt-5  text-center font-black text-5xl text-amber-500">
            {formatearDinero(producto.precio)}
          </p>
          <div className="flex flex-row items-center justify-center gap-4 my-5 text-center">
            <button type="button" 
            onClick={()=> {
              if(cantidad<=1)return
              setCantidad(cantidad -1)}}
             >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>

            </button>

            <p className="text-3xl"> {cantidad}</p>
            <button 
            type="button" 
            onClick={()=> {
              if(cantidad>=5)return
              setCantidad(cantidad +1)}}
           
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>


            </button>
            
          </div>
          <div className="flex flex-row items-center justify-center px-5 py-2 mt-5">
            <button 
            onClick={()=>handleSetPedido({...producto, cantidad})}
            type="button"
              className="bg-black p-3 rounded hover:bg-amber-500  text-white font-bold uppercase ">
                {edicion ? "Guardar Cambios" : "Añadir al Pedido"}
              </button>
            </div>
        </div>
    </div>
  )
}

export default ModalProducto
