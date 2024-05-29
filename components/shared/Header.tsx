import Link from 'next/link';

export function Header() {
  return (
    <header className="py-4 border-b">
      <div className="flex container justify-between">
        <nav className="flex items-center">
          <span className="font-bold text-lg mr-10">Foo</span>
          <div className="space-x-4">
            <Link href="/next-only" className="hover:underline">
              Next-only
            </Link>
            <Link href="/react-query" className="hover:underline">
              React Query
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
