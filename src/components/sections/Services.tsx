import { Shirt, Wind, Sparkles, Truck, Building2 } from "lucide-react";

const services = [
  { icon: Shirt, title: "Wash & Fold", desc: "Everyday laundry washed, dried, and neatly folded by the pound." },
  { icon: Sparkles, title: "Dry Cleaning", desc: "Gentle care for suits, dresses, and delicate fabrics." },
  { icon: Wind, title: "Ironing", desc: "Crisp, wrinkle-free shirts and garments pressed to perfection." },
  { icon: Truck, title: "Pickup & Delivery", desc: "Free door-to-door pickup and delivery in your scheduled window." },
  { icon: Building2, title: "Commercial Laundry", desc: "Reliable bulk service for hotels, gyms, salons, and offices." },
];

export function Services() {
  return (
    <section id="services" className="bg-secondary/40 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">Our services</p>
          <h2 className="mt-3 text-4xl font-bold md:text-5xl">Everything your wardrobe needs</h2>
          <p className="mt-4 text-muted-foreground">From everyday wash to delicate dry cleaning — handled with care.</p>
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div
              key={s.title}
              className="group rounded-3xl border border-border bg-card p-7 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card"
            >
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-primary-soft text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-xl font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
