import Image from "next/image"
import {formatearDinero} from '../helpers'
import useQuiosco from "../hooks/useQuiosco"
const Producto = ({producto}) => {
    const {handleSetProducto, handleChangeModal} =useQuiosco()
  const {nombre, img, precio} =producto
 
  return (
    <div className="border p-3">
      <Image 
       priority={true}
        src={`/assets/img/${img}.jpg`} 
        alt={`imagen de ${nombre}`}
        width={400}
        height={500}
      />
      <div>
        <h3 className="text-2xl font-bold">{nombre}</h3>
        <p className="mt-5 text-center font-black text-4xl text-amber-500 ">
           
         {formatearDinero(precio)}
        </p>
         <button 
         onClick={()=>{
            handleChangeModal()
            handleSetProducto(producto)
           

         }}
         className="bg-black text-white hover:bg-amber-500 w-full mt-5 p-3 uppercase font-bold">
            Agregar  
         </button>
         
      </div>
    </div>
  )
}

export default Producto
