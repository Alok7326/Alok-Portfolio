import React, { useState } from "react";
import axios from "axios";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [responseMsg, setResponseMsg] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResponseMsg("");

    try {
      const res = await axios.post(
        "https://portfolio-backend-y41y.onrender.com/alok/Portfolio",
        formData
      );
      setResponseMsg("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" }); // reset form
    } catch (error) {
      setResponseMsg("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16">
      <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
        Contact Me
      </h1>
      <p className="text-lg mb-6 bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
        Please fill out the form below to get in touch.
      </p>

      <div className="flex justify-center">
        <form
          onSubmit={handleSubmit}
          className="bg-slate-200 w-full max-w-md px-8 py-6 rounded-xl shadow-md"
        >
          <h2 className="text-xl font-semibold mb-5 bg-gradient-to-r from-pink-500 to-yellow-500 bg-clip-text text-transparent">
            Send Your Message
          </h2>

          {responseMsg && (
            <p
              className={`mb-4 text-center ${
                responseMsg.includes("successfully")
                  ? "text-green-600"
                  : "text-red-600"
              }`}
            >
              {responseMsg}
            </p>
          )}

          {/* Name */}
          <div className="mb-4">
            <label
              className="block text-lg font-medium text-gray-700 mb-1"
              htmlFor="name"
            >
              Full Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <label
              className="block text-lg font-medium text-gray-700 mb-1"
              htmlFor="email"
            >
              Email Address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>

          {/* Message */}
          <div className="mb-5">
            <label
              className="block text-lg font-medium text-gray-700 mb-1"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              placeholder="Enter your message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full py-2 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg ${
              loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-indigo-600 hover:to-purple-500 hover:scale-105"
            }`}
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
