import { useNavigate } from "react-router-dom";

const BookGridComponent = () => {
    const navigate = useNavigate();
  return (
    <div
      className="lg:w-1/6 md:w-1/3 p-4 w-full border"
      onClick={() => navigate("/books/details")}
    >
      <a className="block relative h-auto rounded overflow-hidden">
        <img
          alt="ecommerce"
          className="object-cover object-center w-full h-full block"
          src="https://www.dramaticpublishing.com/media/catalog/product/cache/1/image/300x436/9df78eab33525d08d6e5fb8d27136e95/j/u/jungle_book_cover_j24000.jpg"
        />
      </a>
      <div className="mt-4">
        <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
          Rudyard Kipling&apos;s
        </h3>
        <h2 className="text-gray-900 title-font text-lg font-medium">
          Jungle Book
        </h2>
        <p className="mt-1">$16.00</p>
      </div>
    </div>
  );
};

export default BookGridComponent;
