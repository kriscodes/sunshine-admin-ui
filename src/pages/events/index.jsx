import React, {useState, useEffect} from 'react';
import axios from "axios";
import Sidebar from '../../components/sidebar';
import NewEventForm from '../../components/newEvent';
import EventList from '../../components/eventList';
import EventManager from '../../components/EventManager';

export default function Events() {

  const [eventManagerVisible, setEventManagerVisible] = useState(false)
  const [event, setEvent] = useState()
  const [events, setEvents] = useState([]);

  useEffect(() => {
    try{
      async function fetchEvents() {
        await axios.get('https://api.sunshinepreschool1-2.org/api/events')
      .then(res => {
        const c = res.data;
        setEvents(c);
      });
      }
      fetchEvents();
    }
    catch(err){
      console.log(err);
    }
  }, [])

  const eventManagerOnClose = () => {
    setEventManagerVisible(false)
  }

  const eventManagerEdit = (event) => {
    setEvent(event)
  }

  useEffect(() => {
    if (event) {
      setEventManagerVisible(true);
    }
  }, [event]);

  return (
    <div style={styles.container}>
        <Sidebar/>
        <div style={styles.conctentContainer}>
            <h1 style={styles.heading}>Events</h1>
            <EventList eventManagerEdit={eventManagerEdit} events={events}/>
            <NewEventForm/>
            <EventManager isVisible={eventManagerVisible} onClose={eventManagerOnClose} event={event} setEventManagerVisible={setEventManagerVisible}/>
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