import { useDispatch, useSelector } from "react-redux";
import { setBooks } from "../../../slices/bookSlice";
import { useGetBooksMutation } from "../../../slices/bookApiSlice";

const BookTable = () => {

  const[getbooks] = useGetBooksMutation();
  const dispatch = useDispatch();
  const { bookInfo } = useSelector((state) => state.book);

  const handleRefresh = async () => {
    console.log("refresh");
    try {
      const res = await getbooks().unwrap();
      dispatch(setBooks({ ...res }));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="max-w-screen-xl mx-auto px-4 md:px-8">
      <div className="items-start justify-between md:flex">
        <div className="max-w-lg">
          <h3 className="text-gray-800 text-xl font-bold sm:text-2xl">
            Manage Books
          </h3>
          <p className="text-gray-600 mt-2">
            Add, edit, and remove books from the library.
          </p>
        </div>
        <div className="flex mt-3 md:mt-0 gap-5">
          <a
            href="#"
            className="inline-block px-4 py-2 text-white duration-150 font-medium bg-yellow-primary rounded-lg hover:bg-yellow-primary active:bg-yellow-primary md:text-sm"
          >
            Add Book
          </a>
          <a
            href="#"
            onClick={handleRefresh}
            className="inline-block px-4 py-2 text-white duration-150 font-medium bg-yellow-primary rounded-lg hover:bg-yellow-primary active:bg-yellow-primary md:text-sm"
          >
            Refresh
          </a>
        </div>
      </div>
      <div className="mt-12 shadow-sm border rounded-lg overflow-x-auto">
        <table className="w-full table-auto text-sm text-left">
          <thead className="bg-gray-50 text-gray-600 font-medium border-b">
            <tr>
              <th className="py-3 px-6">Book No.</th>
              <th className="py-3 px-6">Book Name</th>
              <th className="py-3 px-6">Book Image</th>
              <th className="py-3 px-6">Author</th>
              <th className="py-3 px-6">Price</th>
              <th className="py-3 px-6">Stock</th>
              <th className="py-3 px-6"></th>
            </tr>
          </thead>
          <tbody className="text-gray-600 divide-y">
            {Object.values(bookInfo).map((item, idx) => (
              <tr key={idx}>
                <td className="px-6 py-4 whitespace-nowrap">{item.bookno}</td>
                <td className="px-6 py-4 whitespace-nowrap">{item.bookname}</td>
                <td className="px-6 py-4 whitespace-nowrap">{item.position}</td>
                <td className="px-6 py-4 whitespace-nowrap">{item.author}</td>
                <td className="px-6 py-4 whitespace-nowrap">{item.price}</td>
                <td className="px-6 py-4 whitespace-nowrap">{item.stock}</td>
                <td className="text-right px-6 whitespace-nowrap">
                  <a
                    href="#"
                    className="py-2 px-3 font-medium text-indigo-600 hover:text-indigo-500 duration-150 hover:bg-gray-50 rounded-lg"
                  >
                    Edit
                  </a>
                  <button
                    href="#"
                    className="py-2 leading-none px-3 font-medium text-red-600 hover:text-red-500 duration-150 hover:bg-gray-50 rounded-lg"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BookTable;
