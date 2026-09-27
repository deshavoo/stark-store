import { ArrowUpLeft, MapPin } from "lucide-react";
import { FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";

const navigationLinks = [
  {
    label: "الرئيسية",
    href: "#home",
  },
  {
    label: "الكولكشن",
    href: "#products",
  },
  {
    label: "لماذا ستارك؟",
    href: "#why-stark",
  },
  {
    label: "تجارب العملاء",
    href: "#reviews",
  },
  {
    label: "فروعنا",
    href: "#locations",
  },
];

const locations = [
  {
    name: "القاهرة",
    area: "أرض الجولف",
    mapUrl:
      "https://www.google.com/maps/place/stark-cairo/@30.081016,31.3319047,17z/data=!3m1!4b1!4m6!3m5!1s0x14583f4aae019a97:0xfdc5549174bb136a!8m2!3d30.081016!4d31.3319047!16s%2Fg%2F11yjg3fsf5!18m1!1e1?entry=ttu",
  },
  {
    name: "المنصورة",
    area: "المنصورة",
    mapUrl:
      "https://www.google.com/maps/place/Stark/@31.0458202,31.3675538,17z/data=!3m1!4b1!4m6!3m5!1s0x14f79dd099c5ab43:0x40cbefafbc998b16!8m2!3d31.0458202!4d31.3675538!16s%2Fg%2F11rcq6dkpw!18m1!1e1?entry=ttu",
  },
];

function Footer() {
  return (
    <footer
      dir="rtl"
      className="relative overflow-hidden border-t border-white/10 bg-[#070A12] px-5 pb-6 pt-16 sm:px-8 lg:px-10 lg:pt-20"
    >
      {/* Background Glow */}
      <div className="absolute -left-40 top-0 h-80 w-80 rounded-full bg-[#4E54C8]/10 blur-[130px]" />

      <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-[#8F94FB]/10 blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Main Footer */}
        <div className="grid gap-12 border-b border-white/10 pb-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-10">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-1"
          >
            <a href="#home" className="group inline-flex">
              <img
                src="/logo.png"
                alt="STARK"
                className="h-11 w-auto object-contain transition duration-300 group-hover:scale-105"
              />
            </a>

            <p className="mt-5 max-w-xs text-sm leading-7 text-slate-500">
              وجهتك للسنيكرز والستايل العصري. اختيارات مميزة لعشاق الموضة
              والستايل المختلف.
            </p>

            <a
              href="https://www.instagram.com/stark.stores.official/"
              target="_blank"
              rel="noreferrer"
              dir="ltr"
              className="mt-6 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/3 px-4 py-2.5 text-sm font-semibold text-white transition hover:border-[#8F94FB]/30 hover:bg-white/6"
            >
              <FaInstagram
                size={18}
                className="text-[#8F94FB] transition-transform duration-300 group-hover:scale-110"
              />

              <span>@stark.stores.official</span>
            </a>
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-sm font-bold text-white">روابط سريعة</h3>

            <ul className="mt-5 space-y-3">
              {navigationLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="group flex w-fit items-center gap-2 text-sm text-slate-500 transition hover:text-white"
                  >
                    <span className="h-1 w-1 rounded-full bg-[#4E54C8] opacity-0 transition group-hover:opacity-100" />

                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Locations */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-sm font-bold text-white">فروعنا</h3>

            <div className="mt-5 space-y-4">
              {locations.map((location) => (
                <a
                  key={location.name}
                  href={location.mapUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-start gap-3"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/3 text-[#8F94FB] transition group-hover:border-[#8F94FB]/30 group-hover:bg-[#8F94FB]/10">
                    <MapPin size={16} />
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-white transition group-hover:text-[#8F94FB]">
                      {location.name}
                    </p>

                    <p className="mt-1 text-xs text-slate-500">
                      {location.area}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="rounded-3xl border border-white/10 bg-white/2.5 p-6">
              <span
                dir="ltr"
                className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#8F94FB]"
              >
                STARK COMMUNITY
              </span>

              <h3 className="mt-3 text-lg font-bold leading-8 text-white">
                جاهز تختار
                <br />
                خطوتك الجاية؟
              </h3>

              <p className="mt-3 text-xs leading-6 text-slate-500">
                اكتشف أحدث المنتجات وشوف الكولكشن بالكامل.
              </p>

              <a
                href="#products"
                className="group mt-5 flex items-center justify-center gap-2 rounded-xl bg-linear-to-r from-[#4E54C8] to-[#8F94FB] px-4 py-3 text-sm font-bold text-white transition duration-300 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(78,84,200,0.3)]"
              >
                تصفح الكولكشن
                <ArrowUpLeft
                  size={16}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Bottom Footer */}
        <div className="flex flex-col items-center justify-between gap-4 pt-6 text-center sm:flex-row sm:text-right">
          <p className="text-[11px] text-slate-600">
            © {new Date().getFullYear()} STARK. جميع الحقوق محفوظة.
          </p>

          <div
            dir="ltr"
            className="flex items-center gap-2 text-[10px] text-slate-600"
          >
            <span>Built with</span>

            <span className="font-semibold text-slate-400">DESHAVOO</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
