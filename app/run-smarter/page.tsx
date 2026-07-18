import LeadForm from "@/components/LeadForm";

export default function RunSmarterPage() {
  return (
    <main className="flex flex-col items-center w-full pt-16">
      
      {/* Aggressive Copy Section */}
      <section className="max-w-4xl mx-auto px-6 pb-16 flex flex-col items-center text-center pointer-events-none">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-6 drop-shadow-xl pointer-events-auto">
          Scale your revenue.<br />Not your workload.
        </h1>
        <p className="max-w-2xl text-lg md:text-xl text-white/80 font-medium leading-relaxed drop-shadow-md pointer-events-auto">
          Growth breaks fundamentally weak systems. We engineer custom Mini-CRMs, automated follow-up sequences, and seamless digital workflows that allow your agency to handle 10x the volume without losing your mind—or dropping a single lead.
        </p>
      </section>

      {/* The Reusable Form */}
      <section className="max-w-3xl mx-auto px-6 pb-24 w-full">
        <LeadForm />
      </section>
      
    </main>
  );
}