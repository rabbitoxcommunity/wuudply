import Aos from 'aos';
import React, { useEffect } from 'react'
import { Table } from 'react-bootstrap'

export default function Home() {
  useEffect(function () {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
      <section className="wuudply__banner p-0">
        <video className="video-item" autoPlay={true} muted={true} loop={true} playsInline={true}>
          <source src="assets/videos/banner.mp4" type="video/mp4" />
        </video>
        <div className="banner__content">
          <h1 data-aos="fade-in">Quality Beyond Guarantee</h1>
        </div>
      </section>
      <section className="wuudply__about">
        <div className="container">
          <div className="offset-md-6 col-md-6">
            <div className="about__content" data-aos="fade-up">
              <h4>Wuud Ply is one of the most trusted names in South India for authentic timber-based plywood  since 1986, from Primeply Industries.</h4>
              <button className='btn btn-secondary'>Learn More</button>
            </div>
          </div>
        </div>
      </section>
      <section className="wuudply__featured">
        <div className="container">
          <div className="featured__grid"  data-aos="fade-in">
            <div className="row align-items-center"> 
              <div className="col-md-6">
                <div className="featured__content" >
                  <h3>Plywood</h3>
                  <h5>Exceptional range of commercial and waterproof plywood.</h5>
                  <button className="btn btn-rounded" ><img src="assets/img/products/arrow.svg" alt="" /></button>
                </div>
              </div>
              <div className="col-md-6 ps-0">
                <div className="featured__img">
                  <img src="assets/img/plywood.jpg" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="featured__grid"  data-aos="fade-in">
            <div className="row align-items-center">
              <div className="col-md-6 pe-0">
                <div className="featured__img">
                  <img src="assets/img/blockboard.jpg" alt="" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="featured__content">
                  <h3>Block board</h3>
                  <h5 >IS1659 Block Boards crafted from handpicked seasoned timber.</h5>
                  <button className="btn btn-rounded" ><img src="assets/img/products/arrow.svg" alt="" /></button>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-5">
            <button className='btn btn-secondary'>View All Prodcuts</button>
          </div>
        </div>
      </section>

      <section className="wuudply__bestselling">
        <div className="container">
          <div className="heading" data-aos="fade-up">
            <h3>Our Bestselling <br />Products</h3>
          </div>
          <div className="row" data-aos="fade-up">
            <div className="col-md-6">
              <div className="features">
              <h3>PLATINO</h3>
              <h4>Marine Grade (IS710)</h4>
              <Table hover>
                <tbody>
                  <tr>
                    <td colSpan={4}>Technical Specification</td>
                  </tr>
                  <tr>
                    <td>Density</td>
                    <td>0.72 to 0.80g/cc</td>
                    <td>Glue Shear </td>
                    <td>135</td>
                  </tr>
                  <tr>
                    <td>Moisture Content </td>
                    <td>8 - 12%</td>
                    <td>Bending Strength</td>
                    <td>1</td>
                  </tr>
                  <tr>
                    <td>-- MOR</td>
                    <td>40</td>
                    <td>-- MOE</td>
                    <td>9000</td>
                  </tr>
                  <tr>
                    <td>Knife Test</td>
                    <td>Excellent</td>
                    <td>Water Resistance</td>
                    <td>Excellent (72Hrs)</td>
                  </tr>
                </tbody>
              </Table>
              </div>
            </div>

            <div className="col-md-6">
              <div className="features">
              <h3>ELITE</h3>
              <h4>Marine Grade (IS710)</h4>
              <Table hover>
                <tbody>
                  <tr>
                    <td colSpan={4}>Technical Specification</td>
                  </tr>
                  <tr>
                    <td>Density</td>
                    <td>0.72 to 0.80g/cc</td>
                    <td>Glue Shear </td>
                    <td>135</td>
                  </tr>
                  <tr>
                    <td>Moisture Content </td>
                    <td>8 - 12%</td>
                    <td>Bending Strength</td>
                    <td>1</td>
                  </tr>
                  <tr>
                    <td>-- MOR</td>
                    <td>40</td>
                    <td>-- MOE</td>
                    <td>9000</td>
                  </tr>
                  <tr>
                    <td>Knife Test</td>
                    <td>Excellent</td>
                    <td>Water Resistance</td>
                    <td>Excellent (72Hrs)</td>
                  </tr>
                </tbody>
              </Table>
              </div>
             
            </div>
          </div>
          <div className="text-center mt-5">
            <button className='btn btn-secondary'>View All</button>
          </div>
        </div>
      </section>
    </>

  )
}
