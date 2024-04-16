import React from 'react'
import InnerBanner from '../components/InnerBanner/InnerBanner'

export default function About() {
  return (
    <div className='innerpage wuudly__about'>
      <InnerBanner image={'assets/img/about.jpg'} title='Beyond Limits, Beyond Compare.' />
      <div className="container">
        <div className="row">
          <div className="col-md-9">
            <h4>Wuud Ply is one of the most trusted names in South India for authentic timber-based plywood since 1986, from Primeply Industries.</h4>
          </div>
        </div>
        <div className="offset-md-6">
          <h5>
            We are well-known for our expertise in crafting high-quality gurjan wood and related products. Our range includes plywood, flush doors, block boards, and decorative veneers, suitable for both homes and offices. We carefully source logs and veneers from Myanmar, prioritizing Gurjan wood for its excellent resistance to borers and termites. Each product undergoes a thorough 5-step process to ensure durability.
          </h5>
          <h5>Our flagship product, Wuudply plywood, is made from 100% Gurjan timber, ensuring exceptional stability and a guarantee against warping. As pioneers in India, Primeply Industries. was the
            first to offer plywood with Gurjan core veneers, demonstrating our dedication to quality and innovation in the industry.</h5>
        </div>
        <div className="col-md-12">
          <h2 className='core'>100% Gurjan</h2>
          <h2 className="core pt-0 text-right">Core Veneers</h2>
        </div>
        <div className="eco__friendly">
        <div className="row align-items-center">
          <div className="col-md-6">
            <div className="eco__content">
              <img src="assets/img/about-1.png" alt="" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="eco__content">
              <div className="eco-responsibility">
              <h2>Committed to <br />
                eco-responsibility</h2>
              <p>At Wuud Ply, we are dedicated to sourcing wood responsibly from tropical plantations. By ensuring that nearly all the wood entering our factory is utilized in our manufacturing process, we minimize product wastage and reduce harm to our sensitive ecosystem.</p>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>

    </div>
  )
}
