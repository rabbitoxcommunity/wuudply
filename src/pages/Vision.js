import React from 'react'
import InnerBanner from '../components/InnerBanner/InnerBanner'

export default function Vision() {
    return (
        <div className='innerpage wuudly__vision'>
            <InnerBanner image={'assets/img/vision.jpg'} title='Vision ' />
            <div className="container">
                <div className="row">
                    <div className="col-md-9">
                        <h4>At Wuudply, our legacy is shaped by a team of highly skilled craftsmen dedicated to crafting the world's finest products.</h4>
                        <h2>Vision</h2>
                    </div>
                </div>
                <div className="offset-md-5">
                    <h5>Our vision is to exceed industry norms, bringing fresh possibilities in plywood. We achieve this through careful planning and precise execution at every step. Wuudply is synonymous with quality, reflecting strength and durability in all our products. Our journey continues, as we set our sights on achieving new milestones and scaling greater heights of success.</h5>
                </div>

            </div>
            <div className="vision__footer">
                <img src="assets/img/vision-footer.png" className='w-100' alt="" />
            </div>
            <div className="our__ethos">
                <div className="container">
                <h2>Our ethos is centred on 'Quality, <br />
                    durability, and customer satisfaction'.</h2>
                <div className="offset-md-5">
                    <h4>These principles drive us to consistently deliver the finest products and solutions to our clients. Our track record speaks for itself, fostering strong, mutually beneficial relationships across South India. We firmly believe that a satisfied customer is invaluable, transcending mere profit margins. To all our dealers, we extend our  heartfelt gratitude. Their unwavering support has propelled us to achieve remarkable milestones. Customer feedback is invaluable, guiding us towards continuous improvement and eventual perfection.</h4>
                    <div className="director">
                        <h5>Haneefa Thotton</h5>
                        <span>Director - Wuudply</span>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}
