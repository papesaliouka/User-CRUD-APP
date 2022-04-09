const ModifyIcon = ({onClick}) => {
    return (
        <>
            <i onClick={() => onClick(prev => !prev)} style={{cursor: 'pointer'}} >✏️ </i>
        </>
    )
}

export default ModifyIcon
