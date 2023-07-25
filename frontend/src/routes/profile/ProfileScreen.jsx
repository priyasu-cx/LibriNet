import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useLogoutMutation } from "../../slices/userApiSlice";
import { setCredentials } from "../../slices/authSlice";

const ProfileScreen = () => {
  const [logout] = useLogoutMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
      <h1>Profile</h1>
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

export default ProfileScreen;
