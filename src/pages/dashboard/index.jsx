import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../../components/sidebar';
import EventList from '../../components/eventList';
import axios from 'axios';
import "./styles.css"

export default function Dashboard() {
  const [contacts, setContacts] = useState([])
  const [tours, setTours] = useState([])
  const [events, setEvents] = useState()

  useEffect( () => {
    try{
      async function fetchEvents() {
        await axios.get('https://sunshine-api.onrender.com/events')
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

  useEffect( () => {
    try{
      async function fetchContacts() {
        await axios.get('https://sunshine-api.onrender.com/contacts')
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

  useEffect( () => {
    try{
      async function fetchTours() {
        await axios.get('https://sunshine-api.onrender.com/tours')
      .then(res => {
        const c = res.data;
        setTours(c);
      });
      }
      fetchTours();
    }
    catch(err){
      console.log(err);
    }
  }, [])

  return (
    <div style={styles.container}>
        <Sidebar/>
        <h1 style={styles.heading}>Dashboard</h1>
        <div style={styles.content}>
            <Link to='/tours' className="link">
                <div style={styles.card}>
                    <span>
                        Tour Requests
                    </span>
                    <span style={styles.cardNum}>
                        {tours?.length}
                    </span>
                </div>
            </Link>
            <Link to='/contacts' className="link">
                <div style={styles.card}>
                    <span>
                        New Contacts
                    </span>
                    <span style={styles.cardNum}>
                        {contacts?.length}
                    </span>
                </div>
            </Link>
            <EventList events={events}/>
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
  content: {
    display: 'flex',
    justifyContent:'center',
    flexDirection: 'column'
  },
  heading: {
    color: '#333',
    marginTop: '0px'
  },
  card: {
    width: '860px',
    height: '120px',
    backgroundColor: 'white',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: '40px',
    fontSize: "48px"
  },
  cardNum: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '80px',
    height: '80px',
    background: 'lightgray',
    border: '1px solid',
    borderRadius: '50%'
  },
  
};