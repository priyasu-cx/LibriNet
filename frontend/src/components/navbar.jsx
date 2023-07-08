import { FaSearch, FaRegHeart } from "react-icons/fa";
import { MdOutlineAccountCircle, MdOutlineShoppingCart } from "react-icons/md";
import {FiSearch} from "react-icons/fi";

const Navbar = () => {
  return (
    <>
      <header className="bg-white border-b">
        <div className="container mx-auto px-4 py-8 flex items-center">
          {/* logo */}
          <div className="mr-auto md:w-48 flex-shrink-0">
            <img
              className="h-8 md:h-10"
              src="https://i.ibb.co/98pHdFq/2021-10-27-15h51-15.png"
              alt=""
            />
          </div>

          {/* search */}
          <div className="w-full max-w-xs xl:max-w-lg 2xl:max-w-2xl bg-gray-100 rounded-md hidden xl:flex items-center">
            <select
              className="bg-transparent uppercase font-bold text-sm p-4 mr-4"
              name=""
              id=""
            >
              <option>all categories</option>
            </select>
            <input
              className="border-0 border-gray-300 bg-transparent font-semibold text-sm pl-4 w-1/2 focus:outline-none"
              type="text"
              placeholder="I'm searching for ..."
            />
            <FaSearch className="ml-auto pr-5 text-gray-500" size={35}/>
          </div>

          {/* Contact */}
          <div className="ml-auto md:w-48 hidden sm:flex flex-col place-items-end">
            <span className="font-bold md:text-xl">8 800 332 65-66</span>
            <span className="font-semibold text-sm text-gray-400">
              Support 24/7
            </span>
          </div>

          {/* Buttons */}
          <nav className="contents">
            <ul className="ml-4 xl:48 flex items-center justify-end gap-2">
              <li className="ml-2 lg:ml-4 relative inline-block">
                <MdOutlineAccountCircle className="text-gray-400" size={20}/>
              </li>
              <li className="ml-2 lg:ml-4 relative inline-block">
                <div className="absolute -top-3 right-0 z-10 bg-yellow-400 text-xs font-bold px-1 py-0.5 rounded-sm">
                  3
                </div>
                <FaRegHeart className="text-gray-400" size={20}/>
              </li>
              <li className="ml-2 lg:ml-4 relative inline-block">
                <div className="absolute -top-3 right-0 z-10 bg-yellow-400 text-xs font-bold px-1 py-0.5 rounded-sm">
                  12
                </div>
                <MdOutlineShoppingCart className="text-gray-400" size={20}/>
              </li>
            </ul>
          </nav>

          {/* Cart */}
          <div className="ml-4 hidden sm:flex flex-col font-bold">
            <span className="text-sm text-gray-400">Your Cart</span>
            <span className="text-sm">$2,876.00</span>
          </div>

          
        </div>
      </header>
      {/* Search Mobile */}
      <div className="m-4 bg-gray-100 rounded-md flex items-center justify-center xl:hidden">
        <input
          className="border-0 border-gray-300 bg-transparent font-semibold text-sm pl-4 w-1/2 focus:outline-none"
          type="text"
          placeholder="I'm searching for ..."
        />
        <FiSearch className="ml-auto pr-5 text-gray-500" size={35}/>
      </div>
    </>
  );
};

export default Navbar;
