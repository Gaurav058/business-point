"use client";

import { useState } from "react";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (email.trim()) setSubmitted(true);
  }

  if (submitted) {
    return (
      <p className="mt-6 text-sm font-medium text-emerald-400">
        You are on the list. Welcome to the community!
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-3 sm:flex-row">
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email address"
        className="flex-1 rounded-full border border-[#1F2933] bg-[#0B0F14] px-5 py-2.5 text-sm text-[#E6EDF3] placeholder:text-slate-500 transition-colors focus:border-blue-500 focus:outline-none"
      />
      <button
        type="submit"
        className="rounded-full bg-blue-500 px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-blue-400"
      >
        Subscribe
      </button>
    </form>
  );
}