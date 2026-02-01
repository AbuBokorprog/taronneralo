import Image from "next/image";
import Link from "next/link";
import { Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-linear-to-r from-emerald-600 via-green-600 to-teal-600 text-white">
      <div className="mx-auto max-w-7xl px-4 py-10">
        <div className="grid gap-8 md:grid-cols-3">
          {/* About */}
          <div className="max-w-sm">
            <div className="mb-4 flex items-center gap-2">
              <Image
                src="/logo/taronneralo-logo-white.png"
                alt="তারুণ্যের আলো সংগঠন"
                width={100}
                height={100}
                className="rounded-full"
              />
              <h3 className="text-lg font-semibold">তারুণ্যের আলো সংগঠন</h3>
            </div>

            <p className="text-sm leading-relaxed text-white/90">
              আমরা একটি স্বেচ্ছাসেবী সামাজিক সংগঠন। গরিব, অসহায় ও দুঃস্থ মানুষের
              পাশে দাঁড়ানোই আমাদের প্রধান লক্ষ্য।
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:pl-8">
            <h4 className="mb-4 font-semibold">দ্রুত লিংক</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/about" className="hover:underline">
                  আমাদের সম্পর্কে
                </Link>
              </li>
              <li>
                <Link href="/activities" className="hover:underline">
                  আমাদের কার্যক্রম
                </Link>
              </li>
              <li>
                <Link href="/join-us" className="hover:underline">
                  স্বেচ্ছাসেবক হোন
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:underline">
                  যোগাযোগ
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="md:pl-8">
            <h4 className="mb-4 font-semibold">যোগাযোগ</h4>
            <ul className="space-y-3 text-sm">
              <li>📞 +880 1822-813744</li>
              <li>📧 tarunneralo@gmail.com</li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 border-t border-white/30 pt-4 text-center text-sm">
          <p className="flex flex-wrap items-center justify-center gap-1 text-white/90">
            মানবতার জন্য তৈরি
            <Heart className="h-4 w-4 text-red-300" />©{" "}
            {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
}
