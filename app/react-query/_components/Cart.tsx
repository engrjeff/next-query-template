'use client';

import { ShoppingCartIcon } from 'lucide-react';
import Link from 'next/link';
import { useCart } from '../hooks/useCart';

export function Cart() {
  const { data: cart } = useCart();

  const cartItemsQty =
    cart?.cart_items?.reduce((t, i) => t + i.quantity, 0) ?? 0;

  return (
    <Link href="/cart">
      <div>
        <span className="text-xs text-black bg-primary rounded-full p-px block text-center">
          {cartItemsQty}
        </span>
        <ShoppingCartIcon />
        <span className="sr-only">go to cart</span>
      </div>
    </Link>
  );
}
