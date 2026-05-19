import { Star } from "lucide-react";
import c1 from "@/assets/customer-1.jpg";
import c2 from "@/assets/customer-2.jpg";
import c3 from "@/assets/customer-3.jpg";

const items = [
  { name: "Sarah Mitchell", role: "Busy mom of two", img: c1, text: "FreshFold has been a lifesaver. The pickup is always on time and my clothes come back perfectly folded." },
  { name: "David Chen", role: "Software engineer", img: c2, text: "I haven't done laundry in months. Same-day service is unreal — clothes come back smelling amazing." },
  { name: "Priya Patel", role: "Boutique owner", img: c3, text: "Reliable, professional, and great with delicate fabrics. They handle our store linens flawlessly." },
];

export function Testimonials() {
  return (
    <section id="reviews" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">Reviews</p>
          <h2 className="mt-3 text-4xl font-bold md:text-5xl">Loved by thousands</h2>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {items.map((t) => (
            <figure
              key={t.name}
              className="rounded-3xl border border-border bg-card p-8 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card"
            >
              <div className="flex gap-0.5 text-primary">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-4 text-foreground/90">"{t.text}"</blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <img src={t.img} alt={t.name} loading="lazy" width={512} height={512} className="h-12 w-12 rounded-full object-cover" />
                <div>
                  <div className="text-sm font-semibold">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
