import { useNavigate } from "react-router-dom";

const BookGridComponent = (book) => {
  const navigate = useNavigate();
  // console.log(book);
  return (
    <div
      className="lg:w-1/6 md:w-1/3 p-4 w-full border"
      onClick={() => navigate(`/books/${book.book.bookno}`, { state: book })}
    >
      <a className="block relative h-auto rounded overflow-hidden">
        <img
          alt="ecommerce"
          className="object-cover object-center w-full h-full block"
          src={book.book.image}
        />
      </a>
      <div className="mt-4">
        <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
          {book.book.author}&apos;s
        </h3>
        <h2 className="text-gray-900 title-font text-lg font-medium">
          {book.book.bookname}
        </h2>
        <p className="mt-1">INR {book.book.price}</p>
      </div>
    </div>
  );
};

export default BookGridComponent;
