import React from 'react';
import Sidebar from '../../components/sidebar';
import NewEventForm from '../../components/newEvent';
import EventList from '../../components/eventList';

export default function Events() {
  return (

    <div style={styles.container}>
        <Sidebar/>
        <div style={styles.conctentContainer}>
            <h1 style={styles.heading}>Events</h1>
            <EventList/>
            <NewEventForm/>
        </div>
    </div>
  );
}

const styles = {
  container: {
    marginLeft: '180px',
    paddingLeft: '24px',
    marginTop: '0px',
    paddingTop: '48px',
    height: '100%',
    backgroundColor: '#f5f5f5',
  },
  heading: {
    color: '#333',
    marginTop: '0px'
  },
};