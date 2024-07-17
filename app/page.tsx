"use client";

import Head from "next/head";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function Home() {
  return (
    <div className=" bg-neutral-50 text-neutral-700">
      <Head>
        <title>Consultancy Website</title>
      </Head>

      <Navbar />

      <main className=" ">
        {/* home section  */}
        <section
          className="bg-cover bg-center h-full"
          style={{
            backgroundImage: `url('./section/home.jpg')`,
          }}
        >
          <div className="w-full h-full bg-zinc-50 bg-opacity-70">
            <div className="grid grid-cols-1 md:grid-cols-2 px-1 md:px-16 py-32 lg:px-40 items-center justify-center">
              <div className="flex flex-col px-5  justify-center items-center text-black">
                <h1 className="text-center text-3xl md:text-5xl font-extrabold">
                  Welcome to our Consultancy Website
                </h1>
                <p className="text-center text-sm md:text-lg">
                  We provide expert services in accounting, career choice,
                  taxation, and related fields.
                </p>
              </div>
              <div className="flex flex-col justify-center py-8 lg:px-8 items-center opacity-100">
                <img
                  src="/home.png"
                  alt="Consultancy Image"
                  className="object-fit h-full w-32 md:w-full shadow-2xl shadow-zinc-900 rounded-full"
                />
              </div>
            </div>
          </div>
        </section>
        {/* accounting section  */}
        <section
          className="bg-cover bg-center h-full"
          style={{
            backgroundImage: `url('./section/accounting.jpg')`,
          }}
        >
          <div className="w-full h-full bg-zinc-900 bg-opacity-70">
            <div className=" px-5 py-24 lg:px-40 mx-auto">
              <div className="text-center mb-20">
                <h1 className="sm:text-3xl text-2xl font-medium text-zinc-50 mb-4">
                  Accounting Services
                </h1>
                <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-zinc-300">
                  Explore our range of accounting services tailored to meet your
                  business needs.
                </p>
                <div className="flex mt-6 justify-center">
                  <div className="w-16 h-1 rounded-full bg-pink-500 inline-flex"></div>
                </div>
              </div>
              <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
                <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
                  <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-pink-100 text-pink-500 mb-5 flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-10 h-10"
                      viewBox="0 0 24 24"
                    >
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                    </svg>
                  </div>
                  <div className="flex-grow">
                    <h2 className="text-zinc-50 text-lg title-font font-medium mb-3">
                      Tax Preparation
                    </h2>
                    <p className="leading-relaxed text-zinc-200 text-base">
                      Efficient tax preparation and filing services to ensure
                      compliance and maximize deductions.
                    </p>
                    <a
                      href="#"
                      className="mt-3 text-pink-400 hover:text-pink-500 inline-flex items-center"
                    >
                      Learn More
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        className="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                  </div>
                </div>
                <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
                  <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-pink-100 text-pink-500 mb-5 flex-shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="size-10"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25M9 16.5v.75m3-3v3M15 12v5.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
                      />
                    </svg>
                  </div>
                  <div className="flex-grow">
                    <h2 className="text-zinc-50 text-lg title-font font-medium mb-3">
                      Financial Reporting
                    </h2>
                    <p className="leading-relaxed text-zinc-200 text-base">
                      Comprehensive financial reporting services that provide
                      insights for informed decision-making.
                    </p>
                    <a
                      href="#"
                      className="mt-3 text-pink-400 hover:text-pink-500 inline-flex items-center"
                    >
                      Learn More
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        className="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                  </div>
                </div>
                <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
                  <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-pink-100 text-pink-500 mb-5 flex-shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="size-11"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                      />
                    </svg>
                  </div>
                  <div className="flex-grow">
                    <h2 className="text-zinc-50 text-lg title-font font-medium mb-3">
                      Budget Analysis
                    </h2>
                    <p className="leading-relaxed text-zinc-200  text-base">
                      Thorough budget analysis to ensure optimal financial
                      management and cost efficiency.
                    </p>
                    <a
                      href="#"
                      className="mt-3 text-pink-400 hover:text-pink-500 inline-flex items-center"
                    >
                      Learn More
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        className="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <button className="flex mx-auto mt-16 text-white bg-pink-500 border-0 py-2 px-8 focus:outline-none hover:bg-pink-600 rounded text-lg">
                Contact Us
              </button>
            </div>
          </div>
        </section>
        {/* career section  */}
        <section
          className="bg-cover bg-center h-full"
          style={{
            backgroundImage: `url('./section/career.jpg')`,
          }}
        >
          <div className="w-full h-full bg-zinc-50 bg-opacity-70">
            <div className=" px-5 py-24 lg:px-40 mx-auto  flex-wrap">
              <div className="text-center mb-16">
                <h1 className="sm:text-3xl text-2xl font-medium text-zinc-900 mb-4">
                  Career Choice
                </h1>
                <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-zinc-600">
                  Explore our range of accounting services tailored to meet your
                  business needs.
                </p>
                <div className="flex mt-6 justify-center">
                  <div className="w-16 h-1 rounded-full bg-pink-500 inline-flex"></div>
                </div>
              </div>
              <div className="flex relative pt-6 pb-12 sm:items-center md:w-2/3 mx-auto">
                <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                  <div className="h-full w-1 bg-pink-50 pointer-events-none"></div>
                </div>
                <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-pink-500 text-white relative z-10 title-font font-medium text-sm">
                  1
                </div>
                <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                  <div className="flex-shrink-0 w-24 h-24 bg-pink-100 text-pink-500 rounded-full inline-flex items-center justify-center">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-12 h-12"
                      viewBox="0 0 24 24"
                    >
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                    </svg>
                  </div>
                  <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                    <h2 className="font-medium title-font text-zinc-900 mb-1 text-xl">
                      Career Exploration
                    </h2>
                    <p className="leading-relaxed">
                      Discover various career paths and opportunities tailored
                      to your skills and interests.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex relative pb-12 sm:items-center md:w-2/3 mx-auto">
                <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                  <div className="h-full w-1 bg-pink-50 pointer-events-none"></div>
                </div>
                <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-pink-500 text-white relative z-10 title-font font-medium text-sm">
                  2
                </div>
                <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                  <div className="flex-shrink-0 w-24 h-24 bg-pink-100 text-pink-500 rounded-full inline-flex items-center justify-center">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-12 h-12"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                  </div>
                  <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                    <h2 className="font-medium title-font text-zinc-900 mb-1 text-xl">
                      Consultancy Services
                    </h2>
                    <p className="leading-relaxed">
                      Expert consultancy services to guide you through career
                      decisions and personal development.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex relative pb-12 sm:items-center md:w-2/3 mx-auto">
                <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                  <div className="h-full w-1 bg-pink-50 pointer-events-none"></div>
                </div>
                <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-pink-500 text-white relative z-10 title-font font-medium text-sm">
                  3
                </div>
                <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                  <div className="flex-shrink-0 w-24 h-24 bg-pink-100 text-pink-500 rounded-full inline-flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-12 h-12"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941"
                      />
                    </svg>
                  </div>
                  <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                    <h2 className="font-medium title-font text-zinc-900 mb-1 text-xl">
                      Personal Development
                    </h2>
                    <p className="leading-relaxed">
                      Tailored guidance for personal growth and career
                      advancement strategies.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex relative pb-6 sm:items-center md:w-2/3 mx-auto">
                <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                  <div className="h-full w-1 bg-pink-50 pointer-events-none"></div>
                </div>
                <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-pink-500 text-white relative z-10 title-font font-medium text-sm">
                  4
                </div>
                <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                  <div className="flex-shrink-0 w-24 h-24 bg-pink-100 text-pink-500 rounded-full inline-flex items-center justify-center">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-12 h-12"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                    </svg>
                  </div>
                  <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                    <h2 className="font-medium title-font text-zinc-900 mb-1 text-xl">
                      Career Planning
                    </h2>
                    <p className="leading-relaxed">
                      Strategic career planning services to align your goals
                      with actionable steps for success.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* about section  */}
        <section
          className="bg-cover bg-center h-full"
          style={{
            backgroundImage: `url('./section/about.jpg')`,
          }}
        >
          <div className="w-full h-full bg-zinc-900 bg-opacity-70">
            <div className="flex flex-wrap px-5 py-24 lg:px-40 mx-auto items-center">
              <div className="md:w-1/2 md:pr-12 md:py-8 md:border-r md:border-b-0 mb-10 md:mb-0 pb-10 border-b border-zinc-50">
                <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-zinc-50">
                  About Our Company
                </h1>
                <p className="leading-relaxed text-base text-zinc-200">
                  We are dedicated experts in accounting, taxation consultancy,
                  and career advisory. Our mission is to provide comprehensive
                  financial and career solutions tailored to your needs.
                </p>
                <p className="leading-relaxed text-base text-zinc-200 mt-4">
                  With years of experience, we specialize in:
                </p>
                <ul className="list-disc pl-5 mt-2">
                  <li className="text-zinc-200">
                    Tax planning and compliance services
                  </li>
                  <li className="text-zinc-200">
                    Financial reporting and analysis
                  </li>
                  <li className="text-zinc-200">
                    Career counseling and professional development
                  </li>
                  <li className="text-zinc-200">
                    Business advisory and strategy
                  </li>
                </ul>
                <a
                  href="#"
                  className="text-pink-400 hover:text-pink-500 inline-flex items-center mt-4"
                >
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
              <div className="flex flex-col md:w-1/2 md:pl-12">
                <h2 className="title-font font-semibold text-zinc-100 tracking-wider text-sm mb-3">
                  Explore More
                </h2>
                <nav className="flex flex-wrap list-none -mb-1">
                  <li className="lg:w-1/3 mb-1 w-1/2">
                    <a href="#" className="text-zinc-300 hover:text-zinc-400">
                      Services
                    </a>
                  </li>
                  <li className="lg:w-1/3 mb-1 w-1/2">
                    <a href="#" className="text-zinc-300 hover:text-zinc-400">
                      Team
                    </a>
                  </li>
                  <li className="lg:w-1/3 mb-1 w-1/2">
                    <a href="#" className="text-zinc-300 hover:text-zinc-400">
                      Clients
                    </a>
                  </li>
                  <li className="lg:w-1/3 mb-1 w-1/2">
                    <a href="#" className="text-zinc-300 hover:text-zinc-400">
                      Testimonials
                    </a>
                  </li>
                  <li className="lg:w-1/3 mb-1 w-1/2">
                    <a href="#" className="text-zinc-300 hover:text-zinc-400">
                      Contact Us
                    </a>
                  </li>
                </nav>
              </div>
            </div>
          </div>
        </section>
        {/* contact section  */}
        <section
          className="bg-cover bg-center h-full"
          style={{
            backgroundImage: `url('./section/contact.jpg')`,
          }}
        >
          <div className="w-full h-full bg-zinc-50 bg-opacity-50">
            <div className=" px-5 py-24 mx-auto">
              <div className="flex flex-col text-center w-full mb-12">
                <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-zinc-900">
                  Contact Us
                </h1>
                <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-zinc-500">
                  Please fill out the form below to get in touch with us.
                </p>
                <div className="flex mt-6 justify-center">
                  <div className="w-16 h-1 rounded-full bg-pink-500 inline-flex"></div>
                </div>
              </div>
              <div className="lg:w-1/2 md:w-2/3 mx-auto">
                <div className="flex flex-wrap -m-2">
                  <div className="p-2 w-full">
                    <div className="relative">
                      <label
                        htmlFor="name"
                        className="leading-7 text-sm text-zinc-600"
                      >
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="w-full bg-zinc-100 bg-opacity-50 rounded border border-zinc-300 focus:border-pink-500 focus:bg-white focus:ring-2 focus:ring-pink-200 text-base outline-none text-zinc-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        placeholder="Enter your name"
                      />
                    </div>
                  </div>
                  <div className="p-2 w-full">
                    <div className="relative">
                      <label
                        htmlFor="email"
                        className="leading-7 text-sm text-zinc-600"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full bg-zinc-100 bg-opacity-50 rounded border border-zinc-300 focus:border-pink-500 focus:bg-white focus:ring-2 focus:ring-pink-200 text-base outline-none text-zinc-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>
                  <div className="p-2 w-full">
                    <div className="relative">
                      <label
                        htmlFor="message"
                        className="leading-7 text-sm text-zinc-600"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        className="w-full bg-zinc-100 bg-opacity-50 rounded border border-zinc-300 focus:border-pink-500 focus:bg-white focus:ring-2 focus:ring-pink-200 h-32 text-base outline-none text-zinc-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                        placeholder="Enter your message"
                      ></textarea>
                    </div>
                  </div>
                  <div className="p-2 w-full">
                    <button className="flex mx-auto text-white bg-pink-500 border-0 py-2 px-8 focus:outline-none hover:bg-pink-600 rounded text-lg">
                      Send Message
                    </button>
                  </div>
                  <div className="p-2 w-full pt-8 mt-8 border-t border-zinc-200 text-center">
                    <a
                      href="mailto:example@email.com"
                      className="text-pink-500"
                    >
                      example@email.com
                    </a>
                    <p className="leading-normal my-2">
                      49 Smith St., Saint Cloud, MN 56301
                    </p>
                    <div className="flex justify-center">
                      <a href="#" className="text-zinc-500 mx-2">
                        <svg
                          fill="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          className="w-6 h-6"
                          viewBox="0 0 24 24"
                        >
                          <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                        </svg>
                      </a>
                      <a href="#" className="text-zinc-500 mx-2">
                        <svg
                          fill="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          className="w-6 h-6"
                          viewBox="0 0 24 24"
                        >
                          <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                        </svg>
                      </a>
                      <a href="#" className="text-zinc-500 mx-2">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          className="w-6 h-6"
                          viewBox="0 0 24 24"
                        >
                          <rect
                            width="20"
                            height="20"
                            x="2"
                            y="2"
                            rx="5"
                            ry="5"
                          ></rect>
                          <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                        </svg>
                      </a>
                      <a href="#" className="text-zinc-500 mx-2">
                        <svg
                          fill="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          className="w-6 h-6"
                          viewBox="0 0 24 24"
                        >
                          <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <div
          className="bg-cover bg-center h-screen"
          style={{
            backgroundImage: `url('./background.jpg')`,
          }}
        >
          <div className="w-full h-screen bg-zinc-50 bg-opacity-70">
            <div className="grid grid-cols-2  px-40 py-32 justify-center object-center">
              {" "}
              <div className="flex flex-col p-4 justify-center text-black">
                <h1 className="text-5xl  font-extrabold">
                  Welcome to our Consultancy Website
                </h1>
                <p className="text-lg">
                  We provide expert services in accounting, career choice,
                  taxation, and related fields.
                </p>
              </div>
              <div className="flex flex-col p-4 justify-center object-center opacity-100">
                <img
                  src="/home.png"
                  width="800"
                  height="800"
                  alt="Consultancy Image"
                  className="object-fit h-full"
                />
              </div>
            </div>
          </div>
        </div> */}
        {/* <h1 className="text-3xl font-bold">
          Welcome to our Consultancy Website
        </h1>
        <p className="text-lg">
          We provide expert services in accounting, career choice, taxation, and
          related fields.
        </p> */}
      </main>

      <Footer />
    </div>
  );
}

export default Home;
