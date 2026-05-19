import { Droplets, Facebook, Instagram, Twitter, Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-4">
        <div>
          <a href="#" className="flex items-center gap-2 font-display text-lg font-bold">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-primary text-primary-foreground">
              <Droplets className="h-5 w-5" />
            </span>
            FreshFold
          </a>
          <p className="mt-4 text-sm text-muted-foreground">Premium laundry pickup and delivery, designed around your schedule.</p>
          <div className="mt-5 flex gap-3">
            {[Facebook, Instagram, Twitter].map((Icon, i) => (
              <a key={i} href="#" className="grid h-9 w-9 place-items-center rounded-full border border-border text-muted-foreground transition hover:bg-primary hover:text-primary-foreground">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-semibold">Company</h4>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li><a href="#services" className="hover:text-foreground">Services</a></li>
            <li><a href="#how" className="hover:text-foreground">How it works</a></li>
            <li><a href="#pricing" className="hover:text-foreground">Pricing</a></li>
            <li><a href="#reviews" className="hover:text-foreground">Reviews</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold">Contact</h4>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li className="flex items-center gap-2"><Phone className="h-4 w-4" />+1 (555) 123-4567</li>
            <li className="flex items-center gap-2"><Mail className="h-4 w-4" />hello@freshfold.co</li>
            <li className="flex items-center gap-2"><MapPin className="h-4 w-4" />123 Clean St, Your City</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold">Hours</h4>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li className="flex justify-between"><span>Mon – Fri</span><span>7am – 9pm</span></li>
            <li className="flex justify-between"><span>Saturday</span><span>8am – 8pm</span></li>
            <li className="flex justify-between"><span>Sunday</span><span>9am – 6pm</span></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-2 px-6 py-6 text-xs text-muted-foreground md:flex-row">
          <p>© {new Date().getFullYear()} FreshFold Laundry. All rights reserved.</p>
          <p>Crafted with care.</p>
        </div>
      </div>
    </footer>
  );
}
