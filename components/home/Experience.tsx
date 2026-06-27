import SectionContainer from "@/components/shared/SectionContainer";
import SectionHeading from "@/components/shared/SectionHeading";

export default function Experience() {
  return (
    <SectionContainer id="experience">
      <SectionHeading
        eyebrow="Professional Journey"
        title="Professional Experience"
        description="My journey from backend engineering to enterprise consulting and AI-powered business solutions."
      />

      <div className="space-y-10">

        {/* IBM */}

        <div className="rounded-3xl border border-zinc-200 p-10 shadow-sm">

          <div className="flex items-center justify-between">

            <div>

              <h3 className="text-3xl font-bold">
                IBM
              </h3>

              <p className="mt-2 text-zinc-500">
                March 2025 — Present
              </p>

            </div>

          </div>

          <div className="mt-10 space-y-8">

            {/* Current Role */}

            <div className="rounded-2xl border p-8">

              <h4 className="text-2xl font-semibold">
                Package Consultant – Workday Extend & AI Solutions
              </h4>

              <p className="mt-2 text-sm text-zinc-500">
                Aug 2025 — Present
              </p>

              <ul className="mt-6 list-disc space-y-3 pl-5 text-zinc-600">

                <li>
                  Design and build enterprise applications using Workday Extend.
                </li>

                <li>
                  Collaborate with client stakeholders to translate business requirements into scalable solutions.
                </li>

                <li>
                  Build orchestration workflows and Workday integrations.
                </li>

                <li>
                  Collaborate with IBM's AI team on RAG pipelines, LLM integrations and enterprise AI solutions.
                </li>

                <li>
                  Develop AI-powered business applications that improve employee experience and automation.
                </li>

              </ul>

            </div>

            {/* Previous Role */}

            <div className="rounded-2xl border p-8">

              <h4 className="text-2xl font-semibold">
                Associate System Engineer
              </h4>

              <p className="mt-2 text-sm text-zinc-500">
                Mar 2025 — Aug 2025
              </p>

              <ul className="mt-6 list-disc space-y-3 pl-5 text-zinc-600">

                <li>
                  Built backend services using FastAPI and PostgreSQL.
                </li>

                <li>
                  Developed secure REST APIs with JWT authentication.
                </li>

                <li>
                  Designed relational database schemas and optimized SQL queries.
                </li>

                <li>
                  Worked across the complete backend development lifecycle.
                </li>

              </ul>

            </div>

          </div>

        </div>

      </div>

    </SectionContainer>
  );
}