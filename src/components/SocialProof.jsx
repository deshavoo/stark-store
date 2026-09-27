import { useState } from "react";
import { X, ArrowUpLeft } from "lucide-react";
import { FaInstagram } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";

const reviews = [
  {
    id: 1,
    image: "/reviews/review-1.jpg",
    label: "Customer Feedback",
  },
  {
    id: 2,
    image: "/reviews/review-2.jpg",
    label: "Customer Feedback",
  },
  {
    id: 3,
    image: "/reviews/review-3.jpg",
    label: "Unboxing",
  },
  {
    id: 4,
    image: "/reviews/review-4.jpg",
    label: "Customer Feedback",
  },
  {
    id: 5,
    image: "/reviews/review-5.jpg",
    label: "Customer Feedback",
  },
];

function SocialProof() {
  const [selectedReview, setSelectedReview] = useState(null);

  return (
    <section
      id="reviews"
      className="relative overflow-hidden bg-[#0B0F19] px-5 py-20 sm:px-8 lg:px-10 lg:py-28"
    >
      <div className="absolute left-0 top-1/3 h-80 w-80 rounded-full bg-[#4E54C8]/10 blur-[130px]" />

      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-[#8F94FB]/10 blur-[130px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between"
        >
          <div className="max-w-2xl text-right">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#8F94FB]/10 bg-[#8F94FB]/5 px-4 py-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#8F94FB]" />

              <span className="text-xs font-bold uppercase tracking-widest text-[#8F94FB]">
                Real Customers
              </span>
            </div>

            <h2 className="text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
              الناس بتقول{" "}
              <span className="bg-linear-to-r from-[#4E54C8] to-[#8F94FB] bg-clip-text text-transparent">
                إيه؟
              </span>
            </h2>

            <p className="mt-4 text-sm leading-7 text-slate-500 sm:text-base">
              آراء وتجارب حقيقية من عملاء STARK بعد استلام طلباتهم وتجربتها.
            </p>
          </div>

          <a
            href="https://www.instagram.com/stark.stores.official/"
            target="_blank"
            rel="noreferrer"
            className="group inline-flex w-fit items-center gap-3 rounded-full border border-white/10 bg-white/3 px-5 py-3 text-sm font-semibold text-white transition hover:border-[#8F94FB]/30 hover:bg-white/6"
          >
            <FaInstagram
              size={20}
              className="text-[#8F94FB] transition-transform duration-300 group-hover:scale-110"
            />
            شوفنا على Instagram
            <ArrowUpLeft
              size={16}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>
        </motion.div>

        <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
          {reviews.map((review, index) => (
            <motion.button
              key={review.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              onClick={() => setSelectedReview(review)}
              className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-white/3 text-right ${
                index === 0 ? "col-span-2 row-span-2" : ""
              }`}
            >
              <img
                src={review.image}
                alt={review.label}
                className="aspect-4/5 h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/5 to-transparent opacity-60 transition duration-300 group-hover:opacity-80" />

              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                <span className="rounded-full border border-white/10 bg-black/40 px-3 py-1.5 text-[10px] font-semibold text-white backdrop-blur-md">
                  {review.label}
                </span>

                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-black/40 text-white backdrop-blur-md transition duration-300 group-hover:bg-[#4E54C8]">
                  <ArrowUpLeft size={15} />
                </span>
              </div>
            </motion.button>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-10 overflow-hidden rounded-3xl border border-white/10 bg-linear-to-r from-[#4E54C8]/10 via-white/2 to-[#8F94FB]/10 p-6 sm:p-8"
        >
          <div className="flex flex-col items-center justify-between gap-5 text-center sm:flex-row sm:text-right">
            <div>
              <p className="text-lg font-bold text-white sm:text-xl">
                جربت STARK قبل كده؟
              </p>

              <p className="mt-1 text-sm text-slate-500">
                شاركنا تجربتك وخلي رأيك جزء من الـ STARK community.
              </p>
            </div>

            <a
              href="https://www.instagram.com/stark.stores.official/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-linear-to-r from-[#4E54C8] to-[#8F94FB] px-6 py-3 text-sm font-bold text-white transition duration-300 hover:scale-[1.03] hover:shadow-[0_0_30px_rgba(78,84,200,0.35)]"
            >
              <FaInstagram size={18} />
              تابع STARK
            </a>
          </div>
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedReview && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedReview(null)}
            className="fixed inset-0 z-100 flex items-center justify-center bg-black/90 p-4 backdrop-blur-xl sm:p-8"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.25 }}
              onClick={(event) => event.stopPropagation()}
              className="relative max-h-[90vh] max-w-3xl overflow-hidden rounded-3xl border border-white/10 bg-[#0B0F19]"
            >
              {/* Close */}
              <button
                onClick={() => setSelectedReview(null)}
                className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-black/60 text-white backdrop-blur-md transition hover:bg-white/10"
              >
                <X size={19} />
              </button>

              <img
                src={selectedReview.image}
                alt={selectedReview.label}
                className="max-h-[90vh] w-auto max-w-full object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default SocialProof;
