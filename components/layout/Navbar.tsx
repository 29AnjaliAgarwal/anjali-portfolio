const links = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Recognition", href: "#recognition" },
  { label: "Learning", href: "#learning" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full border-b bg-white/80 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        <div>

          <h2 className="text-lg font-bold">
            Anjali Agarwal
          </h2>

          <p className="text-xs text-zinc-500">
            Enterprise Software Engineer
          </p>

        </div>

        <nav className="hidden gap-8 md:flex">
  {links.map((link) => (
    <a
      key={link.label}
      href={link.href}
      className="text-sm font-medium text-zinc-600 transition hover:text-black"
    >
      {link.label}
    </a>
  ))}
</nav>

      </div>
    </header>
  );
}