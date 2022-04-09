import ModifyIcon from '../modify-icon';
import DeleteIcon from '../delete-icon';
import {useState} from 'react';

import {useGetDataQuery, useDeleteUserMutation, useUpdateUserMutation} from '../../services/api.service'

import Input from '../input'

const User = ({user}) => {
    const [modifyClicked, setModifyClicked] = useState(false)
    const [inputValue, setInputValue] = useState('');

    const onInputChange = (e) => {
        setInputValue(e.target.value)
    }

    const [deleter] = useDeleteUserMutation();

    const {refetch} = useGetDataQuery()

    const [modify] = useUpdateUserMutation();

    const onModify = async () => {
        await modify({...user, name: inputValue})
        setModifyClicked(false)
        refetch()
    }

    const onDelete = async () => {
        await deleter(user.id)
        refetch()
    }

    const onCancel = () => setModifyClicked(false)

    return (
        <li key={user.id} >
            {user.name}
            <ModifyIcon onClick={setModifyClicked} />
            <DeleteIcon onDelete={onDelete} />
            {modifyClicked && <div>
                <Input onChange={onInputChange} onModify={onModify} onCancel={onCancel} />
            </div>}
        </li>
    );
}

export default User;
