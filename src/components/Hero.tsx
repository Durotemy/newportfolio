import React from 'react'
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";



import profilePix from "../assets/duro.jpeg"
import Screen from './Screen';


const Hero = () => {
    return (

        <div className=" lg:mt-28 mt-14">
            <Screen>
                <div className="flex lg:flex-row sm:flex-col flex-col lg:justify-between md:justify-center justify-center items-center  w-full mx-auto ">
                    <div className="lg:w-6/12 text-white w-full lg:md-0 md:mb-0 mb-10">
                        <p className="text-4xl text-[#5750a2] font-bold mb-2"><span className="text-[#232E35]"></span>Hi, I am<span className="text-[#232E35]"> Durotimi  Emmanuel.</span></p>
                        <p className="leading-9 text-xl">
                            Creative Front-end engineer with 3+ years experience in startup companies.<br /> Proficient in
                            Javascript , Typescript , React , React-Native
                        </p>
                        <div className="flex gap-8 mt-8">
                            {link.map((ele) => {
                                return (
                                    <div>
                                        {ele.link}
                                    </div>
                                )
                            })}

                        </div>
                    </div>
                    <div className="w-full lg:w-6/12 sm:w-full flex lg:ml-auto md:mx-auto  md:justify-center justify-center lg:justify-end relative md:w-full">
                        <div className="bg-[#5750a2] w-[320px] lg:h-[450px] h-[420px] absolute rounded-lg top-0 lg:right-35  left:20 transform rotate-6"></div>
                        <div className="relative p-2">
                            <img src={profilePix} alt="profile" className="lg:w-[320px] lg:h-[450px] h-[420px] rounded-lg relative z-10 mr-10" />
                        </div>
                    </div>
                </div>
            </Screen >
        </div >

    )
}

export default Hero;

const link = [
    {
        link: <FaGithub size={32} />,
        linktext: 'Github'
    },
    {
        link: <FaLinkedin size={32} />,
        linktext: 'Linkedin'
    },
    {
        link: <FaSquareTwitter size={32} />,
        linktext: 'Twitter'
    }
]