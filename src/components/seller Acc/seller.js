import React from 'react'
import logo from "./logo.png"
import './seller.css';
import { FaUser,FaAngleDown, FaPlus, FaList } from 'react-icons/fa'

export default function SellerIn() {
  return (
    <div className="seller">
    <header>
            <img src={logo} alt="logo" />
    <h2 class="mb-4 text-3xl font-extrabold leading-none tracking-tight text-900 md:text-4xl dark:text-white">Sell Item</h2>
            <div id="userAcc" >
                <FaUser/>
                My Account
                <FaAngleDown/>
                </div>
        </header>
        <div className="sellerInfo">
            <span>create New Item <FaPlus/></span>
           <span>View Items <FaList/></span>
        </div>
    <div className='containerSeller'>
        
        
    <div className="sellerItem">
    <h3 class="text-3xl font-bold text-gray-900 dark:text-white">Create Item</h3>
    <form>
      <div class="grid gap-6 mb-6 md:grid-cols-1">

      <div>
            <label for="item_name" class="block mb-2 text-sm font-medium text-var(--colorTwo)-900 dark:text-white">Item Name</label>
            <input type="text" id="item_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Item Name" required/>
        </div>

        <label for="item_cartegory" class="block mb-2 text-sm font-medium text-900 dark:text-white">Select a Cartegory</label>
          <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option selected>Cartegory</option>
            <option value="phone">Phones</option>
            <option value="shoe">shoes</option>
            <option value="bag">Bags</option>
            <option value="elec">Electronics</option>
          </select>

            <div>
            <label for="item_price" class="block mb-2 text-sm font-medium texts-900 dark:text-white">Item Price</label>
            <input type="text" id="item_price" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Item Price" required/>
        </div>

        <div>
            <label for="item_desc" class="block mb-2 text-sm font-medium text-900 dark:text-white">Item Description</label>
            <input type="text" id="item_desc" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Item Description" required/>
        </div>

          <div>
              <label class="block mb-2 text-sm font-medium text-900 dark:text-white" for="multiple_files">Upload multiple files</label>
              <input class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-var(--colorTwo)-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="multiple_files" type="file" multiple/>
          </div>

          <div>
          <button type="button" class="text-white bg-red-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Submit
          <svg aria-hidden="true" class="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
          </button>
          </div>

              </div>
         </form>         
        
        </div>
        <div className="sellerReview">
      
      </div>
    </div>
    </div>
  )
}
