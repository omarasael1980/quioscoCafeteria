import { useRouter } from "next/router"
 
const pasos =[
    {paso:1, nombre:'Menú', url:'/'},
    {paso:2, nombre:'Resumen', url:'/resumen'},
    {paso:3, nombre:'Datos y total', url:'/total'},

]

const Pasos = () => {

  const router =useRouter()
 
  const calcularProgreso =()=>{
   let valor=0
   router.pathname === '/' ? valor = 2 :(router.pathname === '/resumen' ? valor=50 : valor=100)
   return valor

  }
  return (
  <>
    <div className="flex justify-between mb-5  bg-black p-5 ">
  {pasos.map(paso=>(
      <button 
      onClick={()=>{
        router.push(paso.url)
         
      }}
      className="text-2xl font-bold text-white   hover:text-amber-500"
     
        key={paso.paso}
      >{paso.nombre} </button>
     
  ))}
    </div>
    <div className="bg-gray-100 mb-10">
      <div className="rounded-full bg-amber-500  text-white text-xs leading-none h-2 text-center"
      style={{width:`${calcularProgreso()}%`}}>

      </div>
    </div>
   
  </>
  )
}

export default Pasos
