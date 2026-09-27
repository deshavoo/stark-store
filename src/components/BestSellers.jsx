import { useMemo, useState } from "react";
import { ArrowLeft, ChevronDown, SlidersHorizontal } from "lucide-react";
import { motion } from "framer-motion";
import ProductCard from "./ProductCard";
import products from "../data/products";

function BestSellers({ onProductSelect }) {
  const [activeBrand, setActiveBrand] = useState("all");
  const [sortBy, setSortBy] = useState("featured");
  const [sortOpen, setSortOpen] = useState(false);

  const brandFilters = [
    { id: "all", label: "الكل" },
    { id: "Pull & Bear", label: "Pull & Bear" },
    { id: "Adidas", label: "Adidas" },
    { id: "New Balance", label: "New Balance" },
  ];

  const sortOptions = [
    { id: "featured", label: "الأكثر طلبًا" },
    { id: "newest", label: "الأحدث" },
    { id: "low", label: "السعر: الأقل" },
    { id: "high", label: "السعر: الأعلى" },
  ];

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (activeBrand !== "all") {
      result = result.filter((product) => product.brand === activeBrand);
    }

    switch (sortBy) {
      case "newest":
        result.sort((a, b) => Number(b.isNew) - Number(a.isNew));
        break;

      case "low":
        result.sort((a, b) => a.price - b.price);
        break;

      case "high":
        result.sort((a, b) => b.price - a.price);
        break;

      case "featured":
      default:
        result.sort((a, b) => Number(b.isBestSeller) - Number(a.isBestSeller));
        break;
    }

    return result;
  }, [activeBrand, sortBy]);

  const currentSortLabel =
    sortOptions.find((option) => option.id === sortBy)?.label || "الأكثر طلبًا";

  return (
    <section
      id="products"
      dir="rtl"
      className="relative overflow-hidden bg-[#0B0F19] px-5 py-20 sm:px-8 lg:px-10 lg:py-28"
    >
      <div className="pointer-events-none absolute -right-40 top-1/3 h-80 w-80 rounded-full bg-[#4E54C8]/10 blur-[130px]" />
      <div className="pointer-events-none absolute -left-40 bottom-0 h-80 w-80 rounded-full bg-[#8F94FB]/10 blur-[130px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <div className="flex flex-col gap-7">
            <div className="text-right">
              <div className="mb-3 inline-flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#F59E0B] shadow-[0_0_10px_#F59E0B]" />

                <span
                  dir="ltr"
                  className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#F59E0B] sm:text-xs"
                >
                  Trending Now
                </span>
              </div>

              <h2 className="text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
                الأكثر{" "}
                <span className="bg-linear-to-r from-[#4E54C8] to-[#8F94FB] bg-clip-text text-transparent">
                  طلبًا
                </span>
              </h2>

              <p className="mt-3 max-w-lg text-sm leading-7 text-slate-500 sm:text-base">
                اكتشف القطع الأكثر طلبًا حاليًا من مجموعة STARK.
              </p>
            </div>

            <div className="flex flex-col gap-3 border-t border-white/10 pt-5 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-2 overflow-x-auto pb-1">
                <SlidersHorizontal
                  size={16}
                  className="shrink-0 text-slate-500"
                />

                {brandFilters.map((filter) => (
                  <button
                    key={filter.id}
                    type="button"
                    onClick={() => setActiveBrand(filter.id)}
                    className={`shrink-0 rounded-full border px-4 py-2 text-xs font-semibold transition duration-300 ${
                      activeBrand === filter.id
                        ? "border-[#8F94FB]/40 bg-linear-to-r from-[#4E54C8] to-[#8F94FB] text-white shadow-[0_0_20px_rgba(78,84,200,0.18)]"
                        : "border-white/10 bg-white/2.5 text-slate-400 hover:border-white/20 hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    {filter.label}
                  </button>
                ))}
              </div>

              <div className="relative shrink-0">
                <button
                  type="button"
                  onClick={() => setSortOpen((current) => !current)}
                  className="flex w-full items-center justify-between gap-4 rounded-full border border-white/10 bg-white/2.5 px-4 py-2.5 text-xs font-semibold text-slate-300 transition hover:border-white/20 hover:bg-white/5 sm:w-auto"
                >
                  <span>{currentSortLabel}</span>

                  <ChevronDown
                    size={15}
                    className={`transition-transform duration-300 ${
                      sortOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {sortOpen && (
                  <div className="absolute left-0 right-0 top-full z-30 mt-2 min-w-45 overflow-hidden rounded-2xl border border-white/10 bg-[#111827] p-1.5 shadow-2xl sm:right-auto">
                    {sortOptions.map((option) => (
                      <button
                        key={option.id}
                        type="button"
                        onClick={() => {
                          setSortBy(option.id);
                          setSortOpen(false);
                        }}
                        className={`flex w-full items-center rounded-xl px-3 py-2.5 text-right text-xs font-semibold transition ${
                          sortBy === option.id
                            ? "bg-white/8 text-white"
                            : "text-slate-400 hover:bg-white/5 hover:text-white"
                        }`}
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </motion.div>

        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
              >
                <ProductCard product={product} onSelect={onProductSelect} />
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="rounded-3xl border border-white/10 bg-white/2.5 px-6 py-16 text-center">
            <p className="text-sm font-semibold text-white">
              لا توجد منتجات في هذا التصنيف حاليًا.
            </p>

            <button
              type="button"
              onClick={() => setActiveBrand("all")}
              className="mt-5 rounded-full bg-linear-to-r from-[#4E54C8] to-[#8F94FB] px-5 py-2.5 text-xs font-bold text-white"
            >
              عرض كل المنتجات
            </button>
          </div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            delay: 0.3,
          }}
          className="mt-10 flex justify-center"
        >
          <a
            href="#products"
            className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/3 px-6 py-3.5 text-sm font-semibold text-white transition duration-300 hover:border-[#8F94FB]/30 hover:bg-white/6"
          >
            عرض الكولكشن كامل
            <ArrowLeft
              size={17}
              className="transition-transform duration-300 group-hover:-translate-x-1"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default BestSellers;
