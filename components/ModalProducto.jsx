import Image from "next/image" 
import useQuiosco from "../hooks/useQuiosco"
import {formatearDinero} from '../helpers'
const ModalProducto = () => {
  const {producto,  handleChangeModal} =useQuiosco()
 
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
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 
            011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 
            5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 
            12 5.47 6.53a.75.75 0 010-1.06z" clipRule="evenodd" />
            </svg>


            </button>
          </div>
          <h1 className="text-3xl text-center font-bold mt-5"> {producto.nombre   }</h1>
          <p className="mt-5  text-center font-black text-5xl text-amber-500">
            {formatearDinero(producto.precio)}
          </p>
        </div>
    </div>
  )
}

export default ModalProducto
