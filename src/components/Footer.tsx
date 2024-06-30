import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";




const Footer = () => {
    return (
        <div>
            <div className="flex mx-auto items-center justify-center h-20">
                <span className="mx-4">
                    <FaGithub color='white' size={25} />
                </span>
                <span className="mx-4">
                    <FaLinkedin color='white' size={25} />
                </span>
                <span className="mx-4">
                    <FaTwitter color='white' size={25} />
                </span>
            </div>
            <div>
                <p className="text-white text-center pb-4 text-sm">
                    &#169; 2023 - Durotimi
                </p>
            </div>
        </div>
    )
}

export default Footer;