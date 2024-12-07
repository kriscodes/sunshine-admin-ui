import React from 'react';
import Sidebar from '../../components/sidebar';
import NewEventForm from '../../components/newEvent';
import EventList from '../../components/eventList';

export default function Events() {
  return (

    <div style={styles.container}>
        <Sidebar/>
        <div style={styles.conctentContainer}>
            <h1 style={styles.heading}>Events Management Page</h1>
            <EventList/>
            <NewEventForm/>
        </div>
    </div>
  );
}

const styles = {
  container: {
    backgroundColor: '#f5f5f5',
    height: '100%'
  },
  conctentContainer:{
    marginLeft: '250px',
    marginTop: '-24px',
    paddingTop: '24px',
    marginBottom: '-24px',
    paddingBottom: '48px'
  },
  heading: {
    color: '#333',
  },
};