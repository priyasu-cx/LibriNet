import image from "../../assets/Geometry.png";
import shape from "../../assets/Shapes.png";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import BookCarousel from "./BookCarousel";
import GetStarted from "./getStarted";

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "LibriNET | Home";
  }, []);

  return (
    <>
      {/* Top Section */}
      <section className="flex flex-col items-center justify-center pt-8 pb-16 text-text-primary bg-book-cover">
        <img src={image} alt="scroll logo" />
        <p className="font-Unica text-3xl md:text-7xl py-5 mt-6">
          Unleash your
        </p>
        <div className="rounded-xl border-2 p-4 bg-yellow-primary">
          <p className="font-Unica text-3xl md:text-7xl ">Bookish Oasis!</p>
        </div>
        <button
          className="bg-yellow-primary text-text-primary font-Unica text-2xl px-4 py-2 rounded-xl mt-5"
          onClick={() => {
            navigate("/books");
          }}
        >
          Browse Books
        </button>
      </section>

      {/* Books Section */}
      <section className="flex flex-col mx-auto bg-black">
        <BookCarousel />
      </section>

      {/* Get Started */}
      <section className="flex flex-col items-center justify-center py-16 bg-book-cover">
        <GetStarted />
      </section>

      {/* Shapes */}
      <section className="bg-black">
        <img src={shape} />
      </section>
    </>
  );
};

export default Home;
