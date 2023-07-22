import { FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="left-0 w-full bg-black pt-10 pb-6 border-t flex-shrink-0">
      {/* <div className="container mx-auto px-4"> */}
        <div className="flex flex-wrap text-left lg:text-left">
          <div className="w-full lg:w-6/12 px-4">
            <h4 className="text-3xl pb-3 font-semibold text-yellow-primary">
              Let&apos;s keep in touch!
            </h4>
            <h5 className="text-lg mt-0 mb-2 text-gray-400">
              Find us on any of these platforms, we respond 1-2 business days.
            </h5>
            <div className="flex mt-6 lg:mb-0 gap-3 mb-6">
              <button
                className="bg-white text-pink-400 shadow-lg font-normal h-10 w-10 flex items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                type="button"
              >
                <FaInstagram size={20} />
              </button>
              <button
                className="bg-white text-blue-600 shadow-lg font-normal h-10 w-10 flex items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                type="button"
              >
                <FaFacebook size={20} />
              </button>
              <button
                className="bg-white text-blue-400 shadow-lg font-normal h-10 w-10 flex items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                type="button"
              >
                <FaTwitter size={20} />
              </button>
              <button
                className="bg-white text-yellow-500 shadow-lg font-normal h-10 w-10 flex items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                type="button"
              >
                <FiMail size={20} />
              </button>
            </div>
          </div>
          <div className="w-full lg:w-6/12 px-4">
            <div className="flex flex-wrap items-top mb-6">
              <div className="w-full lg:w-4/12 px-4 ml-auto">
                <span className="block uppercase text-yellow-primary text-sm font-bold mb-2">
                  Useful Links
                </span>
                <ul className="list-unstyled">
                  <li>
                    <a
                      className="text-gray-500 hover:text-white font-semibold block pb-2 text-sm"
                      href="#"
                    >
                      About Us
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-gray-500 hover:text-white font-semibold block pb-2 text-sm"
                      href="/admin"
                    >
                      Admin
                    </a>
                  </li>
                </ul>
              </div>
              <div className="w-full lg:w-4/12 px-4">
                <span className="block uppercase text-yellow-primary text-sm font-bold mb-2">
                  {" "}
                  Other Resources{" "}
                </span>
                <ul className="list-unstyled">
                  <li>
                    <a
                      className="text-gray-500 hover:text-white font-semibold block pb-2 text-sm"
                      href="#"
                    >
                      MIT License
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-gray-500 hover:text-white font-semibold block pb-2 text-sm"
                      href="#"
                    >
                      Terms &amp; Conditions
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200" />
        <div className="flex flex-wrap items-center md:justify-between justify-center">
          <div className="w-full md:w-4/12 px-4 mx-auto text-center">
            <div className="text-sm text-blueGray-500 font-semibold py-1">
              Copyright © <span id="get-current-year">2023</span>
            </div>
          </div>
        </div>
      {/* </div> */}
    </footer>
  );
};

export default Footer;
