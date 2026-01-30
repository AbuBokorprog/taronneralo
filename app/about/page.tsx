import About from "@/components/sections/About";

export const metadata = {
  title: "আমাদের সম্পর্কে | তারুণ্যের আলো সংগঠন",
  description:
    "তারুণ্যের আলো সংগঠন একটি স্বেচ্ছাসেবী সামাজিক সংগঠন যা মানবতার কল্যাণে কাজ করে।",
};

export default function AboutPage() {
  return (
    <section className=" ">
      <About />
      <div className="mx-auto max-w-4xl px-4 pb-24">
        <p className="mb-6 text-lg leading-relaxed text-gray-700">
          <strong>তারুণ্যের আলো সংগঠন</strong> একটি অরাজনৈতিক ও অলাভজনক
          স্বেচ্ছাসেবী সামাজিক সংগঠন। আমাদের লক্ষ্য হলো গরিব, অসহায় ও দুঃস্থ
          মানুষের পাশে দাঁড়িয়ে সমাজে ইতিবাচক পরিবর্তন আনা।
        </p>

        <p className="text-lg leading-relaxed text-gray-700">
          আমরা বিশ্বাস করি—মানবতার সবচেয়ে বড় শক্তি হলো সম্মিলিত উদ্যোগ। তরুণদের
          শক্তিকে কাজে লাগিয়ে শিক্ষা, স্বাস্থ্য, খাদ্য সহায়তা ও সামাজিক
          উন্নয়নমূলক কর্মকাণ্ড পরিচালনা করাই আমাদের মূল উদ্দেশ্য।
        </p>
      </div>
    </section>
  );
}
