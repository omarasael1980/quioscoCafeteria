import { PrismaClient } from "@prisma/client"

export default async function handler(req, res) {
    // Crea una instancia de PrismaClient
    const prisma = new PrismaClient();

    if (req.method === 'POST') {  
        try {
           
            const ordenId = parseInt(req.query.id);
            const ordenActualizada = await prisma.orden.update({
                where: {
                    id: ordenId
                },
                data: {
                    estado: true
                }
            });
            res.status(200).json(ordenActualizada);
        } catch (error) {
            console.error("Error al actualizar la orden:", error);
            res.status(500).json({ error: "Error al actualizar la orden" });
        }
    } else {
        res.status(405).end(); // Método no permitido
    }

    // Cierra la conexión de Prisma al finalizar la solicitud
    await prisma.$disconnect();
}
