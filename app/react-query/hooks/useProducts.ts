'use client';

import { QUERY_KEYS } from '@/app/constants/query-keys';
import { apiClient } from '@/lib/apiClient';
import { Product } from '@prisma/client';
import { useQuery } from '@tanstack/react-query';

const getProducts = async () => {
  const response = await apiClient.get<Product[]>('/products');
  return response.data;
};

export function useProducts() {
  return useQuery({
    queryKey: [QUERY_KEYS.PRODUCTS],
    queryFn: getProducts,
  });
}
