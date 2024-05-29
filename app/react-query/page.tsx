import { ProductList } from './_components/ProductList';
import { ReactQueryProvider } from './_components/ReactQueryProvider';
import { ShopHeader } from './_components/ShopHeader';

function ReactQueryPage() {
  return (
    <ReactQueryProvider>
      <div className="p-4 container">
        <ShopHeader />
        <ProductList />
      </div>
    </ReactQueryProvider>
  );
}

export default ReactQueryPage;
