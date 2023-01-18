import React, {useState} from 'react';
import axios from 'axios';
import './CreateAccountForm.css'

function CreateUserForm() {
  const [states, setStates] = useState({
    name: '',
    email: '',
    password: '',
    city: '',
    state: '',
    address: '',
    account_balance: 0,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setStates({ ...states, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('/users', {
      name: states.name,
      password: states.password,
      email: states.email,
      city: states.city,
      state: states.state,
      address: states.address,
      account_balance: states.account_balance,
    })
      .then((response) => {
        console.log(states.name);
        console.log(response.data);
        alert('Account Created!');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const { name, email, password, city, state, address, account_balance } = states;
  return (
    <form onSubmit={handleSubmit} className='userform'>
      <label>
        Name:
        <input
          type="name"
          name="name"
          value={name}
          onChange={handleChange}
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
        />
      </label>
      <label>
        Password:
        <input
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
        />
      </label>
      <label>
        City:
        <input
          type="city"
          name="city"
          value={city}
          onChange={handleChange}
        />
      </label>
      <label>
        Address:
        <input
          type="address"
          name="address"
          value={address}
          onChange={handleChange}
        />
      </label>
      <label>
        State:
        <input
          type="state"
          name="state"
          value={state}
          onChange={handleChange}
        />
      </label>
      <label>
        Balance:
        <input
          type="account_balance"
          name="account_balance"
          value={account_balance}
          onChange={handleChange}
        />
      </label>
      <input type="submit" value="Create Account" />
    </form>
  );
}

export default CreateUserForm
