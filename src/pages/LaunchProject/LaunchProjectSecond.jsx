import React, { useState } from 'react'
import {FaPlus} from 'react-icons/fa'
import off from '../../images/toggle-off.png'
import on from '../../images/toggle-on.png'

function LaunchProjectSecond() {
    const style = {
        width: '100%'
    }

    const [toggle, setToggle] = useState(false)
    const handleToggle = () => {
        setToggle(prev => !prev)
    }

  return (
    <div className='launchProjectSecond'>
        <div className='launchProjectSecond__top'>
            <div className="container">
                <div className='info'>
                    <div className="progress__indicator--wrapper">
                        <small>2 of 2 completed</small>
                        <div className="progress__indicator">
                            <span style={style}></span>
                        </div>
                    </div>

                    <form>
                        <div className="form--group">
                            <label for="inputTag">
                                <FaPlus className='plus' />
                                <input id="inputTag" type="file"/>
                            </label>                        
                        </div>

                        <div className="form--group">
                            <h2 className='title'>Moon Token</h2>

                            
                            <div className='input--group'>
                                <input type="text" id='addwebsite'  placeholder='Add website Url'/>
                                <label htmlFor='addwebsite' className='input__image'><FaPlus className='icon'/></label>
                            </div>
                            <div className='input--group'>
                                <input type="text" id='addAddress' placeholder='Add Address'/>
                                <label htmlFor='addAddress' className='input__image'><FaPlus className='icon'/></label>
                            </div>
                            <div className='input--group'>
                                <input type="text" id='addTelegram' placeholder='Add Telegram Link'/>
                                <label htmlFor='addTelegram' className='input__image'><FaPlus className='icon'/></label>
                            </div>
                            <div className='input--group'>
                                <input type="text" id='addTwitter' placeholder='Add Twitter Link'/>
                                <label htmlFor='addTwitter' className='input__image'><FaPlus className='icon'/></label>
                            </div>
                            <div className='input--group'>
                                <input type="text" id='addDiscord'  placeholder='Add Discord Link'/>
                                <label htmlFor='addDiscord' className='input__image'><FaPlus className='icon' /></label>
                            </div>
                        </div>
                    </form>
                </div>
                <div className='image'>
                    <img src={require('../../images/dingerwithcoin.png')} alt="dingerwithcoin" />
                </div>
            </div>
        </div>

        <div className='launchProjectSecond__bottom'>
            <form className=''>
                <div className="container">
                    <div className="form--group description">
                        <textarea name="" id="description" cols="30" rows="10" maxLength='300' placeholder='Project Description...'></textarea>
                        <label htmlFor="description">*Brief description about project</label>
                    </div>

                    <div className='item'>
                        <div className="form--group">
                            <label htmlFor="softCap">Soft Cap</label>
                            <input type="number" id='softCap' placeholder='100'/>
                        </div>
                        <div className="form--group">
                            <label htmlFor="hardCap">Hard Cap</label>
                            <input type="number" id='hardCap' placeholder='100'/>
                        </div>
                        <div className="form--group">
                            <label htmlFor="minContribution">Min. Contribution</label>
                            <input type="number" id='minContribution' placeholder='0.5 ETH'/>
                        </div>
                        <div className="form--group">
                            <label htmlFor="maxContribution">Max. Contribution</label>
                            <input type="number" id='maxContribution' placeholder='3 ETH'/>
                        </div>
                        <div className="form--group">
                            <label htmlFor="rate">Presale rate (1 Eth =)</label>
                            <input type="text" id='rate' placeholder='% of supply'/>
                        </div>
                        <div className="form--group">
                            <label htmlFor="vestTokens">Vest Tokens <img className='toggle-icon' onClick={handleToggle} src={toggle ? on : off} alt='toggle'/></label>
                            <input type="text" id='vestTokens' placeholder='eg. 0.5% of tokens every day'/>
                        </div>
                    </div>
                </div>
                <div className="commit">
                    <button className='form__link'> Commit <img src={require('../../images/arrow-round-forward.png')} alt='>'/></button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default LaunchProjectSecond