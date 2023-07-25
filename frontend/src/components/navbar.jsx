import { FaSearch, FaRegHeart } from "react-icons/fa";
import { MdOutlineAccountCircle, MdOutlineShoppingCart } from "react-icons/md";
import { FiSearch } from "react-icons/fi";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const { userInfo } = useSelector((state) => state.auth);
  // console.log(userInfo);
  const navigate = useNavigate();

  const loginScreen = () => {
    navigate("/login");
  };

  return (
    <>
      <header className="bg-white border-b">
        <div className="container mx-auto px-4 py-8 flex items-center">
          {/* logo */}
          <div className="mr-auto md:w-48 flex-shrink-0">
            {/* check if userinfo is null */}

            <a href={userInfo == null ? "/admin/dashboard" : "/"}>
              <img
                className="h-8 md:h-10"
                src={
                  userInfo
                    ? userInfo.isAdmin ? "https://i.imgur.com/gkfHhLj.png": "https://i.imgur.com/ap5KdX0.png"
                    : "https://i.imgur.com/ap5KdX0.png"
                }
                alt=""
              />
            </a>
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
            <FaSearch className="ml-auto pr-5 text-gray-500" size={35} />
          </div>
          {/* Contact */}
          <div className="ml-auto md:w-48 hidden sm:flex flex-col place-items-end">
            <span className="font-bold md:text-xl">8 800 332 65-66</span>
            <span className="font-semibold text-sm text-gray-400">
              Support 24/7
            </span>
          </div>
          {/* Buttons */}
          {/* Only show when user signed in */}
          {userInfo != null && !userInfo.isAdmin ? (
            <nav className="contents">
              <ul className="ml-4 xl:48 flex items-center justify-end gap-2">
                <li className="ml-2 lg:ml-4 relative inline-block">
                  <a href="\profile"><MdOutlineAccountCircle className="text-gray-400" size={20} /></a>
                </li>
                <li className="ml-2 lg:ml-4 relative inline-block">
                  <div className="absolute -top-3 right-0 z-10 bg-yellow-400 text-xs font-bold px-1 py-0.5 rounded-sm">
                    {/* {userInfo.cart.length} */}
                  </div>
                  <FaRegHeart className="text-gray-400" size={20} />
                </li>
                <li className="ml-2 lg:ml-4 relative inline-block">
                  <div className="absolute -top-3 right-0 z-10 bg-yellow-400 text-xs font-bold px-1 py-0.5 rounded-sm">
                    {/* {userInfo.wishlist.length} */}
                  </div>
                  <MdOutlineShoppingCart className="text-gray-400" size={20} />
                </li>
              </ul>
            </nav>
          ) : (
            <button
              className="ml-4 hidden sm:flex items-center justify-center gap-2 bg-yellow-400 text-white font-bold px-4 py-2 rounded-md"
              onClick={loginScreen}
            >
              <MdOutlineAccountCircle size={20} />
              <span className="text-sm">Sign In</span>
            </button>
          )}

          {/* Cart */}
          {/* Only show when user signed in */}
          {userInfo !=null && !userInfo.isAdmin? (
            <div className="ml-4 hidden sm:flex flex-col font-bold">
              <span className="text-sm text-gray-400">Your Cart</span>
              <span className="text-sm">$2,876.00</span>
            </div>
          ): null}
        </div>
      </header>
      {/* Search Mobile */}
      <div className="m-4 bg-gray-100 rounded-md flex items-center justify-center xl:hidden">
        <input
          className="border-0 border-gray-300 bg-transparent font-semibold text-sm pl-4 w-1/2 focus:outline-none"
          type="text"
          placeholder="I'm searching for ..."
        />
        <FiSearch className="ml-auto pr-5 text-gray-500" size={35} />
      </div>
    </>
  );
};

export default Navbar;
