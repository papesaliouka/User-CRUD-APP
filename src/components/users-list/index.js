import User from '../user'
const UsersList = ({users}) => {
    return (
        <ul>
            {users.map(user => <User key={`key-${user.id}`} user={user} />)}
        </ul>
    );
};


export default UsersList
