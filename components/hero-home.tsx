import Image from "next/image";
import PageIllustration from "@/components/page-illustration";
import Avatar01 from "@/public/images/avatar-01.jpg";
import Avatar02 from "@/public/images/avatar-02.jpg";
import Avatar03 from "@/public/images/avatar-03.jpg";
import Avatar04 from "@/public/images/avatar-04.jpg";
import Avatar05 from "@/public/images/avatar-05.jpg";
import Avatar06 from "@/public/images/avatar-06.jpg";

export default function HeroHome() {
  return (
    <section className="relative">
      <PageIllustration />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Hero content */}
        <div className="pb-12 pt-32 md:pb-20 md:pt-40">
          {/* Section header */}
          <div className="pb-12 text-center md:pb-16">
            <div
              className="mb-6 border-y [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-300/.8),transparent)1]"
              data-aos="zoom-y-out"
            >
              <div className="-mx-0.5 flex justify-center -space-x-3">
                <Image
                  className="box-content rounded-full border-2 border-gray-50"
                  src={Avatar01}
                  width={32}
                  height={32}
                  alt="Avatar 01"
                />
                <Image
                  className="box-content rounded-full border-2 border-gray-50"
                  src={Avatar02}
                  width={32}
                  height={32}
                  alt="Avatar 01"
                />
                <Image
                  className="box-content rounded-full border-2 border-gray-50"
                  src={Avatar03}
                  width={32}
                  height={32}
                  alt="Avatar 02"
                />
                <Image
                  className="box-content rounded-full border-2 border-gray-50"
                  src={Avatar04}
                  width={32}
                  height={32}
                  alt="Avatar 03"
                />
                <Image
                  className="box-content rounded-full border-2 border-gray-50"
                  src={Avatar05}
                  width={32}
                  height={32}
                  alt="Avatar 04"
                />
                <Image
                  className="box-content rounded-full border-2 border-gray-50"
                  src={Avatar06}
                  width={32}
                  height={32}
                  alt="Avatar 05"
                />
              </div>
            </div>
            <h1
              className="mb-6 border-y text-5xl font-bold [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-300/.8),transparent)1] md:text-6xl"
              data-aos="zoom-y-out"
              data-aos-delay={150}
              dir="rtl"
            >
              منصة التداول الذكية المدعومة بالذكاء الاصطناعي<br className="max-lg:hidden" />
            </h1>
            <div className="mx-auto max-w-3xl">
              <p
                className="mb-8 text-lg text-gray-700"
                data-aos="zoom-y-out"
                data-aos-delay={300}
                dir="rtl"
              >
                رؤيا X ليرات تقدم لك حلول تداول MT5 وذكاء اصطناعي متقدم لإشارات التداول، التحليلات الذكية، ومساعد تداول آلي لتحقيق أفضل النتائج الاستثمارية.
              </p>
              <div className="relative before:absolute before:inset-0 before:border-y before:[border-image:linear-gradient(to_right,transparent,--theme(--color-slate-300/.8),transparent)1]">
                <div
                  className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center"
                  data-aos="zoom-y-out"
                  data-aos-delay={450}
                >
                  <a
                    className="btn group mb-4 w-full bg-gradient-to-t from-green-600 to-blue-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-sm hover:bg-[length:100%_150%] sm:mb-0 sm:w-auto"
                    href="#0"
                  >
                    <span className="relative inline-flex items-center" dir="rtl">
                      ابدأ التداول الذكي الآن
                      <span className="ml-1 tracking-normal text-blue-300 transition-transform group-hover:translate-x-0.5">
                        ←
                      </span>
                    </span>
                  </a>
                  <a
                    className="btn w-full bg-white text-gray-800 shadow-sm hover:bg-gray-50 sm:ml-4 sm:w-auto"
                    href="#0"
                  >
                    المزيد عن المنصة
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Hero image - replaced with trading/AI visuals */}
          <div
            className="mx-auto max-w-3xl flex flex-col items-center gap-6"
            data-aos="zoom-y-out"
            data-aos-delay={600}
          >
            <div className="relative aspect-video rounded-2xl bg-gradient-to-br from-blue-900 via-gray-900 to-green-900 px-5 py-3 shadow-xl flex items-center justify-center">
              <Image src="/images/planet.png" alt="Trading Planet" width={180} height={180} className="absolute left-4 top-4 opacity-80" />
              <div className="flex flex-col items-center z-10">
                <Image src="/images/planet-tag-01.png" alt="AI Trade Signal" width={64} height={64} className="mb-2" />
                <span className="text-xl font-bold text-green-400 mb-2" dir="rtl">إشارة تداول AI</span>
                <Image src="/images/planet-tag-02.png" alt="Trading Assistant" width={64} height={64} className="mb-2" />
                <span className="text-lg font-semibold text-blue-300" dir="rtl">مساعد التداول الذكي</span>
              </div>
            </div>
            <div className="font-mono text-gray-500 text-center" dir="rtl">
              <span className="text-gray-200">مثال على إشارة التداول:</span>
              <br />
              <span className="text-green-400">شراء EUR/USD عند 1.0850 - وقف الخسارة 1.0800 - جني الأرباح 1.0950</span>
              <br />
              <span className="text-blue-300">مساعد التداول: تحليل السوق وتقديم توصيات فورية</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
