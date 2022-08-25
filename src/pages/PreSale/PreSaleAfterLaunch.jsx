import React from 'react'
import alert from '../../images/exclamation-triangle.svg'
import ProjectMainInfo from '../../components/PreSalePage/ProjectMainInfo'
import Tokenomics from '../../components/PreSalePage/Tokenomics'

function Project() {
  return (
    <div className='project'> 
        <section className='project__top'>
            <div className="container">
              <ProjectMainInfo />
            </div>
        </section>

        <section className='project__down container'>
          <Tokenomics />
          <article>
            <div className='project__description'>
              <h3 className='title'>Project Description</h3>
              <p className='paragraph'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus provident tempore voluptas impedit commodi repudiandae mollitia nihil? Veniam quidem molestias exercitationem voluptate placeat culpa quos sapiente ea magni, obcaecati, enim explicabo! Corporis nobis, ipsum nostrum facilis cupiditate commodi delectus voluptate.</p>

              <p className='paragraph'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus provident tempore voluptas impedit commodi repudiandae mollitia nihil? Veniam quidem molestias exercitationem voluptate placeat culpa quos sapiente ea magni, obcaecati, enim explicabo! Corporis nobis, ipsum nostrum facilis cupiditate commodi delectus voluptate.</p>

              <a className='connect__wallet--link' href="#connect">Connect Wallet</a>
            </div>

            <div className='alert'>
              <img alert__image src={alert} alt="" />
              <div className='alert__text'>
                <h4 className='title'>Safety Alert</h4>
                <p className='paragraph'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod expedita non laborum eum tenetur, incidunt sed optio corrupti eligendi quibusdam ducimus, voluptatem eveniet. Voluptas facilis modi reprehenderit laudantium. Porro reiciendis asperiores nisi culpa fugit labore laboriosam aliquam eius iusto sequi.</p>
              </div>
            </div>
          </article>
        </section>
    </div>
  )
}

export default Project