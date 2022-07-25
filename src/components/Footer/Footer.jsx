import React from 'react'

function Footer() {
  return (
    <footer id='footer'>
        <div className="container">
            <div className='footer__item copyright'>Schro-Dinger &copy; 2022. All rights reserved.</div>
            <div className='footer__item socials'>
                <div className='socials__image'>
                    <img 
                        src={require('../../images/telegram.png')} 
                        alt="telegram" 
                    />
                </div>
                <div className='socials__image'>
                    <img 
                        src={require('../../images/reddit.png')} 
                        alt="reddit" 
                    />
                </div>
                <div className='socials__image'>
                    <img 
                        src={require('../../images/discord.png')} 
                        alt="discord" 
                    />
                </div>
                <div className='socials__image'>
                    <img 
                        src={require('../../images/twitter.png')} 
                        alt="twitter" 
                    />
                </div>
            </div>
        </div>
        
    </footer>
  )
}

export default Footer