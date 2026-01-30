"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function JoinUsPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // For now we just log the data
    console.log("Form Submitted:", form);
    alert("ধন্যবাদ! আপনার তথ্য গ্রহণ করা হয়েছে।");
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section className="py-24 bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 min-h-screen flex items-center justify-center">
      <div className="w-full max-w-lg rounded-2xl bg-white p-10 shadow-xl">
        <h2 className="mb-6 text-3xl font-bold text-green-700 text-center">
          স্বেচ্ছাসেবক ফর্ম
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="আপনার নাম"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full rounded-lg border p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
          />

          <input
            type="email"
            name="email"
            placeholder="আপনার ইমেইল"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full rounded-lg border p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
          />

          <input
            type="tel"
            name="phone"
            placeholder="আপনার ফোন নম্বর"
            value={form.phone}
            onChange={handleChange}
            required
            className="w-full rounded-lg border p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
          />

          <textarea
            name="message"
            placeholder="আপনার বার্তা / অভিজ্ঞতা"
            value={form.message}
            onChange={handleChange}
            rows={4}
            className="w-full rounded-lg border p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
          />

          <Button
            type="submit"
            className="w-full bg-green-600 text-white hover:bg-green-700"
          >
            জমা দিন
          </Button>
        </form>
      </div>
    </section>
  );
}
