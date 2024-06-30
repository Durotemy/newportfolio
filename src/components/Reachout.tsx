import { FaPhone } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";
import { IoLocationSharp } from "react-icons/io5";
import Screen from "./Screen";



const Reachout = () => {
    return (
        <div className=" bg-[#111111]">
            <Screen>
                <div className="flex lg:flex-row flex-col w-full justify-between h-40">
                    {data.map((ele) => (
                        <div className="flex flex-row mx-auto items-center  justify-center" >
                            <span className="mx-4 text-white text-[18px]">{ele.icon}</span>
                            <h2 className="text-white text-[18px] text-center">{ele.item}</h2>
                        </div>
                    ))}
                </div>
            </Screen>
        </div>
    )
}

export default Reachout;

const data = [

    {
        item: '09033776421',
        icon: <FaPhone />

    },
    {
        item: 'durotemy@gmail.com',
        icon: <HiOutlineMail />

    },
    {
        item: '6 oyenaiye street, bariga yaba Lagos state',
        icon: <IoLocationSharp />
    }
]