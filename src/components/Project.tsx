import { useEffect, useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import slider from "../constant/data";

import { CgLoadbar } from "react-icons/cg";
import Screen from "./Screen";


const Project = () => {
    const slides = slider;
    const [curr, setCurr] = useState(0);
    const [numVisibleSlides, setNumVisibleSlides] = useState(1);


    useEffect(() => {
        const updateNumVisibleSlides = () => {
            const screenWidth = window.innerWidth;
            if (screenWidth >= 1024) {
                setNumVisibleSlides(3);
            } else if (screenWidth >= 768) {
                setNumVisibleSlides(2);
            } else {
                setNumVisibleSlides(1);
            }
        };

        updateNumVisibleSlides();
        window.addEventListener("resize", updateNumVisibleSlides);

        return () => {
            window.removeEventListener("resize", updateNumVisibleSlides);
        };
    }, []);

    const prev = () => {
        const maxIndex = slides.length - numVisibleSlides;
        setCurr((curr) => (curr === 0 ? maxIndex : curr - 1));
    };

    const next = () => {
        const maxIndex = slides.length - numVisibleSlides;
        setCurr((curr) => (curr >= maxIndex ? 0 : curr + 1));
    };

    const dots = Array.from({ length: slides.length - numVisibleSlides + 1 });


    return (
        <div className="bg-dark mb-8 relative">
            <Screen>
                <div className='flex flex-row items-center' >
                    <span className="text-[#656D72]">
                        <CgLoadbar size={30} />
                    </span>
                    <p className="text-[#656D72]">M Y    <span className="ml-2">W O R K </span></p>
                </div>
                <span className="text-[#CAD5DC] text-1xl leading-loose text-2xl"> Featured Portfolio</span>

                <div className="w-full">
                    <div
                        className="flex items-center md:gap-6 transition-transform ease-out duration-500 no-scrollbar"
                        style={{
                            transform: `translateX(-${(100 / numVisibleSlides) * curr}%)`,
                        }}
                    >
                        {slides.map((proj, i) => (
                            <div
                                key={i}
                                className={`border-2 border-[#656a72] rounded-tl-3xl rounded-tr-sm rounded-bl-sm rounded-br-3xl mb-2 md:mb-0 flex-shrink-0 flex-auto w-full md:w-96 h-96 md:h-auto lg:h-[26rem] overflow-y-auto`}
                                data-aos={`${i % 2 === 0 ? "fade-left" : "fade-right"}`}
                                data-aos-easing="linear"
                                data-aos-duration="1000"
                            >
                                <div className="p-3 md:p-4 flex flex-col gap-2">
                                    <div className="rounded-md md:w-fit">
                                        <img
                                            src={proj.image}
                                            alt={proj.title}
                                            width={600}
                                            height={500}
                                            className="w-full rounded-md"
                                        />
                                    </div>

                                    <div className="flex flex-col gap-0.5 items-center">
                                        <p className="text-[#CAD5DC]"> {proj.title}</p>
                                        <div className="h-0.5 w-[50%] bg-gradient-to-r from-[#8168d4] to-[#41a4c8]" />
                                    </div>

                                    <div className="flex flex-col gap-2">
                                        <p className="md:text-sm text-xs text-[#cdcccc]">
                                            {proj.description}
                                        </p>
                                        <p className='text-[#CAD5DC] border-[#242323] rounded-2xl w-[140px] border-[1px]  px-4 py-1 cursor-pointer'>
                                            {proj.tool}
                                        </p>
                                        <p

                                            className="absolute bottom-2 bg-[#111111] text-[#CAD5DC] border border-[#CAD5DC] rounded-3xl p-1 w-32 md:w-40 cursor-pointer text-center text-sm hover:animate-pulse "
                                        >
                                            Look it up
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="absolute right-0  top-1 flex items-center justify-between p-1 px-2 md:p-4">
                        <button
                            onClick={prev}
                            className="p-1 rounded-full shadow bg-[#111111] text-[#5750a2] hover:bg-[#1d1c1c] w-6 h-6 md:w-8 md:h-8 flex items-center justify-center ml-4"
                        >
                            <FaAngleLeft className="md:w-6 md:h-6" />
                        </button>
                        <button
                            onClick={next}
                            className="p-1 rounded-full shadow bg-[#111111] text-[#5750a2] hover:bg-[#1d1c1c] w-6 h-6 md:w-8 md:h-8 flex items-center justify-center ml-4"
                        >
                            <FaAngleRight className="md:w-6 md:h-6" />
                        </button>
                    </div>

                    {/* indicators */}
                    <div className="md:mt-4 py-1">
                        <div className="flex items-center justify-center gap-2">
                            {dots.map((_, i) => (
                                <div
                                    key={i}
                                    className={`transition-all w-1.5 h-1.5 rounded-full bg-white ${i === curr ? "p-0.5" : "bg-opacity-50"
                                        }`}
                                />
                            ))}
                        </div>
                    </div>
                </div>

            </Screen>
        </div>
    )
}

export default Project;