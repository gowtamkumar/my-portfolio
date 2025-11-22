"use client";
import Header from "@/components/Header";
import SocialMedia from "@/components/SocialMedia";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <>
      <Header />
      <main className="flex flex-col items-center justify-center min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white px-4 pt-32">
        <div className="w-full max-w-2xl">
          <div className="text-center mb-10">
            <h1 className="text-5xl md:text-5xl font-extrabold text-gray-900 dark:text-white leading-tight">
              Contact Me
            </h1>
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-700 dark:text-gray-300 mt-4">
              I&apos;m available for freelance work. Connect with me via phone:{" "}
              <a
                href="tel:+919876543210"
                className="text-blue-600 dark:text-blue-400"
              >
                +8801767163576
              </a>{" "}
              or email:{" "}
              <a
                href="mailto:gowtampaul0@gmail.com"
                className="text-blue-600 dark:text-blue-400"
              >
                gowtampaul0@gmail.com
              </a>
            </p>
            <SocialMedia />
          </div>
          {/* <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                onChange={handleChange}
                value={formData.name}
                className="w-full px-4 py-3 bg-gray-200 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 dark:focus:ring-blue-400"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                onChange={handleChange}
                value={formData.email}
                className="w-full px-4 py-3 bg-gray-200 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 dark:focus:ring-blue-400"
                required
              />
            </div>
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              onChange={handleChange}
              value={formData.subject}
              className="w-full px-4 py-3 bg-gray-200 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 dark:focus:ring-blue-400"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              onChange={handleChange}
              value={formData.message}
              rows={5}
              className="w-full px-4 py-3 bg-gray-200 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 dark:focus:ring-blue-400"
              required
            ></textarea>
            <div className="text-center">
              <button
                type="submit"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Send Message
              </button>
            </div>
          </form> */}
        </div>
      </main>
    </>
  );
}
