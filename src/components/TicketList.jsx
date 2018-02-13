import React from 'react';
import Ticket from './Ticket';
import PropTypes from 'prop-types';

// var masterTicketList = [
//   {
//     names: 'Thato and Haley',
//     location: '3A',
//     issue: 'Firebase will not save on record. HALP'
//   },
//   {
//     names: 'Gyles and Batara',
//     location: '4B',
//     issue: 'Yes another weird error'
//   },
//   {
//     names: 'Epicodus and Coding Dojo',
//     location: 'Seattle',
//     issue: 'EPICODUS IS TAKING ALL OF MY STUDENTS'
//   }
// ];

function TicketList(props){
  console.log(props.ticketList);
  return (
    <div>
      <hr/>
      {masterTicketList.map((ticket, index) =>
        <Ticket names={ticket.names}
          location={ticket.location}
          issue={ticket.issue}
          key={ticket.id}/>
      )}
    </div>
  );
}

TicketList.propTypes = {
  ticketList: PropTypes.array
};

export default TicketList;
