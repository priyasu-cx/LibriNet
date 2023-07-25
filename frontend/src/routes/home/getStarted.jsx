import { useNavigate } from "react-router-dom";

const GetStarted = () => {
    const navigate = useNavigate();
  return (
    <>
      <h1 className="font-Unica text-3xl md:text-7xl py-5 mt-6">Get Started</h1>
      <span className="lg:text-xl lg:w-1/3 px-10 text-center">
        Don&apos;t miss the latest literary gems! Sign up today and embrace the
        world of books at your fingertips.
      </span>
      <button className="px-4 py-2 bg-yellow-primary m-6 text-black text-xl rounded-lg shadow-md focus:outline-none" onClick={
            () => navigate("/login")
      }>
        Create Your Account
      </button>
    </>
  );
};

export default GetStarted;
