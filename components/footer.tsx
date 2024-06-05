import { FaLocationArrow } from "react-icons/fa"
import MagicButton from "./ui/MagicButton"
import { socialMedia } from "@/data"


const Footer =()=>{
    return(
        <footer className="w-full pt-20 pb-10" id="contact">
            <div className="w-full absolute left-0 -bottom-72 min-h-96">
                <img src="/footer-grid.svg" alt="grid" className="w-full h-full opacity-50"/>
            </div>
            <div className="flex flex-col items-center">
                <h1 className="heading lg:max-w-[45vw]">
                    <span className="text-purple">About</span>
                </h1>
                <p className="text-white-200 md:mt-10 my-5 text-center">
                    Nirmaan&apos;s mining-as-a-service product sources and aggregates the most cost-effective compute from web2 & web3 before deploying it and expertly managing it on decentralized AI networks on behalf of our users.
                </p>
                <p>
                    By supplying GPU compute to the networks like Heurist, Bittensor, Morphesus and Ritual , users can acquire tokens at a cost that is between 60%-70% of the current market price and even as low as 5-10% for emerging networks.
                </p>
                <a href="kritsimarsingh@gmail.com">
                    <MagicButton
                    title="Let's get in touch"
                    icon={<FaLocationArrow/>}
                    position="right"
                    />
                </a>
            </div>
            <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
                <p className="md:text-base text-sm md:font-normal font-light">Copyright © 2024 
                </p>
                <div className="flex items-center md:gap-3 gap-6">
                    {socialMedia.map((profile)=>(
                        <div key={profile.id}>
                            <img src={profile.img} alt={profile.id} width={20} height={20} />
                        </div>
                    ))}

                </div>
            </div>
        </footer>
    )
}

export default Footer 