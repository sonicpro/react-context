import { Link } from 'react-router-dom';
import useUserContext from './useLoginContext';

const TopMenu = () => {
  // accessing UserContext from the app context provider.
  const [ user, _ ] = useUserContext();
  return (
    <div class="topnav">
      <Link to='/'>Users</Link>
      <Link to='/posts'>Posts</Link>
      <Link to='/login'>{user ? `Welcome ${user}` : 'Login'}</Link>
    </div>
  );
}

export default TopMenu;