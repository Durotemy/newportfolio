import React from 'react';
import { CgLoadbar } from "react-icons/cg";
import { GiSatelliteCommunication } from "react-icons/gi";
import { CiMobile3 } from "react-icons/ci";
import { PiMonitorThin } from "react-icons/pi";
import Screen from './Screen';





const Service = () => {
    return (
        <div className="bg-[#111111] flex items-center flex-col">
            <Screen>
                <div className="flex items-center flex-col">


                    <div className="flex items-center mt-4">
                        <span className=" text-[#656D72]">
                            <CgLoadbar size={30} />
                        </span>
                        <span className="text-[#656D72]  text-1xl leading-loose"> S E R V I C E S</span>

                    </div>
                    <span className="text-white leading-loose text-2xl mb-8">Specialized in</span>

                    <div className="mb-8 flex lg:flex-row gap-20 flex-col justify-center mx-auto w-full ">
                        {service.map((e) => {
                            return (
                                <div className="bg-dark rounded flex flex-col items-center justify-center lg:w-4/12 w-[100%] mx-auto my-auto max-h-[250px] min-h-[270px] py-4">
                                    <p className="bg-[#111111] rounded p-2 mb-2 text-[#5750a2]">{e.icon}</p>
                                    <p className=" text-xl font-bold mb-4 text-[#5750a2]">{e.title}</p>
                                    <p className="text-center text-white text-basetext px-4 mb-2 leading-6">{e.text}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </Screen>

        </div>
    )
}

export default Service;


const service = [
    {
        icon: <CiMobile3 size={50} />,
        title: 'Mobile Application',
        text: 'Standard designing, building, and implementing your mobile applications with documentation.'
    },
    {
        icon: <PiMonitorThin size={50} />,
        title: 'Web Development',
        text: 'Design, build, and maintain high-performing websites that reflect your brand identity'
    },
    {
        icon: <GiSatelliteCommunication size={50} />,
        title: 'Leadership and Communication',
        text: 'I foster clear communication between you and your team, ensuring everyone is aligned with the project goals'

    }
]