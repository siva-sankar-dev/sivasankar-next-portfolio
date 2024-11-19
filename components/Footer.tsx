import { socialMedia } from "@/data"
import ShimmerButton from "./Ui/ShimmerButton"
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaLocationArrow, FaYoutube } from "react-icons/fa"


const Footer = () => {
    const sendMail = () => {
        console.log("rtes");
        window.location.href = "mailto:sivasankar.sivakripa123@gmail.com"
    }

    return (
        <footer className="w-full pt-20 pb-10" id="contact">
            {/* background grid */}
            {/* <div className="w-full absolute left-0 -bottom-72 min-h-96">
                <img
                    src="./footer-grid.svg"
                    alt="grid"
                    className="w-full h-full opacity-50 "
                />
            </div> */}

            <div className="flex flex-col items-center">
                <h1 className="heading lg:max-w-[45vw]">
                    Ready to take <span className="text-purple">your</span> digital
                    presence to the next level?
                </h1>
                <p className="text-white-200 md:mt-10 my-5 text-center">
                    Reach out to me today and let&apos;s discuss how I can help you
                    achieve your goals.
                </p>
                    <ShimmerButton
                    handleClick={sendMail}
                        title="Let's get in touch"
                        icon={<FaLocationArrow />}
                        position="right"
                    />
            </div>
            <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
                <p className="md:text-base text-sm md:font-normal font-light">
                    Copyright © 2024 SIVASANKAR S R
                </p>

                <div className="flex items-center md:gap-3 gap-6">
                <a href={socialMedia[0].link} className=''>
          <FaInstagram size={40} color='#FFFFFF' />
          </a>
          <a href={socialMedia[1].link} className=''>
          <FaGithub size={40} color='#FFFFFF' />
          </a>
          <a href={socialMedia[2].link} className=''>
          <FaLinkedin size={40} color='#FFFFFF' />
          </a>
          <a href={socialMedia[3].link} className=''>
          <FaFacebook size={40} color='#FFFFFF' />
          </a>
          <a href={socialMedia[4].link} className=''>
          <FaYoutube size={40} color='#FFFFFF' />
          </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer