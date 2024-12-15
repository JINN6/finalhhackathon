import React from 'react';
import Navbarr from '@/app/components/Navbarr';
import { Clock } from 'lucide-react';
import { Calendar } from 'lucide-react';
import Footer from './components/Footer';
import Image from 'next/image';

const Page = () => {
  return (
    <div>
      {/* Navbar */}
      <div>
        <Navbarr />
      </div>

      {/* Main Section */}
      <div className="w-full h-auto bg-[#FBEBB5] flex flex-col md:flex-row justify-between items-center p-4 md:p-10">
        {/* Text Section */}
        <div className="text-center md:text-left">
          <h1 className="text-[24px] md:text-[50px] font-bold leading-tight">
            Rocket Single <br /> Seater <br />
          </h1>
          <button className="mt-4 text-[16px] md:text-[20px] underline underline-offset-[6]">
            Shop Now
          </button>
        </div>

        {/* Image Section */}
        <Image
          src="/rk.png"
          alt="Rocket Single Seater"
          className="h-[300px] md:h-[600px] w-full md:w-[700px] object-cover mt-6 md:mt-0"
        />
      </div>

      {/* Product Section */}
      <div className="w-full h-auto bg-[#FAF4F4] flex flex-col md:flex-row justify-center gap-4 p-4">
        {['/s1.png', '/s2.png'].map((src, index) => (
          <div key={index} className="flex flex-col items-center">
            <Image
              src={src}
              alt={`Side Table ${index + 1}`}
              className="h-[250px] sm:h-[300px] md:h-[500px] object-contain"
            />
            <span className="text-center pt-4">
              <h1 className="text-[18px] sm:text-[20px] md:text-[30px]">Side Table</h1>
            </span>
            <button className="text-[16px] md:text-[20px] pt-4 underline underline-offset-[6]">
              View More
            </button>
          </div>
        ))}
      </div>

      {/* Top Picks Section */}
      <section className="w-full h-auto bg-[#FFF9E5] py-10">
        <div>
          <h1 className="font-bold text-[24px] md:text-[40px] text-center">Top Picks For You</h1>
          <p className="text-[#9F9F9F] text-center mt-4">
            Find a bright idea to suit your taste with our great selection of suspension, floor, and table lights.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 pt-10">
          {['/m1.png', '/m2.png', '/m3.png', '/m4.png'].map((src, index) => (
            <div key={index} className="flex flex-col items-center max-w-[300px]">
              <img src={src} alt={`Top Pick ${index + 1}`} className="w-full h-auto" />
              <p className="pt-4 text-center">Sample Product {index + 1}</p>
              <button className="font-bold text-[18px] md:text-[22px] pt-2">Rs. 25,000.00</button>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-6">
          <button className="text-[16px] md:text-[20px] underline underline-offset-[6]">
            View More
          </button>
        </div>
      </section>

      {/* New Arrivals Section */}
      <section className="w-full h-auto bg-[#FFF9E5] py-16">
        <div className="flex flex-col md:flex-row justify-between items-center px-4 md:px-10">
          {/* Image Section */}
          <img src="/as.png" alt="Asgaard Sofa" className="w-full md:w-[700px] h-auto" />

          {/* Text Section */}
          <div className="flex flex-col items-center md:items-start max-w-full md:max-w-[500px] mt-8 md:mt-0 md:pr-10">
            <h1 className="text-center  md:text-left text-[24px] md:text-[32px] font-semibold">New Arrivals</h1>
            <h1 className="font-bold text-[30px] md:text-[40px] text-center md:text-left">Asgaard Sofa</h1>
            <button className="mt-6 border border-black w-[200px] md:w-[255px] h-[50px] hover:bg-black hover:text-white">
              Order Now
            </button>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="w-full h-auto py-10">
        <div>
          <h1 className="text-center text-[24px] md:text-[40px] font-bold">Our Blogs</h1>
          <p className="text-center text-[#9F9F9F] mt-4">Find a bright ideal to suit your taste with our great selection</p>
        </div>

        <div className="flex flex-wrap justify-center gap-8 pt-10">
          {[1, 2, 3].map((blog) => (
            <div key={blog} className="flex flex-col items-center max-w-[300px]">
              <Image
                src={`/r${blog + 2}.png`}
                alt={`Blog ${blog}`}
                className="w-full h-[250px] md:h-[300px] object-cover"
              />
              <p className="text-center pt-4">Going all-in with millennial design</p>
              <button className="text-center pt-4 underline underline-offset-[6]">Read More</button>
              <div className="text-center pt-6 flex gap-2 items-center">
                <Clock /> 5 min <Calendar /> 12th Oct 2022
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <button className="text-[16px] md:text-[20px] underline underline-offset-[6]">View All Posts</button>
        </div>
      </section>

      {/* Instagram Section */}
      <section>
        <Image src="/ins.png" alt="Instagram Section" className="w-full" />
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Page;
