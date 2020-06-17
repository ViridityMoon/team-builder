import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './Form'
import TeamMember from './TeamMember';

const initialFormValues = {
  name: '',
  email: '',
  role: '',
};


function App() {
  const [teamMemberList, setTeamMemberList] = useState([]);
  const [error, setError] = useState('');

  const [formValues, setFormValues] = useState(initialFormValues);

  const onInputChange = evt => {
    const { name, value } = evt.target;
    setFormValues({
      ...formValues,
      [name]: value,
    })
  };

  const onSubmit = evt => {
    evt.preventDefault()
    debugger
    if (!formValues.name || !formValues.email || !formValues.role) {
      setError('One or more forms have not been filled out.')
      return
    }
  
  setError('');

  const newMember = {
    name: formValues.name,
    email: formValues.email,
    role: formValues.role,
  };

  setTeamMemberList(teamMember => [newMember, ...teamMember]);

  setFormValues(initialFormValues);
};
  return (
    <div className='App'>
      <div>
        <Form values = {formValues} onInputChange = {onInputChange} onSubmit = {onSubmit}/>
      </div>
      <div>
        {
          teamMemberList.map(member => {
            return (
              <TeamMember details={member}/>
            )
          })
        }
      </div>
    </div>
  );
}

export default App;
