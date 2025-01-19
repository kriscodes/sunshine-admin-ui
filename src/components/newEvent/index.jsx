import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import './styles.css';

const NewEventForm = () => {
  const { handleSubmit, formState: { errors } } = useForm();

  const [formData, setFormData] = useState({
    title: '',
    date: '',
    event_location: '',
    description: ''
  })

  const [time, setTime] = useState('');

  const [imagePreview, setImagePreview] = useState(null);

  const onSubmit = async(data) => {

   console.log(formData);
    
    try {
      await axios.post('https://dev.api.sunshinepreschool1-2.org/api/events', formData);
    } catch (error) {
      console.error('Error creating event', error);
      alert('Failed to create event.');
    }
  };

  const handleEventTitleChange = (e) => {
    const { name, value } = e.target;
    console.log(e.target.value);
    setFormData({
      ...formData,
      'title': value
    });
  };

  const handleEventDateChange = (e) => {
    const { name, value } = e.target;
    console.log(e.target.value);
    setFormData({
      ...formData,
      'date': value
    });
  };

  const handleEventTimeChange = (e) => {
    const { name, value } = e.target;
    console.log(e.target.value);
    setTime({
      'date': value
    });
  };

  const handleEventLocationChange = (e) => {
    const { name, value } = e.target;
    console.log(e.target.value);
    setFormData({
      ...formData,
      'location': value
    });
  };

  const handleEventDescChange = (e) => {
    const { name, value } = e.target;
    console.log(e.target.value);
    setFormData({
      ...formData,
      'description': value
    });
  };

  return (
    <form style={styles.form} onSubmit={handleSubmit(onSubmit)} className="new-event-form">
      <h2>Add New Event</h2>
      <div>
        <label htmlFor="name">Event Title *</label>
        <input
          type="text"
          id="name"
          name="title"
          style={{padding: '6px', margin: '8px'}}
          onChange={handleEventTitleChange}
        />
      </div>

      <div>
        <label htmlFor="date">Event Date *</label>
        <input
          type="date"
          id="date"
          name="date"
          style={{padding: '6px', margin: '8px'}}
          onChange={handleEventDateChange}
        />
      </div>

      <div>
        <label htmlFor="time">Event Time *</label>
        <input
          type="time"
          id="time"
          name="time"
          style={{padding: '6px', margin: '8px'}}
          onChange={handleEventTimeChange}
        />
      </div>

      <div>
        <label htmlFor="location">Location *</label>
        <select 
        id="location" 
        name="event_location"
        style={{padding: '6px', margin: '8px'}}
        onChange={handleEventLocationChange}
        >
          <option value="">Select Location</option>
          <option value="Lynwood">Lynwood</option>
          <option value="Compton">Compton</option>
        </select>
      </div>

      <div>
        <label htmlFor="description">Description *</label>
        <textarea
          id="description"
          name="description"
          cols="32"
          rows="3"
          onChange={handleEventDescChange}
          style={{padding: '6px', margin: '8px', border: '1px solid #555'}}
        />
      </div>

      <button 
      type="submit"
      style={{padding: '6px', margin: '8px'}}
      >Create Event</button>
    </form>
  );
};

const styles = {
  form: {
    padding: '48px 0 48px 0',
    margin: '0'
  }
}

export default NewEventForm;