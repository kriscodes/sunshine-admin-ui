import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Sidebar from '../../components/sidebar'

export default function Admins() {

  const [users, setUsers] = useState([]);

  const options = {
    timeZone: "America/Los_Angeles",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true
  };

  useEffect( () => {
    try{
      async function fetchUsers() {
      
        await axios.get('https://sunshine-api.onrender.com/users').then(res => {
        const c = res.data;
        setUsers(c);
      });
      }
      fetchUsers();
    }
    catch(err){
      console.log(err);
    }
  }, [])

  return (
    <div style={styles.container}>
        <Sidebar/>
      <h1 style={styles.heading}>Users</h1>
        <table className="tab">
            <thead>
            <tr>
                    <th>Email</th>
                    <th>Created Date</th>
            </tr>
            </thead>
            <tbody>
                {users.map((user, index) => {

                    const isoCreatedTimestamp = user.created_at;

                    const utcCreatedDate = new Date(isoCreatedTimestamp);

                    const formatter = new Intl.DateTimeFormat("en-US", options);
                    const formattedCreatedDate = formatter.format(utcCreatedDate);

                    return (
                    <tr key={index}>
                        <td>{user.email}</td>
                        <td>{formattedCreatedDate}</td>
                    </tr>
                    )
                })}
            </tbody>
        </table>
        
    </div>
  );
}

const styles = {
  container: {
    marginLeft: '180px',
    paddingLeft: '24px',
    marginTop: '0px',
    paddingTop: '48px',
    height: '100vh',
    backgroundColor: '#f5f5f5',
  },
  heading: {
    color: '#333',
    marginTop: '0px',
  },
};