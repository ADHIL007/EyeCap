import React from 'react'
import icon from '../assets/images/icon.png'
import Skewbutton from './Skewbutton'

function Navbar() {
  return (
    <div>
<nav>

<div className='nav-brand'>
  <img src={icon} alt='icon' />
 <div className='brand'> <h2>EyeCap</h2>
 <hr />
  <p><em>Our promise is your Safety</em></p>
  </div>
</div>
</nav>
    <Skewbutton link="Home" src='/'/>
   

    </div>
  )
}

export default Navbar