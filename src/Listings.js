import React, {useState, useEffect} from 'react'
import './Listing.css'

function Listings({user}){
    const [itemData, setItemData] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [purchases, setPurchases] = useState([])
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const handleBuy = (itemId) => {
        // Check if the item has already been purchased
        const alreadyPurchased = purchases.find(purchase => purchase.item_id === itemId);
        if (alreadyPurchased) {
            console.log("This item has already been purchased and cannot be bought again.");
            return;
        }
        // Make a POST request to the server to create a purchase
        fetch('/purchases', {
            method: 'POST',
            body: JSON.stringify({user_id: user.id, item_id: itemId}),
            headers: {
                'Content-Type': 'application/json'
            }
        })    
        .then(response => response.json())
        .then(data => {
            setPurchases([...purchases, data])
            console.log(purchases)
        })
        .catch((error) => {
            if (error.status === 404) {
                console.error("Purchase not found");
            } else if (error.status === 422) {
                console.error("Unprocessable Entities");
            } else {
                console.error(error);
            }
        });
    }
    
    

    useEffect(() => {
      fetch('/items')
        .then(response => response.json())
        .then((data) => {console.log(data)
        setItemData(data)
    
    })
        .catch((error) => {
          console.error(error);
          setItemData([]); 
        });
    }, []);

    if (itemData.length === 0) {
        return <div>No items found</div>;
    }
    
    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    }
    const filteredData = itemData.filter(item => {
        return item.furniture_name.toLowerCase().includes(searchTerm.toLowerCase()) || item.city.toLowerCase().includes(searchTerm.toLowerCase());
    });

   
    return(
        <div>
            <input type="text" placeholder="Search by furniture name or city" onChange={handleSearch} />
            {filteredData.map(item => (
                <div key={item.id}>
                    <img className="listing-image" src={item.image_url} alt={`Image of ${item.furniture_name}`} />
                    <div>{item.furniture_name}</div>
                    ${item.price}
                    <div>Condition:{item.condition}</div>
                    <div>{item.city}</div>
                    {/* <button className="delete-item" onClick={() => handleDeleteItem(item.id)}>Delete</button> */}
                    <button className="buy" onClick={() => handleBuy(item.id)}>Buy</button>
                </div>
            ))}
        </div>
    )

}

export default Listings