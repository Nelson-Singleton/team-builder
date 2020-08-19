import React from 'react'
import App from './App';
import { v4 as memberId } from 'uuid'

const Team = props => { 
  const { teamInfo } = props
  
  return (
    <div>
        {teamInfo.map(someMember => (
            
            <div key = {Math.random()}>
           <h3>Name: {someMember.name}</h3> 
           <h4>Email: {someMember.email}</h4>
           <h4>Role: {someMember.role}</h4> 
           </div>
        )
            )}
      
      
      
    </div>
  )
}

export default Team;