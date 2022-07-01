
import { Route, Routes } from 'react-router-dom';
import './App.css';

import { ToastContainer } from 'react-toastify';

import Home from './components/Home';

import Navbar from './components/Navbar';
import EditBill from './components/EditBill';
import Login from './components/Login';



function App() {
  return (
    <div >
     <Navbar></Navbar>
    <Routes>
      
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/paidTotal' element={<Home></Home>}></Route>
      <Route path='/login' element={<Login></Login>}></Route>
      <Route path='/editBill/:id' element={<EditBill></EditBill>}></Route>

    </Routes>
    <ToastContainer />
    </div>
  );
}

export default App;
