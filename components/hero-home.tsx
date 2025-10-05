'use client';

import Image from "next/image";
import PageIllustration from "@/components/page-illustration";
import Avatar01 from "@/public/images/avatar-01.jpg";
import Avatar02 from "@/public/images/avatar-02.jpg";
import Avatar03 from "@/public/images/avatar-03.jpg";
import Avatar04 from "@/public/images/avatar-04.jpg";
import Avatar05 from "@/public/images/avatar-05.jpg";
import Avatar06 from "@/public/images/avatar-06.jpg";
import { TypeAnimation } from 'react-type-animation';

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
              className="mb-6 border-y text-3xl font-bold [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-300/.8),transparent)1] md:text-5xl lg:text-6xl"
              data-aos="zoom-y-out"
              data-aos-delay={150}
              dir="rtl"
            >
              <TypeAnimation
                sequence={[
                  'أنشئ حساب مجاناً وافتح قوة التداول بالذكاء الاصطناعي',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="inline-block"
              />
            </div>
            <div className="mx-auto max-w-3xl">
              <div className="relative before:absolute before:inset-0 before:border-y before:[border-image:linear-gradient(to_right,transparent,--theme(--color-slate-300/.8),transparent)1]">
                <div
                  className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center flex-col sm:flex-row"
                  data-aos="zoom-y-out"
                  data-aos-delay={450}
                >
                  <a
                    className="neu-button primary"
                    href="#0"
                  >
                    <span dir="rtl">ابدأ التداول الذكي الآن</span>
                  </a>
                  <a
                    className="neu-button secondary"
                    href="#0"
                  >
                    <span dir="rtl">المزيد عن المنصة</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
