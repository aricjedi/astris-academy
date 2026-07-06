import type { ReactNode } from "react";

export type CredItem = {
  title: string;
  body: ReactNode;
};

export function CredStrip({ items }: { items: CredItem[] }) {
  return (
    <section className="cred">
      <div className="wrap">
        {items.map((item) => (
          <div key={item.title}>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
