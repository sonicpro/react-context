import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from './LoginContext';

const TopMenu = () => {
  // accessing UserContext from the app context provider.
  const [ user ] = useContext(UserContext);
  return (
    <div class="topnav">
      <Link to='/'>Users</Link>
      <Link to='/posts'>Posts</Link>
      <Link to='/login'>{user ? 'Welcome ' + user : 'Login'}</Link>
    </div>
  );
}

export default TopMenu;