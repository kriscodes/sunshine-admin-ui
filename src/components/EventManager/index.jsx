import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const EventManager = ({ isVisible, onClose, event, setEventManagerVisible }) => {
  // Keep form state local and controlled
  const [formData, setFormData] = useState({
    name: '',
    date: '',
    location: '',
    description: '',
  });

  useEffect(() => {
    if (isVisible && event) {
      setFormData({
        name: event?.name ?? event?.title ?? '',
        date: event?.date ?? '',
        location: event?.location ?? '',
        description: event?.description ?? '',
      });
    }
  }, [event, isVisible]); 

  if (!isVisible || !event) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const close = () => {
    if (typeof onClose === 'function') onClose();
    if (typeof setEventManagerVisible === 'function') setEventManagerVisible(false);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      
      await axios.put(
        `https://sunshine-api.onrender.com/events/${event.id}`,
        formData
      );
      toast.success('Event updated', { position: 'top-center', autoClose: 3000 });
      close();
    } catch (error) {
      console.error('Error updating event', error);
      toast.error('Update failed', { position: 'top-center', autoClose: 3000 });
    }
  };

  const onDelete = async () => {
    if (!window.confirm('Delete this event?')) return;
    try {
      await axios.delete(`https://sunshine-api.onrender.com/events/${event.id}`);
      toast.success('Event deleted', { position: 'top-center', autoClose: 3000 });
      close();
    } catch (error) {
      console.error('Error deleting event', error);
      toast.error('Delete failed', { position: 'top-center', autoClose: 3000 });
    }
  };

  return (
    <div style={managerStyles.overlay} onClick={close}>
      <div
        key={event.id}
        style={managerStyles.formContainer}
        onClick={(e) => e.stopPropagation()}
      >
        <h2 style={{ marginTop: 0 }}>Edit Event</h2>

        <form style={managerStyles.form} onSubmit={onSubmit}>
          <div style={{ marginBottom: 12, textAlign: 'left' }}>
            <label htmlFor="name">Event Title *</label>
            <input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              style={{ width: '100%', padding: 8, boxSizing: 'border-box' }}
            />
          </div>

          <div style={{ marginBottom: 12, textAlign: 'left' }}>
            <label htmlFor="date">Event Date *</label>
            <input
              id="date"
              type="date"
              name="date"
              value={formData.date ? String(formData.date).slice(0, 10) : ''}
              onChange={handleChange}
              required
              style={{ width: '100%', padding: 8, boxSizing: 'border-box' }}
            />
          </div>

          <div style={{ marginBottom: 12, textAlign: 'left' }}>
            <label htmlFor="location">Location *</label>
            <select
              id="location"
              name="location"
              value={formData.location}
              onChange={handleChange}
              required
              style={{ width: '100%', padding: 8, boxSizing: 'border-box' }}
            >
              <option value="">Select Location</option>
              <option value="Lynwood">Lynwood</option>
              <option value="Compton">Compton</option>
            </select>
          </div>

          <div style={{ marginBottom: 12, textAlign: 'left' }}>
            <label htmlFor="description">Description *</label>
            <textarea
              id="description"
              name="description"
              rows={6}
              value={formData.description}
              onChange={handleChange}
              required
              style={{ width: '100%', padding: 8, boxSizing: 'border-box', resize: "none"}}
            />
          </div>

          <div style={{ display: 'flex', gap: 8, justifyContent: 'center' }}>
            <button type="submit" style={{ padding: '6px', margin: '8px' }}>
              Update Event
            </button>
            <button type="button" onClick={onDelete} style={{ padding: '6px', margin: '8px' }}>
              Delete Event
            </button>
            <button type="button" onClick={close} style={{ padding: '6px', margin: '8px' }}>
              Cancel
            </button>
          </div>
        </form>

        <ToastContainer />
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
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
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
    width: '320px',
    maxWidth: '90%',
    textAlign: 'center',
  },
  form: { padding: '24px 0 0 0', margin: 0 },
};

export default EventManager;
