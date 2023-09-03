'use client'
import { NextComponentType } from 'next'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import aibLogo from '../images/aib-logo.png'
import indiaTheme from '../images/g20-india-2.png'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faXmark, faBars, } from '@fortawesome/free-solid-svg-icons'
import HeaderEvents from './HeaderEvents'

const Header: NextComponentType = () => {
    const [showMenu, setShowMenu] = useState(false);
    const [scroll, setScroll] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY > 100);
        });
    }, []);
  
    return (
        <header className='bg-primary'>
            <div id="navbar" className={`${scroll ? "border-b border-b-[#dedede] w-full top-0 z-[99] header-fixed transition-all ease-in-out" : "border-b border-b-[#dedede] w-full top-0 z-[99] transition-all ease-in-out"}`}>
                <div className="innerDiv mx-auto">
                    <div className="">
                        <div className='flex items-center justify-between py-2'>
                            <a className="inline-block -ml-1">
                                <Image unoptimized src={aibLogo} alt="" className="w-[100px] lg:w-[140px] invert brightness-0" />
                            </a>
                            <Image unoptimized src={indiaTheme} alt="" className="w-[100px] lg:w-[140px]" />
                        </div>
                    </div>
                </div>
                <div className="bg-[#f1f3f4] py-2">
                    <div className="innerDiv">
                        <div className="flex items-center md:flex-wrap lg:flex-nowrap justify-between">
                            <div className="text-xs md:text-sm flex">
                                <span className="text-secondary font-[500]">Events:</span>
                                <div className="ml-2">
                                    <HeaderEvents />
                                </div>
                            </div>
                            <ul className="lg:flex hidden items-center gap-x-4 text-primary text-sm">
                                <li>
                                    <Link className="text-secondary pl-[2px] pr-1 inline-block cursor-pointer" href="/">
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link className="px-1 inline-block cursor-pointer" href="/about">
                                        About
                                    </Link>
                                </li>
                                <li className="px-2 py-2 group relative cursor-pointer">
                                    Services
                                    <div
                                        className={
                                            `hidden hover:block group-hover:block bg-white absolute top-[33px] left-2 text-base z-10 float-left py-2 list-none text-left rounded shadow-lg mt-1`
                                        }
                                        style={{ minWidth: "12rem" }}
                                    >
                                        <Link
                                            href="/services/business-information-services"
                                            className={
                                                "text-base py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-slate-700"
                                            }
                                    
                                        >
                                            Business Information Services
                                        </Link>
                                        <Link
                                            href="/services/aib-council-of-arbitration"
                                            className={
                                                "text-base py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-slate-700"
                                            }
                                            
                                        >
                                            AIB Council of Arbitration
                                        </Link>
                                        <Link
                                            href="/services/investment-matchmaking"
                                            className={
                                                "text-base py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-slate-700"
                                            }
                                            
                                        >
                                            Investment Matchmaking
                                        </Link>
                                        <Link
                                            href="/services/venue-booking"
                                            className={
                                                "text-base py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-slate-700"
                                            }
                                            
                                        >
                                            Venue Booking
                                        </Link>
                                        <Link
                                            href="/services/visa-recommendation"
                                            className={
                                                "text-base py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-slate-700"
                                            }
                                            
                                        >
                                            Visa Recommendation
                                        </Link>
                                    </div>
                                </li>
                                <li className="px-2 py-2 group relative cursor-pointer">
                                    Sectors
                                    <div
                                        className={
                                            `hidden hover:block group-hover:block bg-white absolute top-[33px] left-2 text-base z-10 float-left py-2 list-none text-left rounded shadow-lg mt-1`
                                        }
                                        style={{ minWidth: "12rem" }}
                                    >
                                        <div className="flex gap-x-10">
                                            <div>
                                                <Link
                                                    href="/services/business-information-services"
                                                    className={
                                                        "text-base py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-slate-700"
                                                    }
                                                // 
                                                >
                                                    Education
                                                </Link>
                                                <Link
                                                    href="/services/certificate-of-origin"
                                                    className={
                                                        "text-base py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-slate-700"
                                                    }
                                                // 
                                                >
                                                    Logistics
                                                </Link>
                                                <Link
                                                    href="#"
                                                    className={
                                                        "text-base py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-slate-700"
                                                    }
                                                    
                                                >
                                                    Supply Chain
                                                </Link>
                                                <Link
                                                    href="#"
                                                    className={
                                                        "text-base py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-slate-700"
                                                    }
                                                    
                                                >
                                                    Tourism
                                                </Link>
                                                <Link
                                                    href="/services/venue-booking"
                                                    className={
                                                        "text-base py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-slate-700"
                                                    }
                                                    
                                                >
                                                    IT
                                                </Link>
                                                <Link
                                                    href="/services/visa-recommendation"
                                                    className={
                                                        "text-base py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-slate-700"
                                                    }
                                                    
                                                >
                                                    ITES
                                                </Link>

                                                <Link
                                                    href="/services/visa-recommendation"
                                                    className={
                                                        "text-base py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-slate-700"
                                                    }
                                                    
                                                >
                                                    Startups
                                                </Link>
                                                <Link
                                                    href="/services/visa-recommendation"
                                                    className={
                                                        "text-base py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-slate-700"
                                                    }
                                                    
                                                >
                                                    PSUs
                                                </Link>
                                            </div>
                                            <div>
                                                <Link
                                                    href="/services/visa-recommendation"
                                                    className={
                                                        "text-base py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-slate-700"
                                                    }
                                                    
                                                >
                                                    Tea
                                                </Link>
                                                <Link
                                                    href="/services/visa-recommendation"
                                                    className={
                                                        "text-base py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-slate-700"
                                                    }
                                                    
                                                >
                                                    Startups
                                                </Link>
                                                <Link
                                                    href="/services/visa-recommendation"
                                                    className={
                                                        "text-base py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-slate-700"
                                                    }
                                                    
                                                >
                                                    Chemical
                                                </Link>
                                                <Link
                                                    href="/services/visa-recommendation"
                                                    className={
                                                        "text-base py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-slate-700"
                                                    }
                                                    
                                                >
                                                    Health
                                                </Link>

                                                <Link
                                                    href="/services/visa-recommendation"
                                                    className={
                                                        "text-base py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-slate-700"
                                                    }
                                                    
                                                >
                                                    Startups
                                                </Link>
                                                <Link
                                                    href="/services/visa-recommendation"
                                                    className={
                                                        "text-base py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-slate-700"
                                                    }
                                                    
                                                >
                                                    Textile
                                                </Link>
                                                <Link
                                                    href="/services/visa-recommendation"
                                                    className={
                                                        "text-base py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-slate-700"
                                                    }
                                                    
                                                >
                                                    Jute
                                                </Link>
                                                <Link
                                                    href="/services/visa-recommendation"
                                                    className={
                                                        "text-base py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-slate-700"
                                                    }
                                                    
                                                >
                                                    Young Leaders
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="px-2 py-2 group relative cursor-pointer">
                                    States
                                    <div
                                        className={
                                            `hidden hover:block group-hover:block bg-white absolute top-[33px] left-2 text-base z-10 float-left py-2 list-none text-left rounded shadow-lg mt-1`
                                        }
                                        style={{ minWidth: "12rem" }}
                                    >
                                        <Link
                                            href="/services/business-information-services"
                                            className={
                                                "text-base py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-slate-700"
                                            }
                                        // 
                                        >
                                            Delhi
                                        </Link>
                                        <Link
                                            href="/services/certificate-of-origin"
                                            className={
                                                "text-base py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-slate-700"
                                            }
                                        // 
                                        >
                                            Kolkata
                                        </Link>
                                        <Link
                                            href="/services/aib-council-of-arbitration"
                                            className={
                                                "text-base py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-slate-700"
                                            }
                                            
                                        >
                                            Bangalore
                                        </Link>
                                        <Link
                                            href="/services/investment-matchmaking"
                                            className={
                                                "text-base py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-slate-700"
                                            }
                                            
                                        >
                                            Hyderabad
                                        </Link>
                                        <Link
                                            href="/services/venue-booking"
                                            className={
                                                "text-base py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-slate-700"
                                            }
                                            
                                        >
                                            Kochi
                                        </Link>
                                        <Link
                                            href="/services/visa-recommendation"
                                            className={
                                                "text-base py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-slate-700"
                                            }
                                            
                                        >
                                            Chennai
                                        </Link>
                                        <Link
                                            href="/services/visa-recommendation"
                                            className={
                                                "text-base py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-slate-700"
                                            }
                                            
                                        >
                                            Mumbai
                                        </Link>
                                        <Link
                                            href="/services/visa-recommendation"
                                            className={
                                                "text-base py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-slate-700"
                                            }
                                            
                                        >
                                            Pune
                                        </Link>
                                    </div>
                                </li>
                                <li className="px-2 py-2 group relative cursor-pointer">
                                    International
                                    <div
                                        className={
                                            `hidden hover:block group-hover:block bg-white absolute top-[33px] left-2 text-base z-10 float-left py-2 list-none text-left rounded shadow-lg mt-1`
                                        }
                                        style={{ minWidth: "12rem" }}
                                    >
                                        <Link
                                            href="/international/international-business-news"
                                            className={
                                                "text-base py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-slate-700"
                                            }
                                        // 
                                        >
                                            International Business News
                                        </Link>
                                    </div>
                                </li>
                                <li className="px-2 py-2 group relative cursor-pointer">
                                    Membership
                                    <div
                                        className={
                                            `hidden hover:block group-hover:block bg-white absolute top-[33px] left-2 text-base z-10 float-left py-2 list-none text-left rounded shadow-lg mt-1`
                                        }
                                        style={{ minWidth: "12rem" }}
                                    >
                                        <Link
                                            href="/membership"
                                            className={
                                                "text-base py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-slate-700"
                                            }
                                        // 
                                        >
                                            AIB Membership
                                        </Link>
                                        <Link
                                            href="/membership/charges"
                                            className={
                                                "text-base py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-slate-700"
                                            }
                                        // 
                                        >
                                            Membership Charges
                                        </Link>
                                        <Link
                                            href="/membership/forms"
                                            className={
                                                "text-base py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-slate-700"
                                            }
                                            
                                        >
                                            Membership Forms
                                        </Link>
                                    </div>
                                </li>
                                <li className="px-2 py-2 group relative cursor-pointer">
                                    Publication
                                    <div
                                        className={
                                            `hidden hover:block group-hover:block bg-white absolute top-[33px] left-2 text-base z-10 float-left py-2 list-none text-left rounded shadow-lg mt-1`
                                        }
                                        style={{ minWidth: "12rem" }}
                                    >
                                        <Link
                                            href="/publication/newsletter"
                                            className={
                                                "text-base py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-slate-700"
                                            }
                                        // 
                                        >
                                            Newsletter
                                        </Link>
                                    </div>
                                </li>
                                <li>
                                    <Link className="px-1 inline-block cursor-pointer" href="/contact">
                                        Contact
                                    </Link>
                                </li>
                            </ul>
                            <a
                                className="inline-block lg:hidden cursor-pointer menu-icon"
                                onClick={() => {
                                    setShowMenu(!showMenu);
                                }}
                            >
                                <FontAwesomeIcon icon={faBars} className="text-[22px] sm:text-[28px] text-primary" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className={`mobile-menu bg-primary pt-24 transform transition-transform duration-300 ease-in-out ${showMenu ? " fixed effect-code inset-0 w-full sm:h-full h-screen z-[9999] translate-x-0 py-8 sm:overflow-y-visible overflow-y-scroll" : "py-8 fixed inset-0 w-full sm:h-full h-screen z-[9999] effect-code translate-x-full sm:overflow-y-visible overflow-y-scroll"}`}>
                <a
                    className="cursor-pointer text-white absolute top-5 right-4"
                    onClick={() => {
                        setShowMenu(!showMenu);
                    }}
                >
                    <FontAwesomeIcon icon={faXmark} className="text-[24px] sm:text-[30px]" />
                </a>

                <ul className="flex flex-col justify-center items-center gap-y-3 text-[19px] text-white">
                    <li>
                        <Link className="text-secondary pl-[2px] pr-1 inline-block cursor-pointer" href="/">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link className="px-1 inline-block cursor-pointer" href="/about">
                            About
                        </Link>
                    </li>
                    <li className="px-2 py-2 group relative cursor-pointer">
                        Services
                        <div
                            className={
                                `hidden hover:block group-hover:block bg-white absolute top-[33px] left-2 text-base z-10 float-left py-2 list-none text-left rounded shadow-lg mt-1`
                            }
                            style={{ minWidth: "12rem" }}
                        >
                            <Link
                                href="/services/business-information-services"
                                className={
                                    "text-base py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-slate-700"
                                }
                            // 
                            >
                                Business Information Services
                            </Link>
                            <Link
                                href="/services/certificate-of-origin"
                                className={
                                    "text-base py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-slate-700"
                                }
                            // 
                            >
                                Certificate of Origin
                            </Link>
                            <Link
                                href="/services/aib-council-of-arbitration"
                                className={
                                    "text-base py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-slate-700"
                                }
                                
                            >
                                AIB Council of Arbitration
                            </Link>
                            <Link
                                href="/services/investment-matchmaking"
                                className={
                                    "text-base py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-slate-700"
                                }
                                
                            >
                                Investment Matchmaking
                            </Link>
                            <Link
                                href="/services/venue-booking"
                                className={
                                    "text-base py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-slate-700"
                                }
                                
                            >
                                Venue Booking
                            </Link>
                            <Link
                                href="/services/visa-recommendation"
                                className={
                                    "text-base py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-slate-700"
                                }
                                
                            >
                                Visa Recommendation
                            </Link>
                        </div>
                    </li>
                    <li className="px-2 py-2 group relative cursor-pointer">
                        States
                        <div
                            className={
                                `hidden hover:block group-hover:block bg-white absolute top-[33px] left-2 text-base z-10 float-left py-2 list-none text-left rounded shadow-lg mt-1`
                            }
                            style={{ minWidth: "12rem" }}
                        >
                            <Link
                                href="/services/business-information-services"
                                className={
                                    "text-base py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-slate-700"
                                }
                            // 
                            >
                                Delhi
                            </Link>
                            <Link
                                href="/services/certificate-of-origin"
                                className={
                                    "text-base py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-slate-700"
                                }
                            // 
                            >
                                Kolkata
                            </Link>
                            <Link
                                href="/services/aib-council-of-arbitration"
                                className={
                                    "text-base py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-slate-700"
                                }
                                
                            >
                                Bangalore
                            </Link>
                            <Link
                                href="/services/investment-matchmaking"
                                className={
                                    "text-base py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-slate-700"
                                }
                                
                            >
                                Hyderabad
                            </Link>
                            <Link
                                href="/services/venue-booking"
                                className={
                                    "text-base py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-slate-700"
                                }
                                
                            >
                                Kochi
                            </Link>
                            <Link
                                href="/services/visa-recommendation"
                                className={
                                    "text-base py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-slate-700"
                                }
                                
                            >
                                Chennai
                            </Link>
                            <Link
                                href="/services/visa-recommendation"
                                className={
                                    "text-base py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-slate-700"
                                }
                                
                            >
                                Mumbai
                            </Link>
                            <Link
                                href="/services/visa-recommendation"
                                className={
                                    "text-base py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-slate-700"
                                }
                                
                            >
                                Pune
                            </Link>
                        </div>
                    </li>
                    <li className="px-2 py-2 group relative cursor-pointer">
                        International
                        <div
                            className={
                                `hidden hover:block group-hover:block bg-white absolute top-[33px] left-2 text-base z-10 float-left py-2 list-none text-left rounded shadow-lg mt-1`
                            }
                            style={{ minWidth: "12rem" }}
                        >
                            <Link
                                href="/international/international-business-news"
                                className={
                                    "text-base py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-slate-700"
                                }
                            // 
                            >
                                International Business News
                            </Link>
                        </div>
                    </li>
                    <li className="px-2 py-2 group relative cursor-pointer">
                        Membership
                        <div
                            className={
                                `hidden hover:block group-hover:block bg-white absolute top-[33px] left-2 text-base z-10 float-left py-2 list-none text-left rounded shadow-lg mt-1`
                            }
                            style={{ minWidth: "12rem" }}
                        >
                            <Link
                                href="/membership"
                                className={
                                    "text-base py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-slate-700"
                                }
                            // 
                            >
                                AIB Membership
                            </Link>
                            <Link
                                href="/membership/charges"
                                className={
                                    "text-base py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-slate-700"
                                }
                            // 
                            >
                                Membership Charges
                            </Link>
                            <Link
                                href="/membership/forms"
                                className={
                                    "text-base py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-slate-700"
                                }
                                
                            >
                                Membership Forms
                            </Link>
                        </div>
                    </li>
                    <li className="px-2 py-2 group relative cursor-pointer">
                        Publication
                        <div
                            className={
                                `hidden hover:block group-hover:block bg-white absolute top-[33px] left-2 text-base z-10 float-left py-2 list-none text-left rounded shadow-lg mt-1`
                            }
                            style={{ minWidth: "12rem" }}
                        >
                            <Link
                                href="/publication/newsletter"
                                className={
                                    "text-base py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-slate-700"
                                }
                            // 
                            >
                                Newsletter
                            </Link>
                        </div>
                    </li>
                    <li>
                        <Link className="px-1 inline-block cursor-pointer" href="/contact">
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default Header

