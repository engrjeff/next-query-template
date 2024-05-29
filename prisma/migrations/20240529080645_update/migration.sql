/*
  Warnings:

  - You are about to drop the `ProductsOnCarts` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "ProductsOnCarts";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "CartItem" (
    "cart_id" TEXT NOT NULL,
    "product_id" TEXT NOT NULL,
    "price" REAL NOT NULL,
    "quantity" INTEGER NOT NULL,

    PRIMARY KEY ("cart_id", "product_id"),
    CONSTRAINT "CartItem_cart_id_fkey" FOREIGN KEY ("cart_id") REFERENCES "Cart" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "CartItem_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "Product" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
