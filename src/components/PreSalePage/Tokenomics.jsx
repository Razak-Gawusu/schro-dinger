import React from 'react'

function Tokenomics() {
  return (
    <article className='tokenomics project__tokenomics'>
        <div className='heading'>
            <h3 className='title'>Tokenomics</h3>
        </div>
        <div className='content'>
            <div className='content__item'>
                <div className='name'>Hard Cap</div>
                <div className='value'>12 ETH</div>
            </div>
            <div className='content__item'>
                <div className='name'>Totla Supply</div>
                <div className='value'>100,000,000</div>
            </div>
            <div className='content__item'>
                <div className='name'>Public Sale Token Price</div>
                <div className='value'>1ETH = 0.0000345 MT</div>
            </div>
            <div className='content__item'>
                <div className='name'>Tokens Offered</div>
                <div className='value'>10% of supply</div>
            </div>
            <div className='content__item'>
                <div className='name'>Max Per User</div>
                <div className='value'>0.2ETH</div>
            </div>
            <div className='content__item'>
                <div className='name'>Token Sale Vesting Period</div>
                <div className='value'>No Lockup</div>
            </div>
            <div className='content__item'>
                <div className='name'>Token Distribution</div>
                <div className='value'>After the end of token sale</div>
            </div>
        </div>
    </article>
  )
}

export default Tokenomics