import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ShoppingBag, Menu, Search, X, ArrowUpLeft } from "lucide-react";

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

function Navbar({ cartCount, onCartOpen, products = [], onProductSelect }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const closeSearch = () => {
    setSearchOpen(false);
    setSearchValue("");
  };

  const filteredProducts = products.filter((product) => {
    const query = searchValue.trim().toLowerCase();

    if (!query) return true;

    return (
      product.name.toLowerCase().includes(query) ||
      product.category.toLowerCase().includes(query)
    );
  });

  const handleProductSelect = (product) => {
    closeSearch();

    if (onProductSelect) {
      onProductSelect(product);
    }
  };

  return (
    <>
      <nav
        dir="rtl"
        className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-[#0B0F19]/75 backdrop-blur-xl"
      >
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
          {/* Logo */}
          <a
            href="#home"
            onClick={closeMenu}
            className="group flex items-center"
          >
            <img
              src="/logo.png"
              alt="STARK"
              className="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 md:flex">
            {navigationLinks.map((link, index) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  index === 0 ? "text-white" : "text-slate-400 hover:text-white"
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            {/* Search */}
            <button
              type="button"
              onClick={() => setSearchOpen(true)}
              className="rounded-full p-2.5 text-slate-300 transition hover:bg-white/5 hover:text-white"
              aria-label="بحث"
            >
              <Search size={20} />
            </button>

            {/* Cart */}
            <button
              type="button"
              onClick={onCartOpen}
              className="relative rounded-full p-2.5 text-slate-300 transition hover:bg-white/5 hover:text-white"
              aria-label="سلة المشتريات"
            >
              <ShoppingBag size={20} />

              <AnimatePresence mode="popLayout">
                <motion.span
                  key={cartCount}
                  initial={{
                    scale: 0.5,
                    opacity: 0,
                  }}
                  animate={{
                    scale: 1,
                    opacity: 1,
                  }}
                  className="absolute right-1 top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-[#F59E0B] px-1 text-[9px] font-bold text-black"
                >
                  {cartCount}
                </motion.span>
              </AnimatePresence>
            </button>

            {/* Mobile Menu */}
            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              className="rounded-full p-2.5 text-slate-300 transition hover:bg-white/5 hover:text-white md:hidden"
              aria-label="فتح القائمة"
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </nav>

      {/* Search Overlay */}
      <AnimatePresence>
        {searchOpen && (
          <>
            {/* Background */}
            <motion.button
              type="button"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeSearch}
              className="fixed inset-0 z-80 cursor-default bg-black/80 backdrop-blur-md"
              aria-label="إغلاق البحث"
            />

            {/* Search Panel */}
            <motion.div
              initial={{
                opacity: 0,
                y: -25,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -25,
              }}
              transition={{
                duration: 0.25,
              }}
              dir="rtl"
              className="fixed left-0 right-0 top-0 z-90 border-b border-white/10 bg-[#0B0F19]/95 shadow-2xl backdrop-blur-xl"
            >
              <div className="mx-auto max-w-4xl px-5 py-6 sm:px-8">
                {/* Search Header */}
                <div className="flex items-center gap-3">
                  <div className="relative flex-1">
                    <Search
                      size={19}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500"
                    />

                    <input
                      autoFocus
                      type="text"
                      value={searchValue}
                      onChange={(event) => setSearchValue(event.target.value)}
                      placeholder="ابحث عن سنيكرز..."
                      className="w-full rounded-2xl border border-white/10 bg-white/4 py-4 pl-5 pr-12 text-sm text-white outline-none placeholder:text-slate-600 transition focus:border-[#8F94FB]/40 focus:bg-white/6"
                    />

                    {searchValue && (
                      <button
                        type="button"
                        onClick={() => setSearchValue("")}
                        className="absolute left-3 top-1/2 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full text-slate-500 transition hover:bg-white/10 hover:text-white"
                        aria-label="مسح البحث"
                      >
                        <X size={15} />
                      </button>
                    )}
                  </div>

                  <button
                    type="button"
                    onClick={closeSearch}
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/3 text-slate-400 transition hover:bg-white/10 hover:text-white"
                    aria-label="إغلاق البحث"
                  >
                    <X size={19} />
                  </button>
                </div>

                {/* Results */}
                <div className="mt-5 max-h-[65vh] overflow-y-auto">
                  {!filteredProducts.length ? (
                    <div className="py-14 text-center">
                      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-white/3">
                        <Search size={24} className="text-slate-600" />
                      </div>

                      <h3 className="mt-4 text-base font-bold text-white">
                        مفيش نتائج
                      </h3>

                      <p className="mt-2 text-xs text-slate-500">
                        جرّب اسم منتج أو نوع مختلف.
                      </p>
                    </div>
                  ) : (
                    <div className="space-y-2">
                      <div className="mb-3 flex items-center justify-between">
                        <span className="text-xs font-semibold text-slate-500">
                          {searchValue
                            ? `${filteredProducts.length} نتائج`
                            : "منتجات STARK"}
                        </span>

                        <span
                          dir="ltr"
                          className="font-['Poppins'] text-[9px] font-bold tracking-[0.18em] text-[#8F94FB]"
                        >
                          SEARCH
                        </span>
                      </div>

                      {filteredProducts.map((product) => (
                        <button
                          type="button"
                          key={product.id}
                          onClick={() => handleProductSelect(product)}
                          className="group flex w-full items-center gap-4 rounded-2xl border border-transparent bg-white/2 p-3 text-right transition hover:border-white/10 hover:bg-white/5"
                        >
                          <img
                            src={product.image}
                            alt={product.name}
                            className="h-16 w-16 shrink-0 rounded-xl object-cover"
                          />

                          <div className="min-w-0 flex-1">
                            <p className="truncate font-['Poppins'] text-sm font-semibold text-white">
                              {product.name}
                            </p>

                            <p className="mt-1 text-xs text-slate-500">
                              {product.category}
                            </p>

                            <p className="mt-1 text-sm font-bold text-white">
                              {product.price.toLocaleString()} EGP
                            </p>
                          </div>

                          <ArrowUpLeft
                            size={17}
                            className="shrink-0 text-slate-600 transition group-hover:-translate-x-1 group-hover:text-[#8F94FB]"
                          />
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.button
              type="button"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMenu}
              className="fixed inset-0 z-60 bg-black/70 backdrop-blur-sm md:hidden"
              aria-label="إغلاق القائمة"
            />

            <motion.div
              initial={{
                opacity: 0,
                y: -20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -20,
              }}
              transition={{
                duration: 0.25,
              }}
              dir="rtl"
              className="fixed left-4 right-4 top-24 z-70 overflow-hidden rounded-3xl border border-white/10 bg-[#0B0F19]/95 p-5 shadow-2xl backdrop-blur-xl md:hidden"
            >
              <div className="mb-4 flex items-center justify-between border-b border-white/10 pb-4">
                <span
                  dir="ltr"
                  className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500"
                >
                  STARK MENU
                </span>

                <button
                  type="button"
                  onClick={closeMenu}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/3 text-slate-300 transition hover:bg-white/10 hover:text-white"
                  aria-label="إغلاق القائمة"
                >
                  <X size={18} />
                </button>
              </div>

              <div className="space-y-1">
                {navigationLinks.map((link, index) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={closeMenu}
                    className="group flex items-center justify-between rounded-2xl px-4 py-4 text-sm font-semibold text-slate-300 transition hover:bg-white/4 hover:text-white"
                  >
                    <span>{link.label}</span>

                    <span
                      dir="ltr"
                      className={`font-['Poppins'] text-[10px] font-bold ${
                        index === 0
                          ? "text-[#8F94FB]"
                          : "text-slate-600 group-hover:text-[#8F94FB]"
                      }`}
                    >
                      0{index + 1}
                    </span>
                  </a>
                ))}
              </div>

              <button
                type="button"
                onClick={() => {
                  closeMenu();
                  onCartOpen();
                }}
                className="mt-4 flex w-full items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/3 py-4 text-sm font-bold text-white transition hover:bg-white/6"
              >
                <ShoppingBag size={17} />

                <span>سلة المشتريات</span>

                <span className="flex h-6 min-w-6 items-center justify-center rounded-full bg-[#F59E0B] px-1.5 text-[10px] font-black text-black">
                  {cartCount}
                </span>
              </button>

              <a
                href="#products"
                onClick={closeMenu}
                className="mt-3 flex items-center justify-center rounded-2xl bg-linear-to-r from-[#4E54C8] to-[#8F94FB] py-4 text-sm font-bold text-white transition hover:shadow-[0_0_30px_rgba(78,84,200,0.3)]"
              >
                تسوق الكولكشن
              </a>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;
