import './App.css';
import React, { useState, useEffect } from 'react';
import NavBar from './NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Profile from './Profile';
import Login from './Login';
import CreateUserForm from './CreateUserForm';
import Cart from './Cart';
import "./App.css"
// import CreateSellerForm from './CreateSellerForm';

function App({id}) {
  const [user, setUser] = useState(null);
  const [cart, setCart] = useState([]);
  const [itemData, setItemData] = useState([]);
  useEffect(() => {
    fetch(`/me/${id}`)
    .then(res => {
      if (res.ok) {
        res.json().then(user => setUser(user))
      }
    })
    console.log(user)
  }, [])
  // const handleAddToCart = (itemId) => {
  //   // Find the item in the itemData array
  //   const item = itemData.find(i => i.id === itemId);
  //   // Add the item to the cart
  //   setCart([...cart, item]);
  //   console.log(item)
  // }
  
  function handleLogOut() {
    fetch('/logout', {
      method: 'DELETE',
    })
      .then((r) => {
        if (r.ok) {
          setUser(null);
        }
      });
  }

  function onLogin(user) {
    setUser(user);
  }

  return (
    <Router>
      <NavBar onLogout={handleLogOut} />
      <Routes>
      <Route path="/" element={<Home itemData={itemData} user={user}/>} />
        <Route path="/profile" element={<Profile user={user}/>} />
        <Route path="/login" element={<Login setUser={setUser} onLogin={onLogin} />} />
        {/* <Route path="/create-seller-account" element={<CreateSellerForm />} /> */}
        <Route path="/create-user-account" element={<CreateUserForm />} /> 
        {/* <Route path="/cart" element={<Cart cart={cart} itemData={itemData} handleAddToCart={handleAddToCart}/>}/> */}
      </Routes>
    </Router>
  );
}

export default App;
