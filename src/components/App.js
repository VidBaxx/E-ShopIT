import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import Home from './Home';
<<<<<<< HEAD
import SellerIn from './seller Acc/seller';
=======
import Login from './pages/auth/Login';
import Profile from './profile/Profile';
import Signin from './pages/auth/Signin';

>>>>>>> 0f1116776df81f703a6078aed62237be0d95e041


function App() {
   return (
    
    <div className="App">
<<<<<<< HEAD
      <SellerIn/>
=======
      <Router>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path='/profile' element={<Profile/>} />
        <Route path='/signin' element ={<Signin/>} />
      </Routes>
      </Router>
>>>>>>> 0f1116776df81f703a6078aed62237be0d95e041
      
    </div>
  );
}

export default App;
