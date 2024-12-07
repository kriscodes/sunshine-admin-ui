import React from "react";
import { useState } from "react";
import { useForm } from 'react-hook-form';
import axios from "axios";
import { Link } from "react-router-dom";

export default function Home() {

  const { handleSubmit, formState: { errors } } = useForm();

  const [inputText, setInputText] = useState('');
  const [hashedText, setHashedText] = useState('');

  const [formData, setFormData] = useState({
    username: '',
    password: ''
  })

  async function hashPassword() {
    const encoder = new TextEncoder();
    const data = encoder.encode(inputText);
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashedText = hashArray.map(byte => byte.toString(16).padStart(2, '0')).join('');
    setHashedText(hashedText);

    console.log(hashedText);
  }

  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    hashPassword();
    setFormData({
      ...setFormData,
      'password': value
    });
  };

  const handleUsernameChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...setFormData,
      'username': value
    });
  };

  const handleLogin = async(data) => {
    console.log(formData);
    async function fetchUsers() {
      await axios.get('https://dev.api.sunshinepreschool1-2.org/api/users').then(res => {
      const c = res.data;
      console.log(res.data);
    });
    }
    fetchUsers();
    hashPassword();
  }

  return (
    <div style={styles.container}>
        <form style={styles.form} onSubmit={handleSubmit(handleLogin)}>
            <h1 style={styles.heading}>Login</h1>
            <input
            type="text"
            placeholder="Username"
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