import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import EmailIcon from '@mui/icons-material/Email';
function Skewbutton() {
  return (
    <div><div className='link-list'>
<div className='links'><a href='/'> <HomeIcon />Home</a></div>
<div className='links'><a href='/about'><InfoIcon />About</a></div>
<div className='links'><a href = 'contact'><EmailIcon/> Contact Us</a> </div>
</div></div>
  )
}

export default Skewbutton