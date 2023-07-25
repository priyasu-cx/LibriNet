import image from "../assets/Geometry.png";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    document.title = "LibriNET | Home";

  }, []);

  return (
    <>
    {/* Top Section */}
      <section className="flex flex-col items-center justify-center py-8 mb-20 text-text-primary">
        <img src={image} alt="scroll logo" />
        <p className="font-Unica text-3xl md:text-7xl py-5 mt-6">Unleashh Your</p>
        <div className="rounded-xl border-2 p-4 bg-yellow-primary">
          <p className="font-Unica text-3xl md:text-7xl ">BookStore Potential!</p>
        </div>
        <button className="bg-yellow-primary text-text-primary font-Unica text-2xl px-4 py-2 rounded-xl mt-5">
          Browse Books
        </button>
      </section>

      {/* Discover Section */}

    </>
  );
};

export default Home;
