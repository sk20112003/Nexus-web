import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Company Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4">NEXUS INFO TECH</h3>
          <p className="text-gray-400">
            We provide innovative software solutions to boost your business.
          </p>
        </div>

      

        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className=" md:flex-col space-x-4">
            <a href="https://www.facebook.com/people/Nexus-Info/61560989377318/?mibextid=LQQJ4d&rdid=HjtL02irWzUuwp4V&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2FchBu6tfu8D9P88vq%2F%3Fmibextid%3DLQQJ4d" className="hover:text-gray-400">FACEBOOK
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
           
              </svg>
            </a>
            <a href="https://www.instagram.com/nexusinfo.in/" className="hover:text-gray-400">INSTAGRAM
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
               
              </svg>
            </a>
            <a href="https://www.linkedin.com/company/nexus-software-pvt-ltd/" className="hover:text-gray-400">LINKEDIN
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
              
              </svg>
            </a>
          </div>
        </div>

        <div >
          <h3 className="text-lg font-semibold mb-4 ">TECH UPDATES</h3>
          <p className="text-gray-400 mb-4">
            Subscribe to our Channel for the latest Techupdates.
          </p>
          <form className="flex">
            <input
              type="email"
              className="w-full px-4 py-2 text-gray-900 rounded-l-md focus:outline-none"
              placeholder="Enter your email"
            />
            <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-r-md">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="mt-10 border-t border-gray-800 pt-6 text-center text-gray-500 text-sm">
        &copy; 2024 NexusInfo Software. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
