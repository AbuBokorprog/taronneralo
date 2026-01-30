import { Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-20 bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 text-white">
      <div className="mx-auto max-w-7xl px-4 py-10">
        <div className="grid gap-8 md:grid-cols-3">
          {/* About */}
          <div>
            <h3 className="text-lg font-semibold mb-3">তারুণ্যের আলো সংগঠন</h3>
            <p className="text-sm leading-relaxed text-white/90">
              আমরা একটি স্বেচ্ছাসেবী সামাজিক সংগঠন। গরিব, অসহায় ও দুঃস্থ মানুষের
              পাশে দাঁড়ানোই আমাদের প্রধান লক্ষ্য।
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-3 font-semibold">দ্রুত লিংক</h4>
            <ul className="space-y-2 text-sm">
              <li>আমাদের সম্পর্কে</li>
              <li>আমাদের কার্যক্রম</li>
              <li>স্বেচ্ছাসেবক হোন</li>
              <li>যোগাযোগ</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-3 font-semibold">যোগাযোগ</h4>
            <ul className="space-y-2 text-sm">
              <li>📍 বাংলাদেশ</li>
              <li>📞 ০১XXXXXXXXX</li>
              <li>📧 info@tarunneralo.org</li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 border-t border-white/30 pt-4 text-center text-sm">
          <p className="flex items-center justify-center gap-1">
            মানবতার জন্য তৈরি
            <Heart className="h-4 w-4 text-red-300" />©{" "}
            {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
}
