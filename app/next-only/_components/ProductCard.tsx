import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Product } from '@prisma/client';
import { addToCartAction } from '../actions/cart';
import { AddToCartButton } from './AddToCartButton';

export function ProductCard({ product }: { product: Product }) {
  return (
    <Card className="h-full flex flex-col">
      <CardHeader>
        <CardTitle>{product.name}</CardTitle>
      </CardHeader>
      <CardContent className="flex-1">
        <CardDescription>{product.description}</CardDescription>
      </CardContent>
      <CardFooter>
        <form action={addToCartAction} className="w-full">
          <input type="hidden" defaultValue={product.id} name="productId" />
          <input
            type="hidden"
            defaultValue={product.price}
            name="productPrice"
          />
          <AddToCartButton />
        </form>
      </CardFooter>
    </Card>
  );
}
