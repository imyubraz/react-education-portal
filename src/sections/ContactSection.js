import React from 'react'
import SocialLinks from './../components/social/SocialLinks';

const ContactSection = () => {



    return (
        <div className="wrapper">
            <div className="container max-w-[1280px] mx-auto">
                <div className="row flex flex-col wrap lg:flex-row gap-8">
                    <div className="col lg:w-1/3 space-y-8 order-2 md:order-1">
                        <div className="row text-center md:text-left">
                            <h2 className='font-extrabold text-2xl md:text-3xl text-purple-900'>Get in touch</h2>
                            <p className='text-gray-600 text-lg'>Looking for help? Fill the form and start a new adventure.</p>
                        </div>
                        <div className="row divider">
                            <hr />
                        </div>
                        <div className='flex flex-col md:flex-row lg:flex-col gap-8 flex-wrap'>
                            <div className="row flex flex-col gap-4">
                                <div>
                                    <h3 className='font-bold text-lg'>Headquarters</h3>
                                </div>
                                <div className="row flex gap-4">
                                    <div className="icon">🏠</div>
                                    <div>
                                        {/* <p className='text-gray-600'>Kathmandu, Nepal</p> */}
                                        {/* <a href="https://maps.app.goo.gl/4kCAaPYLTFCkg1Sp6"></a> */}
                                        <a href="https://maps.app.goo.gl/4kCAaPYLTFCkg1Sp6" target='_blank' className='text-gray-600'>Kathmandu, Nepal</a>
                                    </div>
                                </div>
                            </div>
                            <div className="row flex flex-col gap-4">
                                <div>
                                    <h3 className='font-bold text-lg'>Phone</h3>
                                </div>
                                <div className="row flex gap-4">
                                    <div className="icon">📞</div>
                                    <div className='flex flex-col gap-2'>
                                        <a href="tel:+9779817132325" className='text-gray-600'>(+977) 9817132325</a>
                                        <a href="tel:+9779804168680" className='text-gray-600'>(+977) 9804168680</a>
                                    </div>
                                </div>
                            </div>
                            <div className="row flex flex-col gap-4">
                                <div>
                                    <h3 className='font-bold text-lg'>Email</h3>
                                </div>
                                <div className="row flex gap-4">
                                    <div className="icon">📧</div>
                                    <div className='flex flex-col gap-2'>
                                        <a href="mailto:iyubrajpoudel@gmail.com" className='text-gray-600'>iyubrajpoudel@gmail.com</a>
                                        <a href="mailto:imyubraz@gmail.com" className='text-gray-600'>imyubraz@gmail.com</a>
                                    </div>
                                </div>
                            </div>
                            <div className="row flex flex-col gap-4">
                                <div>
                                    <h3 className='font-bold text-lg'>Stay Tuned</h3>
                                </div>
                                <div>
                                    <SocialLinks />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col lg:grow bg-blue-50 p-2 md:p-8 order-1 md:order-2">
                        <div className='row text-center md:text-left'>
                            <h2 className='text-2xl md:text-3xl font-bold text-purple-900'>Let's Connect</h2>
                            <p className='text-lg text-gray-600'>Integer at lorem eget diam facilisis lacinia ac id massa.</p>
                        </div>
                        <div className="form-wrapper mt-4 py-4">
                            <form action="">
                                <div className='row flex flex-col gap-4'>
                                    <div className="row flex flex-col md:flex-row gap-4 md:gap-8">
                                        <input type="text" name="name" id="nameInput" placeholder='Your Name' className='md:w-1/2 outline-blue-200 py-4 px-8 rounded-md' />
                                        <input type="email" name="email" id="emailInput" placeholder='Your Email' className='md:w-1/2 outline-blue-200 py-4 px-8 rounded-md' />
                                    </div>
                                    <div className="row">
                                        <input type="text" name="subject" id="subjectInput" placeholder='Subject' className='w-full outline-blue-200 py-4 px-8 rounded-md' />
                                    </div>
                                    <div className="row">
                                        <textarea name="message" id="messageInput" rows="8" placeholder='How can we help?' className='w-full max-h-[20rem] outline-blue-200 py-4 px-8 rounded-md'></textarea>
                                    </div>
                                    <div className="row">
                                        <button type="submit" className='bg-purple-800 hover:bg-purple-900 text-white font-semibold px-6 py-3 rounded-full'>Send Message</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactSection