import React from "react";
import { useState } from "react";
import { useForm } from 'react-hook-form';
import axios from "axios";

const CreateAccount = () => {

    const { handleSubmit, formState: { errors } } = useForm();
    const [cPassword, setCPassword] = useState('');

    const [inputText, setInputText] = useState('');
    const [hashedText, setHashedText] = useState('');

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    })

    async function hashPassword() {
        const encoder = new TextEncoder();
        const data = encoder.encode(inputText);
        const hashBuffer = await crypto.subtle.digest('SHA-256', data);
        const hashArray = Array.from(new Uint8Array(hashBuffer));
        const hashedText = hashArray.map(byte => byte.toString(16).padStart(2, '0')).join('');
        setHashedText(hashedText);
    
        console.log(hashArray);
    }

    const handleNameChange = (e) => {
        const { value } = e.target;
        setFormData({
            ...formData,
          'name': value
        });
    };

    const handleCPasswordChange = (e) => {
        const { value } = e.target;
       if(value === formData.password) {
        
       }
    };

    const handlePasswordChange = (e) => {
        const { value } = e.target;
        setFormData({
            ...formData,
            'password': value
        });
    };

    const handleEmailChange = (e) => {
        const { value } = e.target;
        setFormData({
            ...formData,
            'email': value
        });
    };

    const onSubmit = async(data) => {
        console.log(formData);
        async function createUser() {
            await axios.post('https://dev.api.sunshinepreschool1-2.org/api/users', formData).then(res => {
            const c = res.data;
            console.log(res.data);
        });
        }
        createUser();
    };

    return (
    <div style={styles.container}>
        <form style={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="username">Full Name *</label>
            <input
                id="name"
                name="name"
                type="text"
                placeholder="Full Name"
                onChange={handleNameChange}
                style={styles.input}
            />
            <label htmlFor="username">Email *</label>
            <input
                id="email"
                name="email"
                type="text"
                placeholder="email"
                onChange={handleEmailChange}
                style={styles.input}
            />
             <label htmlFor="password">Password *</label>
            <input
                id="password"
                name="password"
                type="password"
                placeholder="Password"
                onChange={handlePasswordChange}
                style={styles.input}
            />
            <label htmlFor="password">Confirm Password *</label>
            <input
                id="cpassword"
                name="cpassword"
                type="password"
                placeholder="Confirm Password"
                onChange={handleCPasswordChange}
                style={styles.input}
            />
            <button type="submit" style={styles.button}>Create Account</button>
        </form>
    </div>
    );
}

export default CreateAccount;

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