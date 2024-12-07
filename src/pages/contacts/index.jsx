import React from 'react';
import { useEffect, useState } from 'react'
import axios from 'axios';
import Sidebar from '../../components/sidebar';

export default function Contacts() {

  const [contacts, setContacts] = useState([]);

  useEffect( () => {
    try{
      async function fetchContacts() {
        await axios.get('https://dev.api.sunshinepreschool1-2.org/api/contacts')
      .then(res => {
        const c = res.data;
        setContacts(c);
      });
      }
      fetchContacts();
    }
    catch(err){
      console.log(err);
    }
  }, [])

  return (
    <div style={styles.container}>
        <Sidebar/>
      <h1 style={styles.heading}>Tours Management Page</h1>
        <table className="tab">
            <thead>
            <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Reason</th>
            </tr>
            </thead>
            <tbody>
                {contacts.map((contact, index) => {
                    return (
                    <tr key={index}>
                        <td>{contact.first_name}</td>
                        <td>{contact.last_name}</td>
                        <td>{contact.email}</td>
                        <td>{contact.phone}</td>
                        <td>{contact.reason}</td>
                    </tr>
                    )
                })}
            </tbody>
        </table>
        
    </div>
  )
}

const styles = {
  container: {
    marginLeft:'230px',
    paddingLeft: '20px',
    marginTop: '-22px',
    marginRight: '-8px',
    paddingTop: '20px',
    backgroundColor: '#f5f5f5',
  },
  heading: {
    color: '#333',
  },
}