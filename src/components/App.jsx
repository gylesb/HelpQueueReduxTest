import React from 'react';
import Header from './Header';
import TicketList from './TicketList';
import { Switch, Route } from 'react-router-dom';
import Error404 from './Error404';
import NewTicketControl from './NewTicketControl';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      masterTicketList: []
    };
    this.handleAddingNewTicketToList = this.handleAddingNewTicketToList.bind(this);
  }

  handleAddingNewTicketToList(newTicket) {
    var newMasterTicketList = this.state.masterTicketList.slice();
    newMasterTicketList.push(newTicket);
    this.setState({masterTicketList: newMasterTicketList});
  }

  render(){
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path='/' component={TicketList} />
          <Route path='/newticket' component={() => <NewTicketControl onNewTicketCreation = {this.handleAddingNewTicketToList} />} />
          <Route component = {Error404} />
        </Switch>
      </div>
    );
  }
}


export default App;
