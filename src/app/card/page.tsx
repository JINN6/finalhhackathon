import React from 'react';
import { Trash } from 'lucide-react';
import Banner from '../components/Banner';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Link from 'next/link';


const Page = () => {
  return (
    <div>
      <Navbar />
      <div>
        <img src="/cartbanner.png" alt="" className="w-full mt-0" />
      </div>

      <div className="flex flex-wrap lg:flex-nowrap justify-between items-start p-5 mt-9 mb-9 gap-5">
        {/* Product List Section */}
        <div className="w-full lg:w-[817px]">
          <ul className="flex justify-between items-center w-full bg-[#FFF9E5] h-[55px] px-4 text-sm md:text-base">
            <li>Product</li>
            <li>Price</li>
            <li>Quantity</li>
            <li>Subtotal</li>
          </ul>
          <div className="mt-8 flex flex-wrap lg:flex-nowrap justify-between items-center bg-white shadow-md w-full h-auto p-4 gap-4">
            <img src="/ch.png" alt="" className="w-[80px] h-[80px]" />
            <h1 className="text-[#9F9F9F] text-sm md:text-base flex-1">Asgaard sofa</h1>
            <h1 className="text-[#9F9F9F] text-sm md:text-base flex-1">Rs 250,000.00</h1>
            <div className="border border-[#9F9F9F] w-[40px] h-[40px] flex items-center justify-center text-sm md:text-base">
              1
            </div>
            <h1 className="flex-1 text-sm md:text-base">Rs 250,000.00</h1>
            <Trash className="text-[#9F9F9F] cursor-pointer" />
          </div>
        </div>

        {/* Cart Totals Section */}
        <div className="w-full lg:w-[390px] bg-[#FFF9E5] p-5 rounded-md">
          <div className="text-center">
            <h1 className="font-bold text-xl md:text-2xl lg:text-[35px]">Cart Totals</h1>
          </div>
          <div className="flex justify-between items-center mt-10 text-sm md:text-base">
            <h1 className="font-bold">Subtotal</h1>
            <h1 className="text-[#9F9F9F] font-bold">Rs. 250,000.00</h1>
          </div>
          <div className="flex justify-between items-center mt-7 text-sm md:text-base">
            <h1 className="font-bold">Total</h1>
            <h1 className="text-[#B88E2F] font-bold text-lg md:text-xl">Rs. 250,000.00</h1>
          </div>
          <div className="flex justify-center mt-10">
            <Link href='/checkout'><button className="w-[180px] md:w-[222px] h-[45px] md:h-[59px] border border-black rounded-[20px] hover:text-white hover:bg-black text-sm md:text-base">
              Checkout
            </button></Link>
          </div>
        </div>
      </div>
      <Banner />
      <Footer />
    </div>
  );
};

export default Page;
