import React from 'react'

function ProjectMainInfo() {
  return (
    <div className='projectMainInfo'>
        <div className="projectMainInfo__item">
          <img src={require('../../images/mooncoin.png')} alt="mooncoin" />
        </div>

        <div className="projectMainInfo__item">
          <h3 className='title'>Moon Token</h3>
          <div className='details'>
            <div className='details__info'>
              <img src={require('../../images/etherscan-logo-circle.png')} alt="ether-icon" />
              Etherscans
            </div>
            <div className='details__info'>
              <img src={require('../../images/web.png')} alt="ether-icon" />
              Website
            </div>
            <div className='details__info'>
              <img src={require('../../images/link.png')} alt="ether-icon" />
              Address
            </div>
            <div className='details__info'>
              <img src={require('../../images/telegram2382.png')} alt="ether-icon" />
              Telegram
            </div>
            <div className='details__info'>
              <img src={require('../../images/discord7805.png')} alt="ether-icon" />
              Discord
            </div>
            <div className='details__info'>
              <img src={require('../../images/twitter7806.png')} alt="ether-icon" />
              Twitter
            </div>
          </div>
        </div>

        <div className="projectMainInfo__item">
          <div className="token__info">
            <div className='item'>
              <div className='name'>Sale Price (1 Eth =)</div>
              <div className='value'>0.3467MT</div>
            </div>
            <div className='item'>Total Committed: <span>3ETH</span></div>
          </div>
          <div className="token__info">
            <div className='item'>
              <div className='name'>Participants</div>
              <div className='value'>300,000</div>
            </div>
            <div className='item'>End Time: <span>2021-11-05</span></div>
          </div>
          <div className="token__info">
            <div className='item'>
              <div className='name'>Tokens Offered</div>
              <div className='value'>10%</div>
            </div>
            <div className='item'>Start Time: <span>2021-11-05</span></div>
          </div>
        </div>
        <div className="projectMainInfo__item">
          <img src={require('../../images/Modern-1.png')} alt="rocket1" />
          <img src={require('../../images/Modern-2.png')} alt="rocket2" />
        </div>
    </div>
  )
}

export default ProjectMainInfo