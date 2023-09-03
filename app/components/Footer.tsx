'use client'
import type { NextComponentType } from 'next';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { faArrowCircleUp } from "@fortawesome/free-solid-svg-icons"
import { faFacebook, faTwitter, faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Footer: NextComponentType = () => {
    const [showTopBtn, setShowTopBtn] = useState(false);
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 400) {
                setShowTopBtn(true);
            } else {
                setShowTopBtn(false);
            }
        });
    }, []);
    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };
    return (
        <>
            <footer className='bg-primary footer relative pt-[50px] pb-[80px] sm:pt-[80px] sm:pb-[80px] lg:pt-[100px] lg:pb-[100px]'>
                <div className='innerDiv'>
                    <div className='lg:flex justify-between items-center border-b mb-12'>
                        <div className='flex justify-between items-end lg:w-full pb-0 lg:pb-4'>
                            <ul className='flex lg:mb-0 mb-3 text-white'>
                                <li className='mr-6 text-white'>Follow us</li>
                                <li className='mr-4'>
                                    <Link href="https://www.facebook.com/profile.php?id=100089558829752&mibextid=LQQJ4d" target='_blank' rel='noreferrer' className='text-primary text-xl'>
                                        <FontAwesomeIcon icon={faFacebook} className="text-white" />
                                    </Link>
                                </li>
                                <li className='mr-4'>
                                    <Link href="https://instagram.com/ai.businessmen?igshid=OGQ5ZDc2ODk2ZA==" target='_blank' rel='noreferrer' className='text-primary text-xl'>
                                        <FontAwesomeIcon icon={faInstagram} className="text-white" />
                                    </Link>
                                </li>
                                <li className='mr-4'>
                                    <Link href="#" target='_blank' rel='noreferrer' className='text-primary text-xl'>
                                        <FontAwesomeIcon icon={faWhatsapp} className="text-white" />
                                    </Link>
                                </li>
                                <li className='mr-4'>
                                    <Link href="#" target='_blank' rel='noreferrer' className='text-primary text-xl'>
                                        <FontAwesomeIcon icon={faTwitter} className="text-white" />
                                    </Link>
                                </li>
                            </ul>
                            {showTopBtn && (
                                <Link href="#" className='text-white sm:text-4xl text-2xl sm:right-[50px] right-[20px] cursor-pointer' onClick={goToTop}>
                                    {/* <i className='text-[22px] pb-4 lg:pb-0 fat fa-circle-arrow-up'></i> */}
                                    <FontAwesomeIcon icon={faArrowCircleUp} className="text-[22px] pb-4 lg:pb-0" />
                                </Link>
                            )}
                        </div>
                        <div className='lg:w-1/2 lg:text-right hidden'>
                            <ul className='flex lg:justify-end items-center lg:mt-0 mt-6'>
                                <li className='hidden mr-3'>
                                    <Link href="#" className='text-primary text-xl'>
                                        <i className='fas fa-globe'></i>
                                    </Link>
                                </li>
                                <li className='hidden mr-3'>
                                    <select className='py-2 px-4 rounded'>
                                        <option>English</option>
                                        <option>हिंदी</option>
                                    </select>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='sm:flex text-white text-sm'>
                        <div className='sm:w-1/3 sm:mb-0 mb-6'>
                            <h4 className='font-medium text-secondary text-[16px] lg:text-xl mb-3'>
                                Contact us
                            </h4>
                            <ul
                                className='footerLink max-w-[300px]'
                            >
                                <li className='mb-2'>
                                    <p>Association of International Businessmen
                                    SD-154, Sector-45, Noida-201303,</p>
                                     UP, India
                                </li>
                                <li className='mb-2'>
                                    Mobile : +91-8920962397
                                </li>
                                <li className='mb-2'>
                                    Email: info@aibusinessmen.com
                                </li>
                            </ul>
                        </div>
                        <div className='sm:w-1/3 sm:mb-0 mb-6'>
                            <h4 className='font-medium text-secondary text-[16px] lg:text-xl mb-3' >
                                Quick Links
                            </h4>
                            <ul
                                className='footerLink'
                            >
                                <li className='mb-2'>
                                    <Link href="/" target='_blank' className='text-white text-sm'>
                                        Home
                                    </Link>
                                </li>
                                <li className='mb-2'>
                                    <Link href="/about" target='_blank' className='text-white text-sm'>
                                        About
                                    </Link>
                                </li>
                                <li className='mb-2'>
                                    <Link href="/services/businesss-information-services" target='_blank' className='text-white text-sm'>
                                        Services
                                    </Link>
                                </li>
                                <li className='mb-2'>
                                    <Link href="/international/international-business-news" target='_blank' className='text-white text-sm'>
                                        International
                                    </Link>
                                </li>
                                <li className='mb-2'>
                                    <Link href="/membership" target='_blank' className='text-white text-sm'>
                                        Membership
                                    </Link>
                                </li>
                                <li className='mb-2'>
                                    <Link href="/publication/newsletter" target='_blank' className='text-white text-sm'>
                                        Publication
                                    </Link>
                                </li>
                                <li className='mb-2'>
                                    <Link href="/contact" target='_blank' className='text-white text-sm'>
                                        Contact
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className='sm:w-1/3'>
                            <h4 className='font-medium text-secondary text-[16px] lg:text-xl mb-3'>
                                Policy
                            </h4>
                            <ul
                                className='footerLink'
                            >
                                <li className='mb-2'>
                                    <Link href="#" target='_blank' className='text-white text-sm'>
                                        Privacy Policy
                                    </Link>
                                </li>
                                <li className='mb-2'>
                                    <Link href="#" target='_blank' className='text-white text-sm'>
                                        Terms & Conditions
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='border-t mt-9'></div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
