import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const EventManager = ({ isVisible, onClose, event }) => {

    const { handleSubmit, formState: { errors } } = useForm();

    const [formData, setFormData] = useState({
        title: event?.title || '',
        date: event?.date || '',
        location: event?.location || '',
        description: event?.description || ''
    })

    useEffect(() => {
        setFormData({
            title: event?.title || "",
            date: event?.date || "",
            location: event?.location || "",
            description: event?.description || ""
        })
    }, event)

    if (!isVisible || !event) return null;

    // edit event manager
    const onSubmit = async(data) => {    
        try {
            let url = 'https://dev.api.sunshinepreschool1-2.org/api/events/' + event.id.toString()
            await axios.put(url, formData)
        } catch (error) {
            console.error('Error creating event', error);
            alert('Failed to create event.');
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
          ...prev,
          [name]: value
        }));
    };

    return (
        <div style={managerStyles.overlay} onClick={onClose}>
            <div style={managerStyles.formContainer} onClick={(e) => e.stopPropagation()}>
                <form style={managerStyles.form} onSubmit={handleSubmit(onSubmit)} className="new-event-form">
                    <h2>Edit Event</h2>
                    <div>
                        <label htmlFor="title">Event Title *</label>
                        <input
                            type="text"
                            id="title"
                            name="title"
                            style={{padding: '6px', margin: '8px'}}
                            value={formData?.title || ''}
                            onChange={handleChange}
                        />
                    </div>

                    <div>
                        <label htmlFor="date">Event Date *</label>
                        <input
                            type="date"
                            id="date"
                            name="date"
                            style={{padding: '6px', margin: '8px'}}
                            value={formData.date || ''}
                            onChange={handleChange}
                        />
                    </div>

                    {/* <div>
                        <label htmlFor="time">Event Time *</label>
                        <input
                            type="time"
                            id="time"
                            name="time"
                            style={{padding: '6px', margin: '8px'}}
                            value={formData.time || ''}
                            onChange={handleChange}
                        />
                    </div> */}

                    <div>
                        <label htmlFor="location">Location *</label>
                        <select 
                            id="location" 
                            name="location"
                            style={{padding: '6px', margin: '8px'}}
                            value={formData.location || ""}
                            onChange={handleChange}
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
                            value={formData.description || ""}
                            onChange={handleChange}
                            style={{padding: '6px', margin: '8px', border: '1px solid #555'}}
                        />
                    </div>

                    <button 
                        type="submit"
                        style={{padding: '6px', margin: '8px'}}
                    >
                            Update Event
                    </button>
                </form>
            </div>
        </div>
    );
};

const managerStyles = {
    overlay: {
        position: 'fixed',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.7)', /* Semi-transparent dark background */
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: '1000',
    },
    formContainer: {
        backgroundColor: '#fff',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        padding: '20px',
        width: '300px', /* Adjust width as needed */
        maxWidth: '90%',
        textAlign: 'center',
      },
  form: {
    padding: '48px 0 48px 0',
    margin: '0'
  }
}

export default EventManager;