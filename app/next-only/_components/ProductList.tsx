import prisma from '@/db';
import { ProductCard } from './ProductCard';

export async function ProductList() {
  const products = await prisma.product.findMany();

  return (
    <ul className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 my-6">
      {products.map((product) => (
        <li key={`product-${product.id}`}>
          <ProductCard product={product} />
        </li>
      ))}
    </ul>
  );
}
