import React from 'react';

const Footer = () => {
  return (
    <div className="w-full bg-gray-100">
      {/* Main Footer Section */}
      <div className="flex flex-wrap lg:pt-[100px] justify-evenly items-start w-full py-8 px-4 lg:py-16 lg:px-12">
        {/* Address Section */}
        <div className="text-[#9F9F9F] text-center lg:text-left mb-6 lg:mb-0">
          <p>
            400 University Drive Suite 200 Coral <br />
            Gables, <br />
            FL 33134 USA
          </p>
        </div>

        {/* Links Section */}
        <div className="mb-6 lg:mb-0">
          <ul className="flex flex-col gap-3 lg:gap-9 text-center lg:text-left">
            <li className="text-[#9F9F9F] font-semibold">Links</li>
            <li>Home</li>
            <li>Shop</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Help Section */}
        <div className="mb-6 lg:mb-0">
          <ul className="flex flex-col gap-3 lg:gap-9 text-center lg:text-left">
            <li className="text-[#9F9F9F] font-semibold">Help</li>
            <li>Payment options</li>
            <li>Returns</li>
            <li>Privacy Policies</li>
          </ul>
        </div>

        {/* Newsletter Section */}
        <div className="mb-6 lg:mb-0">
          <ul className="flex flex-col gap-3 lg:gap-9 text-center lg:text-left">
            <li className="text-[#9F9F9F] font-semibold">Newsletter</li>
            <li>
              <input
                type="text"
                className="border-none bg-transparent underline underline-offset-4 mb-2 lg:mb-0"
                placeholder="Enter Your Email Address"
              />
              <button className="underline underline-offset-4 font-bold ml-2">
                Subscribe
              </button>
            </li>
          </ul>
        </div>
      </div>

      {/* Divider Line */}
      <div className="flex justify-center">
        <hr className="border-t border-gray-400 w-full max-w-5xl my-4" />
      </div>

      {/* Footer Bottom */}
      <h1 className="text-center text-sm lg:text-base pb-4">
        © 2022 Meubel House. All rights reserved
      </h1>
    </div>
  );
};

export default Footer;
