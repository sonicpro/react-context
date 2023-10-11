import { useEffect, useState } from 'react';
import TopMenu from './TopMenu';
import useUserContext from './useLoginContext';

const Users = () => {
  const [ userList, setUserList ] = useState([]);
  const [ user, _ ] = useUserContext();
  useEffect(() => {
    {user && fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => {
        setUserList(data)
      })}
  }, []);

  return (
    <>
      <TopMenu />
      <table>
        {user ?
          <>
            <tr><td colSpan='3' style={{textAligh: 'center'}}><h3>Todays Users for : {user}</h3></td></tr>
            <tr>
              <th>Name</th>
              <th>User Name</th>
              <th>Email</th>
            </tr>
            {userList.map((userLine) => (
              <tr>
                <td>{userLine.name}</td>
                <td>{userLine.username}</td>
                <td>{userLine.email}</td>
              </tr>
            ))}
          </>
        :
        <tr><td colSpan='3'>Please login to view Users</td></tr>
        }
      </table>
    </>
  );
}

export default Users;