import useUserContext from './useLoginContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [ user, setUser ] = useUserContext();
  const history = useNavigate();
  const login = (e) => {
    e.preventDefault();
    setUser(e.target.userName.value);
    history('/');
  }

  return (
    <div className ='logindiv'>
      <form id='commentForm' onSubmit={e => login(e)}>
        <table className='loginTable'>
          <tr><td>User Name</td><td><input type='text' name='userName' /></td></tr>
          <tr><td>Password</td><td><input type='text' /></td></tr>
          <tr><td colSpan='2'><button type='submit'>Submit</button></td></tr>
        </table>
      </form>
    </div>
  );
}

export default Login;