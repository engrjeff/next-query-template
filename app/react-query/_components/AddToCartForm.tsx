'use client';

import { Button } from '@/components/ui/button';
import { Product } from '@prisma/client';
import { LoaderIcon } from 'lucide-react';
import type { FormEventHandler } from 'react';
import { useAddToCart } from '../hooks/useAddToCart';

export function AddToCartForm({ product }: { product: Product }) {
  const addToCart = useAddToCart();

  const isPending = addToCart.isPending;

  const handleAddToCart: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const productId = formData.get('productId') as string;
    const productPrice = formData.get('productPrice') as string;

    await addToCart.mutateAsync({ productId, productPrice });
  };

  return (
    <form className="w-full" onSubmit={handleAddToCart}>
      <input type="hidden" defaultValue={product.id} name="productId" />
      <input type="hidden" defaultValue={product.price} name="productPrice" />
      <Button type="submit" className="w-full flex" disabled={isPending}>
        {isPending ? (
          <LoaderIcon className="h-4 w-4 animate-spin" />
        ) : (
          'Add To Cart'
        )}
      </Button>
    </form>
  );
}
