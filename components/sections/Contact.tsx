"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Phone, Facebook, Mail } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative py-24 bg-linear-to-tr from-emerald-50 via-green-50 to-teal-50"
    >
      <div className="mx-auto max-w-4xl px-6 text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-4 text-3xl font-bold text-green-700"
        >
          যোগাযোগ
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-12 text-gray-700"
        >
          আপনার একটি বার্তাই হতে পারে কারো বাঁচার আশা। আমাদের সাথে সহজেই যোগাযোগ
          করুন।
        </motion.p>

        {/* Contact Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          viewport={{ once: true }}
          className="grid gap-6 sm:grid-cols-3"
        >
          {/* Phone */}
          <div className="flex flex-col items-center rounded-2xl bg-white p-6 shadow-md hover:shadow-lg transition">
            <Phone className="mb-2 h-6 w-6 text-green-600" />
            <p className="text-sm font-semibold text-gray-700">ফোন</p>
            <p className="text-gray-600">+880 1822-813744</p>
          </div>

          {/* Email */}
          <div className="flex flex-col items-center rounded-2xl bg-white p-6 shadow-md hover:shadow-lg transition">
            <Mail className="mb-2 h-6 w-6 text-green-600" />
            <p className="text-sm font-semibold text-gray-700">ইমেইল</p>
            <p className="text-gray-600">tarunneralo@gmail.com</p>
          </div>

          {/* Facebook */}
          <Link
            href="https://web.facebook.com/tarunneralo44"
            target="_blank"
            className="flex flex-col items-center rounded-2xl bg-white p-6 shadow-md hover:shadow-lg transition"
          >
            <Facebook className="mb-2 h-6 w-6 text-green-600" />
            <p className="text-sm font-semibold text-gray-700">Facebook</p>
            <p className="text-gray-600">facebook.com/tarunneralo</p>
          </Link>
        </motion.div>

        {/* Optional CTA
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.7 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <Link href="mailto:tarunneralo@gmail.com">
            <button className="rounded-full bg-green-600 px-8 py-3 text-white font-semibold shadow-lg hover:bg-green-700 transition">
              এখনই যোগাযোগ করুন
            </button>
          </Link>
        </motion.div> */}
      </div>
    </section>
  );
}
