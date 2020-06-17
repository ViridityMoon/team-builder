import React from 'react';
import logo from './logo.svg';
import './App.css';


function TeamMember(props) {
    console.log(props);
    return (
        <div className='Member-Card'>
            <p>Name: {props.details.name}</p>
            <p>Email: {props.details.email}</p>
            <p>Role: {props.details.role}</p>
        </div>
  );
}

export default TeamMember;
