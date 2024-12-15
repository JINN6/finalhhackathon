import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';

const Account = () => {
  return (
    <div>
      <Navbar />
      <div>
        <img src="/account.png" alt="Account" className="mt-0 w-full" />
      </div>

      <div className="w-full h-auto flex flex-wrap items-center justify-center space-y-6 lg:space-y-0 lg:flex-nowrap">
        {/* Login Section */}
        <div className="w-full sm:w-[90%] md:w-[80%] lg:w-[608px] h-auto flex flex-col items-start p-6 sm:p-[40px] lg:p-[60px] mx-4 lg:mx-[50px]">
          <h1 className="text-[24px] sm:text-[28px] lg:text-[36px] font-bold">Log In</h1>
          <label htmlFor="username" className="text-[13px] font-bold mt-[20px] lg:mt-[40px]">
            Username or email address
          </label>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Enter your username"
            className="border p-2 w-full lg:w-[424px] h-[50px] sm:h-[60px] lg:h-[75px] rounded-[12px] mt-4"
          />
          <label htmlFor="password" className="text-[13px] font-bold mt-[20px] lg:mt-[40px]">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter your password"
            className="border p-2 w-full lg:w-[424px] h-[50px] sm:h-[60px] lg:h-[75px] rounded-[12px] mt-4"
          />
          <div className="flex items-center gap-3 mt-6 lg:gap-[23px]">
            <input
              type="checkbox"
              name="remember"
              id="remember"
              className="w-[20px] sm:w-[25px] lg:w-[30px] h-[20px] sm:h-[25px] lg:h-[27px] rounded"
            />
            <label htmlFor="remember" className="text-[14px]">
              Remember me
            </label>
          </div>
          <div className="flex items-center gap-3 mt-6 lg:gap-[25px]">
            <button className="w-full sm:w-[200px] lg:w-[215px] h-[50px] sm:h-[60px] lg:h-[64px] border border-black rounded-[15px] hover:text-white hover:bg-black">
              Log In
            </button>
            <a href="#" className="text-[14px]">
              Lost Your Password?
            </a>
          </div>
        </div>

        {/* Register Section */}
        <div className="w-full sm:w-[90%] md:w-[80%] lg:w-[608px] h-auto flex flex-col items-start p-6 sm:p-[40px] lg:p-[60px] mx-4 lg:mx-[50px]">
          <h1 className="text-[24px] sm:text-[28px] lg:text-[36px] font-bold">Register</h1>
          <label htmlFor="email" className="text-[13px] font-bold mt-[20px] lg:mt-[40px]">
            Email address
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email"
            className="border p-2 w-full lg:w-[424px] h-[50px] sm:h-[60px] lg:h-[75px] rounded-[12px] mt-4"
          />
          <p className="mt-[20px] lg:mt-[40px] text-[14px] lg:text-[16px]">
            A link to set a new password will be sent to your email address. <br />
            <br />
            Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our{' '}
            <span className="font-bold">privacy policy</span>.
          </p>
          <button className="w-full sm:w-[200px] lg:w-[215px] h-[50px] sm:h-[60px] lg:h-[64px] border border-black mt-6 lg:mt-12 rounded-[15px] hover:text-white hover:bg-black">
            Register
          </button>
        </div>
      </div>

      {/* Features Section */}
      <div className="w-full bg-[#FAF4F4] mt-12 lg:mt-[100px] flex flex-wrap justify-evenly items-center p-4 lg:space-y-0 space-y-6 lg:h-[300px] h-auto">
  {/* Free Delivery */}
  <div className="text-center lg:text-left flex-1 min-w-[250px] max-w-[300px]">
    <span className="font-bold text-[20px] sm:text-[24px] lg:text-[30px]">Free Delivery</span>
    <br />
    <span className="text-[#9F9F9F] text-[14px] sm:text-[16px]">
      For all orders over $50, consectetur <br /> adipim scing elit.
    </span>
  </div>
  {/* 90 Days Return */}
  <div className="text-center lg:text-left flex-1 min-w-[250px] max-w-[300px]">
    <span className="font-bold text-[20px] sm:text-[24px] lg:text-[30px]">90 Days Return</span>
    <br />
    <span className="text-[#9F9F9F] text-[14px] sm:text-[16px]">
      If goods have problem, consectetur <br /> adipim scing elit.
    </span>
  </div>
  {/* Secure Payment */}
  <div className="text-center lg:text-left flex-1 min-w-[250px] max-w-[300px]">
    <span className="font-bold text-[20px] sm:text-[24px] lg:text-[30px]">Secure Payment</span>
    <br />
    <span className="text-[#9F9F9F] text-[14px] sm:text-[16px]">
      100% secure payment, consectetur <br /> adipim scing elit.
    </span>
  </div>
</div>

      <Footer />
    </div>
  );
};

export default Account;
