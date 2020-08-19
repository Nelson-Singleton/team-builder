import React, { useState } from 'react';
import './App.css';

function App() {
const myTeam = []
// {name: "Nelson S", email:"nelson@nelson.com", role: "student"}
//step 1

const [teamList, setTeamList] = useState(myTeam);
// const changeTeam = event => {
//   setTeamList(event.target.value);
// };

//step 2

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
  const newMember = {
    name: teamList.name,
    email: teamList.email,
    role: teamList.role, 

    
  }
  setTeamList([...teamList, newMember])

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
      <h1>My Team</h1>
        <h2>
          
        </h2>
    </div>
    
  );
} 
  

export default App;
