import React, { useState } from 'react';
import './App.css';

function App() {
const myTeam = [{name: "Nelson S", email:"nelson@nelson.com", role: "student"}]


const [teamList, setTeamList] = useState(myTeam);

//step 1
const defaultForm = {
  name: '',
  email: '',
  role: '',
}

const [formValues, setFormValues] = useState(defaultForm)

// const changeTeam = event => {
//   setTeamList(event.target.value);
// };

//step 2



const nameToState = event => {
  setFormValues({ ...formValues, name: event.target.value });
};

const emailToState = event => {
  setFormValues({ ...formValues, email: event.target.value });
};

const roleToState = event => {
  setFormValues({ ...formValues, role: event.target.value });
};

const submitForm = event => {
  event.preventDefault();
  const newMember = {
    name: formValues.name,
    email: formValues.email,
    role: formValues.role,    
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
          Name:
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
