import {useState} from 'react';
import {useAddUserMutation, useGetDataQuery} from '../../services/api.service'

const AddUser = () => {
    const [adder] = useAddUserMutation()
    const [inputValue, setInputValue] = useState('');
    const {refetch} = useGetDataQuery()

    const onAdd = async () => {
        try {
            await adder({name: inputValue});
            refetch();
            setInputValue('')
        } catch (e) {
            alert(e.message)
        }
    }
    return (
        <>
            <input value={inputValue} placeholder='Enter username here' onChange={(e) => setInputValue(e.target.value)} />
            <button onClick={() => onAdd()} >Add User</button>
        </>
    );
};

export default AddUser
