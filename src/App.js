import {useGetDataQuery} from './services/api.service';

import Loader from './components/loader';

import UsersList from './components/users-list'
import AddUser from './components/add-user'

function App() {
    const {data, error, isLoading} = useGetDataQuery();
    return (
        <div>
            <h1>User Crud App</h1>
            {isLoading && <Loader />}
            {!isLoading && error && <h1>Sorry Something went wrong</h1>}
            {!isLoading && !error && (
                <>
                    <UsersList users={data} />
                    <AddUser />
                </>
            )}
        </div>
    );
}

export default App;
