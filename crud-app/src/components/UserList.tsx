import React from 'react';

interface userListProps {
    users: [];
}
const UserList:React.FC<userListProps> = ({users}) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {users.map(user => (
          <UserItem key={user.id} user={user} />
        ))}
      </tbody>
    </table>
  )
}

export default UserList