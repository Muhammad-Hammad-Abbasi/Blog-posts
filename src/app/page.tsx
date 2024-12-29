import Link from "next/link";
import styles from "./home.module.css";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-cover bg-center ">
    
         {/* Background Video */}
         <video
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/video.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4">

        {/* Main Heading */}
        <h1
          className={`text-2xl text-gray-300 font-bold mb-8 mt-8 text-center sm:text-3xl md:text-4xl ${styles.typewriter}`}
        >
          Explore the World of Technology
        </h1>

        {/* Subheading */}
        <h2 className="text-xl md:text-md lg:text-md text-gray-200 font-semibold mb-2 text-center">
          Your Hub for Tech Innovation and Trends
        </h2>

        {/* Text */}
        <p className=" text-gray-300 mb-6 mt-2 text-center max-w-lg text-md md:text-md lg:text-md">
          Discover in-depth articles, industry insights, and expert analysis on
          the latest breakthroughs shaping the tech landscape.
        </p>

        {/* Social Media Icons */}
        <div className="flex space-x-6 mb-6 text-gray-300">
          <Link
            href="https://github.com/Muhammad-Hammad-Abbasi"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#7da9c1]/70 transition duration-300"
          >
            <FaGithub className="text-2xl sm:text-4xl transform hover:scale-110" />
          </Link>
          <Link
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#7da9c1]/70 transition duration-300"
          >
            <FaTwitter className="text-2xl sm:text-4xl transform hover:scale-110" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/hammad-abbasi-95388628b/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#7da9c1]/70 transition duration-300"
          >
            <FaLinkedin className="text-2xl sm:text-4xl transform hover:scale-110" />
          </Link>
        </div>

        {/* Button */}
        <Link
          href={"/blogs"}
          className="px-6 py-2 text-sm text-gray-300 border border-white bg-[#92b5c8]/10 rounded-xl hover:bg-[#7da9c1]/70 transition duration-500 text-center font-bold"
        >
          Explore Blogs
        </Link>
      </div>
    </div>
  );
}
