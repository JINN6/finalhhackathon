import React from 'react';
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import Footer from '../components/Footer';

const BillingPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="container mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="rounded-lg p-6">
          <h1 className="text-4xl font-semibold mb-4">Billing Details</h1>
          <form className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="form-group">
                <label htmlFor="firstName" className="block text-gray-700">First Name</label>
                <input type="text" id="firstName" name="firstName" className="flex items-center p-4 w-full md:w-[211px] h-[75px] mt-[20px] border border-black rounded-lg" required />
              </div>
              <div className="form-group">
                <label htmlFor="lastName" className="block text-gray-700">Last Name</label>
                <input type="text" id="lastName" name="lastName" className="flex items-center p-4 w-full md:w-[211px] h-[75px] mt-[20px] border border-black rounded-lg" required />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="companyName" className="block text-gray-700">Company Name (Optional)</label>
              <input type="text" id="companyName" name="companyName" className="flex items-center p-4 w-full md:w-[453px] h-[75px] mt-[20px] border border-black rounded-lg" />
            </div>

            <div className="form-group">
              <label htmlFor="country" className="block text-gray-700">Country / Region</label>
              <select id="country" name="country" className="flex items-center p-4 w-full md:w-[453px] h-[75px] mt-[20px] border border-black rounded-lg">
                <option value="Sri Lanka">Sri Lanka</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="streetAddress" className="block text-gray-700">Street Address</label>
              <input type="text" id="streetAddress" name="streetAddress" className="flex items-center p-4 w-full md:w-[453px] h-[75px] mt-[20px] border border-black rounded-lg" required />
            </div>

            <div className="form-group">
              <label htmlFor="city" className="block text-gray-700">Town / City</label>
              <input type="text" id="city" name="city" className="flex items-center p-4 w-full md:w-[453px] h-[75px] mt-[20px] border border-black rounded-lg" required />
            </div>

            <div className="form-group">
              <label htmlFor="province" className="block text-gray-700">Province</label>
              <select id="province" name="province" className="flex items-center p-4 w-full md:w-[453px] h-[75px] mt-[20px] border border-black rounded-lg">
                <option value="Western Province">Western Province</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="zipCode" className="block text-gray-700">ZIP Code</label>
              <input type="text" id="zipCode" name="zipCode" className="flex items-center p-4 w-full md:w-[453px] h-[75px] mt-[20px] border border-black rounded-lg" required />
            </div>

            <div className="form-group">
              <label htmlFor="phone" className="block text-gray-700">Phone</label>
              <input type="text" id="phone" name="phone" className="flex items-center p-4 w-full md:w-[453px] h-[75px] mt-[20px] border border-black rounded-lg" required />
            </div>

            <div className="form-group">
              <label htmlFor="email" className="block text-gray-700">Email Address</label>
              <input type="email" id="email" name="email" className="flex items-center p-4 w-full md:w-[453px] h-[75px] mt-[20px] border border-black rounded-lg" required />
            </div>

            <div className="form-group">
              <label htmlFor="additionalInfo" className="block text-gray-700">Additional Information</label>
              <textarea id="additionalInfo" name="additionalInfo" placeholder='Additional Data' className="flex items-center p-4 w-full md:w-[453px] h-[75px] mt-[20px] border border-black rounded-lg"></textarea>
            </div>
          </form>
        </div>

        <div className="rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Product</h2>
          <div className="flex justify-between border-b pb-4">
            <span>Asgaard Sofa x 1</span>
            <span>Rs. 250,000.00</span>
          </div>
          <div className="flex justify-between text-xl font-bold mt-4">
            <span>Total</span>
            <span className='text-[#B88E2F]'>Rs. 250,000.00</span>
          </div>

          <div className="payment-method mt-6">
            <h3 className="text-lg font-semibold mb-4">Payment Method</h3>
            <div className="flex items-center mb-2">
              <input type="radio" id="directBank" name="paymentMethod" className="mr-2" defaultChecked />
              <label htmlFor="directBank">Direct Bank Transfer</label>
            </div>
            <div className="flex items-center mb-4">
              <input type="radio" id="cashOnDelivery" name="paymentMethod" className="mr-2" />
              <label htmlFor="cashOnDelivery">Cash on Delivery</label>
            </div>
            <p className="text-gray-600 text-sm">
              Make your payment directly into our bank account. Please use your Order ID as
              the payment reference. Your order will not be shipped until the funds have
              cleared in our account.
            </p>
          </div>

          <button type="submit" className="w-full bg-[#fffffff] text-[#00000] hover:bg-black hover:text-[#ffffff] py-2 px-4 rounded-lg border border-black mt-6">Place Order</button>
        </div>
      </div>
      <Banner />
      <Footer />
    </div>
  );
};

export default BillingPage;
