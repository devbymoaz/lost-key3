"use client";
import { useState, ChangeEvent, FormEvent } from "react";
import NewsHeroSection from "../components/sections/newsHeroSection";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function Page() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // TODO: Send data to API
  };

  return (
    <>
      <NewsHeroSection
        imageSrc="/pexels-2149489342-31015646.jpg"
        title="Contact Us"
        subtitle="Learn more about our journey and values."
      />

      <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg mt-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">Get in Touch</h2>
        <p className="text-center text-gray-600 mb-6">
          Fill out the form below and we’ll get back to you soon.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 font-medium mb-1">Your Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-400 focus:outline-none"
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-400 focus:outline-none"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">Subject</label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-400 focus:outline-none"
              placeholder="Enter subject"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-400 focus:outline-none"
              placeholder="Write your message..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-green-500 text-white font-bold py-3 rounded-lg transition duration-300 hover:bg-green-600"
          >
            Send Message
          </button>
        </form>
      </div>
    </>
  );
}
