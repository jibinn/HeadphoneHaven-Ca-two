import React from 'react';
import Header from './components/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import './App.css';
import { Container } from 'react-bootstrap';
import CosmicProductscreen from './Screens/CosmicProductscreen';
import CosmicCartscreen from './Screens/CosmicCartscreen';
import CosmicLoginScreen from './Screens/CosmicLoginScreen';
import CosmicRegisterScreen from './Screens/CosmicRegisterScreen';
import CosmicProfileScreen from './Screens/CosmicProfileScreen';
import CosmicShippingScreen from './Screens/CosmicShippingScreen';
import CosmicOrderListScreen from './Screens/CosmicOrderListScreen';
import CosmicHomescreen from './Screens/CosmicHomescreen';
import CosmicPaymentScreen from './Screens/CosmicPaymentScreen';
import CosmicUserListScreen from './Screens/CosmicuserListScreen';
import ProductListScreen from './Screens/ProductListScreen';
import CosmicPlaceOrderScreen from './Screens/CosmicPlaceOrderScreen';
import CosmicUserEditScreen from './Screens/CosmicuserEditScreen';
import TestComponent from './Screens/TestComponent';



function App() {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Routes>
            <Route path="/" element={<CosmicHomescreen/>} />
            <Route path="/login" element={<CosmicLoginScreen />} />
            <Route path="/register" element={<CosmicRegisterScreen />} />
            <Route path="/Profile" element={<CosmicProfileScreen />} />
            <Route path="/shipping" element={<CosmicShippingScreen />} />
            <Route path="/payment" element={<CosmicPaymentScreen />} />
            <Route path="/placeorder" element={<CosmicPlaceOrderScreen />} />
            <Route path="/admin/userlist" element={<CosmicUserListScreen/>} />
            <Route path="/admin/user/:id/edit" element={<CosmicUserEditScreen/>} />
           
            <Route path="/product/:id" element={<CosmicProductscreen />} />
          
            <Route path='/admin/productlist' element={<ProductListScreen />} />
            <Route path='/admin/product/:id/edit' element={<TestComponent/>} />
        
        
            
            <Route path="/cart/:id?" element={<CosmicCartscreen />} />
            <Route path="/admin/orderlist" element={<CosmicOrderListScreen />} />
          </Routes>
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
