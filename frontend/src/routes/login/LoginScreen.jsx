import { useState, useEffect } from "react";
import { AiFillMail } from "react-icons/ai";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useSendemailMutation } from "../../slices/userApiSlice";

const LoginScreen = () => {
  const [destination, setDestination] = useState("");

  const navigate = useNavigate();
  const { userInfo } = useSelector((state) => state.auth);

  const [sendemail] = useSendemailMutation();

  useEffect(() => {
    document.title = "Login";
    if(userInfo) {
      navigate("/");
    }
  }, [navigate, userInfo]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!destination) {
      toast.error("Please enter your email");
      return;
    }
    try{
      const res = sendemail({destination}).unwrap();
      console.log(res);
      toast.success("Check your email for the magic link");
    } catch(err) {
      console.log(err);
      toast.error(err.data.msg);
    }
  };

  return (
    <>
      <div className="">
        <div className="bg-white h-auto py-24 overflow-hidden flex items-center justify-center">
          <div className="bg-white lg:w-5/12 md:6/12 w-10/12 shadow-2xl rounded-lg">
            <div>
              <h1 className="font-bold text-2xl md:text-4xl text-center mt-20">
                Welcome
              </h1>
              <p className="text-sm md:text-lg text-center py-2 px-6 text-gray-500">
                Enter your email to login.
              </p>
            </div>

            <form className="p-12 md:px-24 md:pb-24">
              <div className="bg-gray-200 rounded-lg flex items-center text-lg mb-6 md:mb-8">
                <AiFillMail className="absolute ml-3" size={24} />
                <input
                  type="text"
                  id="email"
                  className="bg-transparent pl-12 py-2 md:py-4 focus:outline-none w-full"
                  placeholder="Email"
                  onChange={(e) => setDestination(e.target.value)}
                />
              </div>

              <button
                className="bg-gradient-to-b from-gray-600 to-black rounded-lg font-medium p-2 md:p-4 text-white uppercase w-full"
                type="submit"
                onClick={handleSubmit}
              >
                Get Magic Link
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginScreen;
