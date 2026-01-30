/* eslint-disable react/no-unescaped-entities */
"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function DonatePage() {
  return (
    <section className="py-24 bg-linear-to-br from-emerald-50 via-green-50 to-teal-50 min-h-screen">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h2 className="mb-6 text-3xl font-bold text-green-700">
          সহযোগিতা করুন
        </h2>

        <p className="mb-10 text-gray-700">
          আপনার দান আমাদের গরিব ও অসহায় মানুষের পাশে দাঁড়াতে সাহায্য করবে। নিচের
          মাধ্যমে সহজেই টাকা পাঠাতে পারেন:
        </p>

        <div className="space-y-6">
          {/* Bkash */}
          <div className="rounded-xl bg-white p-6 shadow-md hover:shadow-lg transition">
            <h3 className="font-semibold text-green-700 mb-2">Bkash</h3>
            <p className="text-gray-700">
              01XXXXXXXXX নাম্বারে টাকা পাঠাতে পারেন। Transaction message এ
              লিখুন: <strong>"সহযোগিতা"</strong>
            </p>
          </div>

          {/* Nagad */}
          <div className="rounded-xl bg-white p-6 shadow-md hover:shadow-lg transition">
            <h3 className="font-semibold text-green-700 mb-2">Nagad</h3>
            <p className="text-gray-700">
              01XXXXXXXXX নাম্বারে টাকা পাঠাতে পারেন। Transaction message এ
              লিখুন: <strong>"সহযোগিতা"</strong>
            </p>
          </div>
        </div>

        <div className="mt-10">
          <Link href="mailto:tarunneralo@gmail.com">
            <Button className="bg-green-600 text-white hover:bg-green-700">
              আরও তথ্যের জন্য যোগাযোগ করুন
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
