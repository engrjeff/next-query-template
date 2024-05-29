'use client';

import { Skeleton } from '@/components/ui/skeleton';
import { useProducts } from '../hooks/useProducts';
import { ProductCard } from './ProductCard';

export function ProductList() {
  const { data: products, isLoading } = useProducts();

  if (isLoading)
    return (
      <ul className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 my-6">
        {Array.from(Array(10).keys()).map((n) => (
          <li key={`skeleton-${n}`} className="">
            <Skeleton className="h-[230px] w-full" />
          </li>
        ))}
      </ul>
    );

  return (
    <ul className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 my-6">
      {products?.map((product) => (
        <li key={`product-${product.id}`}>
          <ProductCard product={product} />
        </li>
      ))}
    </ul>
  );
}
