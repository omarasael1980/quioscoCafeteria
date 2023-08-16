import {categorias} from './data/categorias'
import {productos} from './data/productos'
import  {PrismaClient} from '@prisma/client'

const prisma = new PrismaClient()

const main = async () : Promise<void> => {
    try {
        await prisma.producto.createMany({
            data: productos
        })
        await prisma.categoria.createMany({
            data: categorias
        })
        
    } catch (error) {
        console.log(error)
    }
}
main()