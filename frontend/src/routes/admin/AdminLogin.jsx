import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RiAdminFill } from "react-icons/ri";
import { useLoginMutation } from "../../slices/adminApiSlice";
import { setCredentials } from "../../slices/authSlice";
import { toast } from "react-toastify";

const Admin = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [login] = useLoginMutation();

  const { userInfo } = useSelector((state) => state.auth);

  useEffect(() => {
    document.title = "Admin Login";
    if (userInfo) {
      navigate("/admin/dashboard");
    }
  }, [navigate, userInfo]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await login({ email, password }).unwrap();
      // console.log(res);
      dispatch(setCredentials({ ...res }));
      navigate("/admin/dashboard");
    } catch (err) {
      // console.log(err.data.msg);
      toast.error(err.data.msg);
    }
  };

  return (
    <>
      <div className="bg-white h-auto py-24 overflow-hidden flex items-center justify-center">
        <div className="bg-white lg:w-5/12 md:6/12 w-10/12 shadow-2xl">
          <div className="bg-black absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full p-4 md:p-8">
            <RiAdminFill className="text-white" size={50} />
          </div>
          <div>
            <h1 className="font-bold text-2xl md:text-4xl text-center mt-20">
              Admin Login
            </h1>
            <p className="text-sm md:text-lg text-center py-2 px-6 text-gray-500">
              Enter your password to access the admin dashboard.
            </p>
          </div>

          <form className="p-12 md:px-24 md:pb-24" onSubmit={handleSubmit}>
            <div className="bg-gray-200 rounded-lg flex items-center text-lg mb-6 md:mb-8">
              <svg className="absolute ml-3" width="24" viewBox="0 0 24 24">
                <path d="M20.822 18.096c-3.439-.794-6.64-1.49-5.09-4.418 4.72-8.912 1.251-13.678-3.732-13.678-5.082 0-8.464 4.949-3.732 13.678 1.597 2.945-1.725 3.641-5.09 4.418-3.073.71-3.188 2.236-3.178 4.904l.004 1h23.99l.004-.969c.012-2.688-.092-4.222-3.176-4.935z" />
              </svg>
              <input
                type="text"
                id="username"
                className="bg-transparent pl-12 py-2 md:py-4 focus:outline-none w-full"
                placeholder="Username"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="bg-gray-200 rounded-lg flex items-center text-lg mb-6 md:mb-8">
              <svg className="absolute ml-3" viewBox="0 0 24 24" width="24">
                <path d="m18.75 9h-.75v-3c0-3.309-2.691-6-6-6s-6 2.691-6 6v3h-.75c-1.24 0-2.25 1.009-2.25 2.25v10.5c0 1.241 1.01 2.25 2.25 2.25h13.5c1.24 0 2.25-1.009 2.25-2.25v-10.5c0-1.241-1.01-2.25-2.25-2.25zm-10.75-3c0-2.206 1.794-4 4-4s4 1.794 4 4v3h-8zm5 10.722v2.278c0 .552-.447 1-1 1s-1-.448-1-1v-2.278c-.595-.347-1-.985-1-1.722 0-1.103.897-2 2-2s2 .897 2 2c0 .737-.405 1.375-1 1.722z" />
              </svg>
              <input
                type="password"
                id="password"
                className="bg-transparent pl-12 py-2 md:py-4 focus:outline-none w-full"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button
              className="bg-gradient-to-b from-gray-600 to-black rounded-lg font-medium p-2 md:p-4 text-white uppercase w-full"
              type="submit"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Admin;
