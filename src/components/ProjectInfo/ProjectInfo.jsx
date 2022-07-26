import React from 'react'
import clock from '../../images/clock-history.svg'

function ProjectInfo(props) {
  return (
    <div className='projectInfo'>
        <div className="projectInfo__item">
            <div className='profile'>    
            </div>
            <div className='profile__info'>
                <h3>{props.name}</h3>
                <p>{props.hashTag}</p>
            </div>
        </div>

        <div className='projectInfo__item'>{props.price} ETH</div>
        <div className='projectInfo__item'>{props.participants}</div>
        <div className='projectInfo__item'>{props.amount}</div>
        {props.started ? 
            <div className='projectInfo__item status'>started <img src={clock} alt="clock" /></div> : 
            <div className='projectInfo__item'>not started</div>
        }
    </div>
  )
}

export default ProjectInfo