import React from 'react'
import {Link} from 'react-router-dom'
import PoolCard from '../../components/PoolCard/PoolCard'
import { poolData } from '../../Data/data'
import {nanoid} from 'nanoid'
import Projects from '../Projects'

function Home() {
  return (
    <div className='home'>
        <section className="featured__pool">
            <div className="container">
            <div className="featured__pool--item text">
                    <div className='primary'>
                        <h1 className='title'>FEATURED POOL</h1>
                        <Link className='link ' to='/createNewPool'>   
                            <img 
                                src={require('../../images/add-icon.png')} 
                                alt="" 
                            /> 
                            Create New Pool
                        </Link>
                    </div>

                    <div className='secondary'>
                        <img src={require('../../images/mooncoin.png')} alt="moon coin" />
                        <div className='secondary__item'>
                            <h3 className='title'>Moon Token</h3>
                            <p className='paragraph'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, eaque?</p>
                            <div className='sale__info'>
                                <div className='sale__info--item'>
                                    <div>
                                        <img src={require('../../images/sale.png')} alt='sale'/>
                                        Sale Price
                                    </div>
                                    
                                    <div>
                                        ETH = 0.345 MT
                                    </div>
                                </div>
                                <div className='sale__info--item'>
                                    <div>
                                        <img src={require('../../images/cash.png')} alt='sale'/>
                                        Total Committed
                                    </div>
                                    
                                    <div>
                                        100,347.00ETH
                                    </div>
                                </div>
                                <div className='sale__info--item'>
                                    <div>
                                        <img src={require('../../images/user.png')} alt='sale'/>
                                        Participants
                                    </div>
                                    
                                    <div>
                                        34011
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
                <div className="featured__pool--item image">
                    <img src={require('../../images/dingerwithcoin.png')} alt="dinger with coin" />
                </div>
            </div>
        </section>

        <section className="upcomingPools container">
            <h1 className="title">Upcoming Pools</h1>
            <div className="upcomingPools__item">
                {poolData.map((data) => (
                    <PoolCard 
                        key={nanoid()}
                        name={data.name}
                        hashTag={data.hashTag}
                        softCap={data.softCap}
                        hardCap={data.hardCap}
                        participants={data.participants}
                        amount={data.amount}
                        total={data.total}
                    />
                ))}
            </div>
        </section>

        <section className="projects container">
            <Projects />
        </section>
    </div>
  )
}

export default Home