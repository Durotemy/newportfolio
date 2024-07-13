import { CgLoadbar } from "react-icons/cg";
import photo from '../assets/photo.png';

import Screen from "./Screen"

const Testimonial = () => {
    return (
        <div className="bg-[#111111] mb-8" id="testimonial">
            <Screen>
                <div className="">
                    <div className="mt-40">
                        <div className='flex flex-row items-center' >
                            <span className="text-[#656D72]">
                                <CgLoadbar size={30} />
                            </span>
                            <p className="text-[#656D72] ml-2"> Recommendation </p>
                        </div>
                        <span className="text-[#CAD5DC] text-1xl leading-loose text-2xl"> Testimonial</span>
                    </div>

                    <div className="w-full flex lg:flex-row flex-col justify-between gap-8 mb-32">
                        {data?.map((e) => (
                            <div className="lg:w-4/12 justify-center items-center w-full h-[260px] flex-col bg-[#0d0d0d] rounded relative mx-auto">
                                <div className="relative bottom-5  flex justify-center mx-auto">
                                    <img src={photo} alt="photo_recommendation" className="h-20 w-20 rounded-[50%]"/>
                                </div>
                                <div className="leading-7 p-2 text-white text-sm">
                                    {e.testimony}
                                </div>
                                <div className="text-white px-2 mb-2">
                                    {e.name}
                                </div>
                                <div className='bg-[#111111] absolute left-1 bottom-2 p-1 rounded text-white w-[220px] '>
                                    {e.position}
                                </div>
                            </div>
                        ))}

                    </div>
                </div>

            </Screen>
        </div>
    )
}

export default Testimonial;


const data = [
    {
        name: 'Charlse Odili',
        position: 'Senior Software Engineer',
        testimony: 'Durotimi is a passionate, driven, and people-centric Engineer. He is always committed to the task at hand and will go the extra mile to collaborate and get it delivered.'
    },
    {
        name: 'Honor chukwuka',
        position: 'Frontend Engineer',
        testimony: 'It’s rare that you come across a talent like Durotimi. I had the pleasure of working with him on various projects, I was particularly impressed with durotimi’s code quality'
    },
    {
        name: 'Samson Osiomwan',
        position: "Senior Software Engineer",
        testimony: ' Durotimi would be an asset to any team. He earns my highest recommendation'

    }
]