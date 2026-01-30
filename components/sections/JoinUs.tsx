"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";

export default function JoinUs() {
  return (
    <section className="relative overflow-hidden bg-linear-to-br from-emerald-50 via-green-50 to-teal-50 py-24">
      {/* Decorative blur */}
      <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-green-200/20 blur-3xl" />
      <div className="absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-teal-200/10 blur-3xl" />

      <div className="relative mx-auto max-w-4xl px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="rounded-3xl bg-white/20 p-10 backdrop-blur-md shadow-xl"
        >
          <h2 className="mb-4 text-3xl font-extrabold text-green-700 md:text-4xl">
            যুক্ত হন / স্বেচ্ছাসেবক হোন
          </h2>

          <p className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-gray-700/90">
            মানবতার পথে একা চলা কঠিন, কিন্তু একসাথে হলে পরিবর্তন সম্ভব। আপনিও
            পারেন কারো জীবনে আলোর কারণ হতে।
          </p>

          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link href="/join-us">
              <Button
                size="lg"
                className="rounded-full bg-green-600 px-10 text-white shadow-lg hover:bg-green-700"
              >
                স্বেচ্ছাসেবক হিসেবে যুক্ত হোন
              </Button>
            </Link>

            <Link href="/donate">
              <Button
                size="lg"
                variant="outline"
                className="rounded-full border-green-600 px-10 text-green-600 hover:bg-green-600 hover:text-white transition"
              >
                সহযোগিতা করুন
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
