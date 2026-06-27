import { portfolio } from "@/content/portfolio";
import Button from "@/components/shared/Button";
import Badge from "@/components/shared/Badge";
import StatCard from "@/components/shared/StartCard";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center bg-white">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 py-28 lg:grid-cols-2">

        {/* Left */}

        <div>

          <Badge>{portfolio.hero.badge}</Badge>

          <h1 className="mt-8 text-6xl font-bold leading-tight">
            {portfolio.hero.title}
          </h1>

          <h2 className="mt-6 text-2xl leading-relaxed text-slate-600">
            {portfolio.hero.subtitle}
          </h2>

          <p className="mt-8 text-lg leading-8 text-slate-500">
            {portfolio.hero.description}
          </p>

          <div className="mt-10 flex gap-4">

            <Button>

              {portfolio.hero.primaryButton}

            </Button>

            <Button variant="outline">

              {portfolio.hero.secondaryButton}

            </Button>

          </div>

          <div className="mt-12 flex flex-wrap gap-3">

            {portfolio.technologies.map((tech) => (
              <Badge key={tech}>
                {tech}
              </Badge>
            ))}

          </div>

        </div>

        {/* Right */}

        <div className="flex flex-col justify-center">

          <div className="rounded-3xl border bg-slate-50 p-10">

            <div className="flex h-28 w-28 items-center justify-center rounded-full bg-slate-900 text-4xl font-bold text-white">
              AA
            </div>

            <h2 className="mt-8 text-3xl font-bold">
              Anjali Agarwal
            </h2>

            <p className="mt-2 text-slate-600">
              Package Consultant @ IBM
            </p>

            <p className="mt-6 leading-7 text-slate-500">
              Passionate about building scalable enterprise software and
              applying Generative AI to solve real-world business problems.
            </p>

          </div>

        </div>

      </div>

      <div className="absolute bottom-10 left-1/2 hidden w-full max-w-7xl -translate-x-1/2 px-6 lg:block">
        <div className="grid grid-cols-4 gap-6">

          {portfolio.stats.map((stat) => (
            <StatCard
              key={stat.label}
              value={stat.value}
              label={stat.label}
            />
          ))}

        </div>
      </div>

    </section>
  );
}