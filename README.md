# Next.js - React Query Example Template

## Stack

- TypeScript
- Next.js
- React Query (Tanstack Query)
- Shadcn UI
- Prisma ORM
- SQLite

## Next.js

Under `/next-only` route.

- React Server Components (RSCs);
- Server Actions
- Invalidation via `revalidatePath(path)`
- Form Status using React's new `useFormStatus` hook

## React Query

Under `/react-query` route.

- React Server Components (RSCs);
- `useQuery` and `useMutation` hooks
- Query invalidation after mutations

## Development Setup

1. Clone the repository
2. Make sure you have Node.js installed with version >18.0
3. Install dependencies

```
npm install
```

4. Rename `.env.example` to `.env.local`

5. Generate prisma client

```
npx prisma generate
```

6. Seed database with some values

```
npx prisma db seed
```

7. Run the dev server

```
npm run dev
```

Made by Jeff Segovia.
