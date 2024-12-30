'use client'

// Importing FontAwesome icons
import { FaLinkedin, FaFacebook, FaGithub } from "react-icons/fa";
import Link from "next/link";
import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch("/contact-api", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (!res.ok) {
      setStatus("Message sent successfully!");
    } else {
      setStatus("Error sending message.");
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 lg:p-8 rounded-2xl shadow-2xl border border-l-transparent border-r-transparent border-[#f8f5f4] my-10 flex justify-center items-center flex-col">
      <h2 className="text-center text-4xl font-serif font-semibold py-5">CONTACT US</h2>
      <form onSubmit={handleSubmit} className="flex flex-col justify-center gap-5 w-[300px] md:w-[350px] lg:w-[450px] h-[270px] bg-[#74a0b7]/10 px-3 ">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          className="py-1 px-2 rounded-md"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="py-1 px-2 rounded-md"
          required
        />
        <textarea
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
          className="px-2 py-4 rounded-md"
          required
        ></textarea>
        <button
          type="submit"
          className="border border-black text-[#000] py-1 rounded-md transition-colors duration-1000 hover:text-white hover:border-white hover:bg-[#74a0b7]/90 font-serif"
        >
          Send Message
        </button>
      </form>

      {status && <p className="text-[#000000] my-6">{status}</p>}

      {/* Social Media Icons */}
      <div className="mt-8 flex justify-center space-x-6">
        <Link
          href="https://www.linkedin.com/in/hammad-abbasi-95388628b/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin className="text-gray-600 hover:text-[#74a0b7] text-3xl transition-colors" />
        </Link>
        <Link
          href="https://www.facebook.com/people/Hammad-Abbasi/pfbid024P2GfZN792QzucbPJtjLKe8Tt6cNxVhE9DoBVJpnH6TGh5ipA4fr8GASjh1mmdL4l/?checkpoint_src=any"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
        >
          <FaFacebook className="text-gray-600 hover:text-[#74a0b7] text-3xl transition-colors" />
        </Link>
        <Link
          href="https://github.com/Muhammad-Hammad-Abbasi"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FaGithub className="text-gray-600 hover:text-[#417692] text-3xl transition-colors" />
        </Link>
      </div>
    </div>
  );
}

export default Contact;
