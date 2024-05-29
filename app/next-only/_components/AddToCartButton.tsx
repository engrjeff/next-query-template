'use client';

import { Button } from '@/components/ui/button';
import { LoaderIcon } from 'lucide-react';
import { useFormStatus } from 'react-dom';

export function AddToCartButton() {
  const { pending, data } = useFormStatus();

  return (
    <Button type="submit" className="w-full flex" disabled={pending}>
      {pending ? (
        <LoaderIcon className="h-4 w-4 animate-spin" />
      ) : (
        'Add To Cart'
      )}
    </Button>
  );
}
