import { useEffect,useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { PayPalButton } from "react-paypal-button-v2";

import { addItem } from '../../redux/features/cart/cartSlice';
import { fetchProduct } from '../../redux/features/products/productDetailsSlice';
import AddToCart from './Modals/AddToCart';
import { addQuantity ,decrementQuantity,getTotal,getCartLength} from '../../redux/features/cart/cartSlice';
import Navtop from '../nav/Navtop';


export default function ProductDetails() {
  const navigate = useNavigate()
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const { error, loading, product } = useSelector((state) => state.productDetails);

  const { id } = useParams();

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

//handle add to cart
const handleAddToCart = () =>{
  const token = localStorage.getItem('token')
  if(token){
      dispatch(addItem(product))
      dispatch(getTotal())
      dispatch(getCartLength());
  }else{
    navigate('/login')

  }
}



  useEffect(() => {
    
    dispatch(fetchProduct(id));
  }, [dispatch]);

  return (
    <div className=" paps bg-gray-100 h-100vh   mx-auto max-w-7xl">
      <div className='shadow-xl v'>
      <Navtop/>
      </div>
       {/* {loading && <div className='Loader'></div>} */}
      <div className='blogDetails  h-2/3 bg-white flex justify-center flex-col md:flex-row md:items-start  mx-auto max-w-7xl'>
      {product &&  (
        <div className=" image   md:w-1/4">
          {/* product image on the left and occupies 45% of the page */}
          <img  src={product.image} alt={product.name}/>
        </div>
      )}
      <div className=" dets md:w-3/5 mt-[20px] flex flex-col  md:pl-10">
        {/* on the right product description , price  quantity , 2 buttons to add to cart and buy */}
        {/* <h2 className="text-3xl font-bold my-4">{product && product.name}</h2> */}
        <p className="text-gray-700  flex-grow text-[20px] mb-4">{product && product.description}</p>
        {/* <p className="text-[#409eff] mb-4">{product && product.review}</p> */}
        <p className="text-2xl bg-gray-100 py-4 text-[#f60] font-bold mb-4 mr-[5px]">${product && product.price.toFixed(2)}</p>
        <div className="flex flex-row items-center mb-4">
          <label htmlFor="quantity" className="mr-2 font-bold">
            Quantity:
          </label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            min="1"
            defaultValue={product ? product.quantity : 1}
            className="border border-gray-500 py-1 px-2 w-16"
          />
        </div>
        <div className="flex flex-row items-center">
          <button className="bg-transparent text-[14px] text-[#f60] border border-orange-400 px-10 py-2  mr-2"
          onClick={handleAddToCart} 
          >Add to Cart</button>
              <AddToCart isOpen={isOpen} onRequestClose={closeModal} portalClassName="modal">
            <h2>Modal Title</h2>
            <p>This is the content of the modal.</p>
            <button onClick={closeModal}>Close Modal</button>
       </AddToCart>
          <button className="bg-[#f60] text-white px-10 py-2 ">Buy Now</button>
        </div>
      </div>
    </div>
    </div>
  );
}
