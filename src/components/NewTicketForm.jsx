import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';
import Moment from 'moment';
import { connect } from 'react-redux';

function NewTicketForm(props){
  console.log(props);
  let _names = null;
  let _location = null;
  let _issue = null;

  function handleNewTicketFormSubmission(event) {
    event.preventDefault();
    // By calling '.value' we specify that we'd like to print only the user-inserted value from each form field
    props.onNewTicketCreation({names: _names.value, location: _location.value, issue: _issue.value, id: v4(), timeOpen: new Moment()});
    // Add code to make sure the values come as strings.
    _names.value = '';
    _location.value = '';
    _issue.value = '';
  }

  return (
    <div>
      <form onSubmit = {handleNewTicketFormSubmission}>
        <input
          type= 'text'
          id= 'names'
          placeholder= "Pair Names"
          ref = {(input) => {_names = input;}}/>
        <input
          type= 'text'
          id= 'location'
          placeholder= 'Location'
          ref = {(input) => {_location = input;}}/>
        <textarea
          id= 'issue'
          placeholder= 'Describe your issue.'
          ref = {(textarea) => {_issue = textarea;}}/>
        <button type= 'submit'>Help!</button>
      </form>
    </div>
  );
}

NewTicketForm.propTypes = {
  onNewTicketCreation: PropTypes.func
};

NewTicketForm = connect()(NewTicketForm);

export default NewTicketForm;
