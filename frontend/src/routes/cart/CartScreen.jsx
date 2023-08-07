import CartItem from "./CartItem"
import { useSelector } from "react-redux";


const CartScreen = () => {
  const { userInfo } = useSelector((state) => state.auth);
  return (
    <div className="h-screen bg-book-cover pt-10 lg:pt-20">
    <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
      <div className="rounded-lg md:w-2/3">
        {userInfo ? (
          <>
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold">Shopping Cart</h1>
            <p className="text-sm text-gray-500">{userInfo.cart.length} {userInfo.cart.length == 1 ? "item": "items"}</p>
          </div>
          {userInfo.cart.map((item) => (
            <CartItem key={item._id} item={item} />
          ))}
          </>
        ) : (
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold">Shopping Cart</h1>
            <p className="text-sm text-gray-500">0 items</p>
          </div>
        )}
      </div>
      <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
        <div className="mb-2 flex justify-between">
          <p className="text-gray-700">Subtotal</p>
          <p className="text-gray-700">$129.99</p>
        </div>
        <div className="flex justify-between">
          <p className="text-gray-700">Shipping</p>
          <p className="text-gray-700">$4.99</p>
        </div>
        <hr className="my-4" />
        <div className="flex justify-between">
          <p className="text-lg font-bold">Total</p>
          <div className="">
            <p className="mb-1 text-lg font-bold">$134.98 USD</p>
            <p className="text-sm text-gray-700">including VAT</p>
          </div>
        </div>
        <button className="mt-6 w-full rounded-md bg-yellow-primary py-1.5 font-medium text-black hover:bg-yellow-primary">Check out</button>
      </div>
    </div>
  </div>
  )
}

export default CartScreen