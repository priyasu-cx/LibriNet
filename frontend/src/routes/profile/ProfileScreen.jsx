import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  useLogoutMutation,
  useUpdateMutation,
} from "../../slices/userApiSlice";
import { setCredentials } from "../../slices/authSlice";
import { useSelector } from "react-redux";
import { FaEdit, FaCheck } from "react-icons/fa";
import { useEffect } from "react";
import c from "classnames";
import { toast } from "react-toastify";

const ProfileScreen = () => {
  const [logout] = useLogoutMutation();
  const [updateProfile] = useUpdateMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { userInfo } = useSelector((state) => state.auth);

  const [formdata, setFormdata] = useState({});
  const [editing, setEditing] = useState(false);

  // show toast is userinfo.name is anonymous
  useEffect(() => {
    if (userInfo.name == "Anonymous") {
      // toast.info("Please fill your details to continue",);
    }
  }, [userInfo]);

  // Update Profile Function
  const handleUpdate = async () => {
    // e.preventDefault();
    // console.log("update");
    setEditing(false);
    console.log(formdata);
    const res = await updateProfile(formdata).unwrap();
    if (res) {
      dispatch(setCredentials(res));
      setEditing(false);
      toast.success("Profile Updated");
    } else {
      console.log("Update failed");
      toast.error("Update failed");
    }
  };

  // Logout Function
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
      {/* Profile */}
      <div className="flex items-center justify-center h-full lg:m-20 mt-10">
        <div className="border-b-2 block md:flex md:w-full lg:w-2/3">
          <div className="w-full md:w-2/5 p-4 sm:p-6 lg:p-8 bg-white shadow-md">
            <div className="flex justify-between gap-5">
              <span className="text-2xl font-semibold block">Welcome</span>
              <button
                className={c(
                  "text-md font-bold text-white  rounded-full p-4",
                  !editing
                    ? "bg-yellow-primary hover:bg-gray-800"
                    : "bg-green-500 hover:bg-green-800"
                )}
                onClick={() => {
                  setEditing(!editing);
                  if (editing) {
                    handleUpdate();
                  }
                }}
              >
                {editing ? <FaCheck /> : <FaEdit />}
              </button>
            </div>
            <span className="text-xl text-center overflow-clip">
              {userInfo.name == "Anonymous"
                ? "Anonymous User"
                : userInfo.name.toUpperCase()}
            </span>
            <div className="flex items-center justify-center p-10">
              <img className="w-32" src="https://i.imgur.com/hlA8DEP.png" />
            </div>
          </div>

          <div className="w-full md:w-3/5 p-8 bg-white lg:ml-4 shadow-md">
            <div className="rounded  shadow p-6">
              <div className="pb-6">
                <label
                  htmlFor="name"
                  className="font-semibold text-gray-700 block pb-1"
                >
                  Name
                </label>
                <div className="flex">
                  <input
                    disabled={!editing}
                    id="name"
                    className={c(
                      "border-1  rounded-lg px-4 py-2 w-full",
                      editing ? "bg-gray-200" : "bg-gray"
                    )}
                    type="text"
                    placeholder={
                      userInfo.name == "Anonymous"
                        ? "Anonymous User"
                        : userInfo.name
                    }
                    onChange={(e) =>
                      setFormdata({ ...formdata, name: e.target.value })
                    }
                  />
                </div>
              </div>
              {/* Don't edit email */}
              <div className="pb-4">
                <label
                  htmlFor="about"
                  className="font-semibold text-gray-700 block pb-1"
                >
                  Email
                </label>
                <input
                  disabled
                  id="email"
                  className="border-1  rounded-r px-4 py-2 w-full"
                  type="email"
                  placeholder={userInfo.email}
                />
              </div>

              <div className="pb-4">
                <label
                  htmlFor="about"
                  className="font-semibold text-gray-700 block pb-1"
                >
                  Phone
                </label>
                <input
                  disabled={!editing}
                  id="email"
                  className={c(
                    "border-1  rounded-lg px-4 py-2 w-full",
                    editing ? "bg-gray-200" : "bg-gray"
                  )}
                  type="email"
                  placeholder={
                    userInfo.phone == null ? "Not Provided" : userInfo.phone
                  }
                  onChange={(e) =>
                    setFormdata({ ...formdata, phone: e.target.value })
                  }
                />
              </div>
              <div className="pb-4">
                <label
                  htmlFor="about"
                  className="font-semibold text-gray-700 block pb-1"
                >
                  Address
                </label>
                <input
                  disabled={!editing}
                  id="email"
                  className={c(
                    "border-1  rounded-lg px-4 py-2 w-full",
                    editing ? "bg-gray-200" : "bg-gray"
                  )}
                  type="email"
                  placeholder={
                    userInfo.address == "" ? "Not Provided" : userInfo.address
                  }
                  onChange={(e) =>
                    setFormdata({ ...formdata, address: e.target.value })
                  }
                />
              </div>
            </div>
            <div className="flex items-center justify-center gap-5 mt-5">
              <button className="px-4 py-2 bg-yellow-primary text-black rounded-lg shadow-md focus:outline-none">
                View Orders
              </button>
              <button className="px-4 py-2 bg-yellow-primary text-black rounded-lg shadow-md focus:outline-none">
                View Wishlist
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Logout Button */}
      <section className="flex items-center justify-center m-5">
        <button
          className="px-4 py-2 bg-yellow-primary text-black rounded-lg shadow-md hover:bg-red-600 focus:outline-none"
          onClick={handleLogout}
        >
          Logout
        </button>
      </section>
    </>
  );
};

export default ProfileScreen;
