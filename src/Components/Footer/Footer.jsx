import { FaXTwitter,FaPinterest, FaY } from "react-icons/fa6";
import { FaFacebook,FaYoutube,FaInstagram,FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

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
            <a href="https://www.facebook.com/pkstone.in/" target="_blank">
              <FaFacebook className="w-6 h-6 cursor-pointer hover:text-gray-400" />
            </a>
            <a href="https://www.youtube.com/@PKstone_pk" target="_blank">
              <FaYoutube className="w-6 h-6 cursor-pointer hover:text-gray-400" />
            </a>
            <a href="https://www.instagram.com/pkst.one/" target="_blank">
              <FaInstagram className="w-6 h-6 cursor-pointer hover:text-gray-400" />
            </a>
            <a
              href="https://www.linkedin.com/company/pk-stone/?viewAsMember=true"
              target="_blank"
            >
              <FaLinkedin className="w-6 h-6 cursor-pointer hover:text-gray-400" />
            </a>
            <a href="https://x.com/pk_stone_" target="_blank">
              <FaXTwitter className="w-6 h-6 cursor-pointer hover:text-gray-400" />
            </a>
            <a href="https://in.pinterest.com/infopkstone/" target="_blank">
              <FaPinterest className="w-6 h-6 cursor-pointer hover:text-gray-400" />
            </a>
          </div>
        </div>

        {/* Middle Section - Products & Showrooms */}
        <div className="flex  gap-10 md:gap-20">
          <div>
            <h3 className="text-lg font-semibold">PRODUCTS</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link
                  to="/category/indian-marbles"
                  className="block  text-white hover:gray-200"
                >
                  Indian Marbles
                </Link>
              </li>
              <li>
                <Link
                  to="/category/indian-granites"
                  className="block  text-white hover:gray-200"
                >
                  Indian Granites
                </Link>
              </li>
              <li>
                <Link
                  to="/category/italian-marbles"
                  className="block  text-white hover:gray-200"
                >
                  Italian Marbles
                </Link>
              </li>
              <li>
                <Link
                  to="/category/kotta-stone"
                  className="block  text-white hover:gray-200"
                >
                  Kotta Stone
                </Link>
              </li>
              <li>
                <Link
                  to="/category/jaisalmer-stone"
                  className="block  text-white hover:gray-200"
                >
                  Jaisalmer Stone
                </Link>
              </li>
              <li>
                <Link
                  to="/category/lime-stones"
                  className="block  text-white hover:gray-200"
                >
                  Lime Stones
                </Link>
              </li>
              <li>
                <Link
                  to="/category/tiles"
                  className="block  text-white hover:gray-200"
                >
                  Tiles
                </Link>
              </li>
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
            <li>📞 +91 9447426004</li>
            <li>✉ pkstonecalicut@gmail.com</li>
            <li>✉ infopkstone@gmail.com</li>
            <li>
              📍 P K Stone
              <br /> 10/416, NH Road – Chungam
              <br /> Feroke – Kozhikode
              <br /> Kerala – India PIN: 673631
            </li>
          </ul>
          <div className="rounded-xl border px-4 py-2 m-3 shadow-md">
            <div className="flex justify-center gap-5">
              <img
                src="https://cdn-icons-png.flaticon.com/128/3871/3871021.png"
                alt=""
                className="w-8"
              />
              <h1 className="content-center">WhatsApp Chat :</h1>
            </div>
            <div>
              <h1 className="text-center">+91 9447426004</h1>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-700 mt-10 pt-4 text-center text-sm text-gray-400">
        <div className="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto">
          <div className="flex gap-5">
            <Link to={"/terms"}>Privacy Policy</Link>
            <Link to={"/privacy"}>Terms & Conditions</Link>
          </div>
          <div>
            <p>
              All rights reserved © P K Stone. Powered by{" "}
              <a href="https://extechnology.in/" target="_blank" className="text-blue-500">
                extechnology
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
