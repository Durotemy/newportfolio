import React, { useEffect, useState } from 'react';
import Screen from "./Screen";
import logoprofile from "../assets/logoprofile.png";
import { Link } from 'react-scroll';
import { CiMenuFries } from "react-icons/ci";
import { MdOutlineCancel } from "react-icons/md";




const NavBar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div>
            <Screen>
                <div className="flex w-full justify-between h-20 items-center gap-2 text-white ">
                    <div className="flex items-center gap-2 w-2/12">
                        <img src={logoprofile} alt="logo" />
                        <span className="text-basetext">Durotimi.</span>
                    </div>
                    <div className="hidden md:flex mx-auto items-center lg:justify-center md:justify-end h-auto w-8/12 md:w-11/12 ">
                        {header.map((e, index) => (
                            <Link
                                to={e.ref}
                                key={index}
                                smooth={true}
                                duration={1000}
                                className="cursor-pointer mx-4"
                            // onClick={() => handlePress(sections[e.ref])}
                            >
                                <p className="text-basetext hover:mt-1 duration-200">
                                    {e.navText}
                                </p>
                            </Link>
                        ))}
                    </div>
                    <div className="flex items-center cursor-pointer lg:w-2/12 justify-end">
                        <p className="hidden md:hidden lg:flex border-[1px] border-[#242323] justify-end px-4 py-1 rounded text-basetext cursor-pointer hover:mt-1 duration-200">
                            Resume
                        </p>
                    </div>
                    <div className="md:hidden flex items-center cursor-pointer w-2/12 justify-end">
                        <button onClick={toggleMenu}>
                            {isMenuOpen ? <MdOutlineCancel size={24} /> : <CiMenuFries size={24} />}
                        </button>
                    </div>
                </div>
                {isMenuOpen && (
                    <div className="md:hidden lg:hidden  flex flex-col text-white items-center mt-4 shadow-lg border rounded p-1">
                        {header.map((e, index) => (
                            <Link
                                to={e.ref}
                                key={index}
                                smooth={true}
                                duration={1000}
                                className="cursor-pointer mx-4 my-2"
                            >
                                <p className="text-basetext ">{e.navText}</p>
                            </Link>
                        ))}
                        <p className="border-[#242323] border-[1px] flex justify-end px-4 py-1 rounded text-basetext cursor-pointer mt-2">
                            Resume
                        </p>
                    </div>
                )}
            </Screen>
        </div>
    );
}

export default NavBar;

const header = [
    {
        ref: 'service',
        navText: 'Service'

    },
    {
        ref: 'project',
        navText: 'Project'
    },
    {
        ref: 'experience',
        navText: 'Experience'
    },
    {
        ref: 'testimonial',
        navText: 'Testimonial'
    },
    {
        ref: 'education',
        navText: 'Education'
    },
    // {
    //     ref: 'reachout',
    //     navText: 'Reachout'
    // }
];
