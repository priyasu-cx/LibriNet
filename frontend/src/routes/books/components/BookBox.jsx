import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const BookBox = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center py-10 justify-center" onClick={()=>navigate("/books/details")}>
      <img
        className="h-96 rounded-lg object-cover hover:backdrop-blur-lg"
        src="https://www.dramaticpublishing.com/media/catalog/product/cache/1/image/300x436/9df78eab33525d08d6e5fb8d27136e95/j/u/jungle_book_cover_j24000.jpg"
        alt="avatar"
      />
      <span className="font-semibold pt-4 text-lg">Jungle Book</span>
      <span className="font-semibold text-lg text-gray-500">Rudyard Kipling</span>
    </div>
  );
};

BookBox.propTypes = {
  book: PropTypes.object,
};

export default BookBox;
