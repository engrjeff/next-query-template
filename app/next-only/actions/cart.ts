'use server';

import prisma from '@/db';
import { revalidatePath } from 'next/cache';
import { cookies } from 'next/headers';

const CART_COOKIE_KEY = 'foo-cart';

export async function getCartAction() {
  try {
    // check if there's a cart
    const cartId = cookies().get(CART_COOKIE_KEY);

    if (!cartId || !cartId.value) return null;

    const cart = await prisma.cart.findUnique({
      where: { id: cartId.value },
      include: {
        cart_items: {
          select: {
            quantity: true,
          },
        },
      },
    });

    return cart ?? null;
  } catch (error) {
    return null;
  }
}

export async function addToCartAction(formData: FormData) {
  try {
    const productId = formData.get('productId') as string;
    const productPrice = formData.get('price') as string;

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
    }

    revalidatePath('/next-only');
  } catch (e) {
    console.log(e);
    throw new Error('Failed to add to cart');
  }
}
