import React from 'react';
import logo from './logo.svg';
import './App.css';


function Form(props) {
    const {
        values,
        onInputChange,
        onSubmit,
    } = props

    return (
        <div className='form'>
            <div className='submit-form'>
                <h3>Add Team Member</h3>
                <button onClick={onSubmit}>Submit</button>
            </div>
            <div className='group-form'>
                <h4>Information</h4>
                <label>Name:
                    <input type='text' name='name' value={values.name} onChange={onInputChange} maxLength='50'></input>
                </label>
                <label htmlFor='emailInput'>Email:
                    <input type='email' name='email' value={values.email} onChange={onInputChange}></input>
                </label>
                <label>
                    <select name='role' value={values.role} onChange={onInputChange}>
                        <option value=''>-- Select a Role --</option>
                        <option value='Backend Engineer'>Backend Engineer</option>
                        <option value='Frontend Engineer'>Frontend Engineer</option>
                        <option value='Designer'>Designer</option>
                    </select>
                </label>
            </div>
        </div>
  );
}

export default Form;