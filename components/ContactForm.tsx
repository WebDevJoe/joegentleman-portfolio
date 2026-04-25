"use client";

import { PrimaryButton } from "./Buttons";
import { ScrollReveal } from "./ScrollReveal";

export function ContactForm() {
  return (
    <section
      id="contact"
      className="relative w-full px-4 py-12 md:hidden overflow-hidden"
    >
      {/* radial blue glow behind the form, masked to the bottom-right */}
      <div
        aria-hidden
        className="pointer-events-none absolute right-[-100px] top-1/2 -translate-y-1/2 h-[310px] w-[310px] rounded-full opacity-60"
        style={{
          background:
            "radial-gradient(circle at center, #0072d0 0%, #f1f9ff 100%)",
          maskImage: "radial-gradient(circle at center, black 30%, transparent 70%)",
          WebkitMaskImage:
            "radial-gradient(circle at center, black 30%, transparent 70%)",
        }}
      />
      <ScrollReveal stagger={0.15} className="relative flex flex-col items-center gap-10">
        <div className="flex flex-col items-center gap-4 text-center text-ink">
          <h2 className="text-[48px] font-medium leading-[0.95] tracking-[-1.44px]">
            Contact Me
          </h2>
          <p className="text-[18px] font-normal leading-[0.95] tracking-[-0.54px]">
            I don&apos;t bite. Say hello.
          </p>
        </div>

        <form
          className="flex w-full flex-col gap-4"
          onSubmit={(e) => {
            e.preventDefault();
            alert("Thanks! I'll be in touch.");
          }}
        >
          <div className="flex flex-col gap-5">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              required
              className="w-full rounded-[16px] border border-black/10 bg-white px-6 py-[14px] text-[16px] font-medium tracking-[-0.32px] text-ink placeholder:text-[#acacac] outline-none focus:border-brand transition"
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              required
              className="w-full rounded-[16px] border border-black/10 bg-white px-6 py-[14px] text-[16px] font-medium tracking-[-0.32px] text-ink placeholder:text-[#acacac] outline-none focus:border-brand transition"
            />
          </div>
          <textarea
            name="message"
            placeholder="Write your Message"
            required
            className="w-full h-[146px] rounded-[16px] border border-black/10 bg-white px-6 py-[14px] text-[16px] font-medium tracking-[-0.32px] text-ink placeholder:text-[#acacac] outline-none focus:border-brand transition resize-none"
          />
          <PrimaryButton type="submit" className="w-full">
            Send Message
          </PrimaryButton>
        </form>
      </ScrollReveal>
    </section>
  );
}
