import React from "react";
import { useState } from "react";
import { useForm } from 'react-hook-form';
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export default function Home() {

  const navigate = useNavigate();
  const { handleSubmit, formState: { errors } } = useForm();
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  })

  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
  }

  const handleUsernameChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      'username': value
    });
  }

  const handleLogin = async() => {
    async function fetchUsers() {
      await axios.get('https://sunshine-api.onrender.com/users').then(res => {
      const users = res.data;
      users.map((user) => {
        console.log(user);
        if(user.email === formData.username){
          console.log('emails match');
          console.log('user.password', user.password)
          console.log('formData.password', formData.password)
          if(user.password === formData.password) {
            console.log('login successful');
            return navigate("/dashboard");
          }
        }
        else {
          console.log('no emails match')
        }
      })
    });
    }
    fetchUsers();
  }

  return (
    <div style={styles.container}>
        <form style={styles.form} onSubmit={handleSubmit(handleLogin)}>
            <h1 style={styles.heading}>Login</h1>
            <input
              type="text"
              placeholder="Email"
              id="username"
              name="username"
              onChange={handleUsernameChange}
              style={styles.input}
            />
 
            <input
              type="password"
              placeholder="Password"
              id="password"
              name="password"
              onChange={handlePasswordChange}
              style={styles.input}
            />
            <button type="submit" style={styles.button}>Login</button><br/>
            <Link to='/createAccount'>Create New Account</Link><br/>
            <Link to="/forgot-password">Forgot Password</Link>
        </form>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f5f5f5',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '2rem',
    backgroundColor: 'white',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  },
  heading: {
    marginBottom: '2rem',
    color: '#333',
  },
  input: {
    width: '100%',
    padding: '0.5rem',
    marginBottom: '1rem',
    borderRadius: '4px',
    border: '1px solid #ccc',
  },
  button: {
    width: '100%',
    padding: '0.75rem',
    backgroundColor: '#0070f3',
    color: 'white',
    borderRadius: '4px',
    border: 'none',
    cursor: 'pointer',
    fontWeight: 'bold',
  },
};