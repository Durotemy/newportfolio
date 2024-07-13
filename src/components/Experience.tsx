import { useState } from 'react'
import { CgLoadbar } from 'react-icons/cg'
import Screen from './Screen';

const Experience = () => {

    interface WorkExperience {
        role: string;
        company: string;
        location: string;
        duration: string;
        employmentType: string;
        skills: string[];
        responsibilities: string[];
    }

    const workExperiences: { [key: string]: WorkExperience } = {
        Mephalti : {
            role: 'Frontend Engineer',
            company: 'Mephalti',
            location: 'Lagos, Nigeria',
            duration: 'June 2023 - Present',
            employmentType: '',
            skills: ['Html', 'Css', 'React-Native', 'React'],
            responsibilities: [
                'Developed a mobile application for a client',
                'Developed a website for a client',
            ]
        },
        LifeBank: {
            role: 'Frontend Engineer',
            company: 'LifeBank.',
            location: 'Lagos, Nigeria',
            duration: 'March 2023 - Present',
            employmentType: 'Full-time',
            skills: ['Html', 'Css', 'React', 'React-Native'],

            responsibilities: [
                'Developed enterprise-level applications for internal use.',
                'Improving overall Web Application performance for mobile users.',
                'Adding Multilple features on the Web Application, reducing bugs as well.',
                'Building new Application based on the companies demand',
            ]
        },
        SYTCC: {
            role: 'Frontend Engineer',
            company: 'SYTCC',
            location: 'London, England, United Kingdom(Remote)',
            duration: 'Nov 2022 - Mar  2023',
            employmentType: 'Full-time',
            skills: ['Html', 'Css', 'NextJs', 'React'],
            responsibilities: [
                'Worked with team members to build an Automated Teller Machine(ATM) card printing machine'
            ]
        },
        Decagon: {
            role: 'Full Stack Engineer',
            company: 'Decagon',
            location: 'Lagos, Nigeria',
            duration: 'Jan 2022 - Aug 2022',
            employmentType: 'Full-time',
            skills: ['JavaScript', 'React', 'Node.js'],
            responsibilities: [
                'Partner with team members in several project such as Job-search Application',
            ]
        },
        InnovationHub: {
            role: 'Frontend Engineer',
            company: 'Edo-State Government',
            location: 'Edo state, Nigeria',
            duration: 'Jan 2021 - Dec 2021',
            employmentType: 'Full-time',
            skills: ['Html', 'Css', 'React'],
            responsibilities: [
                'Picked up some minor frontend task',
                'Taught kids on basic programming skills',
                'Taught Government Offical on basic computer skill'
            ]
        }
    };

    const [selectedCompany, setSelectedCompany] = useState('LifeBank');

    const handleCompanyClick = (company: string) => {
        setSelectedCompany(company);
    };

    return (
        <div className="bg-[#111111] mb-72 h-[400px]" id="experience">
            <Screen>
                <div className="mt-8 ">
                    <div>
                        <div className='flex flex-row items-center' >
                            <span className="text-[#656D72]">
                                <CgLoadbar size={30} />
                            </span>
                            <p className="text-[#656D72]">M Y    <span className="ml-2">C A R E E R <span className="ml-2"> P A T H</span>  </span></p>
                        </div>
                        <span className="text-[#CAD5DC] text-1xl leading-loose text-2xl"> Work Experience</span>
                    </div>

                </div>
                <div className="mx-auto flex w-full ">
                    <div className="flex w-full lg:w-full mx-auto h-full lg:flex-row flex-col lg:justify-between sm:justify-between  md:flex-row justify-between py-4  text-white">
                        <div className="lg:w-3/12  w-full my-4 lg:my-0 mx-1">
                            <ul className="lg:space-y-4 lg:flex lg:flex-col  overflow-scroll w-full grid grid-rows-2 grid-flow-col">
                                {Object.keys(workExperiences)?.map((company) => (
                                    <li key={company} className="lg:text-left flex  mx-4">
                                        <button
                                            onClick={() => handleCompanyClick(company)}
                                            className={`text-lg text-left lg:px-2 focus:outline-none h-[35px] lg:w-[200px] w-[100px] ${selectedCompany === company ? 'bg-dark rounded text-[#5750a2] ' : 'text-white'
                                                }`}
                                        >
                                            {company.charAt(0).toUpperCase() + company.slice(1)}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="flex lg:justify-end  lg:w-10/12 w-full">
                            {selectedCompany && (
                                <div className="lg:px-4 px-1 rounded overflow-auto h-[300px] mt-2 shadow-md justify-end lg:w-8/12 w-full transition-opacity duration-500 ease-in-out opacity-100">
                                    <div>
                                        <div className="flex flex-row items-center">
                                            <p className="">{workExperiences[selectedCompany]?.role}, </p>
                                            <p className="ml-2"> {workExperiences[selectedCompany]?.company}</p>
                                        </div>
                                        <p>{workExperiences[selectedCompany]?.location}</p>
                                        <p>{workExperiences[selectedCompany]?.duration}</p>
                                        <div className="flex space-x-2 mt-2">
                                            {workExperiences[selectedCompany]?.skills?.map((skill, index) => (
                                                <span key={index} className="border-[#242323] border-[1px] text-sm px-2 py-1 rounded">
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                        <ul className="mt-4 space-y-2">
                                            <hr className="border-0.1 border-white" />
                                            {workExperiences[selectedCompany]?.responsibilities?.map((responsibility, index) => (
                                                <li key={index} className="list-disc list-inside text-md">
                                                    {responsibility}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            )}

                        </div>
                    </div>
                </div>
            </Screen>
        </div>
    )
}

export default Experience