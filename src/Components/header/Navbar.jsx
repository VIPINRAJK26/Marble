import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full py-6 justify-between items-center flex z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-lg" : "bg-transparent"
      }`}
    >
      <div
        className={`text-3xl font-bold md:pl-32 ${
          isScrolled ? "text-black" : "text-white"
        }`}
      >
        LOGO
      </div>

      <div className={`hidden md:flex space-x-8  text-lg font-semibold md:pr-32 ${isScrolled ? "text-black" : "text-white"}`}>
        {[
          "Home",
          "About Us",
          "Why Choose Us",
          "Products",
          "Showrooms",
          "Contact Us",
        ].map((item) => (
          <a href="#" key={item} className="hover:opacity-75">
            {item}
          </a>
        ))}
      </div>
      <div className="md:hidden text-black" onClick={() => setOpen(!open)}>
        {open ? <X size={30} /> : <Menu size={30} />}
      </div>
      {open && (
        <div className="absolute top-16 left-0 w-full bg-white bg-opacity-90 flex flex-col items-center space-y-6 p-6 md:hidden">
          {[
            "Home",
            "About Us",
            "Clients",
            "Why Choose Us",
            "Products",
            "Showrooms",
            "Blogs",
            "Contact Us",
          ].map((item) => (
            <a
              href="#"
              key={item}
              className="text-black text-lg"
              onClick={() => setOpen(false)}
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
