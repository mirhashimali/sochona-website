import type { Metadata } from "next";
import LeadForm from "@/components/LeadForm";

export const metadata: Metadata = {
  title: "Contact Us | Sochona",
  description: "Get in touch with Sochona to discuss your digital transformation, web development, and performance marketing needs.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white pt-24 pb-12">
      <section className="max-w-3xl mx-auto px-6 mb-12 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Let's <span className="text-orange-500">Talk.</span>
        </h1>
        <p className="text-xl text-neutral-400">
          Ready to scale? Drop your details below and our team will get back to you within 24 hours.
        </p>
      </section>

      <section className="max-w-2xl mx-auto px-6 flex justify-center">
        {/* Your form component dropped in seamlessly */}
        <LeadForm />
      </section>
    </main>
  );
}