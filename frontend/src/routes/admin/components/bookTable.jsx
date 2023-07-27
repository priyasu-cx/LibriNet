import { useDispatch, useSelector } from "react-redux";
import { setBooks } from "../../../slices/bookSlice";
import { useGetBooksMutation } from "../../../slices/bookApiSlice";
import { useUpdateBookMutation, useAddBookMutation, useDeleteBookMutation } from "../../../slices/adminApiSlice";
import { useState } from "react";
import { toast } from "react-toastify";

const BookTable = () => {
  const [getbooks] = useGetBooksMutation();
  const [updatebooks] = useUpdateBookMutation();
  const [addbooks] = useAddBookMutation();
  const [deletebook] = useDeleteBookMutation();
  const dispatch = useDispatch();
  const { bookInfo } = useSelector((state) => state.book);
  const [newbook, setNewBook] = useState({});
  const [addbook, setAddBook] = useState({
    bookno: "",
    bookname: "",
    author: "",
    price: "",
    stock: "",
    image: "",
  });
  const [editIdx, setEditIdx] = useState(-1);

  const handleRefresh = async () => {
    setEditIdx(-1);
    console.log("refresh");
    try {
      const res = await getbooks().unwrap();
      dispatch(setBooks({ ...res }));
    } catch (err) {
      console.log(err);
    }
  };

  // console.log(Object.values(bookInfo).length);

  const handleDelete = (bookno) => async () => {
    console.log("delete");
    try{
      const res = await deletebook(bookno).unwrap();
      if(res) {
        handleRefresh();
        toast.success("Book Deleted");
      } else {
        toast.error("Delete failed");
      }
    }catch{
      toast.error("Delete failed");
    }
  }

  const handleAddBook =() => () => {
    console.log("add book");
    console.log(newbook);
    try{
      dispatch(setBooks({ ...bookInfo, [addbook.bookno]: {
        ...addbook,
      } }));

      const index = Object.values(bookInfo).length;

      setEditIdx(index);

      setAddBook({
        bookno: "",
        bookname: "",
        author: "",
        price: "",
        stock: "",
      });
    } catch (err) {
      console.log(err);
    }
  };

  const handleEdit = (idx, bookno) => async () => {
    if(bookno == "") {
      try{
        const res = await addbooks(newbook).unwrap();
        if(res) {
          handleRefresh();
          toast.success("Book Added");
        } else {
          toast.error("All fields are required");
        }
      }catch(err) {
        console.log(err);
      }
      return;
    }
    if (editIdx == idx) {
      // save
      setEditIdx(-1);
      newbook.bookno = bookno;
      try {
        const res = await updatebooks(newbook).unwrap();
        if (res) {
          handleRefresh();
          toast.success("Book Updated");
        } else {
          toast.error("Update at least one field");
        }
      } catch (err) {
        console.log(err);
        toast.error("Update at least one field");
      }
    } else {
      setEditIdx(idx);
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
            onClick={handleAddBook()}
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
        <table className="w-full table-auto text-md text-left">
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
                <td className="px-6 py-4 whitespace-nowrap">
                  <input
                    disabled
                    className="border-1 rounded-lg px-4 py-2 w-full bg-transparent"
                    type="text"
                    name="bookno"
                    placeholder={item.bookno == "" ? "Auto Generated" : item.bookno}
                  />
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <input
                    disabled={editIdx !== idx}
                    className="border-1 rounded-lg px-4 py-2 w-full bg-transparent"
                    type="text"
                    name="bookname"
                    placeholder={item.bookname}
                    onChange={(e) =>
                      setNewBook({ ...newbook, bookname: e.target.value })
                    }
                  />
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <input
                    disabled={editIdx !== idx}
                    className="border-1 rounded-lg px-4 py-2 w-full bg-transparent"
                    type="text"
                    name="author"
                    placeholder={item.image}
                    onChange={(e) =>
                      setNewBook({
                        ...newbook,
                        image: e.target.value || item.image,
                      })
                    }
                  />
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <input
                    disabled={editIdx !== idx}
                    className="border-1 rounded-lg px-4 py-2 w-full bg-transparent"
                    type="text"
                    name="author"
                    placeholder={item.author}
                    onChange={(e) =>
                      setNewBook({
                        ...newbook,
                        author: e.target.value || item.author,
                      })
                    }
                  />
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <input
                    disabled={editIdx !== idx}
                    className="border-1 rounded-lg px-4 py-2 w-full bg-transparent"
                    type="number"
                    name="price"
                    placeholder={item.price}
                    onChange={(e) =>
                      setNewBook({
                        ...newbook,
                        price: e.target.value || item.price,
                      })
                    }
                  />
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <input
                    disabled={editIdx !== idx}
                    className="border-1 rounded-lg px-4 py-2 w-full bg-transparent"
                    type="text"
                    name="stock"
                    placeholder={item.stock}
                    onChange={(e) =>
                      setNewBook({
                        ...newbook,
                        stock: e.target.value || item.stock,
                      })
                    }
                  />
                </td>
                <td className="text-right px-6 whitespace-nowrap">
                  <button
                    onClick={handleEdit(idx, item.bookno)}
                    className="py-2 px-3 font-medium text-indigo-600 hover:text-indigo-500 duration-150 hover:bg-gray-50 rounded-lg"
                  >
                    {editIdx != idx ? "Edit" : "Save"}
                  </button>
                  <button
                    onClick={handleDelete(item.bookno)}
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
