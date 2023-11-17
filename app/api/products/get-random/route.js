import prisma from '@/app/libs/Prisma'
import { NextResponse } from 'next/server'



export async function GET() {
    try {

        const productCount = await prisma.products.count()
        const skip = Math.floor(Math.random() * productCount);

        const products = await prisma.products.findMany({
            take: 5,
            skip: skip,
            orderBy: { id: 'asc' }
        })

        await prisma.$disconnect();
        return NextResponse.json(products);
    } catch (error) {
        console.log(error);
        await prisma.$disconnect();
        return new NextResponse("Something went wrong", { status: 400 });
    }
}