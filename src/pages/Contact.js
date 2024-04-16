import React from 'react'
import InnerBanner from '../components/InnerBanner/InnerBanner'

function Contact() {
  return (
    <div className='innerpage wuudply__contact'>
            <InnerBanner image={'assets/img/contact.jpg'} title='Contact' />
            <section className='pb-0'>
                <div className="container">
               <h2>Want to know more? </h2>
               <div className="row justify-content-between">
                <div className="col-md-5">
                    <h4>We’re always happy to hear from customers, partners, and distributors.</h4>
                </div>
                <div className="col-md-6">
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="Email">Email</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="Phone">Phone</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="Message">Message</label>
                        <textarea className="form-control" cols="30" rows="6"></textarea>
                    </div>
                    <button className="btn btn-primary">Submit</button>
                </div>
               </div>
                </div>
                <div className="whatsapp">
                    <div className="container">
                    <h3><a href="https://wa.me/+919895112233" target='_blank'>Whatsapp : +91 9895 112 233</a> <br /> <a target='_blank' href="mailto:Info@wuudply.in">Email : Info@wuudply.in</a></h3>
                    </div>
                </div>
            </section>
        </div>
  )
}

export default Contact