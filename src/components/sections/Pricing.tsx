import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

const plans = [
  {
    name: "Basic Wash",
    price: "₦1,500",
    unit: "/ kg",
    desc: "Perfect for everyday laundry needs.",
    features: ["Wash, dry & fold", "48-hour turnaround", "Free pickup & delivery", "Eco-friendly detergent"],
  },
  {
    name: "Premium Care",
    price: "₦2,500",
    unit: "/ kg",
    desc: "Extra care for your favorite garments.",
    features: ["Everything in Basic", "Hypoallergenic options", "Hand-folded with care", "Stain pre-treatment", "Garment separation"],
    featured: true,
  },
  {
    name: "Express Service",
    price: "₦3,500",
    unit: "/ kg",
    desc: "Same-day turnaround when you need it fast.",
    features: ["Same-day service", "Priority handling", "Premium folding", "SMS status updates"],
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="bg-secondary/40 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">Pricing</p>
          <h2 className="mt-3 text-4xl font-bold md:text-5xl">Simple, transparent rates</h2>
          <p className="mt-4 text-muted-foreground">No hidden fees. Pay only for what you wash.</p>
        </div>
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {plans.map((p) => (
            <div
              key={p.name}
              className={cn(
                "relative rounded-3xl border bg-card p-8 shadow-soft transition hover:shadow-card",
                p.featured ? "border-primary shadow-card lg:-translate-y-4" : "border-border",
              )}
            >
              {p.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-xs font-semibold text-primary-foreground">
                  Most Popular
                </span>
              )}
              <h3 className="text-lg font-semibold">{p.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{p.desc}</p>
              <div className="mt-6 flex items-baseline gap-1">
                <span className="text-4xl font-bold">{p.price}</span>
                <span className="text-muted-foreground">{p.unit}</span>
              </div>
              <ul className="mt-6 space-y-3">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-success" />
                    {f}
                  </li>
                ))}
              </ul>
              <Button
                asChild
                variant={p.featured ? "default" : "outline"}
                className="mt-8 w-full rounded-full"
              >
                <a href="#booking">Get started</a>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
