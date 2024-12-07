import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import TimePicker from 'react-time-picker';

const AvailabilityPicker = () => {
  const [mondayFromTime, setMondayFromTime] = useState();
  const [mondayToTime, setMondayToTime] = useState();

  const [tuesdayFromTime, setTuesdayFromTime] = useState();
  const [tuesdayToTime, setTuesdayToTime] = useState();
  
  const [wednesdayFromTime, setWednesdayFromTime] = useState();
  const [wednesdayToTime, setWednesdayToTime] = useState();

  const [thursdayFromTime, setThursdayFromTime] = useState();
  const [thursdayToTime, setThursdayToTime] = useState();

  const [fridayFromTime, setFridayFromTime] = useState();
  const [fridayToTime, setFridayToTime] = useState();


  const handleMondayTimeChange = (time, toFrom) => {
    toFrom === 'from' ? setMondayFromTime(time) : setMondayToTime(time);
  };

  const handleTuesdayTimeChange = (time, toFrom) => {
    toFrom === 'from' ? setTuesdayFromTime(time) : setTuesdayToTime(time);
  };

  const handleWednesdayTimeChange = (time, toFrom) => {
    toFrom === 'from' ? setWednesdayFromTime(time) : setWednesdayToTime(time);
  };

  const handleThursdayTimeChange = (time, toFrom) => {
    toFrom === 'from' ? setThursdayFromTime(time) : setThursdayToTime(time);
  };

  const handleFridayTimeChange = (time, toFrom) => {
    toFrom === 'from' ? setFridayFromTime(time) : setFridayToTime(time);
  };

  const renderTimePickers = () => (
    <>
        <div style={{ 
            
        }}>
            <span className="time-picker-container">
                <h2>Monday</h2>
                <TimePicker
                    className={'react-time-picker__inputGroup'}
                    value={mondayFromTime || ""}
                    onChange={(mondayFromTime) => handleMondayTimeChange(mondayFromTime, 'from')}
                />
                <TimePicker
                    className={'react-time-picker__inputGroup'}
                    value={mondayToTime || ""}
                    onChange={(mondayToTime) => handleMondayTimeChange(mondayToTime, 'to')}
                />
            </span>

            <span className="time-picker-container">
                <h2>Tuesday</h2>
                From
                <TimePicker
                    className={'react-time-picker__inputGroup'}
                    value={tuesdayFromTime || ""}
                    onChange={(tuesdayFromTime) => handleTuesdayTimeChange(tuesdayFromTime, 'from')}
                />
                to 
                <TimePicker
                    className={'react-time-picker__inputGroup'}
                    value={tuesdayToTime || ""}
                    onChange={(tuesdayToTime) => handleTuesdayTimeChange(tuesdayToTime, 'to')}
                />
            </span>
        </div>
        <div>
            <div className="time-picker-container">
                <h2>Wednesday</h2>
                From
                <TimePicker
                    className={'react-time-picker__inputGroup'}
                    value={wednesdayFromTime || ""}
                    onChange={(wednesdayFromTime) => handleWednesdayTimeChange(wednesdayFromTime, 'from')}
                />
                to 
                <TimePicker
                    className={'react-time-picker__inputGroup'}
                    value={wednesdayToTime || ""}
                    onChange={(wednesdayToTime) => handleWednesdayTimeChange(wednesdayToTime, 'to')}
                />
            </div>

            <div className="time-picker-container">
                <h2>Thursday</h2>
                From
                <TimePicker
                    className={'react-time-picker__inputGroup'}
                    value={thursdayFromTime || ""}
                    onChange={(thursdayFromTime) => handleThursdayTimeChange(thursdayFromTime, 'from')}
                />
                to 
                <TimePicker
                    className={'react-time-picker__inputGroup'}
                    value={thursdayToTime || ""}
                    onChange={(thursdayToTime) => handleThursdayTimeChange(thursdayToTime, 'to')}
                />
            </div>

            <div className="time-picker-container">
                <h2>Friday</h2>
                From
                <TimePicker
                    className={'react-time-picker__inputGroup'}
                    value={fridayFromTime || ""}
                    onChange={(fridayFromTime) => handleFridayTimeChange(fridayFromTime, 'from')}
                />
                to 
                <TimePicker
                    className={'react-time-picker__inputGroup'}
                    value={fridayToTime || ""}
                    onChange={(fridayToTime) => handleFridayTimeChange(fridayToTime, 'to')}
                />
            </div>
        </div>
    </>
  );

  return (
    <div>
      <h2>Select Your Availability</h2>
      <div>
       <div style={{ width:'200px' }} >
            <span style={{ width:'400px' }}>{renderTimePickers()}</span>
        </div>
      </div>
    </div>
  );
};

export default AvailabilityPicker;
