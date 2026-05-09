"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Bike,
  CalendarCheck,
  ChefHat,
  Clock,
  Facebook,
  HeartHandshake,
  Instagram,
  Leaf,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  Quote,
  ShieldCheck,
  Soup,
  Sparkles,
  Star,
  Utensils,
  X,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

const PHONE = "+91 73149 93533";
const CALL_LINK = "tel:+91 7314993533";
const WHATSAPP_LINK = "https://wa.me/917314993533";

const requestedFoodImages = [
  {
    name: "Pav Bhaji",
    alt: "Pav bhaji with buttered pav and spiced vegetable bhaji",
    src: "https://images.unsplash.com/photo-1753357303396-704b5abe8945?auto=format&fit=crop&w=1400&q=84",
  },
  {
    name: "Veg Biryani",
    alt: "Vegetable biryani with papad and pickle",
    src: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmlyeWFuaXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    name: "Samosa",
    alt: "Homemade vegetarian samosa with chutney",
    src: "https://plus.unsplash.com/premium_photo-1695297516710-854716c51121?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    
  },
  {
    name: "Masala Dosa",
    alt: "Masala dosa with chutney and sambar",
    src: "https://images.unsplash.com/photo-1743615467363-250466982515?auto=format&fit=crop&w=1400&q=84",
  },
  {
    name: "Kadhai Paneer",
    alt: "Kadhai paneer vegetarian curry",
    src: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a2FkaGFpJTIwcGFuZWVyfGVufDB8fDB8fHww",
  },
  {
    name: "Paneer Tikka",
    alt: "Paneer tikka vegetarian starter",
    src: "https://media.istockphoto.com/id/1474136049/photo/close-up-image-of-paneer-kebabs-marinated-curd-cheese-pieces-on-metal-skewers-red-onion-and.webp?a=1&b=1&s=612x612&w=0&k=20&c=cvfV2qr33X-FNf0E4GCYnVovx3w7DdXmyIxv4EuMLII=",
  },
  {
    name: "Chole Bhature",
    alt: "Chole bhature with chickpea curry and bhature",
    src: "https://media.istockphoto.com/id/979914742/photo/chole-bhature-or-chick-pea-curry-and-fried-puri-served-in-terracotta-crockery-over-white.webp?a=1&b=1&s=612x612&w=0&k=20&c=8pmBVIcNb-GIFnsBT0sYqfy-YtzNq7pOqc6lQZgFOPo=",
  },
];

const navLinks = [
  ["About", "#about"],
  ["Menu", "#menu"],
  ["Why Us", "#why-us"],
  ["Reviews", "#reviews"],
  ["Gallery", "#gallery"],
  ["Contact", "#contact"],
];

const heroImages = [
  requestedFoodImages[0].src,
  requestedFoodImages[3].src,
  requestedFoodImages[4].src,
];

const menuBackdropImages = [
  requestedFoodImages[1].src,
  requestedFoodImages[5].src,
  requestedFoodImages[6].src,
];

const maaKiRasoiPhotos = requestedFoodImages;

const menuItems = [
  {
    category: "North Indian",
    name: "Paneer Butter Masala",
    desc: "Silky tomato gravy, tender paneer, homestyle spices.",
    price: "₹220",
    badge: "Bestseller",
    image: requestedFoodImages[4].src,
  },
  {
    category: "North Indian",
    name: "Dal Tadka Thali",
    desc: "Comforting dal, seasonal sabzi, rice, roti and salad.",
    price: "₹180",
    badge: "Family Pick",
    image: requestedFoodImages[1].src,
  },
  {
    category: "South Indian",
    name: "Masala Dosa",
    desc: "Crisp dosa with potato masala, sambar and chutneys.",
    price: "₹130",
    badge: "Trending",
    image: requestedFoodImages[3].src,
  },
  {
    category: "Chinese",
    name: "Veg Hakka Noodles",
    desc: "Wok-tossed noodles with crunchy vegetables.",
    price: "₹150",
    badge: "Hot",
    image: requestedFoodImages[2].src,
  },
  {
    category: "Kebabs",
    name: "Hara Bhara Kebab",
    desc: "Crisp spinach and pea kebabs with mint chutney.",
    price: "₹170",
    badge: "Chef's Choice",
    image: requestedFoodImages[5].src,
  },
  {
    category: "Sandwiches",
    name: "Cheese Corn Sandwich",
    desc: "Golden grilled bread, creamy corn and melted cheese.",
    price: "₹110",
    badge: "Snack Star",
    image: requestedFoodImages[6].src,
  },
  {
    category: "Biryani",
    name: "Veg Dum Biryani",
    desc: "Fragrant rice, vegetables, saffron notes and raita.",
    price: "₹190",
    badge: "Comfort Bowl",
    image: requestedFoodImages[1].src,
  },
  {
    category: "Fast Food",
    name: "Crispy Veg Burger",
    desc: "Crunchy patty, fresh lettuce and house sauce.",
    price: "₹99",
    badge: "Student Fav",
    image: requestedFoodImages[0].src,
  },
  {
    category: "Beverages",
    name: "Masala Chaas",
    desc: "Cooling buttermilk with roasted cumin and mint.",
    price: "₹60",
    badge: "Fresh",
    image: requestedFoodImages[0].src,
  },
];

