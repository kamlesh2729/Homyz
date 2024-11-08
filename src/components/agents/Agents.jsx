// import React from 'react'

import Agent1 from '../../assets/agent/agent01.webp'
import Agent2 from '../../assets/agent/agent02.webp'
import Agent3 from '../../assets/agent/agent03.webp'

const Agents = () => {
  return (
    <section id="Agents" className='agents'>
    <h2 className='agents_h2'>Our <span className='agents_h2_sp'>Agents</span></h2>
    <p className='agents_sub'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto alias quo facere!</p>
    <div className='agents_cards'>
    <div>
    <img src={Agent1} alt="agent-profile-img" />
    <h2>Mark Foli</h2>
    <p>Broker</p>
    </div>
    <div>
    <img src={Agent2} alt="agent-profile-img" />
    <h2>Dhaval Kalani</h2>
    <p>Broker</p>
    </div>
    <div>
    <img src={Agent3} alt="agent-profile-img" />
    <h2>Nancy</h2>
    <p>Broker</p>
    </div>
    </div>
    </section>
  )
}

export default Agents