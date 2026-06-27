import { ReactNode } from "react";

type Props = {
  id?: string;
  children: ReactNode;
};

export default function SectionContainer({ id, children }: Props) {
  return (
    <section id={id} className="py-28">
      <div className="mx-auto max-w-7xl px-6">
        {children}
      </div>
    </section>
  );
}
