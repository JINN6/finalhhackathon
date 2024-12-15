import React from 'react';
import Navbar from '../components/Navbar';
import { MapPin } from 'lucide-react';
import { Phone } from 'lucide-react';
import { Clock } from 'lucide-react';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import Image from 'next/image';

const page = () => {
  return (
    <div>
      <Navbar />
      <div>
        <Image src="/cont.png" alt="" className="w-full mt-0" />
      </div>

      <div>
        <h1 className="font-bold lg:text-[40px] text-center mt-[100px] text-[30px] sm:text-[40px]">Get In Touch With Us</h1>
        <p className="text-[#9F9F9F] text-center mt-3 px-4 sm:px-8 md:px-16 lg:px-32">
          For More Information About Our Product & Services. Please Feel Free To Drop Us
          <br /> An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!
        </p>
      </div>

      <div className=" flex flex-col lg:flex-row justify-center items-center lg:mt-[90px] lg:space-x-8 px-4 sm:px-8 md:px-16 lg:px-0">
        <div className="flex flex-col justify-center items-center gap-10 w-full lg:w-[393px] h-auto lg:h-[527px] mt-[25px]">
          <div className="  flex flex-col items-center lg:mt-[-400px]  ">
            <h1 className="flex items-center font-bold text-[25px]">
              <MapPin className="mr-[30px]" /><span className='mr-[135px]'> Address</span>
            </h1>
            <p>236 5th SE Avenue, New <br /> York NY10000, United <br /> States</p>
          </div>

          <div className="flex flex-col items-center text-center">
            <h1 className="flex items-center font-bold text-[25px]  ">
              <Phone className="mr-[30px]" /> <span className='mr-[164px]' > Phone</span>
            </h1>
            <p>
              Mobile: +(84) 546-6789
              <br /> Hotline: +(84) 456-6789
            </p>
          </div>

          <div className="flex flex-col items-center ">
            <h1 className="flex items-center font-bold text-[25px]">
              <Clock className="mr-[30px]" /><span className='mr-[75px]'> Working Time</span>
            </h1>
            <p>
              Monday-Friday: 9:00 - <br /> 22:00 <br /> Saturday-Sunday: 9:00 - <br /> 21:00
            </p>
          </div>
        </div>

        <div className="w-full lg:w-[635px] h-auto lg:h-[923px] flex flex-col justify-center items-start p-6 sm:p-8 md:p-10 lg:p-[60px] pt-[100px]">
          <label htmlFor="">Your name</label>
          <input
            type="username"
            placeholder="Abc"
            className="border p-2 w-full lg:w-[528.75px] h-[75px] rounded-[12px] mt-[25px]"
          />
          <br />
          <br />

          <label htmlFor="">Email address</label>
          <input
            type="username"
            placeholder="Abc@def.com"
            className="border p-2 w-full lg:w-[528.75px] h-[75px] rounded-[12px] mt-[25px]"
          />
          <br />
          <br />

          <label htmlFor="">Subject</label>
          <input
            type="username"
            placeholder="This is an optional"
            className="border p-2 w-full lg:w-[528.75px] h-[75px] rounded-[12px] mt-[25px]"
          />
          <br />
          <br />

          <label htmlFor="">Message</label>
          <input
            type="username"
            placeholder="Hi! I’d like to ask about"
            className="border p-2 w-full lg:w-[528.75px] h-[120px] rounded-[12px] mt-[25px]"
          />
          <br />
          <br />

          <button className="w-full lg:w-[237px] h-[48px] border border-black rounded-[15px] mt-[25px] hover:bg-black hover:text-white">
            Submit 
          </button>
        </div>
      </div>

      <Banner />
      <Footer />
    </div>
  );
};

export default page;
