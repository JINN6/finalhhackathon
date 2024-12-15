"use client";
import React from "react";
import Navbar from "../components/Navbar";
import PreDefinedRating from "../components/PreDefinedRating";
import Increment from "../components/Increment";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import Footer from "../components/Footer";
import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetFooter } from '@/components/ui/sheet';
import { CiLock } from "react-icons/ci";
import { MdCancel } from "react-icons/md";
import Link from "next/link";

const page = () => {
  return (
    <div>
      <Navbar />
      
      <div className="flex flex-wrap justify-start items-center px-4 sm:px-8 md:pl-[120px] mt-[55px]">
        <span className="text-[#9F9F9F]">Home &gt; shop &gt;</span>
        <div className="hidden md:block bg-[#9F9F9F] w-[2px] h-[37px] ml-[10px] mr-[10px]"></div>
        <span>Asgaard sofa</span>
      </div>

      <div className="flex flex-wrap justify-center md:justify-start gap-4 md:gap-[30px] px-4 sm:px-8 md:ml-[130px] mt-[60px]">
      <div className=" flex  justify-center md:flex-col lg:flex-col gap-4 md:gap-[25px] h-auto md:h-[500px]">
  <img src="/a1.png" alt="" className="w-full h-auto object-contain" />
  <img src="/a2.png" alt="" className="w-full h-auto object-contain" />
  <img src="/a3.png" alt="" className="w-full h-auto object-contain" />
  <img src="/a4.png" alt="" className="w-full h-auto object-contain" />
</div>

        <div className=" bg-[#FFF9E5] w-full md:w-[423px] h-auto md:h-[500px] flex justify-center items-center">
          <img src="/a5.png" alt="" className="w-full h-auto object-contain" />
        </div>
        <div>
          <h1 className="font-bold text-[30px] md:text-[50px]">Asgaard sofa</h1>
          <h1 className="pt-[7px] text-[18px] md:text-[20px] text-[#9F9F9F]">Rs. 250,000.00</h1>
          <span className="flex flex-wrap justify-start items-center pt-[7px]">
            <PreDefinedRating />
            <div className="hidden md:block bg-[#9F9F9F] w-[2px] h-[37px] ml-[10px] mr-[10px]"></div>
            <h1 className="text-[#9F9F9F]">5 Customer Review</h1>
          </span>
          <p className="pt-[10px] text-sm md:text-base">
            Setting the bar as one of the loudest speakers in its class, the <br />
            Kilburn is a compact, stout-hearted hero with a well-balanced <br />
            audio which boasts a clear midrange and extended highs for a <br />
            sound.
          </p>
          <h1 className="pt-[15px] text-[#9F9F9F]">Size</h1>
          <div className="flex items-center justify-start gap-2 md:gap-[15px] pt-[7px]">
            <button className="w-[30px] h-[30px] border bg-[#FBEBB5] text-[12px] rounded-[4px] hover:border hover:border-2 hover:border-black">L</button>
            <button className="w-[30px] h-[30px] border bg-[#FAF4F4] text-[12px] rounded-[4px] hover:border hover:border-2 hover:border-black">XL</button>
            <button className="w-[30px] h-[30px] border bg-[#FAF4F4] text-[12px] rounded-[4px] hover:border hover:border-2 hover:border-black">XS</button>
          </div>
          <h1 className="text-[#9F9F9F] pt-[7px]">Color</h1>
          <div className="flex items-center justify-start gap-2 md:gap-[15px] pt-[7px]">
            <button className="bg-[#816DFA] w-[30px] h-[30px] rounded-full"></button>
            <button className="bg-[#000000] w-[30px] h-[30px] rounded-full"></button>
            <button className="bg-[#CDBA7B] w-[30px] h-[30px] rounded-full"></button>
          </div>
          
          {/* ShadCN Sheet */}
          <div className="flex flex-wrap justify-start items-center gap-4 md:gap-[15px] pt-[25px]">
            <Increment />
            <Sheet>
  {/* SheetTrigger to open the sheet on button click */}
  <SheetTrigger asChild>
    <button className="w-full md:w-[215px] h-[50px] md:h-[64px] border border-black rounded-[15px] hover:bg-[#000000] hover:text-[#ffffff]">
      Add To Cart
    </button>
  </SheetTrigger>

  {/* Sheet Content */}
  <SheetContent className="h-[500px] sm:h-[400px] md:h-[746px] w-full sm:w-[90%] md:w-[417px] flex flex-col">
    <SheetHeader>
      <div className="flex justify-between items-center mt-[20px]">
        <h2 className="text-2xl font-bold">Shopping Cart</h2>
        <h2><CiLock /></h2>
      </div>
      <div className="pt-[10px]">
        <hr className="border-t border-[#9F9F9F] w-[287px]" />
      </div>
    </SheetHeader>

    <div className="flex justify-start items-center mt-[30px]">
      <img src="cimg1.png" alt="" />
      <div className="pl-[20px] pr-[20px]">
        <h1>Asgaard sofa</h1>
        <h1>1 <span className="pl-[10px] pr-[10px]">X</span><span className="text-[#B88E2F]">Rs. 250,000.00</span> </h1>
      </div>
      <MdCancel />
    </div>

    {/* Footer positioned at the bottom */}
    <div className="flex flex-col mt-auto">
  <SheetFooter className="flex justify-between items-center pb-[20px] px-4 sm:px-8">
    <div className="flex justify-between w-full sm:w-auto">
      <h1 className="mr-[10px] text-sm sm:text-base">Subtotal</h1>
    </div>
    <div className="flex justify-between w-full sm:w-auto">
      <h1 className="text-[#B88E2F] text-sm sm:text-base">Rs. 250,000.00</h1>
    </div>
  </SheetFooter>

  {/* Horizontal line and buttons */}
  <div className="flex flex-col items-center">
    <hr className="border-t border-gray-400 w-full mb-[15px]" />
    <div className="flex justify-between w-full px-[20px] sm:px-[40px]">
      <Link href='/card'><button className="px-4 py-2  bg-[#fffffff] border border-black text-black rounded-[50px] hover:bg-black hover:text-white w-full mr-[10px]">
        ViewCart
      </button></Link>
      <button className="px-4 py-2 bg-[#fffffff] border border-black text-black rounded-[50px] hover:bg-black hover:text-white w-full ml-[10px]">
        Checkout
      </button>
    </div>
  </div>
</div>

  </SheetContent>
</Sheet>

          </div>

          <div className="pt-[50px]">
            <hr className="border-t border-gray-400" />
          </div>

          <div className="flex flex-col justify-start gap-2 md:gap-[15px] text-[#9F9F9F] text-sm md:text-base">
            <h1>
              SKU <span className="pl-[20px] md:pl-[55px]">: SS001</span>
            </h1>
            <h1>
              Category <span className="pl-[10px]">: Sofas</span>
            </h1>
            <h1>
              Tags <span className="pl-[20px] md:pl-[47px]">: Sofa, Chair, Home, Shop</span>
            </h1>
            <h1 className="flex items-center">
              Share
              <span className="pl-[10px] md:pl-[43px] flex items-center">
                :
                <FaFacebook className="ml-[5px] text-[#000000]" />
                <FaLinkedin className="ml-[10px] text-[#000000]" />
                <AiFillTwitterCircle className="ml-[11px] text-[#000000]" />
              </span>
            </h1>
          </div>

          <div className="pt-[50px]">
            <hr className="border-t border-[#9F9F9F]" />
          </div>
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-4 md:gap-[30px] text-[18px] md:text-[25px] mt-[50px]">
        <h1>Description</h1>
        <h1 className="text-[#9F9F9F]">Additional Information</h1>
        <h1 className="text-[#9F9F9F]">Reviews [5]</h1>
      </div>

      <div className="flex flex-wrap justify-center items-center px-4 sm:px-8 mt-[50px]">
        <p className="text-start text-[#9F9F9F] text-sm md:text-[15px]">
          Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and
          <br /> sound of Marshall, unplugs the chords, and takes the show on the road.
          <br />
          <br /> Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the
          loudest <br /> speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear
          midrange <br /> and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the
          controls <br /> to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row sm:justify-between items-center gap-2 px-4 sm:px-8 mt-[50px] lg:flex-row lg:gap-4">
  <img src="/asimg1.png" alt="" className="w-full md:w-auto" />
  <img src="/asimg2.png" alt="" className="w-full md:w-auto" />
</div>



      <div className="mt-[50px]">
        <hr className="border-t border-[#9F9F9F] w-full" />
      </div>

      <section className="w-full h-auto">
        <div>
          <h1 className="font-bold text-lg md:text-[40px] text-center pt-[40px]">Related Products</h1>
        </div>

        <div className="flex flex-wrap justify-evenly gap-4 md:gap-8 pt-[60px]">
          <div className="text-center">
            <img src="/m1.png" alt="" className="w-full h-auto object-contain" />
            <p className="pt-[10px]">Trenton modular sofa_3</p>
            <button className="font-bold text-lg md:text-[22px] pt-[10px]">Rs. 25,000.00</button>
          </div>
          <div className="text-center">
            <img src="/m2.png" alt="" className="w-full h-auto object-contain" />
            <p className="pt-[10px]">Granite dining table with <br /> dining chair</p>
            <button className="font-bold text-lg md:text-[22px] pt-[10px]">Rs. 25,000.00</button>
          </div>
          <div className="text-center">
            <img src="/m3.png" alt="" className="w-full h-auto object-contain" />
            <p className="pt-[10px]">Outdoor bar table and <br /> stool</p>
            <button className="font-bold text-lg md:text-[22px] pt-[10px]">Rs. 25,000.00</button>
          </div>
          <div className="text-center">
            <img src="/m4.png" alt="" className="w-full h-auto object-contain" />
            <p className="pt-[10px]">Plain console with teak <br /> mirror</p>
            <button className="font-bold text-lg md:text-[22px] pt-[10px]">Rs. 25,000.00</button>
          </div>
        </div>

        <div className="flex justify-center pt-[80px]">
          <button className="text-[20px] underline underline-offset-[18px] mb-[50px]">View More</button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default page;
