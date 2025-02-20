import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 px-6 ">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-10">
        {/* Left Section - Logo & Description */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <div className="text-4xl font-bold">PK Stone</div>
          <p className="mt-4 max-w-sm">
            Timeless Beauty, Modern Appeal, Discover Our Stone Collection!
          </p>
          {/* Social Media Icons */}
          <div className="flex gap-4 mt-4">
            <Facebook className="w-6 h-6 cursor-pointer hover:text-gray-400" />
            <Youtube className="w-6 h-6 cursor-pointer hover:text-gray-400" />
            <Instagram className="w-6 h-6 cursor-pointer hover:text-gray-400" />
            <Linkedin className="w-6 h-6 cursor-pointer hover:text-gray-400" />
          </div>
        </div>

        {/* Middle Section - Products & Showrooms */}
        <div className="flex flex-wrap md:flex-nowrap gap-10 md:gap-20">
          <div>
            <h3 className="text-lg font-semibold">PRODUCTS</h3>
            <ul className="mt-4 space-y-2">
              {[
                "Indian Marbles",
                "Indian Granites",
                "Italian Marbles",
                "Kotta Stone",
                "Jaisalmer Stone",
                "Line Stones",
                "Tiles",
              ].map((item, index) => (
                <li key={index} className="hover:text-gray-400 cursor-pointer">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold">SHOWROOMS</h3>
            <ul className="mt-4 space-y-2">
              {["Chungam , calicut"].map((item, index) => (
                <li key={index} className="hover:text-gray-400 cursor-pointer">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Section - Contact Details */}
        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold">CONTACT US</h3>
          <ul className="mt-4 space-y-2">
            <li>📞 +91 98952 25599</li>
            <li>✉ hello@pkstone.com</li>
            <li>
              📍 Head Office (Tiles & Sanitary Division)
              <br /> OPP, Civil Station, Calicut 20
              <br /> Tel: 0495-2373510, 2373512, 2376858
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-700 mt-10 pt-4 text-center text-sm text-gray-400">
        <div className="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto">
          <p>Privacy Policy</p>
          <p>All rights reserved © P K Stone. Powered by Exmedia</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
