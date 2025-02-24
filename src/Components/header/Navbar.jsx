import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav
      className={`fixed  top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolling ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between md:px-32 px-6 py-4">
        <Link to="/">
          <img src="/LOGO FOR WEB-02 PNG.png" alt="" className="w-40" />
        </Link>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden text-3xl  ${ scrolling ? "text-gray-600" : "text-white"}`}
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
            <Link
              to="/about"
              className={scrolling ? "text-gray-800" : "text-white"}
            >
              About Us
            </Link>
          </li>
          {/* Dropdown Menu */}
          <li className="relative" ref={dropdownRef}>
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className={`focus:outline-none ${
                scrolling ? "text-gray-800" : "text-white"
              }`}
            >
              Products & Services ▼
            </button>
            <ul
              className={`absolute left-0 mt-2 w-48 bg-white shadow-md rounded-xl transition-all duration-300 ${
                dropdownOpen ? "opacity-100 visible" : "opacity-0 invisible"
              }`}
            >
              <li>
                <Link
                  to="/category/indian-marbles"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                >
                  Indian Marbles
                </Link>
              </li>
              <li>
                <Link
                  to="/category/indian-granites"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                >
                  Indian Granites
                </Link>
              </li>
              <li>
                <Link
                  to="/category/italian-marbles"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                >
                  Italian Marbles
                </Link>
              </li>
              <li>
                <Link
                  to="/category/kotta-stone"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                >
                  Kotta Stone
                </Link>
              </li>
              <li>
                <Link
                  to="/category/jaisalmer-stone"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                >
                  Jaisalmer Stone
                </Link>
              </li>
              <li>
                <Link
                  to="/category/lime-stones"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                >
                  Lime Stones
                </Link>
              </li>
              <li>
                <Link
                  to="/category/tiles"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                >
                  Tiles
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="block px-4 py-2 text-gray-800 bg-gray-300 hover:bg-gray-400  hover:text-white"
                >
                  Services
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <HashLink
              smooth
              to="/gallery"
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
                to="/about"
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
                Products
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className="text-gray-800 text-lg"
                onClick={() => setMenuOpen(false)}
              >
                Services
              </Link>
            </li>
            <li>
              <HashLink
                to="/#gallery"
                className="text-gray-800 text-lg"
                onClick={() => setMenuOpen(false)}
              >
                Gallery
              </HashLink>
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
