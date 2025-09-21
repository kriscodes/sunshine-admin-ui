import "./styles.css"

const EventList = (props) => {

    return (
        <div>
            <div className="event-list-container">
                {props.events ? 
                props.events.map((event, index) => {
                    const dateObject = new Date(event?.date);

                    const month = dateObject.getMonth() + 1;
                    const day = dateObject.getDate();
                    const year = dateObject.getFullYear();
                    const formattedDate = `${month}/${day}/${year}`;

                    return (
                        <div key={index} className="event-container" onClick={() => {
                            if(props.eventManagerEdit) {
                                props.eventManagerEdit(event)
                            }
                        }}>
                            
                            <div className="event-text">
                                <p>{event?.name}</p>
                                <p>{event?.location}</p>
                                <p>{formattedDate}</p>
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