import { useState } from "react";
import {
  FaShoppingBag,
  FaSearch,
  FaHeart,
  FaArrowRight,
  FaBars,
  FaTimes,
  FaStar,
  FaPlus,
  FaMinus,
  FaInstagram,
  FaFacebookF,
  FaRegUser,
} from "react-icons/fa";

function Emusa() {
  const [cart, setCart] = useState(0);
  const [liked, setLiked] = useState([]);
  const [menu, setMenu] = useState(false);
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const products = [
    {
      id: 1,
      name: "Urban Sneakers",
      category: "Fashion",
      price: 2499,
      oldPrice: 3299,
      rating: "4.9",
      tag: "BEST SELLER",
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800",
    },
    {
      id: 2,
      name: "Minimal Watch",
      category: "Accessories",
      price: 1899,
      oldPrice: 2499,
      rating: "4.8",
      tag: "TRENDING",
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800",
    },
    {
      id: 3,
      name: "Classic Backpack",
      category: "Lifestyle",
      price: 1599,
      oldPrice: 2199,
      rating: "4.7",
      tag: "NEW",
      image:
        "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800",
    },
    {
      id: 4,
      name: "Premium Headphones",
      category: "Technology",
      price: 2999,
      oldPrice: 3999,
      rating: "4.9",
      tag: "POPULAR",
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800",
    },
  ];

  const categories = ["All", "Fashion", "Accessories", "Lifestyle", "Technology"];

  const filteredProducts = products.filter((item) => {
    const matchesCategory =
      activeCategory === "All" || item.category === activeCategory;

    const matchesSearch = item.name
      .toLowerCase()
      .includes(search.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  const toggleLike = (id) => {
    setLiked((prev) =>
      prev.includes(id)
        ? prev.filter((item) => item !== id)
        : [...prev, id]
    );
  };

  return (
    <main className="bg-[#f7f5f0] text-[#171717] min-h-screen">

      {/* NAVBAR */}

      <nav className="sticky top-0 z-50 bg-[#f7f5f0]/90 backdrop-blur-xl border-b border-black/10">
        <div className="max-w-[1450px] mx-auto px-6 md:px-12 h-20 flex items-center justify-between">

          <a href="#home" className="text-3xl font-black tracking-[-2px]">
            VELORA<span className="text-orange-500">.</span>
          </a>

          <div className="hidden md:flex items-center gap-10 text-sm font-semibold">
            <a href="#home" className="hover:text-orange-500 transition">Home</a>
            <a href="#shop" className="hover:text-orange-500 transition">Shop</a>
            <a href="#categories" className="hover:text-orange-500 transition">Categories</a>
            <a href="#about" className="hover:text-orange-500 transition">About</a>
            <a href="#contact" className="hover:text-orange-500 transition">Contact</a>
          </div>

          <div className="flex items-center gap-5">

            <div className="hidden lg:flex items-center gap-2 border-b border-black/30 pb-1">
              <FaSearch />
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search products"
                className="bg-transparent outline-none text-sm w-32"
              />
            </div>

            <button
              onClick={() => alert(`You have ${cart} items in your cart.`)}
              className="relative text-xl"
            >
              <FaShoppingBag />
              <span className="absolute -top-2 -right-3 bg-orange-500 text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center">
                {cart}
              </span>
            </button>

            <button className="hidden md:block text-xl" aria-label="Account">
              <FaRegUser />
            </button>

            <button
              className="md:hidden text-xl"
              onClick={() => setMenu(!menu)}
            >
              {menu ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>

        {menu && (
          <div className="md:hidden px-7 pb-6 flex flex-col gap-5 font-semibold bg-[#f7f5f0]">
            <a href="#home" onClick={() => setMenu(false)}>Home</a>
            <a href="#shop" onClick={() => setMenu(false)}>Shop</a>
            <a href="#categories" onClick={() => setMenu(false)}>Categories</a>
            <a href="#about" onClick={() => setMenu(false)}>About</a>
            <a href="#contact" onClick={() => setMenu(false)}>Contact</a>
          </div>
        )}
      </nav>

      {/* HERO */}

      <section id="home" className="px-4 md:px-8 pt-6">
        <div className="relative max-w-[1450px] mx-auto min-h-[650px] md:min-h-[750px] rounded-[30px] overflow-hidden bg-[#222]">

          <img
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=2000"
            alt="Modern fashion store"
            className="absolute inset-0 w-full h-full object-cover opacity-70"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/40 to-transparent" />

          <div className="relative z-10 min-h-[650px] md:min-h-[750px] flex flex-col justify-center px-8 md:px-20 text-white">

            <span className="uppercase tracking-[5px] text-orange-400 text-xs font-bold mb-7">
              Discover your style
            </span>

            <h1 className="text-6xl sm:text-7xl lg:text-[110px] font-black leading-[0.95] tracking-[-5px] max-w-4xl">
              Style is
              <br />
              <span className="text-orange-400 italic font-serif">
                an attitude.
              </span>
            </h1>

            <p className="max-w-lg text-white/75 text-lg leading-8 mt-8">
              Discover a world of modern essentials, timeless designs
              and everyday products made to stand out.
            </p>

            <div className="flex flex-wrap gap-5 mt-10">
              <a
                href="#shop"
                className="bg-orange-500 hover:bg-white hover:text-black transition px-9 py-4 rounded-full font-bold flex items-center gap-4"
              >
                Explore Collection <FaArrowRight />
              </a>

              <a
                href="#about"
                className="border border-white/50 hover:bg-white hover:text-black transition px-9 py-4 rounded-full font-semibold"
              >
                Our Story
              </a>
            </div>

            <div className="absolute bottom-10 right-10 hidden md:block text-right">
              <p className="text-4xl font-black">2026</p>
              <p className="text-xs tracking-[4px] text-white/60">
                NEW COLLECTION
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}

      <section className="max-w-[1400px] mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            ["01", "Premium Quality"],
            ["02", "Modern Designs"],
            ["03", "Secure Shopping"],
            ["04", "Fast Delivery"],
          ].map(([number, title]) => (
            <div key={number} className="border-l-2 border-orange-500 pl-5">
              <p className="text-orange-500 text-xs font-bold">{number}</p>
              <h3 className="font-bold mt-2">{title}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* CATEGORIES */}

      <section id="categories" className="px-6 md:px-12 py-20 bg-[#eeeae1]">
        <div className="max-w-[1400px] mx-auto">

          <div className="flex justify-between items-end mb-12">
            <div>
              <p className="text-orange-500 uppercase tracking-[4px] text-xs font-bold">
                Find your favourites
              </p>
              <h2 className="text-4xl md:text-6xl font-black mt-4">
                Shop by <span className="font-serif italic">category.</span>
              </h2>
            </div>
            <span className="hidden sm:block text-sm text-gray-500">
              EXPLORE / 01—04
            </span>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">

            {[
              {
                name: "Fashion",
                image:
                  "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=700",
              },
              {
                name: "Accessories",
                image:
                  "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=700",
              },
              {
                name: "Lifestyle",
                image:
                  "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=700",
              },
              {
                name: "Technology",
                image:
                  "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=700",
              },
            ].map((item) => (
              <button
                key={item.name}
                onClick={() => {
                  setActiveCategory(item.name);
                  document.getElementById("shop").scrollIntoView({
                    behavior: "smooth",
                  });
                }}
                className="relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden group text-left"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-2xl font-bold">{item.name}</h3>
                  <p className="text-sm mt-2 flex items-center gap-2">
                    Explore <FaArrowRight />
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* SHOP */}

      <section id="shop" className="px-6 md:px-12 py-24">
        <div className="max-w-[1400px] mx-auto">

          <div className="flex flex-wrap justify-between items-end gap-5 mb-10">
            <div>
              <p className="text-orange-500 uppercase tracking-[4px] text-xs font-bold">
                Carefully selected
              </p>
              <h2 className="text-4xl md:text-6xl font-black mt-4">
                Trending <span className="font-serif italic">now.</span>
              </h2>
            </div>

            <div className="flex items-center gap-2 border-b border-black/30 pb-2 lg:hidden">
              <FaSearch />
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search..."
                className="bg-transparent outline-none w-28 text-sm"
              />
            </div>
          </div>

          <div className="flex gap-3 flex-wrap mb-10">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-full text-sm font-semibold transition ${
                  activeCategory === category
                    ? "bg-black text-white"
                    : "bg-[#eeeae1] hover:bg-orange-100"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 md:gap-8">
            {filteredProducts.map((item) => (
              <div key={item.id} className="group">

                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-[#eeeae1]">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                  />

                  <span className="absolute top-4 left-4 bg-white px-3 py-2 rounded-full text-[9px] font-black tracking-widest">
                    {item.tag}
                  </span>

                  <button
                    onClick={() => toggleLike(item.id)}
                    className={`absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center ${
                      liked.includes(item.id)
                        ? "bg-red-500 text-white"
                        : "bg-white text-black"
                    }`}
                    aria-label="Toggle wishlist"
                  >
                    <FaHeart />
                  </button>

                  <button
                    onClick={() => setCart((prev) => prev + 1)}
                    className="absolute bottom-4 left-4 right-4 bg-black text-white rounded-full py-3 font-bold text-xs md:text-sm translate-y-20 group-hover:translate-y-0 transition duration-500 flex justify-center items-center gap-2"
                  >
                    <FaPlus /> Add to cart
                  </button>
                </div>

                <div className="pt-5">
                  <div className="flex justify-between items-center gap-2">
                    <h3 className="font-bold text-sm md:text-lg">
                      {item.name}
                    </h3>
                    <span className="text-orange-500 text-xs flex items-center gap-1">
                      <FaStar /> {item.rating}
                    </span>
                  </div>

                  <p className="text-gray-500 text-xs mt-2">
                    {item.category}
                  </p>

                  <div className="flex gap-3 items-center mt-3">
                    <span className="font-black">₹{item.price}</span>
                    <span className="text-gray-400 line-through text-sm">
                      ₹{item.oldPrice}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <p className="text-center py-16 text-gray-500">
              No products found.
            </p>
          )}
        </div>
      </section>

      {/* PROMO BANNER */}

      <section className="px-4 md:px-8 pb-24">
        <div className="max-w-[1450px] mx-auto relative min-h-[500px] rounded-[30px] overflow-hidden bg-black">

          <img
            src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1800"
            alt="Fashion collection"
            className="absolute inset-0 w-full h-full object-cover opacity-55"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent" />

          <div className="relative z-10 min-h-[500px] flex flex-col justify-center px-8 md:px-20 text-white">
            <p className="text-orange-400 tracking-[4px] text-xs font-bold">
              LIMITED TIME OFFER
            </p>

            <h2 className="text-5xl md:text-7xl font-black mt-6 leading-tight">
              Make it
              <br />
              <span className="font-serif italic text-orange-400">
                yours.
              </span>
            </h2>

            <p className="text-white/70 mt-6 max-w-md leading-7">
              Find your next favourite piece. Explore our latest
              collection and bring a little more style into every day.
            </p>

            <a
              href="#shop"
              className="mt-9 bg-orange-500 hover:bg-white hover:text-black transition rounded-full px-9 py-4 font-bold w-fit flex items-center gap-4"
            >
              Shop the collection <FaArrowRight />
            </a>
          </div>
        </div>
      </section>

      {/* ABOUT */}

      <section id="about" className="px-6 md:px-12 py-24 bg-[#eeeae1]">
        <div className="max-w-[1400px] mx-auto grid md:grid-cols-2 gap-14 items-center">

          <div className="rounded-[30px] overflow-hidden h-[450px] md:h-[600px]">
            <img
              src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1000"
              alt="Our store"
              className="w-full h-full object-cover"
            />
          </div>

          <div>
            <p className="text-orange-500 uppercase tracking-[4px] text-xs font-bold">
              A little about us
            </p>

            <h2 className="text-5xl md:text-7xl font-black leading-tight mt-6">
              Not just
              <br />
              products.
              <br />
              <span className="font-serif italic text-orange-500">
                Personality.
              </span>
            </h2>

            <p className="text-gray-600 leading-8 mt-7">
              At Velora, we believe that great style is more than
              appearance. It's about discovering products that match
              your personality, your everyday life and your ambitions.
            </p>

            <a
              href="#contact"
              className="inline-flex items-center gap-4 mt-9 font-bold border-b-2 border-orange-500 pb-3"
            >
              Get to know us <FaArrowRight />
            </a>
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}

      <section className="px-6 py-24 text-center">
        <div className="max-w-3xl mx-auto">
          <p className="text-orange-500 uppercase tracking-[4px] text-xs font-bold">
            Join the community
          </p>

          <h2 className="text-4xl md:text-6xl font-black mt-5">
            Good things are
            <span className="font-serif italic text-orange-500">
              {" "}coming.
            </span>
          </h2>

          <p className="text-gray-500 mt-5">
            Get updates on new collections and exclusive offers.
          </p>

          <form
            className="flex flex-col sm:flex-row gap-3 mt-9 max-w-xl mx-auto"
            onSubmit={(e) => {
              e.preventDefault();
              alert("Thank you for subscribing!");
              e.target.reset();
            }}
          >
            <input
              type="email"
              required
              placeholder="Enter your email address"
              className="flex-1 bg-[#eeeae1] px-7 py-4 rounded-full outline-none"
            />

            <button className="bg-black text-white px-9 py-4 rounded-full font-bold hover:bg-orange-500 transition">
              Subscribe <FaArrowRight className="inline ml-2" />
            </button>
          </form>
        </div>
      </section>

      {/* FOOTER */}

      <footer id="contact" className="bg-[#171717] text-white px-6 md:px-12 pt-20 pb-8">
        <div className="max-w-[1400px] mx-auto">

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 pb-16">

            <div className="lg:col-span-2">
              <h2 className="text-5xl font-black tracking-[-3px]">
                VELORA<span className="text-orange-500">.</span>
              </h2>

              <p className="text-white/50 max-w-sm leading-8 mt-6">
                Discover more. Express yourself. Make every day
                a little more extraordinary.
              </p>

              <div className="flex gap-4 mt-8">
                <a href="#home" aria-label="Instagram" className="w-11 h-11 rounded-full border border-white/30 flex items-center justify-center hover:bg-orange-500 transition">
                  <FaInstagram />
                </a>
                <a href="#home" aria-label="Facebook" className="w-11 h-11 rounded-full border border-white/30 flex items-center justify-center hover:bg-orange-500 transition">
                  <FaFacebookF />
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-6">Explore</h3>
              <div className="flex flex-col gap-4 text-white/50 text-sm">
                <a href="#home" className="hover:text-orange-400">Home</a>
                <a href="#shop" className="hover:text-orange-400">Shop</a>
                <a href="#categories" className="hover:text-orange-400">Categories</a>
                <a href="#about" className="hover:text-orange-400">About us</a>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-6">Customer care</h3>
              <div className="flex flex-col gap-4 text-white/50 text-sm">
                <a href="#contact" className="hover:text-orange-400">Contact</a>
                <a href="#contact" className="hover:text-orange-400">Shipping</a>
                <a href="#contact" className="hover:text-orange-400">Privacy policy</a>
                <a href="#contact" className="hover:text-orange-400">Returns</a>
              </div>
            </div>

          </div>

          <div className="border-t border-white/15 pt-7 flex flex-col sm:flex-row justify-between gap-4 text-xs text-white/40">
            <p>© 2026 VELORA. ALL RIGHTS RESERVED.</p>
            <p>MADE FOR YOUR EVERYDAY STYLE.</p>
          </div>
        </div>
      </footer>

      {/* FLOATING CART */}

      <button
        onClick={() => alert(`Your cart has ${cart} items.`)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-orange-500 text-white rounded-full shadow-xl flex items-center justify-center text-xl hover:scale-110 transition"
        aria-label="Open cart"
      >
        <FaShoppingBag />
        {cart > 0 && (
          <span className="absolute -top-1 -right-1 bg-black text-white rounded-full w-6 h-6 text-xs flex items-center justify-center">
            {cart}
          </span>
        )}
      </button>

    </main>
  );
}

export default Emusa;