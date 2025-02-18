import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Navbar = ({ isScrolled }) => {
  return (
    <div
      className={`hidden md:flex space-x-8 text-md   md:pr-32 ${
        isScrolled ? "text-black" : "text-white"
      }`}
    >
      {[
        { name: "Home", path: "/" },
        { name: "About Us", path: "/about#about" },
        { name: "Products", path: "/products" },
        { name: "Showrooms", path: "/showrooms" },
        { name: "Contact Us", path: "/contact" },
      ].map((item) => (
        <div key={item.name}>
          {item.name === "About Us" ? (
            <HashLink
              to={item.path}
              className="hover:opacity-75 hover:text-yellow-300 hover:scale-105 hover:underline"
            >
              {item.name}
            </HashLink>
          ) : (
            <Link
              to={item.path}
              className="hover:opacity-75 hover:text-yellow-300 hover:scale-105 hover:underline"
            >
              {item.name}
            </Link>
          )}
        </div>
      ))}
    </div>
  );
};

export default Navbar;
