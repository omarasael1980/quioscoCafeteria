

import axios from "axios"
import Platillo from "./Platillo"
import {formatearDinero} from '../helpers'
import {toast} from 'react-toastify'


export default function Orden ({orden} ) {

  console.log(orden)
   
     const {id, nombre, fecha, total, pedido} = orden
     console.log(pedido)
    const   completarOrden= async ()=>{
       try {

         await axios.post(`/api/ordenes/${id}`)
       toast.success("Orden Lista")
       
       } catch (error) {
        toast.error("Hubo un error" ) 
       }
    }
    return (
        <>
        <div className="border p-10 space-y-5">
             <h1 className="text-2xl font-bold">Orden: {id}</h1>
            <p className="text-xl  font-bold">Cliente: {nombre} </p>
            <div>
                {pedido.map(platillo=>(
                            <Platillo
                                key={platillo.id}
                                platillo ={platillo}
                            />
                  
                  
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
        </>
  )

}

 
