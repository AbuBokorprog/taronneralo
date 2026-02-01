"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "হোম", href: "/" },
  { name: "আমাদের সম্পর্কে", href: "/about" },
  { name: "কার্যক্রম", href: "/activities" },
  { name: "গ্যালারি", href: "/gallery" },
  { name: "যোগাযোগ", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="sticky top-0 z-50 w-full bg-white shadow-sm"
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo/taronneralo-logo.png"
            alt="তারুণ্যের আলো সংগঠন লোগো"
            width={80}
            height={80}
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

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Button
            asChild
            className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white hover:opacity-90"
          >
            <Link href="/join-us">যুক্ত হোন</Link>
          </Button>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-green-700"
          aria-label="Toggle menu"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white shadow-inner"
          >
            <ul className="flex flex-col gap-4 px-6 py-6 text-sm font-medium">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block text-gray-700 hover:text-green-600"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}

              <Button
                asChild
                className="mt-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white"
              >
                <Link href="/join-us" onClick={() => setOpen(false)}>
                  যুক্ত হোন
                </Link>
              </Button>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
