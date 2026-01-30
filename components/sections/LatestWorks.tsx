import { Card, CardContent } from "@/components/ui/card";

const WORKS = [
  {
    title: "শুশুন্ডা দক্ষিণ পাড়া কেন্দ্রীয় কবরস্থানে রাস্তা নির্মাণ কার্যক্রম",
    desc: "ইনশাআল্লাহ খুব শীঘ্রই শুশুন্ডা দক্ষিণ পাড়া কেন্দ্রীয় কবরস্থানে যাতায়াতের সুবিধার্থে মাদ্রাসার পেছন দিক থেকে কবরস্থান পর্যন্ত রাস্তা নির্মাণ কাজ শুরু হতে যাচ্ছে। এই উদ্যোগ কবরস্থানে আগত মানুষের দুর্ভোগ কমাতে গুরুত্বপূর্ণ ভূমিকা রাখবে।",
    img: "/images/615218078_122179058162467456_2660336103897147135_n.jpg",
    date: "২০২৫-১২-২০",
  },
  {
    title: "শুশুন্ডা কেন্দ্রীয় কবরস্থানে আলোকায়ন প্রকল্প",
    desc: "শুশুন্ডা কেন্দ্রীয় কবরস্থানে পর্যাপ্ত আলোর ব্যবস্থা করে রাতে আগত মানুষের চলাচল নিরাপদ ও সহজ করার জন্য আলোকায়ন কার্যক্রম বাস্তবায়ন করা হয়েছে।",
    img: "/images/623556047_122180653004467456_7727291716281480619_n.jpg",
    date: "২০২৫-১২-১০",
  },
  {
    title: "অসহায় পরিবারের জন্য ঘর নির্মাণ",
    desc: "বাসস্থানহীন ও অসহায় পরিবারের জন্য নিরাপদ আশ্রয় নিশ্চিত করতে স্বেচ্ছাশ্রম ও সহায়তার মাধ্যমে ঘর নির্মাণ কার্যক্রম পরিচালনা করা হয়েছে।",
    img: "/images/611557818_122178539540467456_8004874585640716286_n.jpg",
    date: "২০২৫-১১-০১",
  },
  {
    title: "বন্যাকবলিত মানুষের মাঝে খাদ্য সহায়তা",
    desc: "প্রাকৃতিক দুর্যোগে ক্ষতিগ্রস্ত বন্যাকবলিত মানুষের মাঝে জরুরি খাদ্য সামগ্রী বিতরণ করে মানবিক সহায়তা প্রদান করা হয়েছে।",
    img: "/images/470682806_122129524910467456_84989243597843695_n.jpg",
    date: "২০২৫-১০-১৫",
  },
];

export default function LatestWorks() {
  return (
    <section id="latest-works" className="py-20 bg-white">
      <div className="mx-auto max-w-6xl px-4 text-center">
        <h2 className="mb-4 text-3xl font-bold text-green-700">
          সাম্প্রতিক কার্যক্রম
        </h2>
        <p className="mb-8 text-gray-600">
          সম্প্রতি আমরা যে কাজগুলো সম্পন্ন করেছি তাদের সারসংক্ষেপ।
        </p>

        <div className="grid gap-6 md:grid-cols-3">
          {WORKS.map((w) => (
            <Card key={w.title}>
              <div className="overflow-hidden rounded-t-xl">
                <img
                  src={w.img}
                  alt={w.title}
                  className="h-40 w-full object-cover"
                />
              </div>
              <CardContent className="p-6 text-left">
                <h3 className="font-semibold mb-2">{w.title}</h3>
                <p className="text-sm text-gray-600 mb-4">{w.desc}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">{w.date}</span>
                  {/* <a href="#" className="text-sm text-green-700 font-medium">
                    বিস্তারিত
                  </a> */}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
