import PropTypes from "prop-types";

const BookBox = (book) => {
  return (
    <div className="flex flex-col items-center py-10 justify-center">
      <img
        className="h-96 rounded-lg object-cover hover:backdrop-blur-lg"
        src={book.book.image}
        alt="avatar"
      />
      <span className="font-semibold pt-4 text-lg">{book.book.name}</span>
      <span className="font-semibold text-lg text-gray-500">{book.book.author}</span>
    </div>
  );
};

BookBox.propTypes = {
  book: PropTypes.object,
};

export default BookBox;
