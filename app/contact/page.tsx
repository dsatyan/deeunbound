"use client";

import Image from "next/image";
import { useState } from "react";
import { photoUrl } from "@/lib/photo-url";

type FormState = "idle" | "submitting" | "success" | "error";

export default function ContactPage() {
  const [state, setState] = useState<FormState>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("submitting");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = {
      access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? "",
      first_name: (form.elements.namedItem("first_name") as HTMLInputElement).value,
      last_name:  (form.elements.namedItem("last_name")  as HTMLInputElement).value,
      email:      (form.elements.namedItem("email")      as HTMLInputElement).value,
      subject:    (form.elements.namedItem("subject")    as HTMLInputElement).value,
      message:    (form.elements.namedItem("message")    as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (json.success) {
        setState("success");
        form.reset();
      } else {
        throw new Error(json.message ?? "Submission failed");
      }
    } catch (err: unknown) {
      setState("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    }
  }

  // Portrait dimensions:
  // Width: 300px, Height: 420px
  // Starts at top of hero (top: 0 on the strip, which is pushed up via negative margin)
  // Half in hero (210px), half below (210px)
  // Left offset: ~15% of page width to feel centre-left like the reference

  return (
    <main>

      {/* ── Full-width hero — no overflow hidden so portrait can start here ── */}
      <section className="relative h-[320px] w-full md:h-[380px]">
        <Image
          src={photoUrl("travel/southkorea/Korean_house", "w_1600,h_900,c_fill,q_auto,f_auto")}
          alt="Machu Picchu"
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-black/30" />

        {/* Text — right portion, vertically centred */}
        <div className="absolute inset-y-0 z-10 flex flex-col justify-center px-10 md:px-14"
          style={{ left: "42%" }}>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-white/70">
            一期一会 (Ichigo Ichie) — One time, one meeting.
          </p>
          <h2 className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-white/70">
            Every encounter is unique and never repeats.
          </h2>
        </div>
      </section>

      {/* ── Portrait + info strip ──
          Portrait: 300×460px. Starts at very top of hero via negative margin-top on wrapper.
          The strip itself provides the white background and info rows. ── */}
      <section className="relative border-b border-[var(--border)] bg-[var(--bg)]">

        {/* Portrait wrapper — pulled up by half its height so it straddles the boundary.
            left: ~12% to mirror the reference (centre-left, not flush to edge) */}
        <div
          className="absolute z-20 overflow-hidden rounded-sm shadow-2xl"
          style={{
            top: "-230px",   /* pulls portrait up so top half sits in hero */
            left: "12%",
            width: "300px",
            height: "460px",
            //border: "3px solid var(--bg)",
          }}
        >
          <Image
            src={photoUrl("travel/greece/Acropolis_Dee_sitting", "w_600,h_920,c_fill,q_auto,f_auto")}
            alt="Dee with a llama in Peru"
            fill
            className="object-cover"
            sizes="300px"
          />
        </div>

        {/* Info area — sits to the right of the portrait.
            left margin = portrait-left(12%) + portrait-width(300px) + gap(40px)
            We use padding-left as a percentage + fixed offset via calc */}
        <div
          className="py-8 pr-10 md:py-10 md:pr-16"
          style={{ paddingLeft: "calc(12% + 340px)" }}
        >
          <hr className="mb-6 border-[var(--border)]" />
          <div className="flex items-baseline border-b border-[var(--border)] py-4">
            <span className="w-28 shrink-0 text-[10px] font-semibold uppercase tracking-[0.14em] text-[var(--muted)]">
              Email
            </span>
            <a
              href="mailto:hello@deeunbound.com"
              className="text-sm text-[var(--text)] transition-colors hover:text-[var(--accent)]"
            >
              hello@deeunbound.com
            </a>
          </div>
          <div className="flex items-baseline py-4">
            <span className="w-28 shrink-0 text-[10px] font-semibold uppercase tracking-[0.14em] text-[var(--muted)]">
              Location
            </span>
            <span className="text-sm text-[var(--text)]">Based in Fremont, California</span>
          </div>
          {/* Spacer so the strip is tall enough for the portrait bottom (230px below fold) */}
          <div style={{ minHeight: "160px" }} />
        </div>
      </section>

      {/* ── Centred form section ── */}
      <section className="px-6 py-16 text-center md:py-24">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
          Get in touch
        </p>
        <h2 className="font-editorial text-4xl font-semibold text-[var(--text)] md:text-5xl">
          Say hello.
        </h2>
        <p className="mx-auto mt-4 max-w-md text-base leading-7 text-[var(--muted)]">
          Whether you have a question, a collaboration idea, or just want to
          talk plants and travel — I'd love to hear from you.
        </p>

        <hr className="mx-auto my-10 max-w-xl border-[var(--border)]" />

        {state === "success" ? (
          <div className="mx-auto max-w-md rounded-[20px] border border-[var(--border)] bg-[var(--card)] px-8 py-12">
            <p className="font-editorial text-2xl font-semibold text-[var(--text)]">
              Message sent!
            </p>
            <p className="mt-3 text-sm text-[var(--muted)]">
              Thanks for reaching out. I typically reply within 2–3 days.
            </p>
            <button
              onClick={() => setState("idle")}
              className="mt-6 rounded-full border border-[var(--border)] px-6 py-2.5 text-sm text-[var(--muted)] transition hover:border-[var(--text)] hover:text-[var(--text)]"
            >
              Send another message
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mx-auto max-w-xl text-left" noValidate>
            <div className="mb-4 grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label htmlFor="first_name" className="text-sm text-[var(--text)]">First name</label>
                <input
                  id="first_name" name="first_name" type="text" required
                  placeholder="First name"
                  className="rounded-xl border border-[var(--border)] bg-white px-4 py-3 text-sm text-[var(--text)] placeholder:text-[var(--muted)] transition-colors focus:border-[var(--accent)] focus:outline-none"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="last_name" className="text-sm text-[var(--text)]">Last name</label>
                <input
                  id="last_name" name="last_name" type="text" required
                  placeholder="Last name"
                  className="rounded-xl border border-[var(--border)] bg-white px-4 py-3 text-sm text-[var(--text)] placeholder:text-[var(--muted)] transition-colors focus:border-[var(--accent)] focus:outline-none"
                />
              </div>
            </div>

            <div className="mb-4 flex flex-col gap-1.5">
              <label htmlFor="email" className="text-sm text-[var(--text)]">Email</label>
              <input
                id="email" name="email" type="email" required
                placeholder="your@email.com"
                className="rounded-xl border border-[var(--border)] bg-white px-4 py-3 text-sm text-[var(--text)] placeholder:text-[var(--muted)] transition-colors focus:border-[var(--accent)] focus:outline-none"
              />
            </div>

            <div className="mb-4 flex flex-col gap-1.5">
              <label htmlFor="subject" className="text-sm text-[var(--text)]">Subject</label>
              <input
                id="subject" name="subject" type="text" required
                placeholder="What's this about?"
                className="rounded-xl border border-[var(--border)] bg-white px-4 py-3 text-sm text-[var(--text)] placeholder:text-[var(--muted)] transition-colors focus:border-[var(--accent)] focus:outline-none"
              />
            </div>

            <div className="mb-6 flex flex-col gap-1.5">
              <label htmlFor="message" className="text-sm text-[var(--text)]">Message</label>
              <textarea
                id="message" name="message" required rows={6}
                placeholder="Your message..."
                className="resize-none rounded-xl border border-[var(--border)] bg-white px-4 py-3 text-sm text-[var(--text)] placeholder:text-[var(--muted)] transition-colors focus:border-[var(--accent)] focus:outline-none"
              />
            </div>

            {state === "error" && (
              <p className="mb-4 rounded-xl bg-red-50 px-4 py-3 text-sm text-red-600">
                {errorMsg}
              </p>
            )}

            <button
              type="submit"
              disabled={state === "submitting"}
              className="w-full rounded-full bg-[var(--text)] py-4 text-sm font-medium text-[var(--bg)] transition hover:opacity-80 disabled:opacity-50"
            >
              {state === "submitting" ? "Sending…" : "Send message"}
            </button>

            <p className="mt-4 text-center text-xs text-[var(--muted)]">
              I typically reply within 2–3 days.
            </p>
          </form>
        )}
      </section>

    </main>
  );
}