import Link from "next/link";

export const metadata = {
  title: "Terms and Conditions | Agency.io",
  description: "The terms that govern your use of Agency.io.",
};

const LAST_UPDATED = "July 30, 2026";

export default function Terms() {
  return (
    <main className="mx-auto max-w-[1440px] space-y-12 px-6 pt-24 xl:px-8">
      <div className="space-y-3 text-center">
        <h1 className="text-5xl dark:text-white md:text-6xl">
          Terms and <span className="text-brandDark">Conditions</span>
        </h1>
        <p className="opacity-70">Last updated: {LAST_UPDATED}</p>
      </div>

      <div className="mx-auto max-w-3xl space-y-10 pb-24 dark:text-white">
        <p className="rounded-xl border border-brandDark p-6 text-sm opacity-80">
          These terms are a plain-language description of how Agency.io is meant
          to be used — they are not a substitute for legal advice, and should be
          reviewed by a lawyer before being relied on as a binding legal
          document.
        </p>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold">Using Agency.io</h2>
          <p className="opacity-80">
            Agency.io is a travel discovery and content platform — you can
            browse destinations and establishments, read and write reviews, plan
            trips, and use our travel utilities (weather, currency conversion,
            maps). By using the site, you agree to these terms.
          </p>
          <p className="opacity-80">
            You must be able to form a legally binding contract to create an
            account. You&apos;re responsible for keeping your account
            credentials secure and for anything that happens under your account.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold">
            Reviews and other content you submit
          </h2>
          <p className="opacity-80">
            When you submit a review, enquiry, or other content, you&apos;re
            confirming it&apos;s genuine, based on your own experience, and
            doesn&apos;t infringe anyone else&apos;s rights. You keep ownership
            of what you write, but you grant us a license to display it on the
            site.
          </p>
          <p className="opacity-80">
            Reviews are moderated before publication. We can remove or decline
            to publish content that&apos;s fake, abusive, off-topic, or
            otherwise violates these terms, at our discretion.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold">Acceptable use</h2>
          <p className="opacity-80">You agree not to:</p>
          <ul className="list-disc space-y-2 pl-6 opacity-80">
            <li>Submit false, misleading, or fraudulent reviews</li>
            <li>Attempt to access another user&apos;s account</li>
            <li>
              Scrape, reverse-engineer, or abuse the site&apos;s APIs beyond
              normal use
            </li>
            <li>Use the site to harass, impersonate, or harm anyone else</li>
            <li>Interfere with the security or normal operation of the site</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold">
            Travel information accuracy
          </h2>
          <p className="opacity-80">
            Destination, establishment, pricing, and travel-utility information
            (weather, currency rates, maps) is provided for general guidance and
            sourced from our content and third-party data providers. We
            don&apos;t guarantee its accuracy or completeness, and you should
            independently verify anything important — opening hours, prices,
            availability, travel advisories — before making travel decisions or
            bookings.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold">Account termination</h2>
          <p className="opacity-80">
            You can stop using Agency.io and request account deletion at any
            time. We may suspend or terminate accounts that violate these terms,
            including submitting fraudulent reviews or abusing the platform.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold">Limitation of liability</h2>
          <p className="opacity-80">
            Agency.io is provided &quot;as is.&quot; To the extent permitted by
            law, we&apos;re not liable for losses arising from travel decisions
            made using information on the site, service interruptions, or
            third-party service failures (Firebase, Sanity, our database
            provider, or the weather/currency/map data sources we rely on).
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold">Changes to these terms</h2>
          <p className="opacity-80">
            We may update these terms as the site evolves. Continued use of
            Agency.io after a change means you accept the updated terms.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold">Contact us</h2>
          <p className="opacity-80">
            Questions about these terms? Reach out through our{" "}
            <Link
              href="/company/contact-us"
              className="text-brandDark underline"
            >
              contact page
            </Link>
            .
          </p>
        </section>
      </div>
    </main>
  );
}
