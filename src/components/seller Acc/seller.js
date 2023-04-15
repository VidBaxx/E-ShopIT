import React from 'react'
import logo from "./logo.png"
import './seller.css';
import { FaUser,FaAngleDown, FaPlus, FaList } from 'react-icons/fa'

export default function SellerIn() {
  return (
    <div className="seller">
    <header>
            <img src={logo} alt="logo" />
            <h1>Seller Dashboard</h1>
            <div id="userAcc">
                <FaUser/>
                My Account
                <FaAngleDown/>
                </div>
        </header>
    <div className='container'>
        
        <div className="sellerInfo">
            <h4>What do you want to do?</h4>
            <span>create New Item <FaPlus/></span>
           <span>View Items <FaList/></span>
        </div>
          <div className="sellerItem">

          <div class="input-field">
             <input type="text" required=""/>
             <label>Item Name</label>		
              </div>

            <div class="input-field">
            <select>
              <option>Phones</option>
              <option>Cars</option>
              <option>Acccesories</option>
              <option>Shoes</option>
            </select>
            <label >Category</label>
            </div>

            <div className="input-field">
                    <input type="text" required=""/>
                    <label>Price</label>		
                  </div>

                  <div class="input-field">
                    <input type="textarea" required=""/>
                    <label>Description</label>		
                  </div>

                  <div  class="input-field"> 
                  <input type="file" accept="image/png, image/jpg, image/gif, image/jpeg"/>
                    <label>Upload File	</label>	
                  </div>
              <button className="input-btn">Publish Item</button>
                  
        
        </div>
        <div className="sellerReview">
      
      </div>
    </div>
    </div>
  )
}
