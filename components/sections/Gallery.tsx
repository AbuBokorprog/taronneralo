"use client";
import React, { useState } from "react";

const IMAGES = [
  "/images/622051216_122180652986467456_5990037848086509897_n.jpg",
  "/images/622426683_122180653028467456_537268860645468008_n.jpg",
  "/images/608850982_122178539456467456_6162461800726956136_n.jpg",
  "/images/611557818_122178539540467456_8004874585640716286_n.jpg",
  "/images/612227813_122178539498467456_3417251234705565118_n.jpg",
  "/images/504864234_122154595256467456_8364398405859452352_n.jpg",
  "/images/504912307_122154595322467456_8264262804280324161_n.jpg",
  "/images/470545098_122129524760467456_1833917588387483061_n.jpg",
  "/images/470644550_122129524898467456_183228950208120216_n.jpg",
  "/images/470682806_122129524910467456_84989243597843695_n.jpg",
];

export default function Gallery() {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="mb-4 text-center text-3xl font-bold text-green-700">
          আমাদের কাজের মুহূর্তসমূহ
        </h2>

        <p className="mb-8 text-center text-gray-600">
          আমাদের স্বেচ্ছাসেবক ও মাঠকর্মীদের কিছু দৃশ্য।
        </p>

        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {IMAGES.map((src) => (
            <button
              key={src}
              onClick={() => setSelected(src)}
              className="overflow-hidden rounded-lg bg-white shadow-sm p-0"
            >
              <img
                src={src}
                alt="তারুণ্যের আলো — কাজের ছবি"
                className="h-48 w-full object-cover transition-transform hover:scale-105"
              />
            </button>
          ))}
        </div>

        {selected && (
          <div
            role="dialog"
            aria-modal="true"
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
            onClick={() => setSelected(null)}
          >
            <img
              src={selected}
              alt="বড় ক্যানভাস"
              className="max-h-[90vh] max-w-[90vw] rounded-lg shadow-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        )}
      </div>
    </section>
  );
}
