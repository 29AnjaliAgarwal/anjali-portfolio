import { hero } from "@/content/home";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center">
      <div className="mx-auto max-w-7xl px-6 py-32">

        <span className="rounded-full border px-4 py-2 text-sm font-medium">
          {hero.badge}
        </span>

        <h1 className="mt-8 text-6xl font-bold tracking-tight md:text-7xl">
          {hero.title}
        </h1>

        <h2 className="mt-4 max-w-4xl text-3xl font-medium text-zinc-600 md:text-4xl">
          {hero.subtitle}
        </h2>

        <p className="mt-8 max-w-3xl text-lg leading-8 text-zinc-500">
          {hero.description}
        </p>

        <div className="mt-10 flex flex-wrap gap-4">

          <button className="rounded-xl bg-black px-6 py-3 text-white transition hover:scale-105">
            {hero.ctaPrimary}
          </button>

          <button className="rounded-xl border px-6 py-3 transition hover:bg-zinc-100">
            {hero.ctaSecondary}
          </button>

        </div>

        <div className="mt-16 flex flex-wrap gap-3">

          {hero.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full border bg-zinc-100 px-4 py-2 text-sm"
            >
              {tech}
            </span>
          ))}

        </div>
      </div>
    </section>
  );
}