const fullMenuGroups: Array<{ category: string; items: Array<[string, string]> }> = [
  { category: "Soup", items: [["Soup (Tomato/Lemon Coriander)", "68"], ["Hot And Sour Soup", "79"], ["Manchow Soup", "79"]] },
  { category: "Cold Drinks", items: [["Mineral Water", "20"], ["Fresh Lime Water", "37"], ["Butter Milk (Jeera/Pudina/Ginger)", "32"], ["Fresh Lime Soda", "42"], ["Lassi", "40"], ["Cold Coffee", "60"]] },
  { category: "Salad & Papad", items: [["Onion Salad", "20"], ["Green Salad", "25"], ["Punjabi Salad", "45"], ["Cucumber Salad", "35"], ["Dry Papad", "20"], ["Fry Papad", "20"], ["Masala Papad (Dry/Fry)", "25"]] },
  { category: "Dal & Rice", items: [["Dal Fry", "85"], ["Dal Tadka", "90"], ["Jeera Fry Dal", "85"], ["Yellow Dal", "85"], ["Dal Hari Mirch", "95"], ["Dal Butter Fry", "100"], ["Dal Kolhapuri", "110"], ["Dal Makhani", "142"], ["Plain Rice", "79"], ["Jeera Rice", "89"], ["Veg Pulao", "105"], ["Butter Rice", "95"], ["Sambhar Rice", "100"], ["Masala Rice", "110"], ["Butter Khichdi", "100"], ["Butter Khichdi Masala", "110"], ["Cheese Butter Khichdi", "115"], ["Punjabi Butter Khichdi", "135"]] },
  { category: "Biryani", items: [["Punjabi Biryani", "142"], ["Handi Biryani", "147"], ["Andhra Biryani", "147"], ["Shahi Biryani", "158"], ["Hyderabadi Biryani", "158"]] },
  { category: "Vegetables", items: [["Sev Tamatar", "90"], ["Aloo Jeera", "120"], ["Aloo Mutter", "120"], ["Aloo Gobhi Mutter", "125"], ["Aloo Methi", "120"], ["Bhindi Masala", "126"], ["Crispy Bhindi", "125"], ["Mix Veg", "125"], ["Aloo Tamatar", "120"], ["Mutter Masala", "125"], ["Veg Kofta", "130"], ["Begain Bharta", "130"], ["Doodh Sev", "130"], ["Makai Mutter Masaledar", "130"], ["Punjabi Chole", "135"], ["Chana Masala", "130"], ["Dum Aloo", "135"], ["Stuff Tomato", "135"], ["Sev Paneer", "135"], ["Punjabi Kofta", "140"], ["Sev Bhaji", "140"], ["Veg Kolhapuri", "130"], ["Rajma Masala", "135"], ["Malai Kofta Brown Gravy", "142"], ["Malai Kofta White Gravy", "180"], ["Makai Rasoi Special Vegetable", "140"], ["Methi Mutter Malai Brown Gravy", "140"], ["Methi Mutter Malai White", "150"], ["Kadhai Veg", "121"], ["Chole Paneer", "135"], ["Shahi Methi", "140"], ["Mushroom Masala", "145"]] },
  { category: "Paneer Dishes", items: [["Palak Paneer", "145"], ["Mutter Paneer", "150"], ["Butter Paneer Masala", "150"], ["Paneer Chatpata", "150"], ["Paneer Masala", "150"], ["Handi Paneer", "150"], ["Punjabi Paneer", "158"], ["Paneer Kolhapuri", "158"], ["Paneer Do Pyaza", "158"], ["Kadhai Paneer", "158"], ["Paneer Tikka Masala", "158"], ["Paneer Hyderabadi", "158"], ["Cheese Butter Paneer Masala", "165"], ["Paneer Pasanda", "168"], ["Paneer Adraki Masala", "158"], ["Paneer Takatak", "168"], ["Maa Ki Rasoi Paneer", "180"], ["Shahi Paneer", "168"], ["Paneer Bhurji", "189"]] },
  { category: "Kaju Ki Sabji & Raita", items: [["Kaju Curry White", "190"], ["Kaju Curry Brown", "168"], ["Kaju Paneer", "168"], ["Kaju Singapuri", "168"], ["Kaju Masala", "170"], ["Boondi Raita", "68"], ["Veg Raita", "74"], ["Fruit Raita", "100"], ["Pineapple Raita", "100"]] },
  { category: "Chinese", items: [["French Fries", "89"], ["Veg Noodles", "89"], ["Hakka Noodles", "89"], ["Schezwan Noodles", "95"], ["Manchurian Dry", "95"], ["Manchurian Gravy", "95"], ["Fried Rice", "95"], ["Schezwan Rice", "95"], ["Chilly Garlic Rice", "100"], ["Veg Kothe", "105"], ["Chilly Paneer Dry/Gravy", "150"], ["Honey Chilly Potato", "125"], ["Cheese Ball", "147"], ["Crispy Corn", "105"], ["Chilly Mushroom", "125"], ["Chinese Bhel", "135"]] },
  { category: "Chaat Chopati", items: [["Peanut Chaat", "80"], ["Pav Bhaji", "85"], ["Chole Bhature", "100"], ["Cheese Pav Bhaji", "100"], ["Poori Bhaji", "105"]] },
  { category: "Sandwich", items: [["Cheese Chutney Sandwich", "85"], ["Vegetable Sandwich", "50"], ["Masala Grilled Sandwich", "60"], ["Masala Cheese Sandwich", "65"], ["Cheese Sandwich", "70"], ["Sev Corn Sandwich", "70"], ["Tandoori Cheese Paneer Sandwich", "70"], ["Cheese Burst Sandwich", "80"], ["Garlic Cheese Chutney Sandwich", "70"]] },
  { category: "Roti, Naan & Paratha", items: [["Tandoori Roti", "9"], ["Tandoori Butter Roti", "11"], ["Missi Roti", "20"], ["Rumise Roti", "20"], ["Khasta Roti", "20"], ["Laccha Paratha", "25"], ["Stuff Paratha", "40"], ["Paneer Paratha", "50"], ["Aloo Paratha", "35"], ["Onion Paratha", "35"], ["Gobhi Paratha", "35"], ["Mix Paratha", "50"], ["Cheese Paratha", "65"], ["Basket Roti", "180"], ["Plain Naan", "25"], ["Stuff Naan", "47"], ["Garlic Naan", "47"], ["Chilly Garlic Naan", "53"], ["Cheese Naan", "53"], ["Butter Naan", "32"], ["Cheese Chilli Garlic Naan", "58"], ["Kashmiri Naan", "58"], ["Tawa Roti", "9"], ["Tawa Roti Butter", "11"], ["Tawa Paratha", "20"], ["Tawa Butter Paratha", "25"], ["Paratha Platter 3 Pcs", "105"]] },
  { category: "Tandoor Starters & Kulcha", items: [["Paneer Tikka Dry", "180"], ["Paneer Malai Tikka", "185"], ["Paneer Hariyali Tikka", "180"], ["Paneer Lehsuni Tikka", "180"], ["Paneer Sik Kabab", "165"], ["Paneer Garlic Tikka", "180"], ["Paneer Cheese Tikka", "200"], ["Veg Tikka", "158"], ["Veg Sik Kabab", "142"], ["Onion Sik Kabab", "142"], ["Corn Cheese Kabab", "152"], ["Hara Bhara Kabab", "105"], ["Dahi Kabab", "120"], ["Dahi Roll Kabab", "137"], ["Stuff Kulcha", "50"], ["Paneer Stuff Kulcha", "80"], ["Plain Kulcha", "30"]] },
  { category: "South Indian", items: [["Idli Sambhar", "60"], ["Idli (One Piece)", "25"], ["Plain Dosa", "70"], ["Masala Dosa", "85"], ["Mysore Masala Dosa", "90"], ["Mysore Plain Dosa", "85"], ["Paper Plain Dosa", "90"], ["Paper Masala Dosa", "100"], ["Cheese Dosa", "95"], ["Cheese Masala Dosa", "100"], ["Chilly Paneer Dosa", "140"], ["Manchurian Dosa", "125"], ["Cheese Paneer Dosa", "140"], ["Schezwan Dosa", "85"], ["Plain Uttapam", "70"], ["Uttapam (Onion/Tomato/Capsicum/Mix Veg)", "85"], ["Masala Uttapam", "85"], ["Chilly Paneer Uttapam", "135"]] },
  { category: "Sweets & Extras", items: [["Rasgulla 2pcs", "35"], ["Gulab Jamun", "30"], ["Extra Butter", "15"], ["Extra Cheese", "20"], ["Extra Curd", "25"], ["Extra Bhatura", "20"], ["Extra Idli", "20"], ["Extra Pav", "20"], ["Extra Bafla", "30"]] },
  { category: "Thali", items: [["Regular Thali", "74"], ["Special Thali", "142"], ["Special Dal Bafla Thali", "190"], ["Regular Dal Bafla Ladu", "120"]] },
  { category: "Pasta", items: [["White Sauce Pasta", "110"], ["Red Sauce Pasta", "90"], ["Double Cheese Pasta", "130"]] },
  { category: "Meal For 1 Combo", items: [["Rajma Rice", "105"], ["Dal Tadka + Plain Rice/Jeera Rice", "116"], ["Sev Tomato + 2 Laccha Paratha / 3 Tandoori Roti Butter", "116"], ["Dal Makhni + Jeera Rice / Laccha Paratha 2p", "116"], ["Jeera Aloo + Raita + Twa Paratha 4p / Twa Chapati 5p", "116"], ["Chole + Kulche 2p + Kachomer Salad", "105"], ["Aloo Gobhi Mutter + Raita + Twa Roti 4p / Tandoori 3p", "116"], ["Poori Bhaji + Raita + 5 Poori", "116"], ["Chole Poori + Raita + Poori 5p", "116"], ["Doodh Sev + Twa Roti 4p / Tandoori 4p", "116"], ["Cheese Butter Khichdi + Raita", "116"], ["Paneer Tikka Masala + Twa Roti 4p / Tandoori 4p", "142"], ["Cheese Butter Paneer Masala + Butter Naan 2p", "142"], ["Chilly Paneer With Fried Rice", "131"], ["Chilly Paneer With Noodles", "131"], ["Noodles With Manchurian", "110"], ["Fried Rice With Manchurian", "110"], ["Chinese Platar - Noodles, Manchurian, Fried Rice, Chilly Paneer", "205"], ["South Indian Plater - Vada + Idli + Masala Dosa + Mix Veg Uttapam", "126"], ["Tandoori Plater - 3 Piece Paneer Tikka + 3 Piece Mushroom + 3 Piece Cheese Kabab + 3 Corn Chesse Kabab", "200"]] },
];

