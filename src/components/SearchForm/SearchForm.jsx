import React from 'react'

function SearchForm({query, searchToken}) {
  return (
    <>
    <form className='search__form'>
        <div className="form--group">
            <button className='btn'>
                <img src={require('../../images/search-icon.png')} alt="search-icon" />
            </button>

            <input 
                type="text" 
                name="query" 
                value={query} 
                id="query" 
                onChange={(e) => searchToken(e.target.value)}
                className='searchInput' 
                placeholder='Search by Address or Token name...'
            />
        </div>
    </form>
    </>
  )
}

export default SearchForm