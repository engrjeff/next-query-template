export function Footer() {
  return (
    <footer className="border-t py-4 text-center">
      <div className="container">
        <p>
          Made by{' '}
          <a
            href="https://jeffsegovia.dev"
            target="_blank"
            className="text-sky-500 hover:underline"
          >
            Jeff Segovia
          </a>
        </p>
        <p>&copy; {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
}
