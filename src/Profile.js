import React, { useState, useEffect } from 'react'

function Profile() {
    const [purchases, setPurchases] = useState([]);

    useEffect(() => {
        fetch('/purchases')
        .then(res => res.json())
        .then(data => setPurchases(data))
    }, []);

    console.log(purchases)

    return (
        <div>
            <div>
                <h1>Profile</h1>
                <ol>
                    {purchases.map(purchase => (
                        <li key={purchase.id}>{purchase.item_id}</li>
                    ))}
                </ol>
            </div>
        </div>
    )
}

export default Profile
