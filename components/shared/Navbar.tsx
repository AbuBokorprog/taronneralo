"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="sticky top-0 z-50 w-full bg-gradient-to-r from-emerald-500 via-green-500 to-teal-500"
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 text-white">
        {/* Logo / Name */}
        <Link href="/" className="text-xl font-bold tracking-wide">
          তারুণ্যের আলো সংগঠন
        </Link>

        {/* Menu */}
        <ul className="hidden md:flex items-center gap-6 text-sm font-medium">
          <li>
            <Link href="#about" className="hover:underline">
              আমাদের সম্পর্কে
            </Link>
          </li>
          <li>
            <Link href="#mission" className="hover:underline">
              লক্ষ্য ও উদ্দেশ্য
            </Link>
          </li>
          <li>
            <Link href="#activities" className="hover:underline">
              কার্যক্রম
            </Link>
          </li>
          <li>
            <Link href="#contact" className="hover:underline">
              যোগাযোগ
            </Link>
          </li>
        </ul>

        {/* CTA */}
        <Button
          variant="secondary"
          className="bg-white text-green-700 hover:bg-gray-100"
        >
          যুক্ত হোন
        </Button>
      </nav>
    </motion.header>
  );
}
