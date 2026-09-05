"use client";

import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import { Send, MessageCircle, ArrowRight } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

interface LeadFormProps {
  variant?: "in" | "global";
  showContainer?: boolean;
  hideHeader?: boolean;
  hideFooter?: boolean;
  className?: string;
}

export default function LeadForm({
  variant,
  showContainer = true,
  hideHeader = false,
  hideFooter = false,
  className = "",
}: LeadFormProps) {
  const router = useRouter();
  const pathname = usePathname();

  // Auto-detect Indian edition if under /in route, unless explicitly specified
  const isIndian = variant ? variant === "in" : (pathname ? pathname.startsWith("/in") : false);

  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    business: "",
    challenge: "",
  });

  const [status, setStatus] = useState<"" | "loading" | "error">("");
  const [errorMessage, setErrorMessage] = useState("");

  const whatsappNumber = "919835182801";
  const whatsappMessage = encodeURIComponent(
    isIndian
      ? "Namaste Sochona! I would like to audit my digital systems and discuss growth infrastructure."
      : "Hi Sochona! I would like to request a systems & growth audit for my business."
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const isEmail = formData.contact.includes("@");
      const payload = {
        name: formData.name,
        contact: formData.contact,
        phone: isEmail ? "" : formData.contact,
        email: isEmail ? formData.contact : "",
        business: formData.business,
        service: formData.business,
        challenge: formData.challenge,
        variant: isIndian ? "India Edition" : "Global / North America",
      };

      const res = await fetch("/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        router.push("/thank-you");
      } else {
        setStatus("error");
        setErrorMessage(isIndian ? "Lead save karne me issue aaya. Dobara try karein." : "Error submitting. Please try again.");
      }
    } catch (error) {
      setStatus("error");
      setErrorMessage(isIndian ? "Network connection error. Kripya check karein." : "Connection failed. Please check your network.");
    }
  };

  const formContent = (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5 text-left">
      {/* 1. Full Name */}
      <div>
        <label className="block text-xs sm:text-sm font-semibold text-white/90 mb-2 tracking-tight">
          {isIndian ? "Aapka Naam (Full Name)" : "Full Name"}
        </label>
        <input
          type="text"
          placeholder={isIndian ? "e.g. Vikram Singhania" : "e.g. Alex Vance"}
          value={formData.name}
          required
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full bg-[#111622]/90 border border-white/10 rounded-2xl p-4 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#007AFF] focus:ring-1 focus:ring-[#007AFF] transition-all shadow-inner"
        />
      </div>

      {/* 2. Contact (WhatsApp / Email) */}
      <div>
        <label className="block text-xs sm:text-sm font-semibold text-white/90 mb-2 tracking-tight">
          {isIndian
            ? "WhatsApp Number (For Direct Diagnostic Delivery)"
            : "Work Email or WhatsApp (For Direct Diagnostic Delivery)"}
        </label>
        <input
          type={isIndian ? "tel" : "text"}
          placeholder={isIndian ? "e.g. 9835182801" : "e.g. alex@vancecorp.com or +1 (555) 019-2834"}
          value={formData.contact}
          required
          onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
          className="w-full bg-[#111622]/90 border border-white/10 rounded-2xl p-4 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#007AFF] focus:ring-1 focus:ring-[#007AFF] transition-all shadow-inner"
        />
      </div>

      {/* 3. Business Name & Website / Instagram Link */}
      <div>
        <label className="block text-xs sm:text-sm font-semibold text-white/90 mb-2 tracking-tight">
          {isIndian
            ? "Business Name & Website / Instagram Link"
            : "Business Name & Website URL"}
        </label>
        <input
          type="text"
          placeholder={
            isIndian
              ? "e.g. Singhania Logistics / www.singhanialogistics.com"
              : "e.g. Vance Logistics / www.vancelogistics.com"
          }
          value={formData.business}
          required
          onChange={(e) => setFormData({ ...formData, business: e.target.value })}
          className="w-full bg-[#111622]/90 border border-white/10 rounded-2xl p-4 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#007AFF] focus:ring-1 focus:ring-[#007AFF] transition-all shadow-inner"
        />
      </div>

      {/* 4. The Challenge / Bottleneck (NEW INPUT - Textarea) */}
      <div>
        <label className="block text-xs sm:text-sm font-semibold text-white/90 mb-2 tracking-tight">
          {isIndian
            ? "Aapka Sabse Bada Challenge Kya Hai?"
            : "What Is Your Biggest Challenge or Bottleneck?"}
        </label>
        <textarea
          rows={3}
          placeholder={
            isIndian
              ? "e.g. Facebook ads me junk leads aa rahi hain / website bahut slow khulti hai..."
              : "e.g. Ad spend CAC is too high / landing page conversion rate is low / manual follow-ups..."
          }
          value={formData.challenge}
          required
          onChange={(e) => setFormData({ ...formData, challenge: e.target.value })}
          className="w-full bg-[#111622]/90 border border-white/10 rounded-2xl p-4 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#007AFF] focus:ring-1 focus:ring-[#007AFF] transition-all resize-none shadow-inner leading-relaxed"
        />
      </div>

      {/* Error Message */}
      {status === "error" && (
        <div className="p-3.5 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs text-center font-medium">
          {errorMessage}
        </div>
      )}

      {/* Submit Button */}
      <button
        type="submit"
        disabled={status === "loading"}
        className="mt-2 w-full py-4 px-6 rounded-2xl bg-white hover:bg-neutral-100 text-black font-bold text-sm sm:text-base flex items-center justify-center gap-2.5 transition-all shadow-xl hover:scale-[1.01] active:scale-[0.99] cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed group"
      >
        <Send className="w-4 h-4 text-[#007AFF] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0" />
        <span>
          {status === "loading"
            ? (isIndian ? "Audit Request Bhej Rahe Hain..." : "Submitting Diagnostic Request...")
            : "Send Me Free Video Breakdown"}
        </span>
      </button>
    </form>
  );

  const footerElement = !hideFooter && (
    <div className="mt-8 pt-6 border-t border-white/10 text-center">
      <p className="text-xs text-white/60 mb-2 font-light">
        {isIndian
          ? "Want to chat with our systems architect immediately?"
          : "Want to speak with our systems architect directly?"}
      </p>
      {isIndian ? (
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-xs font-semibold text-[#25D366] hover:text-emerald-300 transition-colors py-2 px-4 rounded-xl bg-[#25D366]/10 border border-[#25D366]/25 hover:border-[#25D366]/40"
        >
          <MessageCircle className="w-3.5 h-3.5" />
          <span>Chat directly on WhatsApp (+91 9835182801) →</span>
        </a>
      ) : (
        <Link
          href="/book"
          className="inline-flex items-center gap-2 text-xs font-semibold text-[#007AFF] hover:text-blue-400 transition-colors py-2 px-4 rounded-xl bg-[#007AFF]/10 border border-[#007AFF]/25 hover:border-[#007AFF]/40"
        >
          <span>Schedule a 30-min strategy call →</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      )}
    </div>
  );

  if (!showContainer) {
    return (
      <div className={className}>
        {formContent}
        {footerElement}
      </div>
    );
  }

  return (
    <ScrollReveal>
      <div
        className={`bg-[#0A0E17]/85 border border-white/15 p-8 sm:p-10 md:p-12 rounded-3xl backdrop-blur-2xl shadow-2xl pointer-events-auto w-full max-w-xl mx-auto transition-all duration-300 hover:border-white/25 hover:shadow-[0_0_50px_rgba(0,122,255,0.12)] ${className}`}
      >
        {!hideHeader && (
          <div className="text-center mb-8">
            {/* Top Pill Badge */}
            <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/15 text-[10px] md:text-[11px] font-bold tracking-[0.15em] uppercase text-white/90 mb-5 shadow-sm">
              {isIndian ? "100% FREE • NO SALES HARASSMENT" : "100% FREE • NO SALES PRESSURE"}
            </div>

            {/* Headline */}
            <h2 className="text-2xl sm:text-3xl md:text-[32px] font-extrabold text-white tracking-tight leading-tight mb-3">
              {isIndian ? "Request Your Systems & Ad Audit" : "Request Your Systems & Growth Audit"}
            </h2>

            {/* Subheadline */}
            <p className="text-xs sm:text-sm text-white/70 font-light leading-relaxed max-w-md mx-auto">
              {isIndian
                ? "Submit your website or tell us where you are losing leads. We will send you a personalized 5-minute video breakdown directly on WhatsApp within 24 hours."
                : "Submit your website or tell us where your funnel is leaking. We will send you a personalized 5-minute video breakdown directly within 24 hours."}
            </p>
          </div>
        )}

        {formContent}
        {footerElement}
      </div>
    </ScrollReveal>
  );
}