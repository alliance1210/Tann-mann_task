import './App.css';
import React from 'react';
import Login from './components/Login'
import Register from './components/Register'
import Welcome from './components/Welcome'
import Error from './components/Error';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
export const LogedIn = React.createContext();

function App() {

 
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Welcome" element={<Welcome />} />
        <Route path="/*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
