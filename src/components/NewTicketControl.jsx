import React from 'react';

class NewTicketControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false
    };
  }

handleClick(){
  console.log("I'm dead inside.");
}

  render(){
    return (
      <div>
        <p>This is the NewTicketControl component</p>
        //States that a method from this component called handleClick() will be triggered when this element is clicked.
        <strong onClick = {this.handleClick}>Click me to change my state!</strong>
      </div>
    );
  }
}

export default NewTicketControl;
