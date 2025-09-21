import React, {useState, useEffect} from 'react';
import Sidebar from '../../components/sidebar';
import axios from 'axios';
import './styles.css';

export default function Tours() {

  const [tours, setTours] = useState([]);

  useEffect( () => {
    try{
      async function fetchTours() {
        await axios.get('https://sunshine-api.onrender.com/tours')
      .then(res => {
        const c = res.data;
        console.log(c);
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

                  const month = date.getMonth() + 1; 
                  const day = date.getDate();
                  const year = date.getFullYear();

                  const time = new Date(`1970-01-01T${tour.tour_time}Z`);

                  const formatted = time.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit', hour12: true });

                  const formattedDate = `${month}/${day}/${year} ${formatted}`;

                    return (
                    <tr key={index}>
                        <td>{tour.parent_name} {tour.last_name}</td>
                        <td>{tour.email}</td>
                        <td>{tour.phone}</td>
                        <td>{tour.child_name}</td>
                        <td>{tour.program}</td>
                        <td>{tour.school}</td>
                        <td>{formattedDate}</td>
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