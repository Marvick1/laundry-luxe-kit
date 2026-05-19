import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Pricing } from "@/components/sections/Pricing";
import { Testimonials } from "@/components/sections/Testimonials";
import { Coverage } from "@/components/sections/Coverage";
import { Booking } from "@/components/sections/Booking";
import { Footer } from "@/components/sections/Footer";
import { Toaster } from "@/components/ui/sonner";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "FreshFold — Laundry Pickup & Delivery" },
      { name: "description", content: "Fresh laundry picked up and delivered to your door. Same-day pickup, free delivery, eco-friendly. Schedule online in 60 seconds." },
      { property: "og:title", content: "FreshFold — Laundry Pickup & Delivery" },
      { property: "og:description", content: "Fast, affordable, professional laundry service with same-day pickup." },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <HowItWorks />
        <Pricing />
        <Testimonials />
        <Coverage />
        <Booking />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}
