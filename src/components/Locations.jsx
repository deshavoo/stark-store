import { motion } from "framer-motion";
import { MapPin, Navigation, ArrowUpLeft } from "lucide-react";

const locations = [
  {
    id: 1,
    city: "القاهرة",
    area: "أرض الجولف",
    description: "زورنا وجرب تشكيلتك المفضلة بنفسك.",
    mapUrl:
      "https://www.google.com/maps/place/stark-cairo/@30.081016,31.3319047,17z/data=!3m1!4b1!4m6!3m5!1s0x14583f4aae019a97:0xfdc5549174bb136a!8m2!3d30.081016!4d31.3319047!16s%2Fg%2F11yjg3fsf5!18m1!1e1?entry=ttu",
  },
  {
    id: 2,
    city: "المنصورة",
    area: "Mansoura",
    description: "تقدر تزور فرعنا وتشوف الكولكشن على الطبيعة.",
    mapUrl:
      "https://www.google.com/maps/place/Stark/@31.0458202,31.3675538,17z/data=!3m1!4b1!4m6!3m5!1s0x14f79dd099c5ab43:0x40cbefafbc998b16!8m2!3d31.0458202!4d31.3675538!16s%2Fg%2F11rcq6dkpw!18m1!1e1?entry=ttu",
  },
];

function Locations() {
  return (
    <section
      id="locations"
      dir="rtl"
      className="relative overflow-hidden bg-[#0B0F19] px-5 py-20 sm:px-8 lg:px-10 lg:py-28"
    >
      {/* Background Glow */}
      <div className="absolute -left-40 top-1/3 h-80 w-80 rounded-full bg-[#4E54C8]/10 blur-[130px]" />

      <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-[#8F94FB]/10 blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-14 max-w-2xl text-center"
        >
          <div
            dir="ltr"
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#8F94FB]/10 bg-[#8F94FB]/5 px-4 py-2"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[#8F94FB]" />

            <span className="text-xs font-bold uppercase tracking-widest text-[#8F94FB]">
              Our Locations
            </span>
          </div>

          <h2 className="text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
            زورنا في{" "}
            <span className="bg-linear-to-r from-[#4E54C8] to-[#8F94FB] bg-clip-text text-transparent">
              فروعنا
            </span>
          </h2>

          <p className="mt-5 text-sm leading-7 text-slate-500 sm:text-base">
            لو حابب تشوف المنتجات على الطبيعة، تقدر تزور أقرب فرع ليك.
          </p>
        </motion.div>

        {/* Locations */}
        <div className="grid gap-5 md:grid-cols-2">
          {locations.map((location, index) => (
            <motion.article
              key={location.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.55,
                delay: index * 0.12,
              }}
              className="group relative overflow-hidden rounded-4xl border border-white/10 bg-white/2.5 p-6 transition duration-500 hover:-translate-y-1 hover:border-[#4E54C8]/40 hover:bg-white/4 sm:p-8"
            >
              {/* Glow */}
              <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-[#4E54C8]/10 blur-[70px] transition duration-500 group-hover:bg-[#8F94FB]/20" />

              <div className="relative z-10">
                {/* Top */}
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-[#8F94FB]/10 bg-linear-to-br from-[#4E54C8]/20 to-[#8F94FB]/5 text-[#8F94FB]">
                      <MapPin size={25} strokeWidth={1.7} />
                    </div>

                    <div>
                      <p className="text-xs font-medium text-slate-500">
                        STARK STORE
                      </p>

                      <h3 className="mt-1 text-2xl font-extrabold text-white">
                        {location.city}
                      </h3>
                    </div>
                  </div>

                  <span
                    dir="ltr"
                    className="rounded-full border border-white/10 bg-white/3 px-3 py-1.5 text-[10px] font-bold tracking-wider text-slate-400"
                  >
                    0{location.id}
                  </span>
                </div>

                {/* Location Info */}
                <div className="mt-8 rounded-2xl border border-white/10 bg-black/20 p-5">
                  <div className="flex items-start gap-3">
                    <Navigation
                      size={18}
                      className="mt-0.5 shrink-0 text-[#8F94FB]"
                    />

                    <div>
                      <p className="text-sm font-bold text-white">
                        {location.area}
                      </p>

                      <p className="mt-1 text-xs leading-6 text-slate-500">
                        {location.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Map Button */}
                <a
                  href={location.mapUrl}
                  target="_blank"
                  rel="noreferrer"
                  dir="ltr"
                  className="group/button mt-5 flex w-full items-center justify-center gap-3 rounded-xl bg-linear-to-r from-[#4E54C8] to-[#8F94FB] py-4 text-sm font-bold text-white transition duration-300 hover:shadow-[0_0_30px_rgba(78,84,200,0.3)]"
                >
                  <MapPin size={17} />

                  <span>Open in Google Maps</span>

                  <ArrowUpLeft
                    size={16}
                    className="transition-transform duration-300 group-hover/button:-translate-y-0.5 group-hover/button:translate-x-0.5"
                  />
                </a>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Bottom Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-8 rounded-3xl border border-white/10 bg-linear-to-r from-[#4E54C8]/10 via-white/2 to-[#8F94FB]/10 px-6 py-7 text-center"
        >
          <p className="text-sm font-semibold text-white sm:text-base">
            مستنيينك في STARK
          </p>

          <p className="mt-2 text-xs leading-6 text-slate-500 sm:text-sm">
            اختار الفرع الأقرب ليك وافتح الموقع مباشرة على Google Maps.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default Locations;
