const SearchBox = ({onSubmit}) => {

    const handleClick = (e) => {
        if(e.keyCode === 13){
            onSubmit(e.target.value);
        }
    }

    return (
        <input placeholder="username" onKeyUp={handleClick} style={{ width: 200 }} />
    );
}

export default SearchBox