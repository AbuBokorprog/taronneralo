export default function Mission() {
  return (
    <section
      id="mission"
      className="py-20 bg-gradient-to-r from-emerald-50 to-green-50"
    >
      <div className="mx-auto max-w-6xl px-4 text-center">
        <h2 className="mb-4 text-3xl font-bold text-green-700">
          আমাদের মূল লক্ষ্য
        </h2>

        <p className="mb-10 text-gray-600">
          আমরা যে লক্ষ্যগুলো নিয়ে নিরলসভাবে কাজ করছি
        </p>

        <div className="grid gap-6 md:grid-cols-4">
          {[
            "গরিব ও অসহায় মানুষের সহায়তা",
            "দুঃস্থ মানুষের পাশে দাঁড়ানো",
            "গ্রামীণ উন্নয়ন ও সচেতনতা",
            "মানবিক ও নৈতিক মূল্যবোধ গড়ে তোলা",
          ].map((item) => (
            <div
              key={item}
              className="rounded-xl bg-white p-6 shadow hover:shadow-md transition"
            >
              <p className="font-medium text-gray-700">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
