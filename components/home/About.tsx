import { about } from "@/content/about";

export default function About() {
  return (
    <section id="about" className="py-28 bg-slate-50">
      <div className="mx-auto max-w-7xl px-6">

        <div className="max-w-3xl">

          <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
            About Me
          </p>

          <h2 className="mt-4 text-5xl font-bold">
            {about.intro}
          </h2>

          <p className="mt-8 text-lg leading-8 text-slate-600">
            {about.description}
          </p>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            {about.mission}
          </p>

        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2">

          {about.cards.map((card) => (
            <div
              key={card.title}
              className="rounded-2xl border bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-lg"
            >
              <h3 className="text-2xl font-semibold">
                {card.title}
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                {card.description}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
