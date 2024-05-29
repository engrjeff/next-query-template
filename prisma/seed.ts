import { faker } from '@faker-js/faker';

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const NUM_PRODUCTS = 30;

  const products = await prisma.product.createMany({
    data: Array.from(Array(NUM_PRODUCTS).keys()).map(() => ({
      name: faker.commerce.productName(),
      description: faker.commerce.productDescription(),
      price: Number(faker.commerce.price({ min: 10, max: 100 })),
    })),
  });

  console.log(`SEED: generated ${products.count} products.`);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
