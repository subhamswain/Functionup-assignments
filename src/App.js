import './App.css';
import React from 'react';
import Invitation from './components/Invitation';


function App() {
  return (
    <Invitation
      subject="Birthday party Invitation"
      to="jaGdish@gmail.com"
      name="jaGdish"
      party="birthday party"
      friends="Ritu,Saurabh,Kartik"
      location="Green field Avenue"
      from="JaGdish"
    />
  );
}

export default App;

