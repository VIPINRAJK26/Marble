import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolling ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between md:px-32 px-6 py-4">
        <Link
          to="/"
          className={`font-bold text-3xl ${
            scrolling ? "text-gray-800" : "text-white"
          }`}
        >
          Logo
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-3xl text-gray-800"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✖" : "☰"}
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-10 text-lg relative md:right-20">
          <li>
            <Link to="/" className={scrolling ? "text-gray-800" : "text-white"}>
              Home
            </Link>
          </li>
          <li>
            <HashLink
              smooth
              to="#about"
              className={scrolling ? "text-gray-800" : "text-white"}
            >
              About Us
            </HashLink>
          </li>
          <li>
            <HashLink
              smooth
              to="#products"
              className={scrolling ? "text-gray-800" : "text-white"}
            >
              Products & Collections
            </HashLink>
          </li>
          <li>
            <HashLink
              smooth
              to="#gallery"
              className={scrolling ? "text-gray-800" : "text-white"}
            >
              Gallery
            </HashLink>
          </li>
          <li>
            <Link
              to="/contact"
              className={scrolling ? "text-gray-800" : "text-white"}
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* Mobile Menu */}
        {menuOpen && (
          <ul className="absolute top-full left-0 w-full bg-white flex flex-col items-center space-y-4 py-4 shadow-md md:hidden">
            <li>
              <Link
                to="/"
                className="text-gray-800 text-lg"
                onClick={() => setMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <HashLink
                smooth
                to="#about"
                className="text-gray-800 text-lg"
                onClick={() => setMenuOpen(false)}
              >
                About Us
              </HashLink>
            </li>
            <li>
              <Link
                to="/products"
                className="text-gray-800 text-lg"
                onClick={() => setMenuOpen(false)}
              >
                Products & Collections
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="text-gray-800 text-lg"
                onClick={() => setMenuOpen(false)}
              >
                Contact
              </Link>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
