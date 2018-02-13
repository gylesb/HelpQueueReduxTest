import React from 'react';

function NewTicketForm(){
  let _names = null;
  let _location = null;
  let _issue = null;

  function handleNewTicketFormSubmission(event) {
    event.preventDefault();
    // By calling '.value' we specify that we'd like to print only the user-inserted value from each form field
    console.log(_names.value);
    console.log(_location.value);
    console.log(_issue.value);
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

export default NewTicketForm;
