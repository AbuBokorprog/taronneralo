"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "হোম", href: "/" },
  { name: "আমাদের সম্পর্কে", href: "/about" },
  { name: "কার্যক্রম", href: "/activities" },
  { name: "গ্যালারি", href: "/gallery" },
  { name: "যোগাযোগ", href: "/contact" },
];

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="sticky top-0 z-50 w-full bg-white shadow-sm"
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        {/* Logo + Name */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo/taronneralo-logo.png"
            alt="তারুণ্যের আলো সংগঠন লোগো"
            width={48}
            height={48}
            priority
          />
          <span className="text-lg font-bold tracking-wide text-green-700">
            তারুণ্যের আলো সংগঠন
          </span>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden items-center gap-6 text-sm font-medium md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="relative text-gray-700 transition hover:text-green-600
                after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0
                after:bg-gradient-to-r after:from-emerald-500 after:to-teal-500
                after:transition-all hover:after:w-full"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <Button
          asChild
          className="bg-linear-to-r from-emerald-500 to-teal-500 text-white hover:opacity-90"
        >
          <Link href="/join-us">যুক্ত হোন</Link>
        </Button>
      </nav>
    </motion.header>
  );
}
