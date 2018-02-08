import React from 'react';
import { Link } from 'react-router-dom';

function Header(){
  return (
    <h1>Help Queue!</h1>
    <link to='/'>Home</link> | <Link to="/newticket">Create Ticket</Link>
  );
}

export default Header;
