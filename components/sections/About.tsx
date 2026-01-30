import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="mx-auto max-w-6xl px-4 text-center">
        <h2 className="mb-4 text-3xl font-bold text-green-700">আমাদের পরিচয়</h2>

        <p className="mx-auto max-w-3xl text-gray-600 leading-relaxed">
          তারুণ্যের আলো সংগঠন একটি স্বেচ্ছাসেবী সামাজিক সংগঠন, যা গরিব, অসহায় ও
          দুঃস্থ মানুষের পাশে দাঁড়িয়ে মানবিক সহায়তা প্রদান করে। আমরা বিশ্বাস
          করি—তারুণ্যের শক্তিই পারে সমাজে ইতিবাচক পরিবর্তন আনতে।
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <Card>
            <CardContent className="p-6">
              <h3 className="font-semibold mb-2">মানবিক মূল্যবোধ</h3>
              <p className="text-sm text-gray-600">
                মানুষের প্রতি ভালোবাসা ও সহানুভূতিই আমাদের কাজের মূল প্রেরণা।
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="font-semibold mb-2">তারুণ্যের শক্তি</h3>
              <p className="text-sm text-gray-600">
                তরুণদের অংশগ্রহণের মাধ্যমে সমাজ পরিবর্তনের লক্ষ্য নিয়ে এগিয়ে
                চলি।
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="font-semibold mb-2">সামাজিক দায়বদ্ধতা</h3>
              <p className="text-sm text-gray-600">
                সমাজ ও রাষ্ট্রের কল্যাণে কাজ করাই আমাদের দায়িত্ব।
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
