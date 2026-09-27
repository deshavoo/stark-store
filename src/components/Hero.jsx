import { motion } from "framer-motion";
import { ArrowLeft, Truck, RotateCcw, Sparkles } from "lucide-react";

function Hero() {
  return (
    <section
      id="home"
      dir="rtl"
      className="relative min-h-screen overflow-hidden bg-[#0B0F19] pt-20"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute -left-40 top-1/4 h-80 w-80 rounded-full bg-[#4E54C8]/20 blur-[120px]" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-[#8F94FB]/15 blur-[140px]" />

      <div className="pointer-events-none absolute left-1/2 top-1/2 h-125 w-125 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#4E54C8]/5 blur-[150px]" />

      <div className="relative z-10 mx-auto grid min-h-[calc(100vh-80px)] max-w-7xl items-center gap-10 px-5 py-10 sm:px-8 sm:py-14 lg:grid-cols-2 lg:gap-14 lg:px-10 lg:py-16">
        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="order-2 text-center lg:order-1 lg:text-right"
        >
          {/* Eyebrow */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#F59E0B]/20 bg-[#F59E0B]/10 px-4 py-2">
            <Sparkles size={14} className="text-[#F59E0B]" strokeWidth={2} />

            <span className="text-xs font-semibold text-[#F59E0B] sm:text-sm">
              أحدث تشكيلات السنيكرز
            </span>
          </div>

          {/* Heading */}
          <h1 className="mx-auto max-w-2xl text-4xl font-extrabold leading-[1.18] tracking-tight sm:text-5xl lg:mx-0 lg:text-6xl xl:text-7xl">
            خطوتك
            <br />
            <span className="bg-linear-to-r from-[#4E54C8] via-[#6E73DC] to-[#8F94FB] bg-clip-text text-transparent">
              تبدأ من هنا
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-slate-400 sm:text-base lg:mx-0 lg:text-lg">
            اكتشف أحدث تشكيلات السنيكرز المختارة بعناية لعشاق الستايل العصري.
            اختار الـ pair اللي يعبر عنك.
          </p>

          {/* CTA */}
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
            <a
              href="#products"
              className="group inline-flex items-center justify-center gap-3 rounded-full bg-linear-to-r from-[#4E54C8] to-[#8F94FB] px-7 py-4 text-sm font-bold text-white shadow-[0_0_35px_rgba(78,84,200,0.3)] transition duration-300 hover:scale-[1.03] hover:shadow-[0_0_45px_rgba(78,84,200,0.5)]"
            >
              اكتشف الكولكشن
              <ArrowLeft
                size={18}
                className="transition-transform duration-300 group-hover:-translate-x-1"
              />
            </a>

            <a
              href="#locations"
              className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/3 px-7 py-4 text-sm font-semibold text-white transition hover:border-white/20 hover:bg-white/[0.07]"
            >
              زور أقرب فرع
            </a>
          </div>

          {/* Trust Points */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-4 lg:justify-start">
            <div className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/4">
                <Truck size={17} className="text-[#8F94FB]" strokeWidth={1.8} />
              </div>

              <div className="text-right">
                <p className="text-xs font-semibold text-white">شحن سريع</p>

                <p className="text-[10px] text-slate-500">لكل المحافظات</p>
              </div>
            </div>

            <div className="hidden h-8 w-px bg-white/10 sm:block" />

            <div className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/4">
                <RotateCcw
                  size={17}
                  className="text-[#8F94FB]"
                  strokeWidth={1.8}
                />
              </div>

              <div className="text-right">
                <p className="text-xs font-semibold text-white">استبدال سهل</p>

                <p className="text-[10px] text-slate-500">بدون تعقيد</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Hero Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, x: 20 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{
            duration: 0.9,
            delay: 0.15,
            ease: "easeOut",
          }}
          className="order-1 relative flex min-h-95 items-center justify-center lg:order-2 lg:min-h-162.5"
        >
          {/* Glow */}
          <div className="absolute h-64 w-64 rounded-full bg-[#4E54C8]/30 blur-[100px] sm:h-80 sm:w-80 lg:h-105 lg:w-105" />

          {/* Decorative Ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute h-72.5 w-72.5 rounded-full border border-dashed border-white/10 sm:h-95 sm:w-95 lg:h-130 lg:w-130"
          />

          {/* Image */}
          <div className="relative z-10 w-full max-w-107.5 sm:max-w-120 lg:max-w-130">
            <div className="relative overflow-hidden rounded-4xl border border-white/10 bg-white/3 shadow-2xl shadow-black/40">
              <img
                src="/hero.jpg"
                alt="STARK Sneakers"
                className="h-105 w-full object-cover sm:h-125 lg:h-152.5"
              />

              <div className="absolute inset-0 bg-linear-to-t from-[#0B0F19]/90 via-transparent to-transparent" />

              {/* Image Label */}
              <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between rounded-2xl border border-white/10 bg-[#0B0F19]/70 p-4 backdrop-blur-xl">
                <div>
                  <p
                    dir="ltr"
                    className="text-[10px] font-medium tracking-[0.2em] text-slate-500"
                  >
                    STARK COLLECTION
                  </p>

                  <p
                    dir="ltr"
                    className="mt-1 font-['Poppins'] text-sm font-bold text-white"
                  >
                    NEW DROP
                  </p>
                </div>

                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-linear-to-r from-[#4E54C8] to-[#8F94FB] shadow-[0_0_20px_rgba(78,84,200,0.35)]">
                  <span className="font-['Poppins'] text-sm font-black text-white">
                    S
                  </span>
                </div>
              </div>
            </div>

            {/* Floating Badge */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -bottom-4 -left-3 rounded-2xl border border-white/10 bg-[#111827]/90 px-4 py-3 shadow-xl backdrop-blur-xl sm:-left-5"
            >
              <p className="text-[10px] font-medium text-slate-500">
                اختيارك يبدأ
              </p>

              <p className="mt-1 text-sm font-bold text-white">
                بخطوة
                <span className="text-[#8F94FB]"> مختلفة</span>
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Fade */}
      <div className="pointer-events-none absolute bottom-0 left-0 h-32 w-full bg-linear-to-t from-[#0B0F19] to-transparent" />
    </section>
  );
}

export default Hero;
