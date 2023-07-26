import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useLogoutMutation } from "../../slices/adminApiSlice";
import { setCredentials } from "../../slices/authSlice";
import { HiOutlineLogout } from "react-icons/hi";
import { Tab, initTE } from "tw-elements";
import AdminTab1 from "./AdminTab1";

const AdminDashboard = () => {
  const [logout] = useLogoutMutation();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  initTE({ Tab });

  const { userInfo } = useSelector((state) => state.auth);

  useEffect(() => {
    document.title = "Admin Dashboard";
    if (userInfo == null) {
      navigate("/");
    }
  }, [navigate, userInfo]);

  const handleLogout = async (e) => {
    e.preventDefault();
    // console.log("logout");
    const res = await logout().unwrap();
    if (res) {
      dispatch(setCredentials(null));
      navigate("/");
    } else {
      console.log("Logout failed");
    }
  };

  return (
    <>
      {/* Tab Navigation */}
      <ul
        className="mb-5 flex list-none flex-row flex-wrap border-b-0 pl-0"
        role="tablist"
        data-te-nav-ref
      >
        <li role="presentation" className="flex-auto text-center">
          <a
            href="#tabs-home01"
            className="my-2 block border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4 text-xs font-semibold uppercase leading-tight text-gray-400 data-[te-nav-active]:border-yellow-primary data-[te-nav-active]:text-yellow-primary"
            data-te-toggle="pill"
            data-te-target="#tabs-home01"
            data-te-nav-active
            role="tab"
            aria-controls="tabs-home01"
            aria-selected="true"
          >
            Bookstore Management
          </a>
        </li>
        <li role="presentation" className="flex-auto text-center">
          <a
            href="#tabs-profile01"
            className="my-2 block border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4 text-xs font-semibold uppercase leading-tight text-gray-400 data-[te-nav-active]:border-yellow-primary data-[te-nav-active]:text-yellow-primary"
            data-te-toggle="pill"
            data-te-target="#tabs-profile01"
            role="tab"
            aria-controls="tabs-profile01"
            aria-selected="false"
          >
            Library Management
          </a>
        </li>
        <li role="presentation" className="flex-auto text-center">
          <a
            href="#tabs-messages01"
            className="my-2 block border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4 text-xs font-semibold uppercase leading-tight text-gray-400 data-[te-nav-active]:border-yellow-primary data-[te-nav-active]:text-yellow-primary"
            data-te-toggle="pill"
            data-te-target="#tabs-messages01"
            role="tab"
            aria-controls="tabs-messages01"
            aria-selected="false"
          >
            Orders & Payments
          </a>
        </li>
      </ul>

      {/* <!--Tabs content--> */}
      <div className="mb-6">
        <div
          className="hidden opacity-100 overflow-scroll transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
          id="tabs-home01"
          role="tabpanel"
          aria-labelledby="tabs-home-tab01"
          data-te-tab-active
        >
          <AdminTab1 />
        </div>
        <div
          className="hidden opacity-0 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
          id="tabs-profile01"
          role="tabpanel"
          aria-labelledby="tabs-profile-tab01"
        >
          Tab 2 content
        </div>
        <div
          className="hidden opacity-0 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
          id="tabs-messages01"
          role="tabpanel"
          aria-labelledby="tabs-profile-tab01"
        >
          Tab 3 content
        </div>
      </div>

      {/* Logout Button */}
      <section className="flex items-center justify-center p-10">
        <button
          className="px-4 py-2 bg-yellow-primary text-black rounded-lg shadow-md hover:bg-red-600 focus:outline-none"
          onClick={handleLogout}
        >
          <span className="flex items-center justify-center gap-4 px-4">
            <HiOutlineLogout />
            <p>Logout</p>
          </span>
        </button>
      </section>
    </>
  );
};

export default AdminDashboard;
