import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 px-6 mt-32">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-10">
        {/* Left Section - Logo & Description */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <div className="text-4xl font-bold">MG</div>
          <p className="mt-4 max-w-sm">
            Unique interiors with elegant, curated stones. Trust us for enduring
            quality and endless possibilities.
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
                "Tiles",
                "Roof Tiles",
                "Kitchen Wares",
                "Italian Marble",
                "Bathing Solutions",
                "Adhesive and Epoxy",
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
              {["Kozhikode", "Vengeri"].map((item, index) => (
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
            <li>✉ hello@mggroupin.com</li>
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
          <p>All rights reserved © Marble Gallery. Designed By Quadcubes</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
