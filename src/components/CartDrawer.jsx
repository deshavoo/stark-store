import {
  Minus,
  Plus,
  Trash2,
  X,
  MessageCircle,
  ShoppingBag,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

function CartDrawer({ isOpen, onClose, cart, onUpdateQuantity, onRemove }) {
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleWhatsAppOrder = () => {
    if (!cart.length) return;

    const items = cart
      .map(
        (item) =>
          `• ${item.name}\n  المقاس: ${item.size}\n  الكمية: ${
            item.quantity
          }\n  السعر: ${item.price.toLocaleString()} EGP`
      )
      .join("\n\n");

    const message = `مرحبًا STARK 👋
  
  أرغب في طلب المنتجات التالية:
  
  ${items}
  
  --------------------
  الإجمالي: ${total.toLocaleString()} EGP
  
  يرجى التواصل معي لتأكيد الطلب.`;

    const whatsappUrl = `https://wa.me/201011552009?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.button
            type="button"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-90 cursor-default bg-black/70 backdrop-blur-sm"
            aria-label="إغلاق السلة"
          />

          {/* Drawer */}
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{
              duration: 0.3,
              ease: "easeOut",
            }}
            dir="rtl"
            className="fixed right-0 top-0 z-100 flex h-full w-full max-w-md flex-col border-l border-white/10 bg-[#0B0F19] shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-5">
              <div>
                <p
                  dir="ltr"
                  className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#8F94FB]"
                >
                  STARK CART
                </p>

                <h2 className="mt-1 text-xl font-extrabold text-white">
                  سلة المشتريات
                </h2>
              </div>

              <button
                type="button"
                onClick={onClose}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/3 text-slate-300 transition hover:bg-white/10 hover:text-white"
                aria-label="إغلاق"
              >
                <X size={19} />
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto px-5 py-5">
              {!cart.length ? (
                <div className="flex h-full flex-col items-center justify-center text-center">
                  <div className="flex h-20 w-20 items-center justify-center rounded-3xl border border-white/10 bg-white/3">
                    <ShoppingBag
                      size={30}
                      className="text-slate-600"
                      strokeWidth={1.5}
                    />
                  </div>

                  <h3 className="mt-5 text-lg font-bold text-white">
                    السلة فاضية
                  </h3>

                  <p className="mt-2 max-w-xs text-sm leading-6 text-slate-500">
                    اختار المنتجات اللي عجبتك وضيفها للسلة.
                  </p>

                  <button
                    type="button"
                    onClick={onClose}
                    className="mt-6 rounded-full bg-linear-to-r from-[#4E54C8] to-[#8F94FB] px-6 py-3 text-sm font-bold text-white transition hover:shadow-[0_0_30px_rgba(78,84,200,0.3)]"
                  >
                    تصفح الكولكشن
                  </button>
                </div>
              ) : (
                <div className="space-y-3">
                  {cart.map((item) => (
                    <motion.div
                      layout
                      key={item.cartId}
                      className="rounded-2xl border border-white/10 bg-white/2.5 p-3"
                    >
                      <div className="flex gap-3">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="h-24 w-24 shrink-0 rounded-xl object-cover"
                        />

                        <div className="min-w-0 flex-1">
                          <div className="flex items-start justify-between gap-2">
                            <div className="min-w-0">
                              <h3 className="truncate font-['Poppins'] text-sm font-semibold text-white">
                                {item.name}
                              </h3>

                              <p className="mt-1 text-xs text-slate-500">
                                المقاس:{" "}
                                <span className="font-semibold text-slate-300">
                                  {item.size}
                                </span>
                              </p>
                            </div>

                            <button
                              type="button"
                              onClick={() => onRemove(item.cartId)}
                              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-slate-600 transition hover:bg-red-500/10 hover:text-red-400"
                              aria-label={`حذف ${item.name}`}
                            >
                              <Trash2 size={15} />
                            </button>
                          </div>

                          <div className="mt-3 flex items-center justify-between gap-2">
                            <span className="text-sm font-bold text-white">
                              {(item.price * item.quantity).toLocaleString()}{" "}
                              EGP
                            </span>

                            <div className="flex items-center gap-1 rounded-xl border border-white/10 bg-black/20 p-1">
                              <button
                                type="button"
                                onClick={() =>
                                  onUpdateQuantity(
                                    item.cartId,
                                    item.quantity - 1
                                  )
                                }
                                className="flex h-7 w-7 items-center justify-center rounded-lg text-slate-400 transition hover:bg-white/10 hover:text-white"
                                aria-label="تقليل الكمية"
                              >
                                <Minus size={13} />
                              </button>

                              <span className="w-7 text-center text-xs font-bold text-white">
                                {item.quantity}
                              </span>

                              <button
                                type="button"
                                onClick={() =>
                                  onUpdateQuantity(
                                    item.cartId,
                                    item.quantity + 1
                                  )
                                }
                                className="flex h-7 w-7 items-center justify-center rounded-lg text-slate-400 transition hover:bg-white/10 hover:text-white"
                                aria-label="زيادة الكمية"
                              >
                                <Plus size={13} />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {cart.length > 0 && (
              <div className="border-t border-white/10 bg-[#0B0F19] p-5">
                <div className="mb-4 rounded-2xl border border-white/10 bg-white/2.5 p-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-500">إجمالي الطلب</span>

                    <span className="text-xl font-extrabold text-white">
                      {total.toLocaleString()} EGP
                    </span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleWhatsAppOrder}
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#25D366] py-4 text-sm font-bold text-black transition duration-300 hover:bg-[#20bd5a] hover:shadow-[0_0_30px_rgba(37,211,102,0.2)]"
                >
                  <MessageCircle size={19} />
                  إتمام الطلب عبر WhatsApp
                </button>

                <p className="mt-3 text-center text-[10px] leading-5 text-slate-600">
                  سيتم إرسال تفاصيل طلبك إلى WhatsApp لتأكيد الطلب.
                </p>
              </div>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}

export default CartDrawer;
