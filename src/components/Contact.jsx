import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

function Contact() {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      name: data.name,
      email: data.email,
      message: data.message,
    };
    try {
      await axios.post("https://getform.io/f/raeqjora", userInfo);
      toast.success("Your message has been sent");
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };
  return (
    <>
      <div
        name="Contact"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16"
      >
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
          Contact Me
        </h1>
        <span className="text-lg font-medium bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
          Please fill out the form below to contact me
        </span>

        <div className=" flex flex-col items-center justify-center mt-5">
          <form
            onSubmit={handleSubmit(onSubmit)}
            action="https://getform.io/f/amdkgpob"
            method="POST"
            className="bg-slate-200 w-96 px-8 py-6 rounded-xl"
          >
            <h1 className="text-xl font-semibold mb-4 bg-gradient-to-r from-pink-500 to-yellow-500 bg-clip-text text-transparent">
              Send Your Message
            </h1>

            <div className="flex flex-col mb-4">
              <label className="block text-lg font-medium bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                FullName
              </label>

              <input
                {...register("name", { required: true })}
                className="shadow rounded-lg appearance-none border  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                name="name"
                type="text"
                placeholder="Enter your fullname"
              />
              {errors.name && <span>This field is required</span>}
            </div>
            <div className="flex flex-col mb-4">
              <label className="block text-lg font-medium bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                Email Address
              </label>
              <input
                {...register("email", { required: true })}
                className="shadow rounded-lg appearance-none border  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                name="email"
                type="text"
                placeholder="Enter your email address"
              />
              {errors.email && <span>This field is required</span>}
            </div>
            <div className="flex flex-col mb-4">
              <label className="block text-lg font-medium bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                Message
              </label>
              <textarea
                {...register("message", { required: true })}
                className="shadow rounded-lg appearance-none border  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="message"
                name="message"
                type="text"
                placeholder="Enter your Query"
              />
              {errors.message && <span>This field is required</span>}
            </div>

            <button
              type="submit"
              className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-semibold rounded-xl px-4 py-2 transition-all duration-300 hover:from-indigo-600 hover:to-purple-500 hover:scale-105 shadow-lg"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
