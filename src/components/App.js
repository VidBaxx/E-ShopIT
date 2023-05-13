import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import Home from './Home';
import Login from './pages/auth/Login';
import Profile from './profile/Profile';
import Signin from './pages/auth/Signin';
import SellerIn from './seller Acc/seller';




function App() {
   return (
    
    <div className="App">
      <Router>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path='/profile' element={<Profile/>} />
        <Route path='/signin' element ={<Signin/>} />
        <Route path='/seller' element={<SellerIn/>}/>
      </Routes>
      </Router>

      
    </div>
  );
}

export default App;
