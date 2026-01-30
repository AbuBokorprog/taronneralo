export default function Impact() {
  return (
    <section className="py-20 bg-linear-to-r from-green-600 to-emerald-600 text-white">
      <div className="mx-auto max-w-6xl px-4 text-center">
        <h2 className="mb-10 text-3xl font-bold">আমাদের প্রভাব</h2>

        <div className="grid gap-6 md:grid-cols-4">
          {[
            { value: "৫+", label: "পরিবার সহায়তা" },
            { value: "10+", label: "গ্রামে কার্যক্রম" },
            { value: "৩০+", label: "শিশু শিক্ষা সহায়তা" },
            { value: "১5+", label: "স্বেচ্ছাসেবক" },
          ].map((item) => (
            <div key={item.label}>
              <p className="text-4xl font-extrabold">{item.value}</p>
              <p className="mt-2 text-sm">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
