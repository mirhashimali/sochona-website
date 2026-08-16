import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Sochona collects, uses, and protects your personal data.",
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPolicyPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 pt-32 pb-24 text-white/80">
      <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Privacy Policy</h1>
      <p className="text-sm text-white/50 mb-12">Last updated: [Insert Date]</p>

      <div className="space-y-10 leading-relaxed">
        <section>
          <h2 className="text-2xl font-semibold text-white mb-3">1. Who We Are</h2>
          <p>
            Sochona ("we," "us," or "our") operates the website sochona.net. This Privacy Policy
            explains how we collect, use, disclose, and safeguard your information when you visit
            our website or use our services. If you have questions, contact us at{" "}
            <a href="mailto:connect@sochona.net" className="text-white underline hover:text-white/70">
              connect@sochona.net
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-3">2. Information We Collect</h2>
          <p className="mb-3">We collect information in the following ways:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong className="text-white">Information you provide directly:</strong> Name,
              email address, phone number, business details, and any other information you submit
              through our contact forms, audit requests, or lead forms.
            </li>
            <li>
              <strong className="text-white">Automatically collected information:</strong> IP
              address, browser type, device information, pages visited, and time spent on our
              site, collected via cookies and similar tracking technologies.
            </li>
            <li>
              <strong className="text-white">Payment information:</strong> If you make a payment
              to us, payment processing is handled by PayPal. We do not directly collect or store
              your full payment card details on our servers.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-3">3. Cookies & Tracking Technologies</h2>
          <p className="mb-3">
            We use cookies and similar technologies to operate our website, analyze traffic, and
            deliver relevant advertising. Specifically, we use:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong className="text-white">Google Analytics (GA4):</strong> To understand how
              visitors use our site, including pages viewed, session duration, and traffic
              sources.
            </li>
            <li>
              <strong className="text-white">Google Ads:</strong> For conversion tracking and
              remarketing, which may show you ads for our services on other websites after you
              visit sochona.net.
            </li>
            <li>
              <strong className="text-white">Meta (Facebook) Pixel:</strong> To measure the
              effectiveness of our advertising on Meta platforms and to show you relevant ads on
              Facebook and Instagram.
            </li>
          </ul>
          <p className="mt-3">
            You can control or disable cookies through your browser settings. Disabling cookies
            may affect the functionality of our website. You can also opt out of personalized
            Google ads at{" "}
            <a
              href="https://adssettings.google.com"
              className="text-white underline hover:text-white/70"
            >
              adssettings.google.com
            </a>{" "}
            and Meta ads through your{" "}
            <a
              href="https://www.facebook.com/adpreferences"
              className="text-white underline hover:text-white/70"
            >
              Facebook Ad Preferences
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-3">4. How We Use Your Information</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>To respond to your inquiries and provide requested services</li>
            <li>To send you marketing communications, where you have consented to receive them</li>
            <li>To improve our website, services, and user experience</li>
            <li>To measure and optimize our advertising campaigns</li>
            <li>To process payments and fulfill contractual obligations</li>
            <li>To comply with legal obligations</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-3">5. How We Share Your Information</h2>
          <p className="mb-3">
            We do not sell your personal information. We may share your information with:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong className="text-white">Service providers:</strong> Including Netlify
              (hosting), Sanity (content management), Google (Analytics, Ads), Meta (advertising),
              and PayPal (payment processing), each of whom process data under their own privacy
              policies.
            </li>
            <li>
              <strong className="text-white">Legal requirements:</strong> If required by law,
              regulation, legal process, or governmental request.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-3">6. Data Retention</h2>
          <p>
            We retain personal information for as long as necessary to fulfill the purposes
            outlined in this policy, unless a longer retention period is required or permitted by
            law.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-3">7. Your Rights</h2>
          <p className="mb-3">
            Depending on your location, you may have the right to:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Access the personal information we hold about you</li>
            <li>Request correction or deletion of your information</li>
            <li>Object to or restrict certain processing of your data</li>
            <li>Withdraw consent where processing is based on consent</li>
            <li>Opt out of marketing communications at any time</li>
          </ul>
          <p className="mt-3">
            To exercise these rights, contact us at{" "}
            <a href="mailto:connect@sochona.net" className="text-white underline hover:text-white/70">
              connect@sochona.net
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-3">8. Data Security</h2>
          <p>
            We implement industry-standard technical and organizational measures designed to
            protect your information. However, no method of transmission or storage is completely
            secure, and we cannot guarantee absolute security.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-3">9. Children's Privacy</h2>
          <p>
            Our services are not directed to individuals under 18. We do not knowingly collect
            personal information from children.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-3">10. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. Changes will be posted on this
            page with an updated revision date.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-3">11. Contact Us</h2>
          <p>
            If you have questions about this Privacy Policy, contact us at{" "}
            <a href="mailto:connect@sochona.net" className="text-white underline hover:text-white/70">
              connect@sochona.net
            </a>
            .
          </p>
        </section>
      </div>
    </main>
  );
}