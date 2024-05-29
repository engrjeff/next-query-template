import { Cart } from './Cart';

export function ShopHeader() {
  return (
    <div className="flex items-center justify-between">
      <div>
        <h1 className="text-xl font-bold">Products</h1>
        <p className="text-muted-foreground">
          Foo product catalog. Shop at your own risk.
        </p>
      </div>
      <div>
        <Cart />
      </div>
    </div>
  );
}
