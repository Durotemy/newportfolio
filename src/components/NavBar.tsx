import Screen from "./Screen";
import logoprofile from "../assets/logoprofile.png";
// @ts-ignore
const NavBar = ({ scrollToSection, sections }: any) => {
    // @ts-ignore
    const handlePress = (sectionRef: any) => {
        console.log("sectionRef", sectionRef)
        scrollToSection(sectionRef);
    }

    return (
        <div>
            <Screen>
                <div className="flex w-full justify-between h-20 items-center gap-2 text-white flex-wrap">
                    <div className="flex items-center gap-2 w-2/12">
                        <img src={logoprofile} alt="logo" />
                        <span className="text-basetext">Durotimi.</span>
                    </div>
                    <div className="flex mx-auto items-center justify-center h-auto w-8/12">
                        {header.map((e, index) => (
                            <div
                                key={index}
                                className="cursor-pointer mx-4"
                                onClick={() => handlePress(sections[e.ref])}
                            >
                                <p className="text-basetext hover:mt-1 duration-200">{e.navText}</p>
                            </div>
                        ))}
                    </div>
                    <div className="flex items-center cursor-pointer w-2/12 justify-end">
                        <p className="border-[#242323] border-[1px] flex justify-end px-4 py-1 rounded text-basetext cursor-pointer">Resume</p>
                    </div>
                </div>
            </Screen>
        </div>
    );
}

export default NavBar;

const header = [
    {
        ref: 'serviceRef',
        navText: 'Service'
    },
    {
        ref: 'projectRef',
        navText: 'Project'
    },
    {
        ref: 'experienceRef',
        navText: 'Experience'
    },
    {
        ref: 'testimonialRef',
        navText: 'Testimonial'
    },
    {
        ref: 'educationRef',
        navText: 'Education'
    },
    {
        ref: 'reachoutRef',
        navText: 'Reachout'
    }
];
