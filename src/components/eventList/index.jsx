import React from "react";
import "./styles.css"

const EventList = (props) => {

    return (
        <div>
            <div className="event-list-container">
                {props.events ? 
                props.events.map((event, index) => {
                    return (
                        <div key={index} className="event-container" onClick={() => props.eventManagerEdit(event)}>
                            <div className="event-picture">
                                <img src="/sunshine_logo.png" alt="" width="160" />
                            </div>
                            <div className="event-text">
                                <p>{event?.title}</p>
                                <p>{event?.location}</p>
                                <p>{event?.date}</p>
                                <p>{event?.description}</p>
                            </div>
                        </div>
                    );
                }) : <></>}
            </div>
        </div>
    )
}

export default EventList;