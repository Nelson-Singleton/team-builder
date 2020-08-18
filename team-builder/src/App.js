import React, { useState } from 'react';
import './App.css';

const App = () => {
const myTeam = [{"name": "Nelson S", "e-mail":"nelson@nelson.com", "role": "student"}]

const [teamList, setTeamList] = useState(myTeam);
// const changeTeam = event => {
//   setTeamList(event.target.value);
// };

console.log(myTeam)
console.log(teamList)




  return (


    <div className="App">
      <form>
        <label>
          Username:
          <input type="text" />
        </label>
      </form>
    </div>
  );
  }

export default App;
