import React from 'react';
import Screen from './Screen';

const Education: React.FC = () => {
    return (
        <Screen>
            <div className="bg-[#0d0d0d] text-white ">
                <div className='w-full'>


                <h2 className="text-3xl font-bold mb-8">Education & Skills</h2>
                <div className="flex  items-center w-full flex-col md:flex-row justify-between">
                    <div className="relative space-y-12 lg:w-6/12 w-full">

                        <TimelineItem
                            institution="University of Benin"
                            degree="Bachelor's degree - Computer Science"
                            period="2011 - 2016"
                        />

                        <div className="absolute left-2 bottom-1 w-[0.2px] h-[73px] bg-[#1b1b1b]"></div>
                    </div>
                    <div className="mt-8 md:mt-0 md:ml-16 lg:w-4/12 w-full md:flex-grow">
                        <p className="text-[#5a6165]">For 3 years, I have been continuously learning in the field of front-end and experimenting with new technologies and frameworks, and here you can see a summary of my skills.</p>
                        <div className="mt-4">
                            <SkillBar skill="JavaScript" level="90%" />
                            <SkillBar skill="React" level="75%" />
                            <SkillBar skill="React-Native" level="60%" />
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </Screen>
    );
};

type TimelineItemProps = {
    institution: string;
    degree: string;
    period: string;
};

const TimelineItem: React.FC<TimelineItemProps> = ({ institution, degree, period }) => {
    return (
        <div className="relative pl-12">
            <div className="absolute left-0 top-0 w-4 h-4 rounded-full bg-[#1b1b1b]"></div>
            <h3 className="text-xl font-semibold text-[#5a6165]">{institution}</h3>
            <p className='text-[#5a6165]'>{degree}</p>
            <p className="text-[#5a6165]">{period}</p>
        </div>
    );
};

type SkillBarProps = {
    skill: string;
    level: string;
};

const SkillBar: React.FC<SkillBarProps> = ({ skill, level }) => {
    return (
        <div className="mb-8">
            <span className="block text-sm font-medium">{skill}</span>
            <div className="w-10/12 bg-gray-800 h-2 rounded">
                <div className="bg-purple-600 h-2 rounded" style={{ width: level }}></div>
            </div>
        </div>
    );
};

export default Education;
