export function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="mx-auto max-w-[1200px] px-6 md:px-8">
        <p className="text-sm text-secondary">
          &copy; {new Date().getFullYear()} Nathan Sou. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
