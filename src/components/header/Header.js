import React, { useEffect, useState } from 'react'
import './Header.scss'
import ScrollTop from '../ScrollTop'
import { Link, useLocation } from 'react-router-dom';
export default function Header() {
  const [isScrolledDown, setIsScrolledDown] = useState(false);
  const [homePage, sethomePage] = useState(false)
  const [menuActive, setmenuActive] = useState(false)
  const location = useLocation()

  useEffect(() => {
    if (location.pathname == '/') {
      sethomePage(true)
      setmenuActive(false)
    }else{
      sethomePage(false)
      setmenuActive(false)
    }
  }, [location.pathname])



  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 0;
      setIsScrolledDown(scrolled);
    };
    window.addEventListener('scroll', handleScroll);
    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  const handleMenu = () => {
    setmenuActive(!menuActive)
  }


  return (
    <>
      <div className={`main__header ${menuActive ? 'show' : ''}`}>
        <header id="header" className={`header d-flex align-items-center fixed-top ${isScrolledDown ? 'sticked' : ''} ${homePage ? '' : 'bg-white'}`}>
          <div className="container-fluid container-xl d-flex align-items-center justify-content-between">

            <Link to='/' className={`logo d-flex align-items-center ${homePage ? 'logo-home' : ''}`}>
              <img src="assets/img/logo.svg" alt="" />
            </Link>

            <i className="mobile-nav-toggle mobile-nav-show bi bi-list"></i>
            <i className="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"></i>
            <nav className="navbar">
            <Link to='/contact'> <div className="btn btn-primary">Contact</div></Link>
  
              <div className={`menu-toggle ${menuActive ? 'active' : ''}`} onClick={handleMenu}>
                <div className={`line ${ homePage && 'home-line'}`}></div>
                <div className={`line ${ homePage && 'home-line'}`} ></div>
              </div>
            </nav>

          </div>
        </header>

        {/* MENU ITEMS */}
        <div className={`menu__lists ${menuActive ? 'show' : ''}`}>
          <div className="container">
            <div className="menu__items">
            <ul>
              <li><Link to='/about'>About</Link></li>
              <li><Link to='/products'>Product</Link></li>
              <li><Link to='/vision'>Vision</Link></li>
              <li><Link to='/innovation'>Innovation</Link></li>
              <li><Link to='/gallery'>Gallery</Link></li>
              <li><Link to='/contact'>contact</Link></li>
            </ul>
            <div className="logo__menu">
              <img src="assets/img/logo.svg" alt="" />
            </div>
            </div>
           
          </div>
        </div>

      </div>
    </>
  )
}
