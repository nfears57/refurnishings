import React, { useState } from 'react';
import './UploadForm.css'

function UploadForm() {
  const [formData, setFormData] = useState({
    furniture_name: '',
    condition: '',
    image_url: '',
    price: '',
    city: '',
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch('/items', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
        });
    };

  return (
    <form onSubmit={handleSubmit} className="upload">
      <label htmlFor="furniture_name">Furniture Name:</label>
      <input
        type="text"
        name="furniture_name"
        value={formData.furniture_name}
        onChange={handleChange}
      />
      <br />
      <label htmlFor="condition">Condition:</label>
      <input
        type="text"
        name="condition"
        value={formData.condition}
        onChange={handleChange}
      />
      <br />
      <label htmlFor="image_url">Image URL:</label>
      <input
        type="text"
        name="image_url"
        value={formData.image_url}
        onChange={handleChange}
      />
      <br />
      <label htmlFor="price">Price:</label>
      <input
        type="text"
        name="price"
        value={formData.price}
        onChange={handleChange}
      />
      <br />
      <label htmlFor="city">City:</label>
      <input
        type="text"
        name="city"
        value={formData.city}
        onChange={handleChange}
      />
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default UploadForm;
