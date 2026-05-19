import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Phone, MessageCircle, Calendar } from "lucide-react";
import { toast } from "sonner";

export function Booking() {
  return (
    <section id="booking" className="py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">Book now</p>
          <h2 className="mt-3 text-4xl font-bold md:text-5xl">Schedule your pickup</h2>
          <p className="mt-4 max-w-md text-muted-foreground">
            Fill out the form and we'll confirm your pickup window within minutes. Prefer to chat? We're a message away.
          </p>
          <div className="mt-8 space-y-4">
            <a href="tel:+15551234567" className="flex items-center gap-4 rounded-2xl border border-border bg-card p-4 shadow-soft transition hover:shadow-card">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-primary-soft text-primary"><Phone className="h-5 w-5" /></span>
              <div>
                <div className="text-sm text-muted-foreground">Call us</div>
                <div className="font-semibold">+1 (555) 123-4567</div>
              </div>
            </a>
            <a href="https://wa.me/15551234567" target="_blank" rel="noreferrer" className="flex items-center gap-4 rounded-2xl border border-border bg-card p-4 shadow-soft transition hover:shadow-card">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-success/15 text-success"><MessageCircle className="h-5 w-5" /></span>
              <div>
                <div className="text-sm text-muted-foreground">WhatsApp</div>
                <div className="font-semibold">Chat with us instantly</div>
              </div>
            </a>
          </div>
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            toast.success("Pickup requested! We'll confirm shortly.");
            (e.target as HTMLFormElement).reset();
          }}
          className="rounded-3xl border border-border bg-card p-8 shadow-card"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <Label htmlFor="name">Full name</Label>
              <Input id="name" required placeholder="Jane Smith" className="mt-1.5" />
            </div>
            <div>
              <Label htmlFor="phone">Phone</Label>
              <Input id="phone" type="tel" required placeholder="(555) 123-4567" className="mt-1.5" />
            </div>
          </div>
          <div className="mt-4">
            <Label htmlFor="address">Pickup address</Label>
            <Input id="address" required placeholder="123 Main St, Apt 4B" className="mt-1.5" />
          </div>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <div>
              <Label htmlFor="date">Preferred date</Label>
              <Input id="date" type="date" required className="mt-1.5" />
            </div>
            <div>
              <Label htmlFor="service">Service</Label>
              <select id="service" required className="mt-1.5 flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-xs">
                <option>Wash & Fold</option>
                <option>Dry Cleaning</option>
                <option>Ironing</option>
                <option>Commercial</option>
              </select>
            </div>
          </div>
          <Button type="submit" size="lg" className="mt-6 w-full rounded-full shadow-glow">
            <Calendar className="mr-2 h-4 w-4" />Schedule Pickup
          </Button>
          <p className="mt-3 text-center text-xs text-muted-foreground">
            We'll confirm your pickup window by text within 15 minutes.
          </p>
        </form>
      </div>
    </section>
  );
}
