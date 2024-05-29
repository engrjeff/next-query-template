import { Suspense } from 'react';
import { ProductList } from './_components/ProductList';
import { ShopHeader } from './_components/ShopHeader';

async function NextOnlyPage() {
  return (
    <div className="p-4 container">
      <ShopHeader />
      <Suspense fallback={<p>Loading...</p>}>
        <ProductList />
      </Suspense>
    </div>
  );
}

export default NextOnlyPage;
