import React from 'react'
import './Footer.scss'
import { Link } from 'react-router-dom'

export default function Footer() {
  const d = new Date();
  let year = d.getFullYear();
  return (
    <div className='wuudply__footer'>
      <div className="upper__footer">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-md-3">
              <div className="footer__widgets">
                <ul>
                  <li><Link to='/about'>About</Link></li>
                  <li><Link to='/products'>Products</Link></li>
                  <li><Link to='/'>Vision</Link></li>
                  <li><Link to='/innovation'>Innovation</Link></li>
                  <li><Link to='/contact'>Contact</Link></li>
                </ul>
              </div>
            </div>
            <div className="col-md-3">
              <div className="footer__widgets">
                <h5>Contact</h5>
                <p>Wuudply Ltd, Mill Road,<br /> Valapattanam, Kerala 670010</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="footer__widgets">
                <h5>Follow</h5>
                <div className="social__links">
                  <ul>
                    <li><a href="#" target='_blank'>Facebook</a></li>
                    <li><a href="#" target='_blank'>Instagram</a></li>
                    <li><a href="#" target='_blank'>Linkedin</a></li>
                    {/* <li><a href="#" target='_blank'>Whatsapp</a></li> */}
                    <li><a href="#" target='_blank'>X</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="copyright"><p>© Copyright {year} Wuudply</p></div>
          </div>
        </div>
      </div>
      <div className="footer__bottom">
        <div className="container">
          <div className="footer__logo__section">
            <div className="col-md-6 col-tab-12">
              <h2>Beyond Limits. <br />Beyond Ultra Quality.</h2>
            </div>
            <div className="footer__logo">
              <img src="assets/img/logo.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
