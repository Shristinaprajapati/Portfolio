import { FaReact, FaNodeJs, FaWordpress, FaDatabase } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";

export default function About() {
  return (
    <section className="min-h-screen w-full bg-white flex flex-col lg:flex-row items-center justify-center px-8 lg:px-32 py-24 relative">
      
      {/* Sidebar Label */}
      <div className="absolute top-24 left-10 hidden lg:flex items-center space-x-2">
        <span className="w-2 h-2 bg-black"></span>
        <span className="text-sm font-medium tracking-wide text-gray-800 uppercase">About Me</span>
      </div>

      {/* Left: Profile Image */}
      <div className="mb-12 lg:mb-0 lg:mr-20 flex-shrink-0">
        <img
          src="/Images/profile-img.jpg"
          alt="Shristina Prajapati"
          className="w-56 h-56 rounded-lg object-cover"
        />
      </div>

      {/* Right: Text Content */}
      <div className="max-w-2xl">
        <h1 className="text-5xl font-thin text-gray-900 mb-6 leading-tight">
          About Me<br />
        </h1>

        <p className="text-gray-500 text-lg leading-relaxed mb-10">
          I’m a passionate web designer and developer with over 1.5 years of experience 
          creating user-centered designs and functional web solutions. I specialize in 
          building clean, modern, and responsive websites using <strong>React, Node.js, 
          MongoDB</strong>, and <strong>WordPress</strong>. I enjoy solving complex problems 
          and transforming creative ideas into engaging digital experiences.
        </p>

        {/* Experience & Skills */}
        <div className="grid md:grid-cols gap-8 mb-10">

          <div>
            <h3 className="text-xl font-normal text-gray-800 mb-3">Skills & Tools</h3>
            <div className="flex flex-wrap gap-3 text-gray-700">
              <span className="flex items-center gap-2 bg-gray-100 px-3 py-1 rounded-lg">
                <FaReact className="text-blue-500" /> React
              </span>
              <span className="flex items-center gap-2 bg-gray-100 px-3 py-1 rounded-lg">
                <FaNodeJs className="text-green-600" /> Node.js
              </span>
              <span className="flex items-center gap-2 bg-gray-100 px-3 py-1 rounded-lg">
                <SiMongodb className="text-green-700" /> MongoDB
              </span>
              <span className="flex items-center gap-2 bg-gray-100 px-3 py-1 rounded-lg">
                <FaWordpress className="text-blue-700" /> WordPress
              </span>
              <span className="flex items-center gap-2 bg-gray-100 px-3 py-1 rounded-lg">
                <FaDatabase className="text-gray-500" /> Database Design
              </span>
              <span className="flex items-center gap-2 bg-gray-100 px-3 py-1 rounded-lg">
                UI/UX Design
              </span>
              <span className="flex items-center gap-2 bg-gray-100 px-3 py-1 rounded-lg">
                Problem Solving
              </span>
            </div>
          </div>
        </div>

        {/* Button */}
        {/* <button className="px-6 py-3 bg-gray-100 text-gray-900 rounded-xl text-lg hover:bg-gray-200 transition">
          Start a Project
        </button> */}
      </div>
    </section>
  );
}
