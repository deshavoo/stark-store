import { useEffect, useState } from "react";
import { X, ShoppingBag, MessageCircle, Check } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

function ProductModal({ product, onClose, onAddToCart }) {
  const [selectedSize, setSelectedSize] = useState(null);
  const [added, setAdded] = useState(false);

  const sizes = ["40", "41", "42", "43", "44", "45"];

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setSelectedSize(null);
    setAdded(false);
  }, [product]);

  if (!product) return null;

  const handleAddToCart = () => {
    if (!selectedSize) return;

    onAddToCart({
      ...product,
      size: selectedSize,
    });

    setAdded(true);

    setTimeout(() => {
      setAdded(false);
      onClose();
    }, 700);
  };

  const handleWhatsApp = () => {
    if (!selectedSize) return;

    const message = `مرحبًا STARK 👋

أريد طلب:

${product.name}

المقاس: ${selectedSize}
السعر: ${product.price.toLocaleString()} EGP

يرجى التواصل معي لتأكيد الطلب.`;

    const whatsappUrl = `https://wa.me/201000000000?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <AnimatePresence>
      {product && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-100 flex items-end justify-center bg-black/80 p-0 backdrop-blur-md sm:items-center sm:p-5"
        >
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.97 }}
            transition={{ duration: 0.3 }}
            onClick={(event) => event.stopPropagation()}
            className="relative max-h-[92vh] w-full max-w-4xl overflow-y-auto rounded-t-4xl border border-white/10 bg-[#0B0F19] shadow-2xl sm:rounded-4xl"
          >
            {/* Close */}
            <button
              type="button"
              onClick={onClose}
              className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-black/50 text-white backdrop-blur-md transition hover:bg-white/10"
              aria-label="إغلاق"
            >
              <X size={19} />
            </button>

            <div className="grid lg:grid-cols-2">
              {/* Image */}
              <div className="relative aspect-square overflow-hidden bg-[#111827] lg:aspect-auto lg:min-h-137.5">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-linear-to-t from-[#0B0F19]/60 via-transparent to-transparent" />

                <div className="absolute left-5 top-5 rounded-full bg-[#F59E0B] px-3 py-1.5 text-[10px] font-extrabold tracking-wider text-black">
                  {product.badge}
                </div>
              </div>

              {/* Details */}
              <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10">
                <p className="text-xs font-medium uppercase tracking-widest text-slate-500">
                  {product.category}
                </p>

                <h2 className="mt-3 font-['Poppins'] text-2xl font-bold text-white sm:text-3xl">
                  {product.name}
                </h2>

                {/* Price */}
                <div className="mt-5 flex flex-wrap items-center gap-3">
                  <span className="text-2xl font-bold text-white">
                    {product.price.toLocaleString()} EGP
                  </span>

                  <span className="text-sm text-slate-500 line-through">
                    {product.oldPrice.toLocaleString()} EGP
                  </span>

                  <span className="rounded-full bg-[#F59E0B]/10 px-2.5 py-1 text-xs font-bold text-[#F59E0B]">
                    -{product.discount}%
                  </span>
                </div>

                <div className="my-7 h-px bg-white/10" />

                {/* Size */}
                <div>
                  <div className="mb-3 flex items-center justify-between">
                    <p className="text-sm font-semibold text-white">
                      اختر المقاس
                    </p>

                    <span className="text-xs text-slate-500">EU</span>
                  </div>

                  <div className="grid grid-cols-3 gap-2 sm:grid-cols-6 lg:grid-cols-3">
                    {sizes.map((size) => (
                      <button
                        type="button"
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`rounded-xl border py-3 text-sm font-semibold transition ${
                          selectedSize === size
                            ? "border-[#8F94FB] bg-linear-to-r from-[#4E54C8] to-[#8F94FB] text-white shadow-[0_0_20px_rgba(78,84,200,0.2)]"
                            : "border-white/10 bg-white/3 text-slate-300 hover:border-white/20 hover:bg-white/6"
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="mt-8 space-y-3">
                  <button
                    type="button"
                    onClick={handleAddToCart}
                    disabled={!selectedSize}
                    className={`flex w-full items-center justify-center gap-2 rounded-xl py-4 text-sm font-bold text-white transition ${
                      added
                        ? "bg-[#22C55E]"
                        : "bg-linear-to-r from-[#4E54C8] to-[#8F94FB] hover:shadow-[0_0_30px_rgba(78,84,200,0.3)]"
                    } disabled:cursor-not-allowed disabled:opacity-40`}
                  >
                    {added ? (
                      <>
                        <Check size={18} />
                        تمت الإضافة للسلة
                      </>
                    ) : (
                      <>
                        <ShoppingBag size={18} />
                        أضف للسلة
                      </>
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={handleWhatsApp}
                    disabled={!selectedSize}
                    className="flex w-full items-center justify-center gap-2 rounded-xl border border-[#25D366]/20 bg-[#25D366]/10 py-4 text-sm font-bold text-[#25D366] transition hover:bg-[#25D366]/15 disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    <MessageCircle size={18} />
                    اطلب مباشرة عبر WhatsApp
                  </button>
                </div>

                {!selectedSize && (
                  <p className="mt-3 text-center text-xs text-slate-500">
                    اختر المقاس أولًا للمتابعة
                  </p>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default ProductModal;
