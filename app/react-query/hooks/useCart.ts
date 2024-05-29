'use client';

import { QUERY_KEYS } from '@/app/constants/query-keys';
import { apiClient } from '@/lib/apiClient';
import { Cart, CartItem } from '@prisma/client';
import { useQuery } from '@tanstack/react-query';

type CartWithCartItems = Cart & {
  cart_items: CartItem[];
};

type CartResponse = CartWithCartItems | null;

const getCart = async () => {
  const response = await apiClient.get<CartResponse>('/cart');
  return response.data;
};

export function useCart() {
  return useQuery({
    queryKey: [QUERY_KEYS.CART],
    queryFn: getCart,
  });
}
