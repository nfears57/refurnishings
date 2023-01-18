// import React, { useState } from 'react';
// import axios from 'axios'
// import './CreateAccountForm.css'
// function CreateSellerForm() {
//     const [state, setState] = useState({
//       username: '',
//       email: '',
//       password: '',
//       city: '',
//     });
  
  
//     const handleChange = (event) => {
//         const { name, value } = event.target;
//         setState({ ...state, [name]: value });
//       };
  
//     const handleSubmit = (event) => {
//       event.preventDefault();
//       axios.post('/sellers', {
//         username: state.username,
//         password: state.password,
//         email: state.email,
//         city: state.city,
//       })
//         .then((response) => {
//           console.log(state.name);
//           console.log(response.data);
//           alert('Account Created!');
//         })
//         .catch((error) => {
//           console.log(error);
//         });
//     };
  
   
      
//       return (
//         <form onSubmit={handleSubmit}>
//           <label>
//             Name:
//             <input
//               type="username"
//               name="username"
//               value={state.username}
//               onChange={handleChange}
//             />
//           </label>
//           <label>
//             Email:
//             <input
//               type="email"
//               name="email"
//               value={state.email}
//               onChange={handleChange}
//             />
//           </label>
//           <label>
//             Password:
//             <input
//               type="password"
//               name="password"
//               value={state.password}
//               onChange={handleChange}
//             />
//           </label>
//           <label>
//             City:
//             <input
//               type="city"
//               name="city"
//               value={state.city}
//               onChange={handleChange}
//             />
//           </label>
//           <input type="submit" value="Create Account" />
//         </form>
//       );
//     }

//   export default CreateSellerForm
  