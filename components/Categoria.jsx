import Image from 'next/image'
import useQuiosco from '../hooks/useQuiosco'

const Categoria = ({categoria}) => {
    const {handleClickCategoria, categoriaActual} =useQuiosco()
    // console.log(categoriaActual)
    const {nombre, icono, id} = categoria
     
    return (
        <div onClick={()=>handleClickCategoria(id)} 
        className={`${categoriaActual?.id === id ? 'bg-amber-400' : ''}  flex items-center gap-4 w-full border p-5 hover:bg-amber-400, cursor-pointer`}>
            < Image 

               priority={true}
                width={40}
                height={40}
                src={`/assets/img/icono_${icono}.svg`}
                alt={`imagen de ${nombre}`}
                
            />
            <button className='text-2xl font-bold hover:cursor-pointer'
                type='button'
                >
                {nombre}
            </button>
        </div>
        
  )
}

export default Categoria
