import { useEffect, useCallback } from "react"
import useQuiosco from "../hooks/useQuiosco"
import Layout from "../layout/Layout" 
import { formatearDinero } from "../helpers"

export default function Total  () {
  const {pedido, nombre, setNombre, colocarOrden, total} = useQuiosco()
   
  const comprobarPedido = useCallback(()=>{
    return pedido.length === 0 || nombre === '' || nombre.length < 3
  },[pedido, nombre])
  useEffect(()=>{
    comprobarPedido()
  },[pedido, comprobarPedido])
  
    return (
      <Layout 
        pagina={'Total'}>
          <h1 className="text-4xl font-black">Total</h1>
          <p className="text-2xl my-10 font-bold ">Revisa
              <span className="font-bold text-amber-500"> tu pedido</span> </p>
          <form 
          autoComplete="off"
          onSubmit={colocarOrden}>
              <div>
                <label
                htmlFor="nombre"
                className="block uppercase font-bold text-xl text-slate-800">Nombre</label>
                <input type="text" name='nombre' id='nombre' className="bg-gray-200 ring-2 lg:w-1/3 w-full
                 mt-3 p-2 outline-slate-500    "
                 value={nombre}
                 onChange={e=>setNombre(e.target.value)}
                 />

              </div>
             <div className="mt-10">
                <p className="text-2xl">Total a pagar <span className="font-bold"> {formatearDinero(total)}</span></p>
             </div>
             <div className="mt-5">
              <input
              type="submit"
              className={`w-full lg:w-auto px-5 py-2 rounded text-white
              ${comprobarPedido() ? 'bg-gray-300' : 'bg-black hover:bg-amber-500'} uppercase font-bold text-center text-white `}
              value='Confirmar Pedido'
              disabled={comprobarPedido()}
              />
             </div>

          </form>
      </Layout>
    )
  }
 
