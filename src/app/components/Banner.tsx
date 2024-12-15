import React from 'react'

const Banner = () => {
  return (
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
  )
}

export default Banner