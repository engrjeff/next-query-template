import prisma from '@/db';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const products = await prisma.product.findMany();

  return NextResponse.json(products);
}
