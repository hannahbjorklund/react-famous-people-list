import React, { useEffect, useState } from 'react';
import axios from 'axios';

function FamousPersonForm({fetchPeople}){
    let [famousPersonName, setPersonName] = useState('');
    let [famousPersonRole, setPersonRole] = useState('');
    
    const addPerson = (evt) => {
        evt.preventDefault();
        console.log(`The person is ${famousPersonName} and they're famous for ${famousPersonRole}`);
        let person = {
          name: famousPersonName,
          role: famousPersonRole
        };
        // TODO: create POST request to add this new person to the database
        axios({
          method: 'POST',
          url: '/people',
          data: person
        }).then((response) => {
          console.log("POST request successful");
          setPersonName('');
          setPersonRole('');
          fetchPeople();
        }).catch((error) => {
          console.log("Error in POST:", error);
        })
    }

    return (
        <form onSubmit={addPerson}>
            <label htmlFor="name-input">Name:</label>
            <input id="name-input" onChange={e => setPersonName(e.target.value)} />
            <label htmlFor="role-input">Famous for:</label>
            <input id="role-input" onChange={e => setPersonRole(e.target.value)} />
            <button type="submit">Done</button>
        </form>
    );
}


export default FamousPersonForm;