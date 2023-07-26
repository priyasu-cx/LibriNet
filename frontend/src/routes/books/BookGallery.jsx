import { useEffect } from "react";
import BookGridComponent from "./components/BookGridComponent";
import { useGetBooksMutation } from "../../slices/bookApiSlice";
import { useDispatch, useSelector } from "react-redux";
import { setBooks } from "../../slices/bookSlice";

const BookGallery = () => {

  const[getbooks] = useGetBooksMutation();

  const dispatch = useDispatch();
  const { bookInfo } = useSelector((state) => state.book);

  const fetchBooks = async () => {
    try {
      const res = await getbooks().unwrap();
      // console.log(res);
      dispatch(setBooks({ ...res }));
    } catch (err) {
      console.log(err);
    }
  }

  // console.log(bookInfo);

  useEffect(() => {
    document.title = "Book Gallery";
    fetchBooks();
  }, []);
  return (
    <>
      <div className="flex flex-col items-center justify-center bg-book-cover mx-auto">
        <h1 className="font-Unica text-3xl md:text-7xl lg:mt-16 mt-5 text-gray-800">
          Book Gallery
        </h1>
        <p className="text-lg md:text-3xl text-gray-800">
            Browse through our collection of books
        </p>
        <div className="flex">
            <span>Showing 20 of 80 books</span>
        </div>
        <section className="text-gray-600 w-4/5 body-font">
          <div className="container px-5 lg:py-24 py-10 mx-auto">
            <div className="flex flex-wrap -m-4">
              {Object.values(bookInfo).map((book, index) => (
                <BookGridComponent key={index} book={book} />
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default BookGallery;
