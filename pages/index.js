 
import Layout from "../layout/layout"
import useQuiosco from "../hooks/useQuiosco"
import Producto from "../components/Producto"
export default function Home() {
   const{categoriaActual} = useQuiosco()
  
    
  return (
    <Layout pagina ={`Menú ${categoriaActual?.nombre}`}>
      <h1 className="text-4xl font-black ">{categoriaActual?.nombre}</h1>
       <p>Elige y personaliza tu pedido a continuación:</p>
       <div className="grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4"> 
       {categoriaActual?.productos?.map(producto =>(
          <Producto 
          key={producto.id}
          producto={producto}
          />
       ))}
        </div>
      
    </Layout>
  )
}
 