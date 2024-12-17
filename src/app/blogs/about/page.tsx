// Importing FontAwesome icons
import { FaLinkedin, FaFacebook, FaGithub } from "react-icons/fa";

function About() {
  return (
    <div className="px-4 lg:px-8 py-8">
      <h1 className="text-center text-4xl font-extrabold mb-10 font-serif">About Me</h1>

      <div className="max-w-4xl mx-auto p-6 lg:p-8 rounded-2xl shadow-2xl bg-[#ffb4989c] border border-l-transparent border-r-transparent border-[#f8f5f4]">
        <h2 className="text-gray-800 font-serif text-2xl sm:text-3xl lg:text-4xl mb-4 text-center">
        A Glimpse into My Journey
        </h2>
        <p className="text-gray-600 mb-4 text-center">
        As a Full-Stack Developer with over a year of experience, I specialize in crafting dynamic and responsive web applications that blend seamless functionality with intuitive user experiences. My journey in technology has been an inspiring blend of growth and accomplishments, highlighted by diverse projects that reflect my expertise in both frontend and backend development.
        </p>
        <p className="text-gray-600 mb-4 text-center">
        Driven by a passion for innovation, I enjoy exploring cutting-edge technologies and sharing insights through well-crafted blog posts. You can explore my latest articles and ideas on my LinkedIn profile. Im always eager to connect with like-minded professionals to collaborate on impactful projects, discuss emerging technologies, or exchange innovative ideas. Let&apos;s create something remarkable together!
        </p>

        {/* Social Media Icons */}
        <div className="mt-8 flex justify-center space-x-6">
          <a
            href="https://www.linkedin.com/in/hammad-abbasi-95388628b/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-gray-600 hover:text-[#c45428]/100 text-3xl transition-colors" />
          </a>
          <a
            href="https://www.facebook.com/people/Hammad-Abbasi/pfbid024P2GfZN792QzucbPJtjLKe8Tt6cNxVhE9DoBVJpnH6TGh5ipA4fr8GASjh1mmdL4l/?checkpoint_src=any"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook className="text-gray-600 hover:text-[#c45428]/100 text-3xl transition-colors" />
          </a>
          <a
            href="https://github.com/Muhammad-Hammad-Abbasi"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="text-gray-600 hover:text-[#c45428]/100 text-3xl transition-colors" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;