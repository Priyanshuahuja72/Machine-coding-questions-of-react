import React, { useEffect, useState } from 'react';
import "./styles.css"
import UserList from '../components/UserList';
import { fetchUsers } from '../api/api';
//this is the Json type data. In this forat i am getting the data
interface user {
  id: number,
  name: string,
  username: string,
  email: string,
  address: {
   street: string,
   suite: string,
   city: string,
   zipcode: string,
  },
  geo: {
   lat: string,
   lng: string
  }
}

const Home: React.FC = () => {
  // hook for storing the user
  const [users, setUsers] = useState<user []>([]);

  //fetching the users from the api
  useEffect(() => {
    fetchUsers().then(setUsers).catch(err => console.error(err));
  }, []);

  return (
    <div className='main-home-page'>
        <div className="home-heading"><h1>User Management</h1></div>
        {/* list section comes here */}
        <div className="list-sec">
            <UserList user={users}/>
        </div>
    </div>
  );
};

export default Home;