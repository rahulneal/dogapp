import React from 'react'
import './styles.css'

const SearchBox = ({inputHandler}) => {
    return (
        <div className='search--box'>
            <input type="text" placeholder='type here to filter by breed' onChange={inputHandler} />
        </div>
    )
}

export default SearchBox