import React from 'react';
import Sidebar from '../../components/sidebar'

export default function Admins() {
  return (
    <div style={styles.container}>
        <Sidebar/>
      <h1 style={styles.heading}>Admin Management Page</h1>
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
  heading: {
    color: '#333',
  },
};