"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative h-screen w-full text-white">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/images/470644550_122129524898467456_183228950208120216_n.jpg')",
        }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-linear-to-br from-emerald-600/60 via-green-600/50 to-teal-600/60 backdrop-blur-sm" />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-4 text-center">
        {/* Main Heading (SEO H1) */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6 text-4xl font-extrabold leading-tight md:text-6xl"
        >
          তারুণ্যের আলো সংগঠন
        </motion.h1>

        {/* Sub heading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mb-8 max-w-3xl text-lg leading-relaxed text-white/95 md:text-xl"
        >
          গরিব, অসহায় ও দুঃস্থ মানুষের পাশে দাঁড়িয়ে গ্রাম, সমাজ ও রাষ্ট্রের
          কল্যাণে কাজ করা একটি স্বেচ্ছাসেবী সামাজিক সংগঠন
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="flex flex-col gap-4 sm:flex-row"
        >
          <Button
            size="lg"
            className="bg-white px-8 text-green-700 hover:bg-gray-100"
          >
            আমাদের সম্পর্কে জানুন
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="border-white px-8 hover:bg-white text-green-700"
          >
            যুক্ত হোন
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
