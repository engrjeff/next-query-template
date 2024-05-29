import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Product } from '@prisma/client';
import { AddToCartForm } from './AddToCartForm';

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
        <AddToCartForm product={product} />
      </CardFooter>
    </Card>
  );
}
