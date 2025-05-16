import React from 'react'
import './Footer.scss'
import { Link } from 'react-router-dom'

export default function PFooter() {
    const d = new Date();
    let year = d.getFullYear();
    return (
        <div className='primeply__footer'>
            <div className="footer__bottom">
                <div className="container">
                    <div className="footer__logo__section">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="panelex">
                                    <ul>
                                        <li><a href="#"><img src="/assets/panelex/fb.svg" alt="" /></a></li>
                                        <li><a href="#"><img src="/assets/panelex/linkedin.svg" alt="" /></a></li>
                                        <li><a href="#"><img src="/assets/panelex/twitter.svg" alt="" /></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="panelex">
                                    <p>Wuudply Ltd, Mill Road,
                                        Valapattanam, Kerala 670010</p>
                                </div>
                            </div>
                        </div>
                        <div className="footer__logo">
                            <p className='panelex'>© Copyright {year} Panelex</p>
                            <img src="assets/panelex/logo-footer.svg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
