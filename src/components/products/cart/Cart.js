import { type } from '@testing-library/user-event/dist/type';
import {useEffect}from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../../../redux/features/cart/cartSlice'


export default function Cart() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cart)

  useEffect(() => {
    const savedCartItems = JSON.parse(localStorage.getItem('cart'));
    if (savedCartItems && savedCartItems.length > 0) {
      savedCartItems.forEach(element => {
        dispatch(addItem(element))
      });}
    
  }, [dispatch])

  
  
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-10">
      <h1 className="text-3xl font-bold mb-5">Your Cart</h1>
      <div className="flex flex-col">
        {/* Cart items table */}
        <div className="overflow-x-auto">
          <table className="table-auto border w-full">
            <thead>
              <tr className="border-b">
                <th className="p-2">Image</th>
                <th className="p-2">Name</th>
                <th className="p-2">Unit Price</th>
                <th className="p-2">Quantity</th>
                <th className="p-2">Good Amount</th>
                <th className="p-2">Delete</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item._id} className="border-b">
                  <td className="p-2">
                    <img src='https://image.kilimall.com/kenya/shop/store/goods/5238/2023/02/167757469060249646f69c02840238d835b9d5199c5bd_720.png.webp' alt={item.name} className="h-20" />
                  </td>
                  <td className="p-2">{item.name}</td>
                  <td className="p-2">${item.price.toFixed(2)}</td>
                  <td className="p-2">{item.quantity}</td>
                  <td className="p-2">
                    ${(item.price * item.quantity).toFixed(2)}
                  </td>
                  <td className="p-2">
                    <button
                      // onClick={() => removeFromCart(item.id)}
                      className="text-red-600 hover:text-red-800 font-medium"
                    >
                      X
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* Cart summary */}
        <div className="flex flex-col sm:flex-row sm:justify-between items-center mt-5">
          <div className="mb-5 sm:mb-0">
            <button className="bg-red-600 hover:bg-red-800 text-white py-2 px-4 rounded-md">
              Clear Cart
            </button>
          </div>
          <div className="font-medium text-lg">
            Total: </div>
            </div>
            </div>
            </div>

        
  )
}