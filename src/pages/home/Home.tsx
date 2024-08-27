import React from 'react'
import "./Home.scss"
import SideMenu from '../../components/sidemenu/SideMenu'
import Content from '../../components/body/Content'
import RightSideMenu from '../../components/rightsidemenu/RightSideMenu'
import useScreenSize from '../../helper/screen_size'

const Home = () => {

  const { width, height } = useScreenSize();

  const isMobile = width < 768; // Mobile devices (width less than 768px)
  const isTablet = width >= 768 && width <= 1024; // Tablet devices (width between 768px and 1024px)
  const isDesktop = width > 1024; // Desktop devices (width greater than 1024px)

  const isMobileOrTablet = isMobile || isTablet; // True if the device is mobile or tablet
  const isTabletOrDesktop = isDesktop || isTablet; // True if the device is mobile or tablet

  return (
    <div className={isMobileOrTablet ?'home2' : 'home'}>
     {isDesktop && (<SideMenu/>)}
      <Content/>
     {isDesktop && (<RightSideMenu/>)}
    </div>
  )
}

export default Home