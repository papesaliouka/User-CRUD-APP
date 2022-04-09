const DeleteIcon = ({onDelete}) => {
    return (
        <>
            <i
                style={{color: "red", cursor: 'pointer'}}
                onClick={async () => await onDelete()}
            >x</i>
        </>
    )
}

export default DeleteIcon
