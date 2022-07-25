import React, {useState} from 'react'

function Projects() {
    const [query, setQuery] = useState('')

    const handleChange = (e) => {
        setQuery(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(query)
    }
  return (
    <div className='projects'>
        <div>
            <form onSubmit={handleSubmit}>
                <div className="form--group">
                    <button className='btn'>
                        <img src={require('../images/search-icon.png')} alt="search-icon" />
                    </button>

                    <input 
                        type="text" 
                        name="query" 
                        value={query} 
                        id="query" 
                        onChange={handleChange} 
                    />
                </div>
            </form>
        </div>
    </div>
  )
}

export default Projects