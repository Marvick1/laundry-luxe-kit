import { CalendarClock, WashingMachine, PackageCheck } from "lucide-react";

const steps = [
  { icon: CalendarClock, title: "Schedule Pickup", desc: "Book online in under 60 seconds. Pick a time that works for you." },
  { icon: WashingMachine, title: "We Clean Your Clothes", desc: "Sorted, washed, and folded with premium eco-friendly products." },
  { icon: PackageCheck, title: "Delivered Fresh To You", desc: "Your laundry returns clean, folded, and ready to wear — on time." },
];

export function HowItWorks() {
  return (
    <section id="how" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">How it works</p>
          <h2 className="mt-3 text-4xl font-bold md:text-5xl">Three simple steps</h2>
        </div>
        <div className="relative mt-16 grid gap-10 md:grid-cols-3">
          <div className="absolute left-[16%] right-[16%] top-10 hidden h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent md:block" />
          {steps.map((s, i) => (
            <div key={s.title} className="relative text-center">
              <div className="relative z-10 mx-auto grid h-20 w-20 place-items-center rounded-full bg-card shadow-card ring-8 ring-background">
                <s.icon className="h-8 w-8 text-primary" />
                <span className="absolute -top-1 -right-1 grid h-7 w-7 place-items-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                  {i + 1}
                </span>
              </div>
              <h3 className="mt-6 text-xl font-semibold">{s.title}</h3>
              <p className="mx-auto mt-2 max-w-xs text-sm text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
