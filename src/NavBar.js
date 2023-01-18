import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import './NavBar.css'

function Navbar({onLogout}) {
const [balance, setBalance] = useState(0);


    function handleLogout() {
        // const logout = onLogout
        fetch("/logout", {
            method: "DELETE",
        }).then(() => {
            // Reset the balance to 0 when the logout is successful
            setBalance(0);
            // Call the onLogout callback
            onLogout();
            window.location.href = '/login';
        })
    }
    return (
        <nav className="nav">
        <Link to="/">Home</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/login">Login</Link>
        {/* <Link to="/cart">Cart</Link> */}
        <button className="logout-button" onClick={handleLogout}>Logout</button>
        </nav>
    )
}
export default Navbar