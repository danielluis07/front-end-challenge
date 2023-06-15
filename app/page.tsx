import { poppins } from "./layout";
import Image from "next/image";
import logo from "../public/images/logo.svg";
import mainimage from "../public/images/illustration-mockups.svg";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export default function Home() {
  return (
    <div className="px-10 desktop:px-16 max-w-[1440px] mx-auto w-full h-full">
      <div className="w-[200px] mt-6">
        <Image src={logo} alt="logo" priority />
      </div>
      <div className="mt-16 flex flex-col desktop:flex-row desktop:gap-x-14">
        <div className="desktop:w-full">
          <Image src={mainimage} alt="image" className="mx-auto" />
        </div>
        <div className="mt-14 flex flex-col gap-y-10">
          <h1
            className={`${poppins.className} font-semibold text-center text-xl w-11/12 mx-auto desktop:text-start desktop:mx-0 desktop:text-4xl/[60px] desktop:w-4/6`}>
            Build The Community Your Fans Will Love
          </h1>
          <p className="text-center desktop:text-start desktop:w-5/6">
            Huddle re-imagines the way we build communities. You have a voice,
            but so does your audience. Create connections with your users as you
            engage in genuine discussion.{" "}
          </p>
          <button className="py-4 w-[250px] max-w-[250px] rounded-3xl bg-white text-violet mx-auto desktop:mx-0 hover:bg-magenta hover:text-white transition duration-300">
            Register
          </button>
        </div>
      </div>
      {/* icons */}
      <div className="flex flex-row gap-4 justify-center desktop:justify-end items-center mt-10 pb-20 desktop:mt-16 desktop:pb-10">
        <div className="p-4 border border-white rounded-full cursor-pointer hover:border-magenta transition duration-300 group">
          <FaFacebookF className="text-white text-md group-hover:text-magenta transition duration-300" />
        </div>
        <div className="p-4 border border-white rounded-full cursor-pointer hover:border-magenta transition duration-300 group">
          <FaTwitter className="text-white text-md group-hover:text-magenta transition duration-300" />
        </div>
        <div className="p-4 border border-white rounded-full cursor-pointer hover:border-magenta transition duration-300 group">
          <FaInstagram className="text-white text-md group-hover:text-magenta transition duration-300" />
        </div>
      </div>
    </div>
  );
}
