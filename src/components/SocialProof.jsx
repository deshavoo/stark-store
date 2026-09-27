import { useState } from "react";
import { ArrowLeft, ArrowRight, X } from "lucide-react";
import { FaInstagram } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";

const reviews = [
  {
    id: 1,
    image: "/reviews/review-1.jpg",
  },
  {
    id: 2,
    image: "/reviews/review-2.jpg",
  },
  {
    id: 3,
    image: "/reviews/review-3.jpg",
  },
  {
    id: 4,
    image: "/reviews/review-4.jpg",
  },
  {
    id: 5,
    image: "/reviews/review-5.jpg",
  },
];

function SocialProof() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedReview, setSelectedReview] = useState(null);

  const nextReview = () => {
    setActiveIndex((current) => (current + 1) % reviews.length);
  };

  const previousReview = () => {
    setActiveIndex(
      (current) => (current - 1 + reviews.length) % reviews.length
    );
  };

  return (
    <section
      id="reviews"
      dir="rtl"
      className="relative overflow-hidden bg-[#0B0F19] px-5 py-20 sm:px-8 lg:px-10 lg:py-28"
    >
      <div className="pointer-events-none absolute -right-40 top-1/4 h-80 w-80 rounded-full bg-[#4E54C8]/10 blur-[130px]" />

      <div className="pointer-events-none absolute -left-40 bottom-0 h-80 w-80 rounded-full bg-[#8F94FB]/10 blur-[130px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div className="text-right">
              <div className="mb-3 inline-flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#F59E0B] shadow-[0_0_10px_#F59E0B]" />

                <span
                  dir="ltr"
                  className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#F59E0B] sm:text-xs"
                >
                  Customer Reviews
                </span>
              </div>

              <h2 className="text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
                عملاؤنا{" "}
                <span className="bg-linear-to-r from-[#4E54C8] to-[#8F94FB] bg-clip-text text-transparent">
                  بيتكلموا عننا
                </span>
              </h2>

              <p className="mt-3 max-w-xl text-sm leading-7 text-slate-500 sm:text-base">
                تجارب حقيقية من عملاء STARK.
              </p>
            </div>

            <a
              href="https://www.instagram.com/stark.stores.official/"
              target="_blank"
              rel="noreferrer"
              className="group inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/3 px-5 py-3 text-xs font-bold text-white transition duration-300 hover:border-[#8F94FB]/30 hover:bg-white/6"
            >
              <FaInstagram className="text-base text-[#F59E0B]" />

              <span dir="ltr">@stark.stores.official</span>
            </a>
          </div>
        </motion.div>

        <div className="relative">
          <div className="overflow-hidden">
            <motion.div
              className="flex"
              animate={{
                x: `${activeIndex * 100}%`,
              }}
              transition={{
                duration: 0.5,
                ease: "easeInOut",
              }}
            >
              {reviews.map((review) => (
                <div key={review.id} className="w-full shrink-0 px-1 sm:px-2">
                  <button
                    type="button"
                    onClick={() => setSelectedReview(review)}
                    className="group relative block w-full overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/2.5 text-right shadow-2xl"
                  >
                    <div className="relative aspect-4/5 overflow-hidden sm:aspect-video lg:aspect-21/9">
                      <img
                        src={review.image}
                        alt={`تجربة عميل ${review.id}`}
                        loading="lazy"
                        className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.025]"
                      />

                      <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent opacity-70" />

                      <div className="absolute bottom-4 right-4 rounded-full border border-white/10 bg-black/50 px-3 py-1.5 text-[10px] font-semibold text-white backdrop-blur-md sm:bottom-5 sm:right-5">
                        اضغط لعرض الصورة
                      </div>
                    </div>
                  </button>
                </div>
              ))}
            </motion.div>
          </div>

          <div className="mt-5 flex items-center justify-between">
            <div className="flex items-center gap-1.5" dir="ltr">
              {reviews.map((review, index) => (
                <button
                  key={review.id}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  aria-label={`عرض التقييم ${index + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    activeIndex === index
                      ? "w-7 bg-[#8F94FB]"
                      : "w-1.5 bg-white/20 hover:bg-white/40"
                  }`}
                />
              ))}
            </div>

            <div className="hidden items-center gap-2 sm:flex" dir="ltr">
              <button
                type="button"
                onClick={previousReview}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/3 text-slate-300 transition hover:border-white/20 hover:bg-white/6 hover:text-white"
                aria-label="التقييم السابق"
              >
                <ArrowLeft size={17} />
              </button>

              <button
                type="button"
                onClick={nextReview}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/3 text-slate-300 transition hover:border-white/20 hover:bg-white/6 hover:text-white"
                aria-label="التقييم التالي"
              >
                <ArrowRight size={17} />
              </button>
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {selectedReview && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedReview(null)}
            className="fixed inset-0 z-200 flex items-center justify-center bg-black/90 p-4 backdrop-blur-md sm:p-8"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              onClick={(event) => event.stopPropagation()}
              className="relative max-h-[90vh] max-w-4xl overflow-hidden rounded-2xl border border-white/10 bg-[#111827]"
            >
              <button
                type="button"
                onClick={() => setSelectedReview(null)}
                className="absolute right-3 top-3 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-black/60 text-white backdrop-blur-md transition hover:bg-black/80"
                aria-label="إغلاق"
              >
                <X size={18} />
              </button>

              <img
                src={selectedReview.image}
                alt={`تجربة عميل ${selectedReview.id}`}
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
