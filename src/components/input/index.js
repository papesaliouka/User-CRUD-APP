const Input = ({onChange, onModify, onCancel}) => {
    return (
        <>
            <input onChange={onChange} />
            <button onClick={async () => await onModify()} >Modify</button>
            <button onClick={() => onCancel()}>Cancel</button>
        </>
    );
}

export default Input;

