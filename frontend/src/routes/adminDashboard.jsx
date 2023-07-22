import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useLogoutMutation } from "../slices/adminApiSlice";
import { setCredentials } from "../slices/authSlice";

const AdminDashboard = () => {
  const[logout] = useLogoutMutation();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {userInfo} = useSelector((state) => state.auth);

  useEffect(() => {
    document.title = "Admin Dashboard";
    if(!userInfo) {
      navigate("/");
    }
  }, [navigate, userInfo]);

  const handleLogout = async(e) => {
    e.preventDefault();
    // console.log("logout");
    const res = await logout().unwrap();
    if(res) {
      dispatch(setCredentials(null));
      navigate("/");
    } else {
      console.log("Logout failed");
    }
  };

  return (
    <>
      <h1>Admin Dashboard</h1>
    
      {/* Logout Button */}
      <section className="flex items-center justify-center">
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

export default AdminDashboard;
