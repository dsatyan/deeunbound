// app/travel/destinations/japan/visa/page.tsx
import PageShell from "@/components/page-shell";

export default function JapanVisaPage() {
  return (
    <PageShell
      breadcrumbs={[
        { label: "Travel", href: "/travel" },
        { label: "Destinations", href: "/travel/destinations" },
        { label: "Japan", href: "/travel/destinations/japan" },
        { label: "Visa Guide" },
      ]}
    >
      <main className="mx-auto max-w-6xl px-8 py-20">

        {/* ── Hero ── */}
        <span className="mb-8 inline-block rounded-sm border border-amber-700 px-4 py-2 text-xs font-medium uppercase tracking-[0.22em] text-amber-700">
          Japan · Visa
        </span>

        <h1 className="max-w-5xl font-serif text-5xl font-semibold leading-[1.08] tracking-tight text-[var(--text)] md:text-6xl">
          Japan eVisa - Indian Passport, US Resident (H1B)
        </h1>

        <p className="mt-8 max-w-4xl text-xl leading-9 text-neutral-700">
          The complete process for applying for a Japan short-term tourist eVisa
          online - including what got our application rejected the first time,
          how to apply for a family member through your account, and the full
          timeline from first submission to visa in hand.
        </p>

        <div className="mt-10 flex items-center gap-6 border-b border-[var(--border)] pb-10 text-sm text-[var(--muted)]">
          <span>By Dee</span>
          <span className="h-1 w-1 rounded-full bg-neutral-300" />
          <span>10 min read</span>
          <span className="h-1 w-1 rounded-full bg-neutral-300" />
          <span>Applied March 2026</span>
        </div>

        {/* ── Quick context box ── */}
        <div className="mt-14 grid gap-4 sm:grid-cols-3">
          {[
            { label: "Passport", value: "Indian" },
            { label: "Residence status", value: "US H1B visa holder" },
            { label: "Visa type", value: "Single-entry short-term eVisa" },
            { label: "Purpose", value: "Tourism (up to 90 days)" },
            { label: "Applicants", value: "2 (self + spouse on proxy)" },
            { label: "Total fee", value: "¥1,664 (~$11) for 2 people" },
            { label: "Applied via", value: "SF Consulate eVisa portal" },
            { label: "Total timeline", value: "~12 days (Mar 12 → Mar 24)" },
            { label: "Result", value: "✅ Approved" },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-xl border border-[var(--border)] bg-[var(--surface)] px-4 py-3"
            >
              <p className="text-xs text-[var(--muted)] uppercase tracking-wider">{item.label}</p>
              <p className="mt-1 font-medium text-[var(--text)] text-sm">{item.value}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 space-y-16">

          {/* ── Section 1: Context ── */}
          <section className="space-y-5 text-lg leading-8 text-neutral-700">
            <h2 className="font-serif text-3xl font-semibold text-[var(--text)]">
              Why single-entry eVisa, not multiple-entry
            </h2>
            <p>
              Japan offers two main visa types for Indian passport holders applying
              from the US: single-entry short-term and multiple-entry. Here's why
              we went with single-entry:
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                {
                  title: "Single-entry eVisa",
                  pros: ["Everything done fully online - no mailing your passport", "~5 business days processing", "Only ~$6 per person", "Easy to reapply if you visit again"],
                  cons: ["One entry only - can't do a side trip to South Korea and re-enter Japan"],
                  highlight: true,
                },
                {
                  title: "Multiple-entry visa",
                  pros: ["Enter Japan multiple times within the validity period", "Useful if you travel to Japan often"],
                  cons: ["Must physically mail your passport to the SF Consulate", "Longer processing time", "Higher fee", "No passport = can't travel elsewhere while it's being processed"],
                  highlight: false,
                },
              ].map((opt) => (
                <div
                  key={opt.title}
                  className={`rounded-2xl border p-5 ${opt.highlight ? "border-teal-300 bg-[#dce7e6]" : "border-[var(--border)] bg-[var(--surface)]"}`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <p className="font-serif text-lg font-semibold text-[var(--text)]">{opt.title}</p>
                    {opt.highlight && (
                      <span className="text-xs bg-teal-700 text-white px-2 py-0.5 rounded-full">We chose this</span>
                    )}
                  </div>
                  <ul className="space-y-1.5 mb-3">
                    {opt.pros.map((p) => (
                      <li key={p} className="flex items-start gap-2 text-sm text-neutral-700">
                        <span className="mt-1 text-teal-600 flex-shrink-0">✓</span>{p}
                      </li>
                    ))}
                  </ul>
                  <ul className="space-y-1.5">
                    {opt.cons.map((c) => (
                      <li key={c} className="flex items-start gap-2 text-sm text-[var(--muted)]">
                        <span className="mt-1 flex-shrink-0">✗</span>{c}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <NoteBox>
              <strong>H1B holders can apply - B1/B2 cannot.</strong> The SF Consulate
              explicitly states that applications from people who entered the US on a
              B1/B2 tourist visa or under visa exemption are not accepted. H1B, L1,
              F1, and other valid US visa holders are eligible to apply.
            </NoteBox>
          </section>

          {/* ── Section 2: Documents ── */}
          <section className="space-y-5">
            <h2 className="font-serif text-3xl font-semibold text-[var(--text)]">
              Documents you'll need
            </h2>
            <p className="text-lg leading-8 text-neutral-700">
              The official checklist is at{" "}
              <a
                href="https://www.sf.us.emb-japan.go.jp/files/100856758.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-teal-700 underline underline-offset-2"
              >
                sf.us.emb-japan.go.jp (PDF checklist)
              </a>
              . Here's what we uploaded for a straightforward tourist application
              with no guarantor in Japan:
            </p>
            <div className="space-y-2">
              {[
                { doc: "Valid passport (bio page scan)", note: "Must be valid for at least 6 months beyond your return date" },
                { doc: "Current US visa (H1B)", note: "Scan of your H1B stamp - proves legal residency in the US" },
                { doc: "I-94 printout", note: "Download from i94.cbp.dhs.gov - shows your current entry record" },
                { doc: "Round-trip flight itinerary", note: "Confirmation showing your exact entry and exit dates from Japan" },
                { doc: "Hotel/accommodation bookings", note: "For every night of the stay - must match your flight dates exactly" },
                { doc: "Day-by-day schedule", note: "⚠️ This is what got us rejected first time - see below" },
                { doc: "Bank statements (3 months)", note: "To show you can cover your expenses" },
                { doc: "Employment verification / pay stub", note: "Proves stable income and ties to the US" },
                { doc: "Authorization letter (if applying for family member)", note: "Required when you submit on behalf of someone else - template link below" },
              ].map((item) => (
                <div key={item.doc} className="flex items-start gap-4 rounded-xl border border-[var(--border)] bg-[var(--surface)] px-5 py-4">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-teal-600" />
                  <div>
                    <p className="font-medium text-[var(--text)] text-sm">{item.doc}</p>
                    <p className="text-sm text-[var(--muted)] mt-0.5">{item.note}</p>
                  </div>
                </div>
              ))}
            </div>
            <NoteBox>
              <strong>Authorization letter for proxy applicant:</strong> If you're
              applying on behalf of a family member (spouse, etc.), the family member
              needs to sign an authorization letter allowing you to submit on their
              behalf. Here's a template you can copy:{" "}
              <a
                href="https://docs.google.com/document/d/147rJ2iSHmJ4y7k0Wnht4C4YpUv0SSjh7/copy"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-teal-700 underline underline-offset-2"
              >
                Authorization Letter Template (Google Doc - Make a Copy)
              </a>
            </NoteBox>
          </section>

          {/* ── Section 3: Rejection ── */}
          <section className="space-y-5 text-lg leading-8 text-neutral-700">
            <h2 className="font-serif text-3xl font-semibold text-[var(--text)]">
              ⚠️ What got our application rejected - and why it's easy to fix
            </h2>
            <p>
              Our application came back rejected the very next day with this reason:
            </p>
            <div className="rounded-2xl border-l-4 border-red-400 bg-red-50 px-6 py-5 text-base leading-7 text-red-800">
              <p className="font-medium mb-1">Rejection reason (verbatim from the email):</p>
              <p className="italic">
                "Day by Day schedule for your entire stay in Japan. Your day to day
                schedule and your flight itinerary don't match."
              </p>
            </div>
            <p>
              The silver lining: they responded the same day, which means the
              review process is fast. The problem was simple - our day-by-day
              itinerary document said we'd be in Kyoto on a date when our flight
              showed us still in transit. The dates didn't line up.
            </p>
            <p>
              The fix: make sure your day-by-day schedule starts on your actual
              arrival date (not departure date from the US), ends on your actual
              departure date from Japan, and every day is accounted for.
              "Day 1: Arrive Tokyo, check in to hotel, rest" is fine - it doesn't
              have to be a rigid hour-by-hour plan. It just has to match the dates
              on your flight booking exactly.
            </p>
            <NoteBox>
              <strong>After rejection, you must start a completely new application.</strong>{" "}
              You cannot add documents to a rejected application and you cannot reply
              to the rejection email. Wait 24 hours, then go back to the eVisa portal
              and submit a new application from scratch with all the corrected documents.
            </NoteBox>

            {/* Screenshot placeholder */}
            <ScreenshotPlaceholder
              label="Screenshot: Rejection email"
              note="Blur your personal details (name, receipt number) before uploading"
            />
          </section>

          {/* ── Section 4: How to apply ── */}
          <section className="space-y-5">
            <h2 className="font-serif text-3xl font-semibold text-[var(--text)]">
              How to apply - step by step
            </h2>
            <p className="text-lg leading-8 text-neutral-700">
              The application portal is at{" "}
              <a
                href="https://www.evisa.mofa.go.jp/personal/login"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-teal-700 underline underline-offset-2"
              >
                evisa.mofa.go.jp
              </a>
              . Create an account with your email address and start a new application.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "1",
                  title: "Create an account and start a new application",
                  detail: "Register with your email address. This becomes your primary applicant account. You'll fill in your personal details, passport information, travel dates, and upload all documents.",
                },
                {
                  n: "2",
                  title: "Don't miss the 'Add family member' option",
                  detail: "At the end of your own application form, before you submit, there is an option to Save and Add a Family Member. This is easy to miss. If you click past it and submit only your application, you'll need to delete the entire application and start over to reach that screen again.",
                  warn: true,
                },
                {
                  n: "3",
                  title: "Complete the family member's application",
                  detail: "After saving your application and choosing to add a family member, you'll fill in their details separately. Their application is linked to yours but is treated as a separate submission. Upload all their documents including the signed authorization letter.",
                },
                {
                  n: "4",
                  title: "Submitting - only select your application",
                  detail: "When you reach the submission screen, you'll see both applications listed. The primary applicant's entry has a solid dot; the family member's has a hollow dot. Select only your application to submit. If you try to select both and submit together, it errors out.",
                  warn: true,
                },
                {
                  n: "5",
                  title: "Submit the family member's application separately",
                  detail: "After your application goes through, go back to the application list and submit the family member's application separately. Both will be processed together at the consulate since they're linked.",
                },
                {
                  n: "6",
                  title: "Check for the confirmation email",
                  detail: 'You should receive an email with subject "JAPAN eVISA [Notification of temporary reception of application]" and a receipt number. Keep this number. If you don\'t receive it within a few hours, check your spam folder.',
                },
              ].map((step) => (
                <div
                  key={step.n}
                  className={`rounded-xl border px-5 py-5 ${step.warn ? "border-amber-200 bg-amber-50" : "border-[var(--border)] bg-[var(--surface)]"}`}
                >
                  <div className="flex items-start gap-4">
                    <span className={`mt-0.5 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full text-sm font-medium ${step.warn ? "bg-amber-200 text-amber-900" : "bg-[#dce7e6] text-teal-700"}`}>
                      {step.n}
                    </span>
                    <div>
                      <p className="font-medium text-[var(--text)]">{step.title}</p>
                      <p className="mt-1 text-base leading-7 text-neutral-600">{step.detail}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Screenshot placeholders for the portal flow */}
            <div className="grid gap-4 sm:grid-cols-2 mt-4">
              <ScreenshotPlaceholder
                label="Screenshot: 'Add family member' option"
                note="Shows the save + add family member button at the end of the application form"
              />
              <ScreenshotPlaceholder
                label="Screenshot: Application list with solid/hollow dots"
                note="Shows how to identify which application to select for submission"
              />
            </div>
          </section>

          {/* ── Section 5: Timeline ── */}
          <section className="space-y-5">
            <h2 className="font-serif text-3xl font-semibold text-[var(--text)]">
              The full timeline - what happened and when
            </h2>
            <p className="text-lg leading-8 text-neutral-700">
              This was our actual experience. Your dates will differ but the
              sequence of statuses should be similar.
            </p>
            <div className="space-y-0">
              {[
                {
                  date: "Day 1 (first attempt)",
                  event: "Submitted application",
                  status: "Temporarily received",
                  detail: "Application accepted into the system. Got a confirmation email with receipt number.",
                  type: "normal",
                },
                {
                  date: "Day 2",
                  event: "❌ Application rejected",
                  status: "Returned",
                  detail: "Email arrived the very next day. Reason: day-by-day itinerary didn't match flight dates. Had to start a completely new application.",
                  type: "error",
                },
                {
                  date: "Mar 12",
                  event: "Resubmitted (second attempt)",
                  status: "Temporarily received",
                  detail: "New application with corrected itinerary. Confirmation email received with new receipt number. Note: added family member application this time.",
                  type: "normal",
                },
                {
                  date: "Mar 16",
                  event: "Processing confirmation",
                  status: "Under examination",
                  detail: 'Received email saying "we have received your visa application and will proceed." Also told us to expect a fee notice email on March 23. Explicitly said: do not call or email us.',
                  type: "normal",
                },
                {
                  date: "Mar 23",
                  event: "Fee payment request",
                  status: "Fee payment",
                  detail: "Email arrived exactly on the scheduled date with credit card payment instructions. Fee: ¥1,664 for 2 people (~$11 total at the time).",
                  type: "payment",
                },
                {
                  date: "Mar 24",
                  event: "✅ Visa issued",
                  status: "Issued",
                  detail: 'Email arrived the next day: "JAPAN eVISA [Notification of electronic visa issuance]". Each applicant gets a separate issuance number. Visa is displayed digitally - no sticker in passport.',
                  type: "success",
                },
              ].map((item, i, arr) => (
                <div key={item.date} className="flex gap-4">
                  {/* Timeline line */}
                  <div className="flex flex-col items-center">
                    <div className={`mt-5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full text-xs font-bold ${
                      item.type === "error" ? "bg-red-100 text-red-700" :
                      item.type === "success" ? "bg-green-100 text-green-700" :
                      item.type === "payment" ? "bg-amber-100 text-amber-700" :
                      "bg-[#dce7e6] text-teal-700"
                    }`}>
                      {i + 1}
                    </div>
                    {i < arr.length - 1 && (
                      <div className="w-px flex-1 bg-[var(--border)] my-1" />
                    )}
                  </div>
                  {/* Content */}
                  <div className="pb-6 flex-1">
                    <div className="flex items-center gap-3 mt-4 flex-wrap">
                      <span className="text-xs font-medium text-[var(--muted)] bg-[var(--surface)] border border-[var(--border)] px-2 py-0.5 rounded-full">
                        {item.date}
                      </span>
                      <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                        item.type === "error" ? "bg-red-100 text-red-700" :
                        item.type === "success" ? "bg-green-100 text-green-700" :
                        item.type === "payment" ? "bg-amber-100 text-amber-700" :
                        "bg-[#dce7e6] text-teal-700"
                      }`}>
                        Status: {item.status}
                      </span>
                    </div>
                    <p className="mt-2 font-medium text-[var(--text)]">{item.event}</p>
                    <p className="mt-1 text-sm leading-relaxed text-neutral-600">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── Section 6: Showing visa at airport ── */}
          <section className="space-y-5 text-lg leading-8 text-neutral-700">
            <h2 className="font-serif text-3xl font-semibold text-[var(--text)]">
              How to show your visa at the airport
            </h2>
            <p>
              The Japan eVisa is digital - there's no sticker in your passport.
              At check-in at your departure airport, you'll be asked to display
              the "Visa Issuance Notice" on your phone screen.
            </p>
            <p>
              <strong className="font-medium text-[var(--text)]">Important:</strong>{" "}
              Screenshots and printed PDFs are NOT accepted. You must show it
              live on the eVisa portal on your device. Make sure you have internet
              access at the airport (or download it for offline viewing beforehand
              - see instructions below).
            </p>
            <div className="rounded-xl border border-[var(--border)] bg-[var(--surface)] px-5 py-5 space-y-2">
              <p className="font-medium text-[var(--text)] mb-3">How to display the visa issuance notice</p>
              {[
                "Log in to the Japan eVisa website with your email and password",
                'Click "Visa application list" at the top of the page',
                "Check the box next to the relevant person",
                'Click "Visa issuance notice (to display)" - this shows it on screen',
                'To save a PDF: use the PDF download link on the same page (for offline backup)',
              ].map((step, i) => (
                <div key={i} className="flex items-start gap-3 text-sm text-neutral-700">
                  <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[#dce7e6] text-xs font-medium text-teal-700">{i + 1}</span>
                  {step}
                </div>
              ))}
            </div>
            <p>
              Full instructions with screenshots are in the official guide:{" "}
              <a
                href="https://www.evisa.mofa.go.jp/pdf/visa_issuance_notice_for_a_proxy_en.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-teal-700 underline underline-offset-2"
              >
                How to display visa issuance notice (PDF, official)
              </a>
            </p>

            <ScreenshotPlaceholder
              label="Screenshot: Visa issuance notice display screen"
              note="Shows the portal screen where you select the applicant and click 'Visa issuance notice (to display)'"
            />
          </section>

          {/* ── Section 7: Tips ── */}
          <section className="space-y-5">
            <h2 className="font-serif text-3xl font-semibold text-[var(--text)]">
              Things I wish someone had told me
            </h2>
            <div className="space-y-3">
              {[
                {
                  tip: "Apply within 3 months of your travel date",
                  detail: "Single-entry visas are valid for 3 months from issuance. Apply too early and your visa could expire before your trip. Apply too close and you risk not having it in time.",
                },
                {
                  tip: "Your day-by-day itinerary must match your flights exactly",
                  detail: "This is the most common rejection reason. Day 1 should be your arrival date in Japan (not your departure from the US). Your last day should be your departure date from Japan.",
                },
                {
                  tip: "The fee notice date is given to you in advance",
                  detail: "Our email told us on Mar 16 to expect the fee notice on Mar 23. That date was accurate. The visa was issued within 24 hours of payment - exactly as described.",
                },
                {
                  tip: "Don't call or email asking for status updates",
                  detail: "The consulate explicitly asks you not to. The email tells you what to expect and when. Trust the process - they're faster than their communication style suggests.",
                },
                {
                  tip: "Add the family member during your application - not after",
                  detail: "The 'Add family member' option appears at the end of your own application form. If you miss it, you have to delete and restart. There's no way to add it post-submission.",
                },
                {
                  tip: "For future Japan trips, reapplying is easy",
                  detail: "The whole process is online and took about 12 days for us. Since single-entry is cheap (~$6) and fully digital, there's no reason to stress about multiple-entry unless you're doing frequent back-and-forth trips.",
                },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 rounded-xl border border-[var(--border)] bg-[var(--surface)] px-5 py-4">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-teal-600" />
                  <div>
                    <p className="font-medium text-[var(--text)] text-sm">{item.tip}</p>
                    <p className="mt-1 text-sm leading-7 text-neutral-600">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── Useful links ── */}
          <section className="rounded-2xl border border-[var(--border)] bg-[var(--card)] px-8 py-8">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-[var(--accent)] mb-4">
              Useful links
            </p>
            <div className="space-y-3">
              {[
                { label: "Japan eVisa application portal", href: "https://www.evisa.mofa.go.jp/personal/login" },
                { label: "SF Consulate visa information page", href: "https://www.sf.us.emb-japan.go.jp/itpr_en/visa_travel.html" },
                { label: "Official document checklist (PDF)", href: "https://www.sf.us.emb-japan.go.jp/files/100856758.pdf" },
                { label: "How to display visa issuance notice (PDF)", href: "https://www.evisa.mofa.go.jp/pdf/visa_issuance_notice_for_a_proxy_en.pdf" },
                { label: "Authorization letter template (Google Doc)", href: "https://docs.google.com/document/d/147rJ2iSHmJ4y7k0Wnht4C4YpUv0SSjh7/copy" },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between rounded-lg border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-sm font-medium text-teal-700 hover:border-teal-400 transition-colors"
                >
                  {link.label}
                  <span className="ml-2 flex-shrink-0">↗</span>
                </a>
              ))}
            </div>
          </section>

        </div>

        {/* ── Closing ── */}
        <section className="mt-16 border-t border-[var(--border)] pt-10">
          <div className="max-w-3xl space-y-5 font-serif text-xl italic leading-relaxed text-[#554a43]">
            <p>
              The Japan eVisa process is genuinely fast and straightforward once
              you know what to prepare. The rejection stung a little - but getting
              a same-day response with a clear reason is honestly better than
              weeks of silence. Fix the itinerary, reapply, done.
            </p>
            <p>Safe travels ✈️</p>
            <p>- Dee</p>
          </div>
        </section>

      </main>
    </PageShell>
  );
}

// ── Screenshot placeholder component ─────────────────────────────────────────
function ScreenshotPlaceholder({ label, note }: { label: string; note?: string }) {
  return (
    <div className="rounded-xl border-2 border-dashed border-[var(--border)] bg-[var(--surface)] px-5 py-6 text-center">
      <p className="text-sm font-medium text-[var(--muted)]">📸 {label}</p>
      {note && <p className="mt-1 text-xs text-[var(--muted)] italic">{note}</p>}
      {/* Replace this component with:
          <img src="/images/japan-visa/YOUR-FILENAME.png"
               alt="DESCRIPTION"
               className="rounded-lg w-full max-w-sm mx-auto mt-3" />
      */}
    </div>
  );
}

// ── Note box ──────────────────────────────────────────────────────────────────
function NoteBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-r-xl border-l-4 border-amber-700 bg-[#efe7df] px-5 py-4 text-base leading-7 text-[#5b4031]">
      {children}
    </div>
  );
}