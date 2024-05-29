import prisma from '@/db';
import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

const CART_COOKIE_KEY = 'foo-rq-cart';

export async function GET(request: NextRequest) {
  try {
    // check if there's a cart
    const cartId = cookies().get(CART_COOKIE_KEY);

    if (!cartId || !cartId.value) return NextResponse.json(null);

    const cart = await prisma.cart.findUnique({
      where: { id: cartId.value },
      include: {
        cart_items: true,
      },
    });

    return NextResponse.json(cart ?? null);
  } catch (error) {
    return NextResponse.json(null);
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const productId = body.productId;
    const productPrice = body.productPrice;

    // check if there's a cart
    const cartId = cookies().get(CART_COOKIE_KEY);

    if (cartId?.value) {
      const result = await prisma.cartItem.upsert({
        where: {
          cart_id_product_id: {
            cart_id: cartId.value,
            product_id: productId,
          },
        },
        create: {
          product_id: productId,
          price: Number(productPrice),
          cart_id: cartId.value,
          quantity: 1,
        },
        update: {
          quantity: {
            increment: 1,
          },
        },
      });

      return NextResponse.json(result);
    } else {
      const newCart = await prisma.cart.create({
        data: {
          cart_items: {
            create: {
              product_id: productId,
              price: Number(productPrice),
              quantity: 1,
            },
          },
        },
      });

      cookies().set({ name: CART_COOKIE_KEY, value: newCart.id });

      return NextResponse.json(newCart);
    }
  } catch (e) {
    console.log(e);
    return NextResponse.json({ error: 'Failed to add to cart' });
  }
}
