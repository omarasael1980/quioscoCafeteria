import Image from "next/image"

const Platillo = ({platillo}) => {
  return (
    <div className="py-3 flex border-b last-of-type:border-0 items-center"
                     
    >
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
  )
}

export default Platillo
