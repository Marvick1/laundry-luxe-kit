import { MapPin } from "lucide-react";

const areas = ["Downtown", "Westside", "North Hills", "Riverside", "East End", "South Park", "Midtown", "Lakeview"];

export function Coverage() {
  return (
    <section className="bg-secondary/40 py-24">
      <div className="mx-auto max-w-5xl rounded-3xl border border-border bg-card px-8 py-14 text-center shadow-soft">
        <div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-primary-soft text-primary">
          <MapPin className="h-6 w-6" />
        </div>
        <h2 className="mt-5 text-4xl font-bold md:text-5xl">Serving Your City & Surrounding Areas</h2>
        <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
          Free pickup and delivery across the metro area. Don't see your neighborhood? Just ask.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {areas.map((a) => (
            <span key={a} className="rounded-full border border-border bg-background px-4 py-1.5 text-sm">
              {a}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
