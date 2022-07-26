import React from 'react'

function PoolCard(props) {
    const style = {
        width: (props.amount / props.total) * 100 + '%'
    }
  return (
    <div className='poolCard'>
        <div className='poolCard__item'>
            <div className='profile'>
                
            </div>
            <div className='profile__info'>
                <h3>{props.name}</h3>
                <p>{props.hashTag}</p>
            </div>
            <button className='btn'>
                <img src={require('../../images/ellipse.png')} alt="ellipse" />
                Started
            </button>
        </div>

        <div className='poolCard__item'>
            <div className="item">
                <h4>Soft Cap</h4>
                <h2>{props.softCap} ETH</h2>
            </div>
            <div className="item">
                <h4>Hard Cap</h4>
                <h2>{props.hardCap} ETH</h2>
            </div>
            <div className="item">
                <h4>Participants</h4>
                <h2>{props.participants}</h2>
            </div>
        </div>
        <div className='poolCard__item'>
            <h5>%Raised</h5>

            <div className="bar__indicator">
                <span style={style}></span>
            </div>

            <div>
                <kbd>75% full</kbd>
                <div>{props.amount} / {props.total}</div>
            </div>
        </div>
    </div>
  )
}

export default PoolCard