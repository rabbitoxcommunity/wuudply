import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import InnerBanner from '../components/InnerBanner/InnerBanner'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Contact() {
    const form = useRef();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const isValidEmail = (email) => {
        // Simple email validation using regex
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };
    const sendEmail = (e) => {
        e.preventDefault();
         // Validation
         if (formData.name === '') {
            toast.error('Please enter your name');
            return;
        }
        if (formData.email === '') {
            toast.error('Please enter your email');
            return;
        }
        if (!isValidEmail(formData.email)) {
            toast.error('Please enter a valid email');
            return;
        }
        if (formData.phone === '') {
            toast.error('Please enter your phone number');
            return;
        }
        if (formData.message === '') {
            toast.error('Please enter your comments');
            return;
        }

        emailjs
            .sendForm('service_ecwlxqg', 'template_w8r6f35', form.current, {
                publicKey: '3XLW0uvmLxar8lvNn',
            })
            .then(
                () => {
                    toast.success("Thank you for getting in touch!", { position: "bottom-right" });
                    e.target.reset();
                },
                (error) => {
                    toast.error("Please check your form", { position: "bottom-right" });
                },
            );
   
    };
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
                            <form ref={form} onSubmit={sendEmail}>
                                <div className="form-group">
                                    <label htmlFor="name">Name</label>
                                    <input type="text" className="form-control" name='name' onChange={handleChange} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="Email">Email</label>
                                    <input type="text" className="form-control" name='email' onChange={handleChange}  />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="Phone">Phone</label>
                                    <input type="text" className="form-control" name='phone' onChange={handleChange} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="Message">Message</label>
                                    <textarea className="form-control" cols="30" rows="6" name='message' onChange={handleChange}></textarea>
                                </div>
                                <button type="submit" className="btn btn-primary">Submit</button>
                                <ToastContainer />
                            </form>
                        </div>
                    </div>
                </div>

                <div className="whatsapp">
                    <div className="container">
                        <h3><a href="https://wa.me/+919895112233" target='_blank'><span>Whatsapp :</span> +91 9895 112 233</a> <br /> <a target='_blank' href="mailto:Info@wuudply.in"><span>Email :</span > Info@wuudply.in</a></h3>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Contact