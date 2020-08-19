import React, { useState } from 'react';
import './App.css';

function App() {
const myTeam = [{"name": "Nelson S", "email":"nelson@nelson.com", "role": "student"}]

const [teamList, setTeamList] = useState(myTeam);
// const changeTeam = event => {
//   setTeamList(event.target.value);
// };

const handleChange = event => {
  setTeamList(event.target.value);
}

const nameToState = event => {
  setTeamList({ ...teamList, name: event.target.value });
};

const emailToState = event => {
  setTeamList({ ...teamList, email: event.target.value });
};

const roleToState = event => {
  setTeamList({ ...teamList, role: event.target.value });
};

const submitForm = event => {
  event.preventDefault();
  

} 

// const [name, setName] = useState("");

console.log(myTeam)
console.log(teamList)







  return (


    <div className="App">
      <form onSubmit = {event => submitForm(event)}>
        <label>
          Username:
          <input type="text" name="name" onChange= {event => nameToState(event)} />
        </label>
        <br></br>
        <label>
          E-mail:
          <input type="text" name="email" onChange= {event => emailToState(event)} />
        </label>
        <br></br>
        <label>
          Role:
          <input type="text" name="role" onChange= {event => roleToState(event)} />
        </label>
        <br></br> <br></br>
        <button > Submit </button>
      </form>
    </div>
  );
} 
  

export default App;
