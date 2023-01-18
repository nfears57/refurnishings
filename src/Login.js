import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import './Login.css'

function Login({ onLogin }) {
    const [form, setForm] = useState({
        email: "",
        password: "",
      })
      const [errors, setErrors] = useState(null)

      function handleChange(e) {
        const value = e.target.value;
        const keyName = e.target.name;
        setForm({ ...form, [keyName]: value })
      }


      const handleSubmit = (e) => {
        e.preventDefault()
        fetch("/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
        }).then((r) => {
          if (r.ok) {
            r.json().then((user) => {
              onLogin(user)
              console.log(user)
              setErrors(null);
              window.location.href = '/';
            })
          } else {
            r.json().then(errors => setErrors(errors))
          }
        }).catch((error) => {
          console.error("Error:", error);
        });
      
        setForm({
          email: "",
          password: "",
        })
      }      
    
    return (
        <div className='login'>
            <form className="Container" onSubmit={handleSubmit}>
                <div>
                    <label>
                        Email:
                        <input type="email" name="email" value={form.email} onChange={handleChange} />
                    </label>
                </div>
                <br />
                <div>
                    <label>
                        Password:
                        <input type="password" name="password" value={form.password} onChange={handleChange} />
                    </label>
                </div>
                <input type="submit" value="Log in" />
                <Link to="/create-user-account">Not a user? Create an account here!</Link>
            </form>
        </div>
    )
}

export default Login;
