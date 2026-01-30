export default function Activities() {
  return (
    <section id="activities" className="py-20 bg-white">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="mb-4 text-center text-3xl font-bold text-green-700">
          আমরা কীভাবে কাজ করি
        </h2>

        <p className="mb-10 text-center text-gray-600">
          সরাসরি মানুষের কাছে পৌঁছে সহায়তা প্রদান করি
        </p>

        <div className="grid gap-6 md:grid-cols-3">
          {[
            "শীতবস্ত্র ও খাদ্য বিতরণ",
            "চিকিৎসা ও জরুরি সহায়তা",
            "শিক্ষা উপকরণ বিতরণ",
            "দুর্যোগকালীন ত্রাণ কার্যক্রম",
            "সামাজিক সচেতনতা কার্যক্রম",
            "স্বেচ্ছাসেবক ভিত্তিক মানবিক কাজ",
          ].map((item) => (
            <div
              key={item}
              className="rounded-lg border p-6 hover:border-green-500 transition"
            >
              <p className="text-gray-700">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
