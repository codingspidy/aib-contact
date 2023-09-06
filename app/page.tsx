'use client'

// import axios from 'axios';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLocationPin, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import ContactForm from './components/ContactForm';

const Contact: NextPage = () => {

    return (
        <>
            <section className='pt-[125px]'>
                <div className="pb-[70px]">
                    <div className='innerDiv mx-auto'>
                        <div className='grid lg:grid-cols-2 gap-8 lg:items-start'>
                            <div className='bg-primary lg:order-2 text-white py-12 lg:px-12 px-6 lg:mb-0 mb-6 rounded-xl'>
                                <h3 className='md:text-4xl text-2xl font-medium mb-3'>How can we help?</h3>
                                <p className=''>Have questions or need to report an issue with any AIB service? We&#39;ve got you covered.</p>
                                <ul className='mt-6 '>
                                    <li className='mb-4'>
                                        <a href='mailto:info@aibusinessmen.com' className='flex items-center'>
                                            <span className='flex items-center justify-center md:h-12 md:w-12 w-9 h-9 rounded-full md:text-xl text-sm'>
                                                <FontAwesomeIcon className="text-white" icon={faEnvelope} />
                                            </span>
                                            <span className='ml-3 md:text-lg text-base font-medium'>info@aibusinessmen.com</span>
                                        </a>
                                    </li>
                                    <li className='mb-4'>
                                        <a className='flex items-center'>
                                            <span className='flex items-center justify-center md:h-12 md:w-12 w-9 h-9 rounded-full md:text-xl text-sm'>
                                                <FontAwesomeIcon className="text-white" icon={faPhone} />
                                            </span>
                                            <span className='ml-3 md:text-lg text-base font-medium'>+91 8920962397</span>
                                        </a>
                                    </li>
                                    <li className='mb-4'>
                                        <a className='flex items-center'>
                                            <span className='flex items-center justify-center md:h-12 md:w-12 w-9 h-9 rounded-full md:text-xl text-sm'>
                                                <FontAwesomeIcon className="text-white" icon={faPhone} />                                            </span>
                                            <span className='ml-3 md:text-lg text-base font-medium'>+91 9671658857</span>
                                        </a>
                                    </li>
                                    {/* <li className='mb-4'>
                                        <a className='flex items-center'>
                                            <span className='flex items-center justify-center bg-[#ECF8F9] md:h-12 md:w-12 w-9 h-9 rounded-full md:text-xl text-sm'>
                                                <FontAwesomeIcon className="text-primary" icon={faLocationPin} />                                            </span>
                                            <span className='ml-3 md:text-lg text-base font-medium'>Indian Chamber of Commerce 4, India Exchange Place, Kolkata-700001</span>
                                        </a>
                                    </li> */}
                                </ul>
                            </div>

                            <ContactForm />
                        </div>
                        <div className='mt-20'>
                            <h3 className='text-primary md:text-4xl text-3xl font-semibold mb-1'>Our Offices</h3>
                            <div className='flex flex-wrap gap-10 mt-6'>
                                <div className='max-w-[350px]'>
                                    <h4 className="text-[18px] font-[500]">Head Office</h4>
                                    <p>SD-154, Sector-45, Noida -201303, Uttar Pradesh</p>
                                    <p>Contact: +91 9999890071</p>
                                    <p>Email: info@aibusinessmen.com</p>
                                </div>
                                <div className='max-w-[350px]'>
                                    <h4 className="text-[18px] font-[500]">Hyderabad Office</h4>
                                    <p>Plot No. 497, D.No. 8-1-284, Third Floor, OU Colony, Shaikpet, Hydrabad - 500008</p>
                                    {/* <p>Contact: +91 9059458075</p>
                                    <p>Email: zhenis@aibusinessmen.com</p> */}
                                </div>
                                <div className='max-w-[350px]'>
                                    <h4 className="text-[18px] font-[500]">Kolkata Office</h4>
                                    <p> 5/4, Arena Housing, New Town, Kolkata-700156</p>
                                    {/* <p>Contact: +91 9599032139</p>
                                    <p>Email: mdyaseen@aibusinessmen.com</p> */}
                                </div>
                                <div className='max-w-[350px]'>
                                    <h4 className="text-[18px] font-[500]">Bangalore Office</h4>
                                    <p>607, Near Akshay Orchid, 13th Cross, Vayatikaya
                                        HBCS layout, Nagawara, Bangalore-560045</p>
                                    {/* <p>Contact: +91 9972065556</p>
                                    <p>Email: mabdulbadith@aibusinessmen.com</p> */}
                                </div>
                                <div className='max-w-[350px]'>
                                    <h4 className="text-[18px] font-[500]">Mumbai Office</h4>
                                    <p>XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</p>
                                    <p>Contact: XXXXXXXXXX</p>
                                    <p>Email: XXXXXXXXXXXX</p>
                                </div>
                                <div className='max-w-[350px]'>
                                    <h4 className="text-[18px] font-[500]">Pune Office</h4>
                                    <p>Plot No. 1, Sarathi Society, Shanker Seth Road, 
Camp, Pune, Maharashtra - 411001</p>
                                </div>
                                <div className='max-w-[350px]'>
                                    <h4 className="text-[18px] font-[500]">Chennai Office</h4>
                                    <p>No. 9/5, Mayor Sivaraj Street, Royapettah,
Chennai - 600014</p>
                                </div>
                                <div className='max-w-[350px]'>
                                    <h4 className="text-[18px] font-[500]">Kochi Office</h4>
                                    <p>Calicut</p>
                                </div>
                            </div>
                        </div>
                        <div className='mt-20'>
                            <h3 className='text-primary md:text-4xl text-3xl font-semibold mb-1'>Important Email IDs</h3>
                            <div className="overflow-x-auto mt-5">
                                <div className="inline-block min-w-full">
                                    <div className="overflow-hidden">
                                        <table className="min-w-full border">
                                            <tbody>
                                                <tr className="border-b ">
                                                    <td className="whitespace-nowrap border-r px-6 py-4 ">
                                                        <h5 className="text-[18px] font-[500]">Secretary</h5>
                                                        <p>Altaf Hussain</p>
                                                        <p className="mt-4">Email – altaf.hussain@aibusinessmen.com</p>
                                                        <p>Phone - +91 9671658857</p>
                                                    </td>
                                                    <td className="whitespace-nowrap border-r px-6 py-4 ">
                                                        <h5 className="text-[18px] font-[500]">Regional Director (Hyderabad)</h5>
                                                        <p>Zhenis Telemissov</p>
                                                        <p className="mt-4">Email – zhenis@aibusinessmen.com</p>
                                                        <p>Phone - +91 9059458075</p>
                                                    </td>
                                                    <td className="whitespace-nowrap border-r px-6 py-4 ">
                                                        <h5 className="text-[18px] font-[500]">Regional Director (Kolkata)</h5>
                                                        <p>Mohammad Yaseen Malik</p>
                                                        <p className="mt-4">Email – mdyaseen@aibusinessmen.com</p>
                                                        <p>Phone: +91 9599032139</p>
                                                    </td>
                                                </tr>
                                                <tr className="border-b ">
                                                    <td className="whitespace-nowrap border-r px-6 py-4 ">
                                                        <h5 className="text-[18px] font-[500]">Regional Director (Kerala)</h5>
                                                        <p>Muhammed Saheer</p>
                                                        <p className="mt-4">Email – saheer@aibusinessmen.com</p>
                                                        <p>Phone: +91 8438967964</p>
                                                    </td>
                                                    <td className="whitespace-nowrap border-r px-6 py-4 ">
                                                        <h5 className="text-[18px] font-[500]">Regional Director (Chennai)</h5>
                                                        <p>Aadil Aiman S</p>
                                                        <p className="mt-4">Email – aadilaiman@aibusinessmen.com</p>
                                                        <p>Phone: +91 9566898486</p>
                                                    </td>
                                                    <td className="whitespace-nowrap border-r px-6 py-4 ">
                                                        <h5 className="text-[18px] font-[500]">Regional Director (Pune)</h5>
                                                        <p>Suhail Akram</p>
                                                        <p className="mt-4">Email – akram@aibusinessmen.com</p>
                                                        <p>Phone:  +91 9911377178</p>
                                                    </td>
                                                </tr>
                                                <tr className="border-b">
                                                    <td className="whitespace-nowrap border-r px-6 py-4 ">
                                                        <h5 className="text-[18px] font-[500]">Regional Director (Bangalore)</h5>
                                                        <p>Mohammad Abdul Basith</p>
                                                        <p className="mt-4">Email – mabdulbadith@aibusinessmen.com</p>
                                                        <p>Phone: +91 9972065556</p>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Contact;
