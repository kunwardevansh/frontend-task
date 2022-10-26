import React,{Component,useEffect,useState} from 'react';
import './search-box.styles.css'

const SearchBox = ({onChangeHandler}) => {
    return(
        <div className='Search-box'>
            <input
            className='search-box'
            type='search'
            placeholder='Search Mutual Funds'
            onChange={onChangeHandler}
            />
        </div>
    )
}

export default SearchBox;