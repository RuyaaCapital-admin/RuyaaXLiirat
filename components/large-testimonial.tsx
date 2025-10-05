import Image from "next/image";
import TestimonialImg from "@/public/images/large-testimonial.jpg";

export default function LargeTestimonial() {
  return (
    <section dir="rtl">
      <div className="mx-auto max-w-2xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          <div className="space-y-3 text-center">
            <div className="relative inline-flex">
              {/* ...existing svg and image code... */}
            </div>
            <p className="text-2xl font-bold text-gray-900">
              "RxL غيرت تجربتي في التداول بالكامل. من الاستراتيجيات الآلية إلى التحليلات الذكية، أصبحت منصتي الأساسية لتداول MT5 والذكاء الاصطناعي."
            </p>
            <div className="text-sm font-medium text-gray-500">
              <span className="text-gray-700">مريم سليمان</span>{" "}
              <span className="text-gray-400">/</span>{" "}
              <a className="text-blue-500" href="#0">
                الرئيس التقني في مايكروسوفت
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
