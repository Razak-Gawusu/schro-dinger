import React from 'react'
import {Link} from 'react-router-dom'

function LaunchProject() {
    const style ={
        width: '50%'
    }

  return (
    <div className='launchProject'>
        <div className="launchProject__item">
            <Link className='link' to='/'><img src={require('../../images/close-icon.png')} alt="X" /></Link>
            <div className='launchProject__item--info'>
                <img src={require('../../images/rocket-illustration.png')} alt="launch" />
                <div className='text'>
                    <h1 className='title'>Create a Launch Project</h1>
                    <p className='paragraph'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi explicabo ipsum dolorum error.</p>
                </div>
            </div>
            <div className='launchProject__item--form'>
                <div className="progress__indicator--wrapper">
                    <small>1 of 2 completed</small>
                    <div className="progress__indicator">
                        <span style={style}></span>
                    </div>
                </div>

                <form>
                    <div className="form--group">
                        <label htmlFor="network">Network</label>
                        <select 
                            name="network" 
                            id="network"
                        >
                            <option value="ethereum"><img src={require('../../images/Ethereum.png')} alt="" /> Ethereum</option>
                            <option value="ethereum"><img src={require('../../images/bitcoin.png')} alt="" /> Bitcoin</option>
                            <option value="ethereum"><img src={require('../../images/solana.png')} alt="" /> Solana</option>

                        </select>
                    </div>
                
                    <div className="form--group">
                        <label htmlFor="address">Address Token</label>
                        <input 
                            type="text" 
                            id='address'
                            placeholder='0cx89C669357D16.....'
                        />
                        <label><img src={require('../../images/skeletonHead.png')} alt="" /> Moon Token</label>
                    </div>

                    <Link to='/launchProjectSecond' className='form__link'>Next <img src={require('../../images/arrow-round-forward.png')} alt="" /></Link>
                </form>

                <img className='image' src={require('../../images/IMG_3576.png')} alt="" />
            </div>
        </div>
    </div>
  )
}

export default LaunchProject