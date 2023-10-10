import React, { useEffect, useState, useContext } from 'react';
import TopMenu from './TopMenu';
import { UserContext } from './LoginContext';

const Users = () => {
  const [posts, setPosts] = useState([]);
  const [ user ] = useContext(UserContext);
  useEffect(() => {
    {user && fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => {
        setPosts(data)
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
              <th>User</th>
              <th>Title</th>
              <th>Description</th>
            </tr>
            {posts.map((userLine) => (
              <tr>
                <td>{userLine.userId}</td>
                <td>{userLine.title}</td>
                <td>{userLine.body}</td>
              </tr>
            ))}
          </>
        :
        <tr><td colSpan='3'>Please login to view Posts</td></tr>
        }
      </table>
    </>
  );
}

export default Users;