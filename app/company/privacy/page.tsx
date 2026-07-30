import Link from "next/link";

export const metadata = {
  title: "Privacy Policy | Agency.io",
  description: "How Agency.io collects, uses, and protects your information.",
};

const LAST_UPDATED = "July 30, 2026";

export default function PrivacyPolicy() {
  return (
    <main className="mx-auto max-w-[1440px] space-y-12 px-6 pt-24 xl:px-8">
      <div className="space-y-3 text-center">
        <h1 className="text-5xl dark:text-white md:text-6xl">
          Privacy <span className="text-brandDark">Policy</span>
        </h1>
        <p className="opacity-70">Last updated: {LAST_UPDATED}</p>
      </div>

      <div className="mx-auto max-w-3xl space-y-10 pb-24 dark:text-white">
        <p className="rounded-xl border border-brandDark p-6 text-sm opacity-80">
          This policy is a plain-language description of what Agency.io actually
          collects and does with it — it is not a substitute for legal advice,
          and should be reviewed by a lawyer before being relied on as a binding
          legal document.
        </p>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold">Information we collect</h2>
          <p className="opacity-80">
            When you create an account, we collect your name, email address, and
            (if you sign in with Google) the basic profile information Google
            shares with us. Account authentication is handled by Firebase; we
            don&apos;t store your password ourselves.
          </p>
          <p className="opacity-80">
            If you submit a review, contact us, or make a career enquiry, we
            store what you write, your name, and your email address so we can
            respond to you and, for reviews, display them to other users once
            approved.
          </p>
          <p className="opacity-80">
            If you use location-based features (like nearby recommendations or
            the weather tool), we ask your browser for your location first — we
            only receive it if you explicitly allow it, and it&apos;s used to
            personalize what&apos;s shown to you, not stored permanently against
            your account.
          </p>
          <p className="opacity-80">
            We use a small number of cookies and browser storage to keep you
            signed in and remember your theme (light/dark) and location
            permission choice. We don&apos;t use third-party advertising or
            tracking cookies.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold">
            How we use your information
          </h2>
          <ul className="list-disc space-y-2 pl-6 opacity-80">
            <li>To create and maintain your account</li>
            <li>To show your approved reviews to other users</li>
            <li>To respond to enquiries you send us</li>
            <li>
              To personalize destination and establishment recommendations based
              on your location, if you&apos;ve shared it
            </li>
            <li>To keep the site secure and prevent abuse</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold">
            Third-party services we use
          </h2>
          <p className="opacity-80">
            We rely on a small set of third parties to run the site, each of
            whom processes a limited slice of the data above on our behalf:
          </p>
          <ul className="list-disc space-y-2 pl-6 opacity-80">
            <li>
              <span className="font-medium">Firebase (Google)</span> — account
              authentication
            </li>
            <li>
              <span className="font-medium">Sanity</span> — hosts our
              destination, establishment, and blog content
            </li>
            <li>
              <span className="font-medium">Neon (Postgres)</span> — stores
              reviews, enquiries, and saved trips
            </li>
            <li>
              <span className="font-medium">
                Open-Meteo, OpenStreetMap, and exchangerate-api
              </span>{" "}
              — power the weather, map, and currency conversion utilities; these
              requests don&apos;t include your account information
            </li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold">Your choices</h2>
          <p className="opacity-80">
            You can update or delete your account information at any time by
            contacting us. You can decline location access in your browser and
            still use the site — location-based features will simply be
            unavailable. You can sign out at any time from your profile menu.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold">Data retention</h2>
          <p className="opacity-80">
            We keep account and review data for as long as your account is
            active. If you ask us to delete your account, we&apos;ll remove your
            personal information within a reasonable time, except where
            we&apos;re required to keep it for legal or security reasons.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold">Contact us</h2>
          <p className="opacity-80">
            Questions about this policy or your data? Reach out through our{" "}
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
