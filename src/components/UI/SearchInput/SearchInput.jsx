import React from 'react';
import classes from "./SearchInput.module.scss";


const SearchInput = ({searchValue, setSearchValue}) => {

    const onChangeSearchInput = (event) => {
        setSearchValue(event.target.value)
    }

    return (
        <div className={classes.search__block}>
            <img src="/img/search.svg" alt="Search"/>
            <input onChange={onChangeSearchInput} value={searchValue} placeholder="Поиск..." type="text"/>
        </div>
    );
};

export default SearchInput;