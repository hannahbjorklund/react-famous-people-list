import Header from '../Header/Header';
import FamousPersonForm from '../FamousPersonForm/FamousPersonForm';
import './App.css';
import React, { useEffect, useState } from 'react';
import FamousPersonList from '../FamousPersonList/FamousPersonList';
import axios from 'axios';

function App() {
  let [famousPeopleArray, setPeopleArray] = useState([]);

  useEffect(() => {fetchPeople()}, [])
  
  const fetchPeople = () => {
    // TODO: fetch the list of people from the server
    axios({
      method: 'GET',
      url: '/people'
    }).then((response) => {
      console.log(response.data);
      setPeopleArray(response.data);
    }).catch((error) => {
      console.log("Error in GET route:", error);
    })
  }

  return (
    <div className="App">
      <Header />
      <FamousPersonForm fetchPeople = {fetchPeople}/>
      <FamousPersonList famousPeopleArray = {famousPeopleArray}/>
    </div>
  );
}

export default App;
