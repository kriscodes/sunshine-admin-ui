import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages';
import Dashboard from './pages/dashboard';
import Events from './pages/events';
import Tours from './pages/tours';
import Contacts from './pages/contacts';
import Admins from './pages/admins';
import CreateAccount from './pages/createAccount';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/tours" element={<Tours/>} />
        <Route path="/contacts" element={<Contacts/>} />
        <Route path="/events" element={<Events/>} />
        <Route path="/admins" element={<Admins/>} />
        <Route path="/createAccount" element={<CreateAccount/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
