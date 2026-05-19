import { Button } from "@/components/ui/button";
import { Calendar, MessageCircle, Check } from "lucide-react";
import heroImg from "@/assets/hero-laundry.jpg";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-primary-soft blur-3xl" />
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 md:py-28 lg:grid-cols-2">
        <div className="animate-[fade-up_0.6s_ease-out]">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs font-medium text-muted-foreground shadow-soft">
            <span className="h-1.5 w-1.5 rounded-full bg-success" />
            Same-day pickup available
          </span>
          <h1 className="mt-6 font-display text-4xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
            Fresh Laundry <span className="text-primary">Picked Up</span> & Delivered To Your Door
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Fast, affordable, and professional laundry service with same-day pickup available. Skip the chore, keep your time.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button size="lg" asChild className="rounded-full px-7 shadow-glow">
              <a href="#booking"><Calendar className="mr-2 h-4 w-4" />Schedule Pickup</a>
            </Button>
            <Button size="lg" variant="outline" asChild className="rounded-full px-7">
              <a href="https://wa.me/15551234567" target="_blank" rel="noreferrer">
                <MessageCircle className="mr-2 h-4 w-4" />Chat on WhatsApp
              </a>
            </Button>
          </div>
          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
            {["Free pickup & delivery", "24-hour turnaround", "Eco-friendly detergents"].map((t) => (
              <li key={t} className="flex items-center gap-2">
                <Check className="h-4 w-4 text-success" />{t}
              </li>
            ))}
          </ul>
        </div>
        <div className="relative">
          <div className="absolute inset-0 -rotate-3 rounded-3xl bg-primary/10" />
          <img
            src={heroImg}
            alt="Freshly folded laundry"
            width={1280}
            height={1280}
            className="relative aspect-square w-full rounded-3xl object-cover shadow-card"
          />
          <div className="absolute -bottom-6 -left-6 hidden rounded-2xl border border-border bg-card p-4 shadow-card md:flex md:items-center md:gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-full bg-success/15 text-success">★</div>
            <div>
              <p className="text-sm font-semibold">4.9 / 5 rating</p>
              <p className="text-xs text-muted-foreground">From 2,400+ customers</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
