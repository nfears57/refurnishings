import React, {useState} from 'react';
import Listings from './Listings'
import UploadForm from './UploadForm';
import './Home.css'

function Home({user}) {
    const [itemData, setItemData] = useState([]);
    const [cart, setCart] = useState([]);

    const handleAddToCart = (itemId) => {
        // Find the item in the itemData array
        const item = itemData.find(i => i.id === itemId);
        // Add the item to the cart
        setCart([...cart, item]);
    }

    return (
        <div className="home">
            <h1>Welcome</h1>
            <div>
                <Listings handleAddToCart={handleAddToCart} user={user}/>
            </div>
            <div>
                <UploadForm />
            </div>
        </div>
    )
}

export default Home