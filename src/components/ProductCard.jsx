import { ArrowUpLeft, ShoppingBag } from "lucide-react";
import { motion } from "framer-motion";

function ProductCard({ product, onSelect }) {
  return (
    <motion.article
      whileHover={{ y: -7 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      onClick={() => onSelect(product)}
      className="group relative cursor-pointer overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/2.5 transition-colors duration-300 hover:border-white/15 hover:bg-white/4"
    >
      {/* Product Image */}
      <div className="relative aspect-square overflow-hidden bg-[#111827]">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-110"
        />

        {/* Image Overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent opacity-60 transition duration-300 group-hover:opacity-90" />

        {/* Badge */}
        <div className="absolute left-3 top-3 rounded-full bg-[#F59E0B] px-2.5 py-1.5 text-[9px] font-extrabold tracking-wider text-black sm:left-4 sm:top-4 sm:px-3 sm:text-[10px]">
          {product.badge}
        </div>

        {/* Quick View */}
        <button
          type="button"
          onClick={(event) => {
            event.stopPropagation();
            onSelect(product);
          }}
          aria-label={`عرض ${product.name}`}
          className="absolute right-3 top-3 flex h-9 w-9 -translate-y-2 items-center justify-center rounded-full border border-white/10 bg-black/50 text-white opacity-0 backdrop-blur-md transition duration-300 group-hover:translate-y-0 group-hover:opacity-100 sm:right-4 sm:top-4 sm:h-10 sm:w-10"
        >
          <ArrowUpLeft size={16} />
        </button>

        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between sm:bottom-4 sm:left-4 sm:right-4">
          <span className="rounded-full border border-white/10 bg-black/40 px-2.5 py-1 text-[9px] font-medium text-white/80 backdrop-blur-md sm:px-3 sm:text-[10px]">
            {product.category}
          </span>
        </div>
      </div>

      <div className="p-4 sm:p-5">
        <h3 className="truncate font-['Poppins'] text-sm font-semibold text-white sm:text-base">
          {product.name}
        </h3>

        <div className="mt-3 flex flex-wrap items-center gap-2">
          <span className="text-base font-bold text-white sm:text-lg">
            {product.price.toLocaleString()} EGP
          </span>

          <span className="text-[11px] text-slate-600 line-through sm:text-xs">
            {product.oldPrice.toLocaleString()} EGP
          </span>
        </div>

        <p className="mt-1.5 text-[10px] font-semibold text-[#F59E0B] sm:text-xs">
          خصم {product.discount}%
        </p>

        <button
          type="button"
          onClick={(event) => {
            event.stopPropagation();
            onSelect(product);
          }}
          className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/4 py-3 text-xs font-bold text-white transition duration-300 hover:border-[#8F94FB]/30 hover:bg-linear-to-r hover:from-[#4E54C8] hover:to-[#8F94FB] sm:text-sm"
        >
          <ShoppingBag size={15} />
          التفاصيل
        </button>
      </div>
    </motion.article>
  );
}

export default ProductCard;
