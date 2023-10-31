import Link from "next/link";
import ProfileImage from "../../../public/profile.png";
import Image from "next/image";

const Navigation = ()=>{
    return(
        <div className="flex lg:flex-row flex-col lg:justify-between lg:px-[163px] px-[20px] lg:mt-0">
            <div className="flex place-items-center gap-x-5">
                <Image src={ProfileImage} alt="profile photo" className="w-[60px] h-[60px] rounded-full"/>
                <h1 className="text-gray-700 text-xl">Jan Elnas</h1>
            </div>
            <div className="flex lg:flex-row flex-col lg:gap-x-6 gap-y-2 place-items-center mt-[10px] lg:mt-0">
                <Link href="/work-experience">Work Experience</Link>
                <Link href="">Projects</Link>
                <Link href="">Skills</Link>
                <Link href="">Education</Link>
                <Link href="">Contacts</Link>
            </div>
        </div>
    )
}

export default Navigation;