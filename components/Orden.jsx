
import Image from "next/image"
import axios from "axios"
import {formatearDinero} from '../helpers'
import {toast} from 'react-toastify'


export default function Orden ({orden} ) {

  
   
    const {id, nombre, fecha, total, pedido} = orden
    const   completarOrden= async ()=>{
       try {

       const data = await axios.post(`/api/ordenes/${id}`)
       toast.success("Orden Lista")
       console.log(data)
       } catch (error) {
        toast.error("Hubo un error" ) 
       }
    }
    return (

        <div className="border p-10 space-y-5">
            <h1 className="text-2xl font-bold">Orden: {id}</h1>
            <p className="text-xl  font-bold">Cliente: {nombre} </p>
            <div>
                {pedido.map(platillo=>(
                    <div className="py-3 flex border-b last-of-type:border-0 items-center">
                       <div className="w-32">
                            <Image
                                 width={400}
                                 height={500}
                                 src={`/assets/img/${platillo.img}.jpg`}
                                 alt={`Imagen de platillo ${platillo.nombre}`}
                                 className=" h-auto"
                                
                        />
                       </div>
                       <div className="p-5 space-y-2">
                            <h4 className="text-xl font-bold text-amber-500 ">{platillo.nombre}</h4>
                            <p className="text-lg font-bold ">Cantidad:  <span className="text-xl">{platillo.cantidad}</span></p>
                       </div>
               
                    </div>
                  
                ))}
                         
            </div>
            <div className="md:flex md:items-center md:justify-between my-10">
                    <p className="mt-5 font-black text-4xl text-amber-500">
                     Total a pagar: {formatearDinero(total)} </p>
                     <button 
                     type="button"
                     onClick={completarOrden}
                     className="bg-indigo-600 hover:bg-indigo-800 
                     md:mt-0 py-3 mt-5 px-10 uppercase rounded-lg font-bold text-white">Completar orden</button>
            </div>
  
        </div>
  )
}

 
