import React, { useState } from 'react';
import Team from './Team';
import Form from './Form';
import './App.css';


function App() {
const myTeam = [{name: "Nelson S", email:"nelson@nelson.com", role: "student", id: Math.random()}]
const [teamList, setTeamList] = useState(myTeam);

//can use null instead
const defaultForm = {
  name: '',
  email: '',
  role: '',
}

const [formValues, setFormValues] = useState(defaultForm)

//submit function
const submitForm = event => {
  event.preventDefault();
  const newMember = {
    
    name: formValues.name,
    email: formValues.email,
    role: formValues.role,    
  }
  setTeamList([...teamList, newMember])
}

//event functions
const nameToState = event => {
  setFormValues({ ...formValues, name: event.target.value });
};

const emailToState = event => {
  setFormValues({ ...formValues, email: event.target.value });
};

const roleToState = event => {
  setFormValues({ ...formValues, role: event.target.value });
};

//Used for dropdown
// const onChange = evt => {
 
//   const { name, value } = evt.target
  
//   update(name, value)
// }

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

        

        {/* Dropdown */}
        {/* <form>
           <select id="role" name="role">
            <option value="Front-End Developer">
            <option value="Back-End Developer">
            <option value="UI Designer">
            <option value="Team Leader">
           </select>
          </form> */}

        
        <br></br> <br></br>
        <button > Submit </button>
      </form>
      <br></br> <br></br>
      <h1>My Team</h1>
      <br></br> <br></br>
        <h2>
          <Team teamInfo = {teamList}/>
        </h2>
    </div>
    
  );
} 
  

export default App;
