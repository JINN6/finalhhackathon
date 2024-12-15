import React from 'react';
import Navbar from '../components/Navbar';
import { SlidersHorizontal, LayoutGrid, GalleryVertical } from 'lucide-react';
import Card from '../components/Cardd';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import Link from 'next/link';
import Image from 'next/image';

const page = () => {
  return (
    <div>
      <Navbar />
      
      {/* Banner Image */}
      <div>
        <Image src="/shopb.png" alt="Shop Banner" className="w-full h-auto" />
      </div>

      {/* Filter Section */}
      <div className="w-full h-auto bg-[#FAF4F4] mt-[40px] flex flex-wrap justify-between items-center px-4 md:px-[50px] lg:px-[70px] py-4">
  {/* Filter Section */}
  <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto justify-between sm:justify-start">
    <SlidersHorizontal />
    <span className="text-sm md:text-base">Filter</span>
    <LayoutGrid />
    <GalleryVertical />
    <div className="w-[2px] h-[37px] bg-black hidden md:block"></div>
    <span className="text-sm md:text-base">Showing 1–16 of 32 results</span>
  </div>

  {/* Show and Sort Section */}
  <div className="flex flex-wrap items-center gap-4 mt-4 sm:mt-0 w-full sm:w-auto justify-between sm:justify-start">
    <span className="text-sm md:text-base">Show</span>
    <h1 className="w-[45px] h-[45px] md:w-[55px] md:h-[55px] border bg-white flex justify-center items-center text-sm md:text-base">
      16
    </h1>
    <span className="text-sm md:text-base">Sort by</span>
    <h1 className="bg-white h-[45px] md:h-[55px] w-[100px] md:w-[188px] border flex justify-center items-center text-sm md:text-base">
      Default
    </h1>
  </div>
</div>


      {/* Cards Section */}
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 md:px-[50px] lg:px-[70px] mt-[40px]">
        {/* Total of 16 Cards */}
        <div className="flex justify-center">
          <Card imageSrc="/sm1.png" paragraph="Trenton modular sofa_3" heading="Rs. 25,000.00" />
        </div>
        <div className="flex justify-center">
          <Card imageSrc="/sm2.png" paragraph="Granite dining table with dining chair" heading="Rs. 25,000.00" />
        </div>
        <div className="flex justify-center">
          <Card imageSrc="/sm3.png" paragraph="Outdoor bar table and stool" heading="Rs. 25,000.00" />
        </div>
        <div className="flex justify-center">
          <Card imageSrc="/sm4.png" paragraph="Plain console with teak mirror" heading="Rs. 25,000.00" />
        </div>
        <div className="flex justify-center">
          <Card imageSrc="/sm5.png" paragraph="Grain coffee table" heading="Rs. 15,000.00" />
        </div>
        <div className="flex justify-center">
          <Card imageSrc="/sm6.png" paragraph="Kent coffee table" heading="Rs. 225,000.00" />
        </div>
        <div className="flex justify-center">
          <Card imageSrc="/sm7.png" paragraph="Round coffee table_color 2" heading="Rs. 251,000.00" />
        </div>
        <div className="flex justify-center">
          <Card imageSrc="/sm8.png" paragraph="Reclaimed teak coffee table" heading="Rs. 25,200.00" />
        </div>
        <div className="flex justify-center">
          <Card imageSrc="/sm9.png" paragraph="Plain console_" heading="Rs. 258,200.00" />
        </div>
        <div className="flex justify-center">
          <Card imageSrc="/sm10.png" paragraph="Reclaimed teak Sideboard" heading="Rs. 20,000.00" />
        </div>
        <div className="flex justify-center">
          <Card imageSrc="/sm11.png" paragraph="SJP_0825 " heading="Rs. 200,000.00" />
        </div>
        <div className="flex justify-center">
          <Card imageSrc="/sm12.png" paragraph="Bella chair and table" heading="Rs. 100,000.00" />
        </div>
        <div className="flex justify-center">
          <Card imageSrc="/sm13.png" paragraph="Granite square side table" heading="Rs. 258,800.00" />
        </div>
        <div className="flex justify-center">
          <Link href='/asgaard'><Card imageSrc="/sm14.png" paragraph="Asgaard sofa" heading="Rs. 250,000.00" /></Link>
        </div>
        <div className="flex justify-center">
          <Card imageSrc="/sm15.png" paragraph="Maya sofa three seater" heading="Rs. 115,000.00" />
        </div>
        <div className="flex justify-center">
          <Card imageSrc="/sm16.png" paragraph="Outdoor sofa set" heading="Rs. 244,000.00" />
        </div>
      </section>

      {/* Pagination */}
      <div className="flex justify-center items-center gap-[10px] md:gap-[20px] mt-[40px] md:mt-[100px] px-4">
        <button className="w-[50px] h-[50px] md:w-[60px] md:h-[60px] bg-[#FBEBB5] text-black flex justify-center items-center hover:border hover:border-black hover:border-4">
          1
        </button>
        <button className="w-[50px] h-[50px] md:w-[60px] md:h-[60px] bg-[#FFF9E5] text-black flex justify-center items-center hover:border hover:border-black hover:border-4">
          2
        </button>
        <button className="w-[50px] h-[50px] md:w-[60px] md:h-[60px] bg-[#FFF9E5] text-black flex justify-center items-center hover:border hover:border-black hover:border-4">
          3
        </button>
        <button className="w-[80px] h-[50px] md:w-[98px] md:h-[60px] flex justify-center items-center bg-[#FFF9E5] hover:border hover:border-black hover:border-4">
          Next
        </button>
      </div>

      {/* Footer and Banner */}
      <Banner />
      <Footer />
    </div>
  );
};

export default page;
