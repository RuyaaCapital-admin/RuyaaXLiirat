"use client";

import { motion, useScroll, useTransform, useSpring, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Users, DollarSign, TrendingUp, Copy, Check, Share2, UserPlus, Coins, BarChart3 } from "lucide-react";

// Floating particles component
const FloatingParticles = () => {
  const particles = Array.from({ length: 20 }, (_, i) => i);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle}
          className="absolute w-1 h-1 bg-emerald-400/30 rounded-full"
          initial={{
            x: Math.random() * 100 + "%",
            y: Math.random() * 100 + "%",
            scale: 0,
          }}
          animate={{
            y: [null, "-100vh"],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "linear",
          }}
          style={{
            left: Math.random() * 100 + "%",
          }}
        />
      ))}
    </div>
  );
};

// Animated counter component
const AnimatedCounter = ({ value, suffix = "" }: { value: string | number; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView && !isVisible) {
      setIsVisible(true);
      const target = typeof value === 'number' ? value : parseInt(value.toString()) || 0;
      const duration = 2000;
      const steps = 60;
      const increment = target / steps;

      let current = 0;
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          setCount(target);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [isInView, isVisible, value]);

  return (
    <span ref={ref}>
      {typeof value === 'number' ? count : value}
      {suffix}
    </span>
  );
};

export function ReferralCard() {
  const [copied, setCopied] = useState(false);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);

  const springY = useSpring(y, { stiffness: 300, damping: 30 });
  const springOpacity = useSpring(opacity, { stiffness: 300, damping: 30 });
  const springScale = useSpring(scale, { stiffness: 300, damping: 30 });

  const handleCopyReferralCode = async () => {
    try {
      await navigator.clipboard.writeText("RFT2024");
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <motion.div
      ref={containerRef}
      style={{ y: springY, opacity: springOpacity, scale: springScale }}
      className="relative overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-gray-50 to-zinc-50 dark:from-slate-950/20 dark:via-gray-950/20 dark:to-zinc-950/20 rounded-3xl">
        <FloatingParticles />

        {/* Animated gradient orbs */}
        <motion.div
          className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-br from-emerald-400/20 to-teal-500/20 rounded-full blur-xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-10 left-10 w-24 h-24 bg-gradient-to-br from-cyan-400/20 to-emerald-500/20 rounded-full blur-xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.2, 0.4],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative p-8 md:p-12">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <motion.div
            className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl mb-6 shadow-2xl"
            whileHover={{ scale: 1.05, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <Users className="w-10 h-10 text-white" />
          </motion.div>

          <motion.h3
            className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            برنامج الإحالة المميز
          </motion.h3>

          <motion.p
            className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            ادخل أصدقاءك إلى عالم التداول الذكي واحصل على عمولة 10% من كل صفقة ناجحة
          </motion.p>
        </motion.div>

        {/* Referral Code Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-2xl p-8 mb-8 shadow-2xl border border-white/20"
        >
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
            <div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                رمز الإحالة الخاص بك
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                شارك هذا الرمز مع أصدقائك
              </p>
            </div>

            <motion.button
              onClick={handleCopyReferralCode}
              className="neu-button primary flex items-center gap-2 px-6 py-3 text-white font-semibold rounded-xl shadow-lg transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {copied ? (
                <>
                  <Check className="w-5 h-5" />
                  تم النسخ!
                </>
              ) : (
                <>
                  <Copy className="w-5 h-5" />
                  نسخ الرمز
                </>
              )}
            </motion.button>
          </div>

          <motion.div
            className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-600 rounded-xl p-6 text-center border-2 border-dashed border-slate-200 dark:border-slate-600"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.div
              className="font-mono text-2xl md:text-3xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
            >
              RFT2024
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-2xl p-6 shadow-xl border border-white/20 text-center group hover:shadow-2xl transition-all duration-300"
            whileHover={{ y: -5 }}
          >
            <motion.div
              className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-xl flex items-center justify-center mx-auto mb-4"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <DollarSign className="w-6 h-6 text-white" />
            </motion.div>
            <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
              <AnimatedCounter value="10" suffix="%" />
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">
              معدل العمولة
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-2xl p-6 shadow-xl border border-white/20 text-center group hover:shadow-2xl transition-all duration-300"
            whileHover={{ y: -5 }}
          >
            <motion.div
              className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-teal-600 rounded-xl flex items-center justify-center mx-auto mb-4"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <TrendingUp className="w-6 h-6 text-white" />
            </motion.div>
            <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
              <AnimatedCounter value="∞" />
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">
              عدد الإحالات غير محدود
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-2xl p-6 shadow-xl border border-white/20 text-center group hover:shadow-2xl transition-all duration-300"
            whileHover={{ y: -5 }}
          >
            <motion.div
              className="w-12 h-12 bg-gradient-to-br from-purple-400 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <Users className="w-6 h-6 text-white" />
            </motion.div>
            <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
              <AnimatedCounter value="24/7" />
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">
              دعم على مدار الساعة
            </div>
          </motion.div>
        </div>

        {/* How It Works Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-12"
        >
          <h4 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-8">
            كيف يعمل البرنامج؟
          </h4>

          <div className="space-y-4">
            {[
              {
                title: "شارك رمز الإحالة",
                description: "أرسل رمز الإحالة الخاص بك لأصدقائك وعائلتك",
                icon: Share2,
                color: "from-emerald-400 to-teal-600"
              },
              {
                title: "سجل صديقك حساباً",
                description: "عندما يسجل صديقك ويبدأ رحلته في التداول",
                icon: UserPlus,
                color: "from-cyan-400 to-emerald-500"
              },
              {
                title: "احصل على عمولتك",
                description: "10% من كل صفقة ناجحة تُضاف لحسابك تلقائياً",
                icon: Coins,
                color: "from-amber-400 to-orange-500"
              },
              {
                title: "تابع أرباحك",
                description: "شاهد نمو أرباحك مع كل إحالة جديدة",
                icon: BarChart3,
                color: "from-violet-400 to-purple-500"
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-xl p-6 border border-white/30 hover:bg-white/80 dark:hover:bg-gray-800/80 transition-all duration-300 group"
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-start gap-4">
                  <motion.div
                    className={`flex-shrink-0 w-12 h-12 bg-gradient-to-br ${step.color} rounded-xl flex items-center justify-center text-2xl shadow-lg`}
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <step.icon className="w-6 h-6 text-white" />
                  </motion.div>

                  <div className="flex-1">
                    <h5 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                      {step.title}
                    </h5>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  <motion.div
                    className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center text-white font-bold text-sm"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 300, damping: 15 }}
                  >
                    {index + 1}
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center"
        >
          <motion.button
            className="neu-button primary text-lg px-8 py-4 text-white font-bold rounded-2xl shadow-2xl transition-all duration-300"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(59, 130, 246, 0.4)"
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            ابدأ برنامج الإحالة الآن 🚀
          </motion.button>

          <motion.p
            className="text-sm text-gray-500 dark:text-gray-400 mt-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            انضم إلى آلاف المتداولين الناجحين مع RFT
          </motion.p>
        </motion.div>
      </div>
    </motion.div>
  );
}