import Aos from 'aos';
import React, { useEffect, useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Table } from 'react-bootstrap'
import { Link, Outlet } from 'react-router-dom';
import { gsap } from "gsap";
import { Parallax, Pagination, Navigation, EffectFade } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';

export default function PHome() {

  const swiperRef = useRef(null);
  useEffect(function () {
    Aos.init({ duration: 2000 });
  }, []);

  const headingRef = useRef(null);

  useEffect(() => {
    // Animate from blurred to clear
    gsap.fromTo(
      headingRef.current,
      { filter: "blur(10px)", opacity: 0 },
      {
        filter: "blur(0px)",
        opacity: 1,
        duration: 3.5,
        ease: "power2.out",
      }
    );
  }, []);
  return (
    <>
      <Outlet />
      <section className="primeply__banner p-0">
        <img src="/assets/panelex/banner.jpg" alt="" />
        <div className="banner__content">
          <h1 ref={headingRef}>The Next-Generation <br /> Engineered Boards</h1>
        </div>
      </section>

      <section className="panelex__categories">
        <div className="container">
          <h2>Beautiful chipboard for spaces where<br />people live, work, and learn</h2>
        </div>
        <div className="scroll-container">
          <div className="row flex-nowrap">
            <div className="col-md-4 pe-0">
              <div className="Grid">
                <img src="/assets/panelex/categories/1.png" alt="" />
                <p>Wooden</p>
              </div>
            </div>
            <div className="col-md-4 pe-0">
              <div className="Grid">
                <img src="/assets/panelex/categories/2.png" alt="" />
                <p>Marble</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="Grid">
                <img src="/assets/panelex/categories/3.png" alt="" />
                <p>Fabric</p>
              </div>
            </div>
            <div className="col-md-4 pe-0">
              <div className="Grid">
                <img src="/assets/panelex/categories/2.png" alt="" />
                <p>Marble</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="Grid">
                <img src="/assets/panelex/categories/3.png" alt="" />
                <p>Fabric</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="panelex__future">
        <img src="/assets/panelex/future.png" alt="" />
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="grid">
                <h2>This is what the<br />
                  future looks like</h2>
                <p>Made from sustainably sourced wood fibers and recycled materials, our pre-laminated boards help reduce waste and environmental impact—without compromising on quality or aesthetics. Every panel is a step toward smarter spaces and a cleaner planet—because the future of design should be as sustainable as it is beautiful.</p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="grid end">
                <button className='btn btn-white'>Find out how we do it</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="panelex__teak">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="grid">
                <img src="/assets/panelex/Thai Teak1.png" alt="" />
                <h4>627 - Thai Teak</h4>
                <p>Suede (SUD)</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="grid">
                <img src="/assets/panelex/Thai Teak2.png" alt="" />
                <h4>627 - Thai Teak</h4>
                <p>Suede (SUD)</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="grid">
                <img src="/assets/panelex/Thai Teak1.png" alt="" />
                <h4>731 - Wenge</h4>
                <p>Suede (SUD)</p>
              </div>
            </div>
            <div className="col-md-12 text-center">
              <button className="btn btn-secondary">View All</button>
            </div>
          </div>
        </div>
      </section>

      <section className="panelex__manifature" style={{ backgroundImage: 'url(assets/panelex/process.png)' }}>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h2>Manufacturing <br />
                process:</h2>
              <Swiper
                spaceBetween={30}
                autoHeight={true}
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                effect={'fade'}
                pagination={{
                  clickable: true,
                }}
                modules={[EffectFade]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <div className="infoGrid">
                    <div className="count">1</div>
                    <h4>In house manufacturing</h4>
                    <p>Our in-house production boosts efficiency for rapid,
                      large-scale manufacturing, providing tighter quality
                      control and prompt issue resolution.</p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="infoGrid">
                    <div className="count">2</div>
                    <h4>Lorem ipsum dolor sit.</h4>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam ratione ipsa qui sint itaque, veniam voluptates doloribus</p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="infoGrid">
                    <div className="count">3</div>
                    <h4>In house manufacturing</h4>
                    <p>eum impedit voluptatibus, cupiditate, deserunt sapiente incidunt architecto porro dolorem quaerat voluptate eaque?</p>
                  </div>
                </SwiperSlide>
              </Swiper>
              <div className="navigation">
                <img
                  src="assets/img/products/arrow.svg"
                  alt="Previous"
                  style={{ rotate: '180deg' }}
                  className="absolute top-1/2 left-2 z-10 cursor-pointer"
                  onClick={() => swiperRef.current?.slidePrev()}
                />
                <img
                  src="assets/img/products/arrow.svg"
                  alt="Next"
                  className="absolute top-1/2 right-2 z-10 cursor-pointer"
                  onClick={() => swiperRef.current?.slideNext()}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="panelex__excellence">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="content text">
                <h2>40 Years of Engineering Excellence</h2>
                <p>We’ve been producing engineered wood boards for more than 40 years—with passion, innovation, and a strong commitment to sustainability.</p>
                <button className="btn btn-secondary">Dicover who we are</button>
              </div>
            </div>
            <div className="col-md-6">
              <div className="content">
                <img src="/assets/panelex/excellence.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>

  )
}
