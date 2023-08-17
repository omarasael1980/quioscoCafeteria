 import Image from 'next/image'
 import useQuiosco from '../hooks/useQuiosco'
 import Categoria from './Categoria'

const Sidebar = () => {
   const {categorias} = useQuiosco()
       

    
  return (
    < >
      <Image  priority={true}
            className='mr-auto ml-auto'
            width={250} 
            height={75} 
            src='/assets/img/logo.svg'  
            alt={`imagen de logo`}/>
      <nav className='mt-10'>
        {categorias.map(categoria =>(
            
            <Categoria 
                key={categoria.id}
                categoria ={categoria}
            />
        ))}
      </nav>
    </>
  )
}

export default Sidebar
