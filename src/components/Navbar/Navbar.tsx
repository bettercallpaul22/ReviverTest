import React from 'react'
import "./Navbar.scss"
import useScreenSize from '../../helper/screen_size';

const Navbar = () => {
    const { width, height } = useScreenSize();
  return (
    <div className='navbar-container hide-for-desktop2'>
         {width < 768 ? 'Mobile View' : 'Desktop View'}
    </div>
  )
}

export default Navbar