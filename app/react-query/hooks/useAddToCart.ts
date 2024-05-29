'use client';

import { QUERY_KEYS } from '@/app/constants/query-keys';
import { apiClient } from '@/lib/apiClient';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';

async function addToCart(input: { productId: string; productPrice: string }) {
  const response = await apiClient.post('/cart', input);
  return response.data;
}

export function useAddToCart() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: [QUERY_KEYS.ADD_TO_CART],
    mutationFn: addToCart,
    async onSuccess(data, variables, context) {
      // invalidate cart
      await queryClient.invalidateQueries({ queryKey: ['cart'] });

      toast.info('Added to cart', { position: 'top-center' });
    },
    onError(error, variables, context) {
      toast.error('Add to Cart Error', { position: 'top-center' });
    },
  });
}
