import React from "react";
import {useState, useEffect } from 'react';
import axios from "axios";
import "./styles.css"

const EventList = () => {

    const [events, setEvents] = useState([]);

    useEffect( () => {
        try{
          async function fetchEvents() {
            await axios.get('https://dev.api.sunshinepreschool1-2.org/api/events')
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

    return (
        <div>
            <div className="event-list-container">
                {events.map((event, index) => {
                    return (
                        <div key={index} className="event-container">
                            <img src="/kids.jpg" alt="" width="160" />
                            <div>
                                <p>{event.title}</p>
                                <p>{event.location}</p>
                                <p>{event.date}</p>
                                <p>{event.description}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}

export default EventList;