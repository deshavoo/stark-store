import { motion } from "framer-motion";
import { BadgeCheck, Store, ShieldCheck } from "lucide-react";

const features = [
  {
    id: 1,
    icon: BadgeCheck,
    title: "100% Original",
    description:
      "كل قطعة في STARK مختارة بعناية لضمان أعلى جودة وأصالة المنتجات.",
  },
  {
    id: 2,
    icon: Store,
    title: "فروع فعلية",
    description:
      "تقدر تزورنا بنفسك في فروع STARK في القاهرة والمنصورة وتجرب قبل الشراء.",
  },
  {
    id: 3,
    icon: ShieldCheck,
    title: "دفع آمن",
    description: "خيارات دفع متعددة وآمنة لتجربة شراء سهلة ومريحة.",
  },
];

function WhyStark() {
  return (
    <section
      id="why-stark"
      className="relative overflow-hidden bg-[#0B0F19] px-5 py-20 sm:px-8 lg:px-10 lg:py-28"
    >
      {/* Background Glow */}
      <div className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#4E54C8]/10 blur-[130px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-14 max-w-2xl text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#8F94FB]/10 bg-[#8F94FB]/5 px-4 py-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#8F94FB]" />

            <span className="text-xs font-bold uppercase tracking-widest text-[#8F94FB]">
              Why STARK
            </span>
          </div>

          <h2 className="text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
            <span className="bg-linear-to-r from-[#4E54C8] to-[#8F94FB] bg-clip-text text-transparent">
              Sneaker Store
            </span>
            أكتر من مجرد
          </h2>

          <p className="mt-5 text-sm leading-7 text-slate-500 sm:text-base">
            . streetwear culture بنهتم بكل تفصيلة عشان نقدم لك تجربة شراء تليق
            بالـ
          </p>
        </motion.div>

        {/* Features */}
        <div className="grid gap-4 md:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.12,
                }}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/2.5 p-7 transition duration-500 hover:-translate-y-2 hover:border-[#4E54C8]/40 hover:bg-white/4 sm:p-8"
              >
                {/* Card Glow */}
                <div className="absolute -right-16 -top-16 h-32 w-32 rounded-full bg-[#4E54C8]/10 blur-[60px] transition duration-500 group-hover:bg-[#8F94FB]/20" />

                {/* Number */}
                <span className="absolute right-6 top-5 font-['Poppins'] text-5xl font-black text-white/2.5">
                  0{index + 1}
                </span>

                {/* Icon */}
                <div className="relative mb-7 flex h-14 w-14 items-center justify-center rounded-2xl border border-[#8F94FB]/10 bg-linear-to-br from-[#4E54C8]/15 to-[#8F94FB]/5 text-[#8F94FB] transition duration-500 group-hover:scale-110 group-hover:border-[#8F94FB]/30">
                  <Icon size={25} strokeWidth={1.7} />
                </div>

                {/* Content */}
                <h3 className="relative font-['Poppins'] text-xl font-bold text-white">
                  {feature.title}
                </h3>

                <p className="relative mt-4 text-sm leading-7 text-slate-500">
                  {feature.description}
                </p>

                {/* Bottom Line */}
                <div className="mt-7 h-px w-0 bg-linear-to-r from-[#4E54C8] to-[#8F94FB] transition-all duration-500 group-hover:w-full" />
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-10 grid grid-cols-2 divide-x divide-white/10 overflow-hidden rounded-3xl border border-white/10 bg-white/2 md:grid-cols-4"
        >
          <div className="px-4 py-6 text-center">
            <p className="font-['Poppins'] text-2xl font-extrabold text-white sm:text-3xl">
              100%
            </p>

            <p className="mt-1 text-xs text-slate-500">Original Products</p>
          </div>

          <div className="border-t border-white/10 px-4 py-6 text-center md:border-t-0">
            <p className="font-['Poppins'] text-2xl font-extrabold text-white sm:text-3xl">
              2
            </p>

            <p className="mt-1 text-xs text-slate-500">Physical Stores</p>
          </div>

          <div className="border-t border-white/10 px-4 py-6 text-center md:border-t-0">
            <p className="font-['Poppins'] text-2xl font-extrabold text-white sm:text-3xl">
              24/7
            </p>

            <p className="mt-1 text-xs text-slate-500">Online Support</p>
          </div>

          <div className="border-t border-white/10 px-4 py-6 text-center md:border-t-0">
            <p className="font-['Poppins'] text-2xl font-extrabold text-white sm:text-3xl">
              Fast
            </p>

            <p className="mt-1 text-xs text-slate-500">Shipping</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default WhyStark;