const fullMenuCategories = ["All", ...fullMenuGroups.map((group) => group.category)];

const reviews = [
  {
    name: "Ritika Sharma",
    role: "Family dinner regular",
    review:
      "The taste feels close to home. Good quantity, quick service, and the paneer dishes are always comforting.",
  },
  {
    name: "Aman Jain",
    role: "Delivery customer",
    review:
      "Food arrived hot and neatly packed. Great value for late-night cravings around Sudama Nagar.",
  },
  {
    name: "Neha Verma",
    role: "Weekend diner",
    review:
      "Simple, clean, family-friendly place with a big menu. South Indian and biryani both surprised us.",
  },
];

const gallery = maaKiRasoiPhotos.map((photo) => [photo.name, photo.alt, photo.src] as const);

function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
}) {
  const variants = {
    primary: "bg-[#C0392B] text-white shadow-[0_18px_45px_rgba(192,57,43,0.28)] hover:bg-[#a83227]",
    secondary: "bg-white/88 text-[#1F1F1F] ring-1 ring-black/10 hover:bg-[#F4EDE4]",
    ghost: "bg-[#1F1F1F] text-white hover:bg-black",
  };

  return (
    <motion.a
      whileHover={{ y: -2, scale: 1.01 }}
      whileTap={{ scale: 0.98 }}
      href={href}
      className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 text-sm font-bold transition ${variants[variant]} ${className}`}
    >
      {children}
    </motion.a>
  );
}

function Reveal({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-90px" }}
      transition={{ duration: 0.65, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 md:px-4 md:pt-5">
      <nav className="mx-auto flex h-[72px] max-w-6xl items-center justify-between rounded-[28px] border border-white/70 bg-[#fffdf9]/86 px-3 shadow-[0_24px_80px_rgba(31,31,31,0.13)] backdrop-blur-2xl md:px-4">
        <a href="#home" className="group flex items-center gap-3 rounded-3xl pr-2" aria-label="Maa Ki Rasoi home">
          <span className="relative grid size-12 place-items-center overflow-hidden rounded-2xl bg-[#C0392B] text-white shadow-[0_14px_34px_rgba(192,57,43,0.35)]">
            <span className="absolute inset-0 bg-gradient-to-br from-white/22 to-transparent" />
            <Utensils size={21} className="relative" />
          </span>
          <span>
            <span className="font-display block text-xl font-bold leading-none text-[#1F1F1F] transition group-hover:text-[#C0392B]">Maa Ki Rasoi</span>
            <span className="mt-1 flex items-center gap-1 text-[10px] font-black uppercase tracking-[0.18em] text-[#C0392B]">
              <Leaf size={12} />
              Pure Veg Indore
            </span>
          </span>
        </a>

        <div className="hidden items-center rounded-full border border-[#eadbca] bg-white/72 p-1 lg:flex">
          {navLinks.map(([label, href]) => (
            <a
              key={label}
              href={href}
              className="rounded-full px-4 py-2 text-sm font-bold text-[#4B4B4B] transition hover:bg-[#F4EDE4] hover:text-[#C0392B]"
            >
              {label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <a href="#contact" className="flex items-center gap-2 rounded-full bg-[#F4EDE4] px-4 py-3 text-xs font-black text-[#1F1F1F] transition hover:bg-white">
            <Clock size={15} className="text-[#C0392B]" />
            Open till 12
          </a>
          <div className="group relative">
            <ButtonLink href={CALL_LINK} className="px-5 ring-4 ring-[#C0392B]/10">
              <Phone size={17} />
              Reserve Table
            </ButtonLink>
            <span className="pointer-events-none absolute right-0 top-[calc(100%+10px)] w-64 rounded-2xl bg-[#1F1F1F] px-4 py-3 text-xs font-medium text-white opacity-0 shadow-2xl transition group-hover:opacity-100">
              Call Maa Ki Rasoi to reserve your table instantly.
            </span>
          </div>
        </div>

        <button
          className="grid size-12 place-items-center rounded-2xl bg-[#1F1F1F] text-white shadow-lg lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label="Toggle navigation"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="mx-auto mt-3 max-w-6xl rounded-[28px] border border-white/70 bg-[#fffdf9]/94 p-4 shadow-2xl backdrop-blur-2xl lg:hidden"
          >
            <div className="grid gap-2">
              {navLinks.map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  onClick={() => setOpen(false)}
                  className="rounded-2xl px-4 py-3 text-sm font-bold text-[#1F1F1F] hover:bg-[#F4EDE4]"
                >
                  {label}
                </a>
              ))}
              <ButtonLink href={CALL_LINK} className="mt-2 w-full">
                <Phone size={17} />
                Reserve Table
              </ButtonLink>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden pb-16 pt-28 text-white md:pt-36">
      <div className="absolute inset-0">
        {heroImages.map((src, index) => (
          <motion.div
            key={src}
            className="absolute inset-0"
            animate={{ opacity: [index === 0 ? 1 : 0, 1, 0], scale: [1, 1.06, 1.1] }}
            transition={{ duration: 18, repeat: Infinity, delay: index * 6, ease: "easeInOut" }}
          >
            <Image src={src} alt="" fill priority={index === 0} sizes="100vw" className="object-cover" />
          </motion.div>
        ))}
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(18,12,9,0.88),rgba(18,12,9,0.58),rgba(18,12,9,0.25)),linear-gradient(0deg,rgba(18,12,9,0.86),transparent_45%,rgba(18,12,9,0.35))]" />
      </div>

      <motion.div
        className="absolute right-[8%] top-32 hidden rounded-[28px] border border-white/20 bg-white/12 p-3 backdrop-blur-xl lg:block"
        animate={{ y: [0, -16, 0], rotate: [0, 1.5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="relative h-44 w-36 overflow-hidden rounded-3xl">
          <Image src={maaKiRasoiPhotos[3].src} alt={maaKiRasoiPhotos[3].alt} fill sizes="160px" className="object-cover" />
        </div>
        <p className="mt-3 text-sm font-bold">Real Maa Ki Rasoi</p>
      </motion.div>

      <div className="section-shell relative z-10 grid min-h-[76vh] items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/12 px-4 py-2 text-sm font-bold backdrop-blur-xl"
          >
            <Sparkles size={16} className="text-[#D4A373]" />
            Indore's trusted homestyle vegetarian restaurant
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.08 }}
            className="font-display max-w-4xl text-balance text-5xl font-bold leading-[0.95] md:text-7xl"
          >
            Authentic Homestyle Food Delivered Fresh Across Indore
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.16 }}
            className="mt-6 max-w-2xl text-lg leading-8 text-white/82"
          >
            From comforting North Indian meals to delicious South Indian favorites, Maa Ki Rasoi brings families together with unforgettable flavors.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.24 }}
            className="mt-8 flex flex-col gap-3 sm:flex-row"
          >
            <ButtonLink href="#menu" className="animate-[pulseGlow_3s_ease-in-out_infinite]">
              <Utensils size={18} />
              View Full Menu
            </ButtonLink>
            <ButtonLink href={CALL_LINK} variant="secondary">
              <Phone size={18} />
              Reserve Table
            </ButtonLink>
          </motion.div>

          <div className="mt-8 grid max-w-2xl grid-cols-2 gap-3 md:grid-cols-4">
            {[
              ["3.8", "Dining Rating"],
              ["4.1", "Delivery Rating"],
              ["92.3K+", "Delivery Ratings"],
              ["₹400", "For Two"],
            ].map(([value, label]) => (
              <div key={label} className="rounded-2xl border border-white/14 bg-white/10 p-4 backdrop-blur-xl">
                <div className="flex items-center gap-1 text-[#D4A373]">
                  <Star size={15} fill="currentColor" />
                  <span className="text-xl font-black text-white">{value}</span>
                </div>
                <p className="mt-1 text-xs font-semibold uppercase tracking-[0.14em] text-white/65">{label}</p>
              </div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="glass relative hidden overflow-hidden rounded-[36px] p-5 text-[#1F1F1F] lg:block"
        >
          <div className="relative h-80 overflow-hidden rounded-[28px]">
            <Image src={maaKiRasoiPhotos[2].src} alt={maaKiRasoiPhotos[2].alt} fill sizes="420px" className="object-cover" />
          </div>
          <div className="mt-5 grid grid-cols-2 gap-3">
            <div className="rounded-3xl bg-white p-4">
              <Clock className="mb-3 text-[#C0392B]" />
              <p className="text-sm font-black">Open till midnight</p>
              <p className="mt-1 text-xs text-[#4B4B4B]">11:00 AM - 12:00 Midnight</p>
            </div>
            <div className="rounded-3xl bg-[#1F1F1F] p-4 text-white">
              <Bike className="mb-3 text-[#D4A373]" />
              <p className="text-sm font-black">Fast home delivery</p>
              <p className="mt-1 text-xs text-white/70">Fresh, hot and neatly packed</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function About() {
  const storyPoints: Array<[LucideIcon, string, string]> = [
    [MapPin, "Sudama Nagar comfort spot", "Located around Gopur Square, easy for family dinners, student meals and quick takeaway."],
    [Leaf, "Pure vegetarian kitchen", "A wide veg-only menu spanning North Indian, South Indian, Chinese, biryani, snacks and beverages."],
    [Clock, "Lunch to late-night cravings", "Open from 11:00 AM to midnight, made for office lunches, evening meals and late comfort food."],
    [HeartHandshake, "Trusted by regulars", "Known for familiar taste, reasonable pricing, good delivery, packaging and comfortable seating."],
  ];

  return (
    <section id="about" className="relative overflow-hidden py-24">
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#FFF4E8] to-transparent" />
      <div className="section-shell relative grid items-center gap-12 lg:grid-cols-[0.92fr_1.08fr]">
        <Reveal className="relative">
          <div className="relative rounded-[44px] border border-white bg-white/70 p-3 premium-shadow backdrop-blur">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[34px] bg-[#C0392B]/10">
              <Image src={maaKiRasoiPhotos[0].src} alt={maaKiRasoiPhotos[0].alt} fill sizes="(max-width: 1024px) 100vw, 520px" className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 rounded-3xl border border-white/18 bg-white/14 p-5 text-white backdrop-blur-xl">
                <p className="font-display text-3xl font-bold">Ghar jaisa swaad</p>
                <p className="mt-2 text-sm leading-6 text-white/78">Comfort food that feels familiar, fresh and generous.</p>
              </div>
            </div>
            <div className="mt-3 grid grid-cols-3 gap-3">
              {maaKiRasoiPhotos.slice(1, 4).map((photo) => (
                <div key={photo.src} className="relative aspect-square overflow-hidden rounded-3xl bg-[#F4EDE4]">
                  <Image src={photo.src} alt={photo.alt} fill sizes="150px" className="object-cover transition duration-700 hover:scale-110" />
                </div>
              ))}
            </div>
          </div>

          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="glass absolute -right-2 top-8 hidden max-w-[220px] rounded-3xl p-4 md:block"
          >
            <div className="flex items-center gap-2 text-[#C0392B]">
              <Star size={17} fill="currentColor" />
              <p className="font-black text-[#1F1F1F]">4.1 Delivery</p>
            </div>
            <p className="mt-2 text-xs font-semibold leading-5 text-[#4B4B4B]">92K+ delivery ratings from comfort-food lovers.</p>
          </motion.div>

          <div className="glass absolute -bottom-7 left-4 right-4 rounded-[28px] p-4 md:left-auto md:right-5 md:max-w-xs">
            <div className="grid grid-cols-3 gap-3 text-center">
              {[
                ["3.8", "Dining"],
                ["Rs 400", "For two"],
                ["12 AM", "Open till"],
              ].map(([value, label]) => (
                <div key={label} className="rounded-2xl bg-white/78 p-3">
                  <p className="font-black text-[#C0392B]">{value}</p>
                  <p className="mt-1 text-[11px] font-bold uppercase tracking-[0.12em] text-[#4B4B4B]">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal>
          <p className="mb-3 text-sm font-black uppercase tracking-[0.22em] text-[#C0392B]">Our Story</p>
          <h2 className="font-display text-balance text-4xl font-bold leading-tight text-[#1F1F1F] md:text-6xl">
            Indore's everyday rasoi for family meals, quick cravings and pure veg comfort.
          </h2>
          <p className="mt-6 text-lg leading-8 text-[#4B4B4B]">
            At Maa Ki Rasoi, the idea is not complicated: serve food that feels close to home, arrives hot, fits the family budget and gives every guest enough choice to come back with someone new. From Kadai Paneer and Chole to Mysore Dosa, Manchurian, biryani and fresh snacks, the menu is built for Indore's mixed cravings.
          </p>
          <p className="mt-4 text-lg leading-8 text-[#4B4B4B]">
            The restaurant sits in Sudama Nagar near Gopur Square, a familiar local pocket for casual dining, takeaway and delivery. It is pure vegetarian, family friendly, and designed for the kind of meals people trust on busy weekdays, packed weekends and late evenings.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {storyPoints.map(([Icon, title, text]) => (
              <div key={title} className="group rounded-[28px] border border-[#eadbca] bg-white/78 p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-[0_22px_60px_rgba(31,31,31,0.1)]">
                <div className="mb-4 grid size-11 place-items-center rounded-2xl bg-[#F4EDE4] text-[#C0392B] transition group-hover:bg-[#C0392B] group-hover:text-white">
                  <Icon size={21} />
                </div>
                <p className="font-black text-[#1F1F1F]">{title}</p>
                <p className="mt-2 text-sm leading-6 text-[#4B4B4B]">{text}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-[32px] bg-[#1F1F1F] p-5 text-white shadow-[0_24px_70px_rgba(31,31,31,0.16)]">
            <div className="grid gap-4 md:grid-cols-[1fr_auto] md:items-center">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.2em] text-[#D4A373]">Why people remember it</p>
                <p className="mt-3 text-lg font-bold leading-8">Comfortable seating, reasonable prices, good packaging, vegetarian-only food and a menu wide enough for every generation at the table.</p>
              </div>
              <ButtonLink href={CALL_LINK} variant="secondary" className="md:min-w-48">
                <Phone size={18} />
                Call Maa Ki Rasoi
              </ButtonLink>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function MenuSection() {
  const [active, setActive] = useState("All");
  const visibleGroups = useMemo(
    () => (active === "All" ? fullMenuGroups : fullMenuGroups.filter((group) => group.category === active)),
    [active],
  );
  const isOverview = active === "All";

  return (
    <section id="menu" className="relative overflow-hidden bg-[#1F1F1F] py-24 text-white">
      <div className="absolute inset-0">
        {menuBackdropImages.map((src, index) => (
          <motion.div
            key={src}
            className="absolute inset-0"
            animate={{ opacity: [index === 0 ? 0.52 : 0, 0.52, 0], scale: [1, 1.05, 1.09] }}
            transition={{ duration: 20, repeat: Infinity, delay: index * 6.5, ease: "easeInOut" }}
          >
            <Image src={src} alt="" fill sizes="100vw" className="object-cover" />
          </motion.div>
        ))}
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(31,31,31,0.82),rgba(31,31,31,0.92)),radial-gradient(circle_at_top,rgba(192,57,43,0.34),transparent_38rem)]" />
      </div>

      <div className="section-shell relative z-10">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-sm font-black uppercase tracking-[0.22em] text-[#D4A373]">Complete Menu</p>
          <h2 className="font-display text-4xl font-bold md:text-6xl">A full menu, made easier to explore.</h2>
          <p className="mt-5 text-lg leading-8 text-white/72">Start with compact categories, then open the section you want. Prices are shown clearly without the page feeling endless.</p>
        </Reveal>

        <div className="sticky top-24 z-20 mt-10 flex gap-2 overflow-x-auto rounded-full border border-white/14 bg-white/10 p-2 shadow-2xl backdrop-blur-2xl">
          {fullMenuCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActive(category)}
              className={`min-h-11 shrink-0 rounded-full px-5 text-sm font-black transition ${
                active === category ? "bg-[#D4A373] text-[#1F1F1F] shadow-lg" : "bg-white/10 text-white/78 hover:bg-white hover:text-[#C0392B]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {!isOverview && (
          <button
            onClick={() => setActive("All")}
            className="mt-5 rounded-full border border-white/16 bg-white/10 px-5 py-3 text-sm font-black text-white/82 transition hover:bg-white hover:text-[#C0392B]"
          >
            Back to all categories
          </button>
        )}

        <motion.div layout className={`mt-8 grid gap-5 ${isOverview ? "md:grid-cols-2 xl:grid-cols-3" : "lg:grid-cols-2"}`}>
          <AnimatePresence mode="popLayout">
            {visibleGroups.map((group) => (
              <motion.article
                layout
                key={group.category}
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                whileHover={{ y: -6 }}
                className="overflow-hidden rounded-[28px] border border-white/14 bg-white/92 shadow-[0_24px_80px_rgba(0,0,0,0.2)] backdrop-blur-xl"
              >
                <div className="flex items-center justify-between gap-4 border-b border-[#F4EDE4] bg-[#FFFDF9] p-5">
                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.18em] text-[#C0392B]">Pure Veg</p>
                    <h3 className="font-display mt-1 text-2xl font-bold text-[#1F1F1F]">{group.category}</h3>
                  </div>
                  <span className="rounded-full bg-[#F4EDE4] px-3 py-2 text-xs font-black text-[#C0392B]">
                    {group.items.length} items
                  </span>
                </div>
                <div className="grid gap-1 p-4">
                  {(isOverview ? group.items.slice(0, 5) : group.items).map(([name, price]) => (
                    <div key={`${group.category}-${name}`} className="flex items-start justify-between gap-4 rounded-2xl px-3 py-2 transition hover:bg-[#F4EDE4]/70">
                      <p className="text-sm font-bold leading-6 text-[#1F1F1F]">{name}</p>
                      <p className="shrink-0 rounded-full bg-white px-3 py-1 text-sm font-black text-[#C0392B]">Rs {price}</p>
                    </div>
                  ))}
                  {isOverview && group.items.length > 5 && (
                    <button
                      onClick={() => setActive(group.category)}
                      className="mt-3 flex min-h-11 items-center justify-center rounded-2xl bg-[#1F1F1F] px-4 text-sm font-black text-white transition hover:bg-[#C0392B]"
                    >
                      View all {group.items.length} items
                    </button>
                  )}
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
        <div className="mt-10 flex justify-center">
          <ButtonLink href={CALL_LINK}>
            <Phone size={18} />
            Call For Menu & Reservation
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}

function WhyChooseUs() {
  const items: Array<[LucideIcon, string, string]> = [
    [Leaf, "Pure Vegetarian", "A fully vegetarian menu built for family trust and everyday comfort."],
    [ChefHat, "Fresh Ingredients", "Prepared fresh with balanced spices and vibrant presentation."],
    [Bike, "Fast Delivery", "Hot meals packed neatly for quick delivery across nearby Indore areas."],
    [HeartHandshake, "Family Friendly", "Comfortable indoor seating and welcoming service."],
    [ShieldCheck, "Hygienic Kitchen", "Clean processes and reliable preparation standards."],
    [Soup, "Affordable Prices", "Generous portions with average cost around ₹400 for two."],
  ];

  return (
    <section id="why-us" className="py-24">
      <div className="section-shell">
        <Reveal className="max-w-2xl">
          <p className="mb-3 text-sm font-black uppercase tracking-[0.22em] text-[#C0392B]">Why Choose Us</p>
          <h2 className="font-display text-4xl font-bold text-[#1F1F1F] md:text-6xl">Trust signals that make ordering feel effortless.</h2>
        </Reveal>
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {items.map(([Icon, title, text]) => (
            <Reveal key={title as string}>
              <motion.div whileHover={{ rotateX: 3, rotateY: -3, y: -5 }} className="glass h-full rounded-[28px] p-6">
                <div className="grid size-13 place-items-center rounded-2xl bg-[#C0392B] text-white">
                  <Icon size={24} />
                </div>
                <h3 className="mt-5 text-xl font-black text-[#1F1F1F]">{title}</h3>
                <p className="mt-3 leading-7 text-[#4B4B4B]">{text}</p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Reviews() {
  return (
    <section id="reviews" className="bg-[#1F1F1F] py-24 text-white">
      <div className="section-shell">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-sm font-black uppercase tracking-[0.22em] text-[#D4A373]">Customer Reviews</p>
          <h2 className="font-display text-4xl font-bold md:text-6xl">Loved for taste, quantity and speed.</h2>
        </Reveal>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {reviews.map((review, index) => (
            <Reveal key={review.name}>
              <motion.article
                animate={{ y: [0, index === 1 ? -10 : -5, 0] }}
                transition={{ duration: 5 + index, repeat: Infinity, ease: "easeInOut" }}
                className="rounded-[28px] border border-white/10 bg-white/8 p-6 backdrop-blur"
              >
                <Quote className="text-[#D4A373]" />
                <div className="mt-5 flex text-[#D4A373]">
                  {Array.from({ length: 5 }).map((_, star) => (
                    <Star key={star} size={16} fill="currentColor" />
                  ))}
                </div>
                <p className="mt-5 leading-7 text-white/78">{review.review}</p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="grid size-12 place-items-center rounded-full bg-[#C0392B] font-black">{review.name.slice(0, 1)}</div>
                  <div>
                    <p className="font-black">{review.name}</p>
                    <p className="text-sm text-white/55">{review.role}</p>
                  </div>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  return (
    <section id="gallery" className="py-24">
      <div className="section-shell">
        <Reveal className="max-w-2xl">
          <p className="mb-3 text-sm font-black uppercase tracking-[0.22em] text-[#C0392B]">Food Gallery</p>
          <h2 className="font-display text-4xl font-bold text-[#1F1F1F] md:text-6xl">A visual taste of warmth, freshness and family dining.</h2>
        </Reveal>
        <div className="masonry mt-10">
          {gallery.map(([name, alt, src], index) => (
            <Reveal key={src} className="mb-4 break-inside-avoid">
              <div className={`group relative overflow-hidden rounded-[28px] ${index % 2 === 0 ? "h-80" : "h-64"} premium-shadow`}>
                <Image src={src} alt={alt} fill sizes="(max-width: 640px) 100vw, 380px" loading="lazy" className="object-cover transition duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/58 to-transparent opacity-60 transition group-hover:opacity-90" />
                <p className="absolute bottom-4 left-4 rounded-full bg-white/90 px-4 py-2 text-sm font-black text-[#1F1F1F] shadow-lg backdrop-blur">{name}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function OrderCTA() {
  return (
    <section className="px-4 py-20">
      <div className="section-shell relative overflow-hidden rounded-[40px] bg-[#C0392B] px-6 py-16 text-white premium-shadow md:px-12">
        <div className="absolute -right-10 top-8 hidden text-white/18 md:block">
          <Bike size={220} style={{ animation: "scooter 5s ease-in-out infinite" }} />
        </div>
        <Reveal className="relative z-10 max-w-2xl">
          <p className="mb-3 text-sm font-black uppercase tracking-[0.22em] text-[#F4EDE4]">Call First Experience</p>
          <h2 className="font-display text-4xl font-bold md:text-6xl">Craving Something Delicious?</h2>
          <p className="mt-5 text-lg leading-8 text-white/82">Explore the full menu, then call Maa Ki Rasoi for quick availability, takeaway, delivery details or table reservation.</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="#menu" variant="secondary">
              <Utensils size={18} />
              View Menu
            </ButtonLink>
            <ButtonLink href={CALL_LINK} variant="ghost">
              <Phone size={18} />
              Call Restaurant
            </ButtonLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Contact() {
  const contactItems: Array<[LucideIcon, string, string]> = [
    [MapPin, "Address", "Gopur Square, Sudama Nagar, Indore, Madhya Pradesh, India"],
    [Phone, "Phone", PHONE],
    [Clock, "Working Hours", "11:00 AM - 12:00 Midnight"],
    [CalendarCheck, "Table Booking", "Recommended for families and groups"],
  ];

  return (
    <section id="contact" className="bg-[#F4EDE4]/70 py-24">
      <div className="section-shell grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
        <Reveal>
          <div className="overflow-hidden rounded-[32px] premium-shadow">
            <iframe
              title="Maa Ki Rasoi location map"
              src="https://www.google.com/maps?q=Gopur%20Square%20Sudama%20Nagar%20Indore%20Madhya%20Pradesh%20India&output=embed"
              className="h-[520px] w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </Reveal>
        <Reveal>
          <div className="rounded-[32px] bg-white p-6 premium-shadow md:p-8">
            <p className="mb-3 text-sm font-black uppercase tracking-[0.22em] text-[#C0392B]">Location & Contact</p>
            <h2 className="font-display text-4xl font-bold text-[#1F1F1F]">Visit, call or message Maa Ki Rasoi.</h2>
            <div className="mt-8 grid gap-4">
              {contactItems.map(([Icon, title, text]) => (
                <div key={title} className="flex gap-4 rounded-3xl bg-[#FFFDF9] p-4">
                  <div className="grid size-11 shrink-0 place-items-center rounded-2xl bg-[#F4EDE4] text-[#C0392B]">
                    <Icon size={21} />
                  </div>
                  <div>
                    <p className="font-black text-[#1F1F1F]">{title}</p>
                    <p className="mt-1 text-sm leading-6 text-[#4B4B4B]">{text}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              <ButtonLink href={CALL_LINK} className="px-4">
                <Phone size={17} />
                Call
              </ButtonLink>
              <ButtonLink href={WHATSAPP_LINK} variant="secondary" className="px-4">
                <MessageCircle size={17} />
                WhatsApp
              </ButtonLink>
             <ButtonLink
  href="https://www.google.com/maps/dir/?api=1&destination=22.6895,75.8281"
  variant="ghost"
  className="px-4"
>
  <MapPin size={17} />
  Direction
</ButtonLink>
            </div>
            <form className="mt-8 grid gap-3" aria-label="Quick contact form">
              <input className="h-12 rounded-2xl border border-[#eadbca] bg-[#FFFDF9] px-4 outline-none focus:border-[#C0392B]" placeholder="Your name" />
              <input className="h-12 rounded-2xl border border-[#eadbca] bg-[#FFFDF9] px-4 outline-none focus:border-[#C0392B]" placeholder="Phone number" />
              <textarea className="min-h-28 rounded-2xl border border-[#eadbca] bg-[#FFFDF9] p-4 outline-none focus:border-[#C0392B]" placeholder="Message" />
              <ButtonLink href={CALL_LINK}>
                <Phone size={17} />
                Call to Confirm
              </ButtonLink>
            </form>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[#1F1F1F] pb-28 pt-16 text-white md:pb-10">
      <div className="section-shell grid gap-10 md:grid-cols-[1.2fr_0.8fr_0.8fr_1fr]">
        <div>
          <div className="flex items-center gap-3">
            <span className="grid size-11 place-items-center rounded-full bg-[#C0392B]">
              <Utensils size={20} />
            </span>
            <div>
              <p className="font-display text-2xl font-bold">Maa Ki Rasoi</p>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#D4A373]">Homely Taste, Served Fresh Every Day</p>
            </div>
          </div>
          <p className="mt-5 max-w-sm leading-7 text-white/62">A premium modern vegetarian restaurant experience from Sudama Nagar, Indore, built on comfort, trust and fresh everyday meals.</p>
        </div>
        <div>
          <p className="font-black">Quick Links</p>
          <div className="mt-4 grid gap-3">
            {navLinks.map(([label, href]) => (
              <a key={label} href={href} className="text-white/62 hover:text-[#D4A373]">{label}</a>
            ))}
          </div>
        </div>
        <div>
          <p className="font-black">Contact</p>
          <div className="mt-4 grid gap-3 text-white/62">
            <a href={CALL_LINK} className="hover:text-[#D4A373]">{PHONE}</a>
            <p>11:00 AM - 12:00 Midnight</p>
            <p>Gopur Square, Sudama Nagar</p>
          </div>
        </div>
        <div>
          <p className="font-black">Stay Connected</p>
          <div className="mt-4 flex gap-3">
            <a className="grid size-11 place-items-center rounded-full bg-white/10 hover:bg-[#C0392B]" href="#" aria-label="Instagram">
              <Instagram size={19} />
            </a>
            <a className="grid size-11 place-items-center rounded-full bg-white/10 hover:bg-[#C0392B]" href="#" aria-label="Facebook">
              <Facebook size={19} />
            </a>
          </div>
          <ButtonLink href={CALL_LINK} className="mt-5">
            <Phone size={17} />
            Reserve Table
          </ButtonLink>
        </div>
      </div>
      <div className="section-shell mt-10 border-t border-white/10 pt-6 text-sm text-white/45">
        Copyright © 2026 Maa Ki Rasoi. All rights reserved.
      </div>
    </footer>
  );
}

function MobileCTA() {
  return (
    <div className="fixed inset-x-3 bottom-3 z-50 rounded-full border border-white/70 bg-white/82 p-2 shadow-[0_16px_55px_rgba(31,31,31,0.22)] backdrop-blur-xl md:hidden">
      <div className="grid grid-cols-3 gap-2">
        <a href={CALL_LINK} className="flex min-h-12 items-center justify-center gap-1 rounded-full bg-[#1F1F1F] text-xs font-black text-white">
          <Phone size={15} />
          Call Now
        </a>
        <a href="#menu" className="flex min-h-12 items-center justify-center gap-1 rounded-full bg-[#C0392B] text-xs font-black text-white">
          <Utensils size={15} />
          Menu
        </a>
        <a href={CALL_LINK} className="flex min-h-12 items-center justify-center gap-1 rounded-full bg-[#F4EDE4] text-xs font-black text-[#1F1F1F]">
          <CalendarCheck size={15} />
          Reserve
        </a>
      </div>
    </div>
  );
}

function Schema() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: "Maa Ki Rasoi",
    description:
      "Vegetarian family restaurant and food delivery in Sudama Nagar, Indore serving homestyle North Indian, South Indian, Chinese, kebabs, sandwiches, fast food, biryani and beverages.",
    servesCuisine: ["North Indian", "South Indian", "Chinese", "Kebabs", "Sandwiches", "Fast Food", "Biryani", "Beverages"],
    telephone: "+917222930300",
    priceRange: "₹₹",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Gopur Square, Sudama Nagar",
      addressLocality: "Indore",
      addressRegion: "Madhya Pradesh",
      addressCountry: "IN",
    },
    openingHours: "Mo-Su 11:00-24:00",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.1",
      ratingCount: "92300",
    },
    acceptsReservations: "True",
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

export default function HomePage() {
  return (
    <>
      <Schema />
      <Navbar />
      <main>
        <Hero />
        <About />
        <MenuSection />
        <WhyChooseUs />
        <Reviews />
        <Gallery />
        <OrderCTA />
        <Contact />
      </main>
      <Footer />
      <MobileCTA />
    </>
  );
}
