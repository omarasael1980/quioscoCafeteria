import Layout from "../layout/Layout"
import ResumenProducto from "../components/ResumenProducto"
import useQuiosco from "../hooks/useQuiosco"
export default function Resumen  () {
    const {pedido}=useQuiosco()
      
    return (
        <Layout 
        pagina={'Resumen'}>
            <h1 className="text-4xl font-black">Resumen</h1>
            <p className="text-2xl my-10">Confirma <span className="text-amber-600">tu pedido</span> </p>
            {pedido.length === 0 ? (
                <p className="text-center text-2xl">No hay elementos</p>
            ):(
                pedido.map(producto=>(
                        <ResumenProducto
                        key={producto.id}
                        producto ={producto}
                        />

                         
                ))
            )}
     
      </Layout>
    )
  }