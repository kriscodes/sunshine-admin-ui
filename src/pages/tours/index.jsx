import React, {useState, useEffect} from 'react';
import Sidebar from '../../components/sidebar';
import axios from 'axios';
import './styles.css';

export default function Tours() {

  const [tours, setTours] = useState([]);

  useEffect( () => {
    try{
      async function fetchTours() {
        await axios.get('https://api.sunshinepreschool1-2.org/api/tours')
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
        <h1 style={styles.heading}>Tours</h1>
      <div>
        <table className="tab">
            <thead>
            <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Child Name</th>
                    <th>Program</th>
                    <th>School</th>
                    <th>Date</th>
            </tr>
            </thead>
            <tbody>
                {tours.map((tour, index) => {
                  const date = new Date(tour.tour_date); 

                  const month = date.getMonth() + 1; // Months are 0-indexed
                  const day = date.getDate();
                  const year = date.getFullYear();

                  let hours = date.getHours();
                  const minutes = date.getMinutes().toString();//.padStart(2, '0');
                  const amPm = hours >= 12 ? 'PM' : 'AM';

                  hours = hours % 12 || 12; // Convert to 12-hour format

                  // Construct the formatted string
                  const formattedDate = `${month}/${day}/${year} ${hours}:${minutes} ${amPm}`;
                    return (
                    <tr key={index}>
                        <td>{tour.first_name} {tour.last_name}</td>
                        <td>{tour.email}</td>
                        <td>{tour.phone}</td>
                        <td>{tour.child_name}</td>
                        <td>{tour.program}</td>
                        <td>{tour.school}</td>
                        <td>{tour.tour_date} {tour.tour_time}</td>
                    </tr>
                    )
                })}
            </tbody>
        </table>
        
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
    height: '100vh',
    backgroundColor: '#f5f5f5',
  },
  heading: {
    color: '#333',
    marginTop: '0px'
  },
};