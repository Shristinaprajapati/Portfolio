import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";

export default function Contact() {
  return (
    <section className="min-h-screen w-full bg-[#f9fafb] flex flex-col items-center justify-center px-6 lg:px-20 py-24">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Left Section - Intro */}
        <div className="text-left space-y-6">
          <div className="flex items-center space-x-2">

            <div className="absolute top-24 left-10 hidden lg:flex items-center space-x-2">
        <span className="w-2 h-2 bg-black"></span>
        <span className="text-sm font-medium tracking-wide text-gray-800 uppercase">Get in Touch</span>
      </div>
          </div>

          <h1 className="text-5xl font-thin text-gray-900 mb-6 leading-tight">
          Let's Work  <span className="text-blue-600">Together</span><br />
        </h1>

          <p
            className="text-gray-600 text-lg leading-relaxed max-w-md"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Have a project or idea in mind?  
            I’d love to collaborate and help bring your vision to life through creative and thoughtful design.
          </p>

        </div>

        {/* Right Section - Contact Details */}
        <div
          className="bg-white rounded-3xl shadow-lg border border-gray-100 p-10 space-y-6"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          <div className="flex items-center space-x-4">
            <Mail className="w-5 h-5 text-blue-600" />
            <a
              href="mailto:shristiprajapati339@gmail.com"
              className="text-gray-900 font-medium hover:text-blue-600 transition"
            >
              shristiprajapati339@gmail.com
            </a>
          </div>

          <div className="flex items-center space-x-4">
            <Phone className="w-5 h-5 text-blue-600" />
            <span className="text-gray-900 font-medium">+977 9840280305</span>
          </div>

          <div className="flex items-center space-x-4">
            <MapPin className="w-5 h-5 text-blue-600" />
            <span className="text-gray-900 font-medium">Kalopul, Kathmandu</span>
          </div>

          <div className="flex items-center space-x-4">
            <Linkedin className="w-5 h-5 text-blue-600" />
            <a
              href="https://linkedin.com/in/shristina-prajapati-b9615625a"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-900 font-medium hover:text-blue-600 transition"
            >
              linkedin.com/in/shristina-prajapati
            </a>
          </div>

          <div className="flex items-center space-x-4">
            <Github className="w-5 h-5 text-blue-600" />
            <a
              href="https://github.com/Shristinaprajapati"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-900 font-medium hover:text-blue-600 transition"
            >
              github.com/Shristinaprajapati
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
