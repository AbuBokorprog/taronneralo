import { Button } from "@/components/ui/button";

export default function JoinUs() {
  return (
    <section className="py-20 bg-white text-center">
      <h2 className="mb-4 text-3xl font-bold text-green-700">
        যুক্ত হন / স্বেচ্ছাসেবক হোন
      </h2>

      <p className="mx-auto mb-8 max-w-2xl text-gray-600">
        আপনিও পারেন মানুষের মুখে হাসি ফোটাতে। স্বেচ্ছাসেবক হিসেবে যুক্ত হয়ে
        মানবতার এই যাত্রায় অংশ নিন।
      </p>

      <Button size="lg" className="bg-green-600 hover:bg-green-700">
        আমাদের সাথে যুক্ত হোন
      </Button>
    </section>
  );
}
