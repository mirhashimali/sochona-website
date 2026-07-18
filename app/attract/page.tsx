import LeadForm from "@/components/LeadForm";

export default function AttractPage() {
  return (
    <main className="flex flex-col items-center w-full pt-16">
      
      {/* Aggressive Copy Section */}
      <section className="max-w-4xl mx-auto px-6 pb-16 flex flex-col items-center text-center pointer-events-none">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-6 drop-shadow-xl pointer-events-auto">
          Traffic is vanity.<br />Pipeline is sanity.
        </h1>
        <p className="max-w-2xl text-lg md:text-xl text-white/80 font-medium leading-relaxed drop-shadow-md pointer-events-auto">
          Most agencies burn your cash on vanity metrics and useless clicks. We deploy precision-targeted Google Ads and advanced SEO architectures designed strictly to capture high-intent buyers who are already searching for your solution.
        </p>
      </section>

      {/* The Reusable Form! */}
      <section className="max-w-3xl mx-auto px-6 pb-24 w-full">
        <LeadForm />
      </section>
      
    </main>
  );
}