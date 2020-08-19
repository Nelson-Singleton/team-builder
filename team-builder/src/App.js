import React, { useState } from 'react';
import './App.css';

function App() {
const myTeam = [{"name": "Nelson S", "e-mail":"nelson@nelson.com", "role": "student"}]

const [teamList, setTeamList] = useState(myTeam);
// const changeTeam = event => {
//   setTeamList(event.target.value);
// };

console.log(myTeam)
console.log(teamList)
const handleChange = event => {
  setTeamList(event.target.value);
}

const submitForm = () => {
  
} 
const [name, setName] = useState("");


  return (


    <div className="App">
      <form>
        <label>
          Username:
          <input type="text" onChange= {event => handleChange(event)} />
        </label>
      </form>
    </div>
  );
} 
  

export default App;
