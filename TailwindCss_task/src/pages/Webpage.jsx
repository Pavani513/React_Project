import React, { useState } from 'react';
import logo from "../public/webpage_images/logo.png"
import banner from "../public/webpage_images/task_banner.png"
import elipse1 from "../public/webpage_images/Ellipse1.png"
import elipse2 from "../public/webpage_images/Ellipse2.png"
import circle1 from "../public/webpage_images/circle1.png"
import circle2 from "../public/webpage_images/circle2.png"
import arrow from "../public/webpage_images/arrow.png"
import star1 from "../public/webpage_images/Union1.png"
import star2 from "../public/webpage_images/Union2.png"
import tick from "../public/webpage_images/tick.png"
import img1 from "../public/webpage_images/img1.png"
import img2 from "../public/webpage_images/img2.png"
import img3 from "../public/webpage_images/img3.png"
import img4 from "../public/webpage_images/img4.png"
import img5 from "../public/webpage_images/img5.png"
import quote from "../public/webpage_images/quote.png"
import arr_left from "../public/webpage_images/Arrow_left.png"
import arr_right from "../public/webpage_images/Arrow_right.png"
import shape from "../public/webpage_images/Shape.png"
import green_stars from "../public/webpage_images/green_stars.png"


const Webpage = () => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen);
// };

return (
  <div>
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <img src={logo} alt="Company Logo" className="h-10 w-auto" />
          </div>
          <div className="hidden md:flex space-x-8 items-center">
            <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Home</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">About</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Services</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Gallery</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Blog</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Contact</a>
          </div>
          <div className="hidden md:flex">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">Login</button>
          </div>
        </div>
      </div>
    </nav>
    {/* SECTION1 */}
    <div className="relative">
  <img src={banner} alt="hero_banner" className="w-full object-cover h-[250px] sm:h-[400px] md:h-[550px] lg:h-[600px]" />

  <div className="absolute top-1/4 left-2 sm:left-6 top-15 md:left-12 lg:left-16 text-white max-w-[75%] sm:max-w-md md:max-w-lg">
    <h1 className="text-base sm:text-xl md:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4 mt-2 sm:mt-4 leading-tight">
      Atmanirbhar Bharat ki Pehchan, Har Dukaan Digital Pradhan
    </h1>

    <p className="text-xs sm:text-sm md:text-base lg:text-lg mt-2 sm:mt-4">
      Easy access to DBT funds, digital payments and essential banking services at a store nearby.
    </p>

    <div className="mt-4 sm:mt-6 flex flex-wrap gap-2">
      <button
        type="submit"
        className="bg-white text-green-600 text-xs sm:text-sm md:text-base px-4 sm:px-3 md:px-6 py-2 sm:py-2.5 md:py-3 rounded hover:bg-gray-100"> Income Calculator </button>
      <button type="submit" className="bg-blue-600 text-white text-xs sm:text-sm md:text-base px-5 sm:px-6 md:px-7 py-2 sm:py-2.5 md:py-3 rounded hover:bg-blue-700"> Join Relipay </button>
    </div>
  </div>
</div>

    {/* section2 */}
    <div className="mt-10 px-4 sm:px-6 md:px-10">
  <h1 className="text-center text-2xl md:text-3xl font-bold mb-2">One App Multiple Services</h1>
  <p className="text-center text-gray-600 mb-10 max-w-3xl mx-auto text-sm sm:text-base">
    A great earning potential with the opportunity to grow your business with minimal one time investment and zero working capital
  </p>

  <div className='flex flex-wrap justify-center items-center gap-4'>
    <img src={elipse1} alt="" className="w-19 sm:w-16 md:w-24 self-center" />

    {/* First Row */}
    <div className="relative flex justify-center items-start flex-wrap gap-6 w-full max-w-4xl mx-auto bg-blue-300 rounded-lg px-4 py-6">
      <div className='bg-white flex flex-wrap w-full justify-center'>
        <div className="min-w-[250px] w-full sm:w-[45%] bg-white p-4 sm:p-6">
          <h3 className="text-xl font-semibold mb-2">Digital Suite</h3>
          <span className="text-gray-700 text-sm sm:text-base">
            Upgrade your business with 100% better credit management and digital payment tools to grow your business
          </span>
        </div>
        <div className="min-w-[250px] w-full sm:w-[45%] bg-white p-4 sm:p-6">
          <h3 className="text-xl font-semibold mb-2">Banking Services</h3>
          <span className="text-gray-700 text-sm sm:text-base">
            Become the most trusted Banker of your area. Customers can withdraw money, deposit cash, transfer money, get...
          </span>
        </div>
      </div>
    </div>

    <img src={elipse2} alt="" className="w-12 sm:w-16 md:w-24 self-center" />
  </div>

  {/* Second Row */}
  <div className="flex justify-center flex-wrap gap-6 mt-8 w-full max-w-4xl mx-auto bg-blue-300 rounded-lg px-4 py-6">
    <div className='bg-white flex flex-wrap w-full justify-center'>
      <div className="min-w-[250px] w-full sm:w-[45%] bg-white p-4 sm:p-6">
        <h3 className="text-xl font-semibold mb-2">Utility Payment Centre</h3>
        <span className="text-gray-700 text-sm sm:text-base">
          Ensure recurring monthly income by becoming a Utility Payment Point. Households need to pay their EMIs and utility bills every month...
        </span>
      </div>
      <div className="min-w-[250px] w-full sm:w-[45%] bg-white p-4 sm:p-6">
        <h3 className="text-xl font-semibold mb-2">Insurance</h3>
        <span className="text-gray-700 text-sm sm:text-base">
          Offer affordable protection plans and become the Suraksha Pradhan of your area
        </span>
      </div>
    </div>
  </div>

  {/* Third Row */}
  <div className="flex justify-center flex-wrap gap-6 mt-8 w-full max-w-4xl mx-auto bg-blue-300 rounded-lg px-4 py-6">
    <div className='bg-white flex flex-wrap w-full justify-center'>
      <div className="min-w-[250px] w-full sm:w-[45%] bg-white p-4 sm:p-6">
        <h3 className="text-xl font-semibold mb-2">Travel</h3>
        <span className="text-gray-700 text-sm sm:text-base">
          Open a travel agency from your shop. Offer a range of affordable travel solutions from your shop...
        </span>
      </div>
      <div className="min-w-[250px] w-full sm:w-[45%] bg-white p-4 sm:p-6">
        <h3 className="text-xl font-semibold mb-2">Essential Services</h3>
        <span className="text-gray-700 text-sm sm:text-base">
          Offer essential services to customers & earn more. Issue paperless PAN and file taxes for customers from your shop
        </span>
      </div>
    </div>
  </div>

  <div className="flex justify-center">
    <button
      type="submit"
      className="bg-white text-blue-700 border border-blue-600 flex justify-center items-center mt-10 text-sm md:text-base px-5 sm:px-6 md:px-7 py-2 sm:py-2.5 md:py-3 rounded  "
    >
      View All Services
    </button>                  
  </div>
</div>


{/* section3 */}
 <div className='flex flex-wrap mt-10 px-4 md:px-8'>

  <div className='bg-blue-900 w-full sm:w-1/2 h-40 sm:h-[25vw] flex items-center justify-center p-4 sm:p-6'>
    <p className='text-white text-base sm:text-lg max-w-[250px] text-center'>
      India's largest Distribution as-a-service (DaaS) platform
    </p>
  </div>

  <div className='w-full sm:w-1/2 mt-6 sm:mt-0 flex items-center justify-center p-4 sm:p-6'>
    <h2 className='text-2xl sm:text-3xl md:text-4xl text-center max-w-[250px]'>
      All Major Cards Accepted
    </h2>
  </div>
</div>

{/* section4 */}
<div className='mt-10 px-4 md:px-10'>
  <h2 className="text-center text-2xl md:text-3xl font-bold mb-2">Smart Solutions for Everyone</h2>
  <p className="text-center text-gray-600 mb-10 max-w-3xl mx-auto">
    Whether you are a retailer, distributor, individual or self help group, we have smart solutions for everyone
  </p>

  <div className='flex justify-evenly items-center gap-29 mb-3 hidden sm:flex justify-center items-center gap-4 mb-6'>
  <img src={arrow} alt="" className="w-6 sm:w-8" />
  <img src={arrow} alt="" className="w-6 sm:w-8" />
  <img src={arrow} alt="" className="w-6 sm:w-8" />
</div>

  <div className='flex flex-wrap justify-center items-stretch gap-6'>
    {/* Card1 */}
    <div className='border border-gray-300 w-full sm:w-[90%] md:w-[30%] h-auto p-5 bg-white'>
      <div className="flex justify-center items-center mt-5">
        <img src={circle1} alt="" className="w-16 h-16 object-contain" />
      </div>
      <h3 className='text-center font-bold mt-6 text-xl'>Retailer</h3>
      <p className='text-center mt-4 text-sm'>
        Use our digital suite of products to upgrade your store and manage your credits, customers and payments better. Offer our assisted financial and digital commerce services to increase your income. Be the trusted banker in your area.
      </p>
      <p className='text-center font-medium mt-2 text-sm'>
        Join over 50,00,000 retailers. Earn more than ₹25,000/month. No working capital required.
      </p>
      <h3 className='text-center font-bold mt-4 text-xl'>Retail Categories:</h3>
      <ul className='list-disc list-inside mt-2 text-sm'>
        <li>Kirana Shop</li>
        <li>Restaurant</li>
        <li>Medical Shop</li>
        <li>Fertilizer Shop</li>
        <li>Apparel Shop</li>
        <li>Tailoring Shop</li>
        <li>Mobile Recharge Centre</li>
        <li>Insurance Agency</li>
        <li>Hardware Store</li>
        <li>Travel Agency and more</li>
      </ul>
    </div>

    {/* Card2 */}
    <div className='border border-gray-300 w-full sm:w-[90%] md:w-[30%] h-auto p-5 bg-white'>
      <div className="flex justify-center items-center mt-5">
        <img src={circle2} alt="" className="w-16 h-16 object-contain" />
      </div>
      <h3 className='text-center font-bold mt-6 text-xl'>Distributor</h3>
      <p className='text-center mt-4 text-sm'>
        Make more out of your distribution business. Onboard your network to offer PayNearby services and earn more than 18% per month on the money invested. No physical stock. No store or staff needed.
      </p>
      <p className='text-center font-medium mt-2 text-sm'>
        Join over 1,00,000 distributors. Earn more than ₹50,000/month.
      </p>
      <h3 className='text-center font-bold mt-4 text-xl'>Distributor Categories:</h3>
      <ul className='list-disc list-inside mt-2 text-sm'>
        <li>Telecom</li>
        <li>Pharma</li>
        <li>Retail</li>
        <li>FMCG and more</li>
      </ul>
    </div>

    {/* Card3 */}
    <div className='border border-gray-300 w-full sm:w-[90%] md:w-[30%] h-auto p-5 bg-white'>
      <div className="flex justify-center items-center mt-5">
        <img src={circle1} alt="" className="w-16 h-16 object-contain" />
      </div>
      <h3 className='text-center font-bold mt-6 text-xl'>Individual/Self Help Groups</h3>
      <p className='text-center mt-4 text-sm'>
        Grab the opportunity to run your own business from home or shop. Offer digital commerce services and earn on every transaction. Take your store online with BuyNearby.
      </p>
      <p className='text-center font-medium mt-2 text-sm'>
        Join individuals and SHGs earning more than ₹15,000/month.
      </p>
      <h3 className='text-center font-bold mt-4 text-xl'>Categories:</h3>
      <ul className='list-disc list-inside mt-2 text-sm'>
        <li>Griha Udyog Members</li>
        <li>Self Help Groups</li>
        <li>Teachers</li>
      </ul>
    </div>
  </div>
  <div className="mt-6 flex flex-wrap justify-center items-center gap-4 mb-6">
    <button type="submit" className="bg-blue-600 text-white text-sm md:text-base px-7 py-3 rounded hover:bg-blue-700">
      Join Relipay
    </button>
    <button type="submit" className="border border-green-600 text-green-600 text-sm sm:border border-green-600 md:text-base px-6 py-3 rounded hover:bg-gray-100">
      Income Calculator
    </button>
  </div>
</div>

{/* section5 */}
<div className="bg-blue-950 text-white text-center flex flex-col md:flex-row justify-between items-start md:items-center gap-8 px-6 md:px-20 py-20">

  <div className="md:w-1/2">
    <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
      One Stop Handyman Service
    </h1>
    <p className="text-base md:text-lg">
      We prioritize sustainability in every aspect of our work, aiming to create a greener and more eco-conscious future.
    </p>
  </div>

  <div className="md:w-1/2 grid grid-cols-2 gap-6 px-15 text-center">
    <div>
      <h1 className="text-3xl font-bold">28+</h1>
      <h5 className="text-sm font-medium">Years Business</h5>
      <h1 className="text-3xl font-bold mt-4">26K</h1>
      <h5 className="text-sm font-medium">Expert Members</h5>
    </div>

    <div>
      <h1 className="text-3xl font-bold">5150</h1>
      <h5 className="text-sm font-medium">Achievements</h5>
      <h1 className="text-3xl font-bold mt-4">15+</h1>
      <h5 className="text-sm font-medium">No. of Branches</h5>
    </div>
  </div>
</div>

{/* section6 */}
<div className="bg-yellow-200 px-6 py-10 md:px-16 lg:px-20">
  <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-10">
    
    <div className="flex-1">
      <div className="max-w-[90vw] sm:max-w-[80vw] md:max-w-[70vw] lg:max-w-[40vw] flex flex-col gap-4 mb-6">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight">
          Over 25+ Years of Experience In Handyman Service
        </h1>
        <span className="text-sm sm:text-base text-gray-800">
          With 25+ years of experience, we are the go-to experts for all your handyman service requirements. Trust in our skill and professionalism for top-notch results.
        </span>
      </div>

      <div className="flex flex-col sm:flex-row flex-wrap gap-6 mb-6">
        <div className="w-full sm:w-[45%] lg:w-[17vw]">
          <div className="flex items-start gap-3 mb-2">
            <img src={tick} alt="tick" className="w-6 sm:w-8" />
            <h2 className="text-lg sm:text-xl font-bold">High Quality Work</h2>
          </div>
          <p className="text-sm text-gray-700">
            At vero eos et accusamus et iusto odio dignissimos.
          </p>
        </div>
        <div className="w-full sm:w-[45%] lg:w-[17vw]">
          <div className="flex items-start gap-3 mb-2">
            <img src={tick} alt="tick" className="w-6 sm:w-8" />
            <h3 className="text-lg sm:text-xl font-bold">Qualified Team</h3>
          </div>
          <p className="text-sm text-gray-700">
            At vero eos et accusamus et iusto odio dignissimos.
          </p>
        </div>
      </div>

      <button
        type="submit"
        className="bg-blue-600 text-white text-sm md:text-base px-7 py-3 rounded hover:bg-blue-700 transition"
      >
        More About Us
      </button>
    </div>

  <div className="flex flex-col items-center lg:items-end gap-10 flex-shrink-0 w-full lg:w-auto">
  <div className="w-[100px] sm:w-[120px] md:w-[140px] lg:w-[160px]">
    <img src={star1} alt="Star 1" className="w-1/2 mx-20 lg:mx-0" />
  </div>
  <div className="w-[100px] sm:w-[120px] md:w-[140px] lg:w-[160px] mx-20">
    <img src={star2} alt="Star 2" className="w-1/2 lg:mx-0" />
  </div>
</div>

  </div>
</div>


{/* section7 */}
<div className='bg-blue-950 text-white flex justify-center items-center h-auto py-10 sm:py-16 md:py-20'>
  <div className='w-[90%] sm:w-[70%] md:w-[40%] text-center px-4'>
    <h1 className='text-xl sm:text-2xl md:text-3xl font-bold mb-4'>Take A Look At Our Recent Projects</h1>
    <p className='text-xs sm:text-sm md:text-base'>
      Nunc pellentesque aliquam leo leo ipsum tellus elit et adipiscing mauris laoreet sed turpis in purus turpis in lectus amet nisl
    </p>
  </div>
</div>

{/* SECTION8 */}
<div>
  <h1 className='text-center font-bold text-5xl mt-20'>Our Partners</h1>

  <div className='flex flex-col sm:flex-row flex-wrap sm:flex-nowrap items-center sm:justify-center gap-12 p-10 mt-10'>
    <img src={img1} alt="Partner 1" className='w-[50vw] sm:w-[15vw]' />
    <img src={img2} alt="Partner 2" className='w-[40vw] h-auto sm:w-[12vw] sm:h-[3vw]' />
    <img src={img3} alt="Partner 3" className='w-[50vw] sm:w-[15vw]' />
    <img src={img4} alt="Partner 4" className='w-[40vw] h-auto sm:w-[12vw] sm:h-[3vw]' />
    <img src={img5} alt="Partner 5" className='w-[30vw] h-auto sm:w-[12vw] sm:h-[3vw]' />
  </div>
</div>


{/* section9 */}
<div className='flex flex-col items-center mt-10 sm:mt-20 px-4'>
  <div className='flex justify-center items-center mb-10 sm:mb-20'>
    <img src={quote} alt="quote icon" className='w-10 sm:w-16' />
  </div>

  <div className='flex flex-wrap justify-center items-center gap-4 sm:gap-10 md:gap-20 lg:gap-40'>
    <img src={arr_left} alt="left arrow" className='w-6 sm:w-8' />
    
    <p className='w-full sm:w-[70vw] md:w-[50vw] text-center font-medium text-sm sm:text-base'>
      Sustainable Handyman Solution is fantastic! Their eco-friendly approach and attention to detail made my home repairs a breeze. Highly recommended!
    </p>
    
    <img src={arr_right} alt="right arrow" className='w-6 sm:w-8' />
  </div>

  <h1 className='text-center mt-6 sm:mt-10 font-semibold text-base sm:text-lg'>Michelle G.</h1>
</div>

{/* section10 */}
<div className='bg-gray-700 flex flex-col justify-start px-4 sm:px-10 md:px-20 py-10 sm:py-12 md:py-16'>
  <h1 className='text-white text-2xl sm:text-3xl font-bold max-w-full sm:max-w-md md:max-w-lg'>
    Get Premium Handyman Service From Us!
  </h1>

  <div className="mt-4 sm:mt-6 flex flex-wrap gap-3 sm:gap-4">
    <button
      type="submit"
      className="bg-blue-600 text-white text-xs sm:text-sm md:text-base px-5 sm:px-6 md:px-7 py-2 sm:py-2.5 md:py-3 rounded hover:bg-blue-700"
    >
      Get Our Service
    </button>
    <button
      type="submit"
      className="bg-white text-green-600 text-xs sm:text-sm md:text-base px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 rounded hover:bg-gray-100"
    >
      Contact Us
    </button>
  </div>
</div>
{/* section11 */}
<div>
  <div className='flex flex-wrap justify-center items-center mt-10'>
  <img src={shape} alt="" />
  <span>Trustpilot</span>
  </div>
  <div className='flex justify-center items-center mt-4'>
  <img src={green_stars} alt="" />
  </div>
  <div className='flex justify-center items-center mt-4 mb-5'>
    <h1 className='text-2xl font-medium text-center w-[90vw] sm:w-[45vw] md:w-[40vw] text-3xl lg:w-[22vw] text-3xl'>Over 400+ Reviews On Trust Pilot</h1>
  </div>
  {/* Reviews1 */}
  <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 sm:px-8 md:px-12 lg:px-20'>
  <div className='bg-white p-4 rounded shadow'>
    <h3 className='font-bold mb-4'>Very impressed</h3>
    <p>The Handyman came this morning Saturday at 8am bang on time. Got to say he was very professional and polite and did a excellent job building my new chest of drawers - I can highly recommend</p>
    <div className='flex gap-1 mt-6'>
      <span>Mike Lohman</span>
      <span className='text-green-500'>- Verified User</span>
    </div>
    <div className='flex gap-4 mt-4 items-center'>
      <img src={green_stars} alt="" /> 
      <span>2 days ago</span>
    </div>
  </div>
{/* Reviews2 */}
  <div className='bg-white p-4 rounded shadow'>
    <h3 className='font-bold mb-4'>I am very pleased with the work done</h3>
    <p>I am very pleased with the work done. Very quick response, came in half an hour, also completed the work quickly and efficiently at a very decent price. Outstanding value and would definitely recommend!</p>
    <div className='flex gap-1 mt-6'>
      <span>Debbie sheavyn</span>
      <span className='text-green-500'>- Verified User</span>
    </div>
    <div className='flex gap-4 mt-4 items-center'>
      <img src={green_stars} alt="" /> 
      <span>2 days ago</span>
    </div>
  </div>
{/* Reviews3 */}
  <div className='bg-white p-4 rounded shadow'>
    <h3 className='font-bold mb-4'>Léa Chaoui</h3>
    <p>Excellent service! On time, very professional and Super quick! And on top of that a very nice and polite person. I fully recommend him. He built the bunk beds for my kids and the cot for the baby. I fully trust him!</p>
    <div className='flex gap-1 mt-6'>
      <span>Chris Hasan</span>
      <span className='text-green-500'>- Verified User</span>
    </div>
    <div className='flex gap-4 mt-4 items-center'>
      <img src={green_stars} alt="" /> 
      <span>2 days ago</span>
    </div>
  </div>
{/* Reviews4 */}
  <div className='bg-white p-4 rounded shadow'>
    <h3 className='font-bold mb-4'>Put up my shed perfectly</h3>
    <p>Put up my shed perfectly and for a great price, also completed the work quickly and efficiently at a very decent price and affordable prices, very happy with the service I received and I would highly recommend to all my friends and family</p>
    <div className='flex gap-1 mt-6'>
      <span>Melisa</span>
      <span className='text-green-500'>- Verified User</span>
    </div>
    <div className='flex gap-4 mt-4 items-center'>
      <img src={green_stars} alt="" /> 
      <span>2 days ago</span>
    </div>
  </div>
{/* Reviews5 */}
  <div className='bg-white p-4 rounded shadow'>
    <h3 className='font-bold mb-4'>I was very happy with Shawn work</h3>
    <p>He does things really professionally and Care myself and my partner recommend Shawn services to assemble any furniture Our bed wasn’t a easy but with Shawn help. We got it together and placed where we needed attached to the wall !</p>
    <div className='flex gap-1 mt-6'>
      <span>Noor Mirjan</span>
      <span className='text-green-500'>- Verified User</span>
    </div>
    <div className='flex gap-4 mt-4 items-center'>
      <img src={green_stars} alt="" /> 
      <span>2 days ago</span>
    </div>
  </div>
{/* Reviews6 */}
  <div className='bg-white p-4 rounded shadow'>
    <h3 className='font-bold mb-4'>Great work that was done</h3>
    <p>Excellent work, Got to say he was very professional and polite and did a excellent job building my new chest of drawers, managed to dismantle and assemble another item very quickly👍. Great work that was done and was impressed. Was also really friendly</p>
    <div className='flex gap-1 mt-6'>
      <span>Mrs Asha Srivastava</span>
      <span className='text-green-500'>- Verified User</span>
    </div>
    <div className='flex gap-4 mt-4 items-center'>
      <img src={green_stars} alt="" /> 
      <span>2 days ago</span>
    </div>
  </div>
</div>
<div className="flex justify-center">
    <button type="submit" className="bg-white text-blue-700 border border-blue-600 flex justify-center items-center mt-10 text-sm md:text-base px-5 sm:px-6 md:px-7 py-2 sm:py-2.5 md:py-3 rounded">Read All Reviews  
    </button>                
  </div>
  </div>
  {/* section-12 */}
    <div>
  <h2 className="text-xl font-medium text-center m-10">Our Professionals Team</h2>
  <div className="flex flex-wrap justify-center gap-1 px-4">
    
    <div className="w-full md:w-[45%] lg:w-[22%] flex flex-col items-center">
      <div className="bg-blue-100 w-[200px] h-[200px]"></div>
      <h3 className="font-bold pt-2 pb-2 text-center">John Smith</h3>
      <p className="pb-1 text-center">Designation: Master Craftsman</p>
      <p className="text-center">Experience: 3 Years</p>
    </div>

    <div className="w-full md:w-[45%] lg:w-[22%] flex flex-col items-center">
      <div className="bg-blue-100 w-[200px] h-[200px]"></div>
      <h3 className="font-bold pt-2 pb-2 text-center">Emily Johnson</h3>
      <p className="pb-1 text-center">Designation: Plumbing Prodigy</p>
      <p className="text-center">Experience: 3.5 Years</p>
    </div>

    <div className="w-full md:w-[45%] lg:w-[22%] flex flex-col items-center">
      <div className="bg-blue-100 w-[200px] h-[200px]"></div>
      <h3 className="font-bold pt-2 pb-2 text-center">Michael Williams</h3>
      <p className="pb-1 text-center">Designation: Electrical Guru</p>
      <p className="text-center">Experience: 2.5 Years</p>
    </div>

    <div className="w-full md:w-[45%] lg:w-[22%] flex flex-col items-center">
      <div className="bg-blue-100 w-[200px] h-[200px]"></div>
      <h3 className="font-bold pt-2 pb-2 text-center">Christopher Martinez</h3>
      <p className="pb-1 text-center">Designation: Technology Wiz</p>
      <p className="text-center">Experience: 5 Years</p>
    </div>
  </div>
</div>


{/* section-13 */}
<div>
  <div className='flex justify-center items-center'>
    <h2 className='text-2xl text-center font-medium w-[90vw] m-10 sm:w-[30vw] lg:text-3xl w-[40vw]'>Easy and Affordable Pricing</h2>
  </div>
  <div className='flex flex-wrap justify-center gap-10 px-6'>
    {/* Card1 */}
    <div className='bg-yellow-200 p-10 rounded w-[80%] sm:w-[90%] md:w-[45%] lg:w-[25%]'>
      <h5 className='font-bold mb-4 text-xl'>Basic Plan</h5>
      <div className='mb-5'>
        <span className='font-bold text-3xl'>$50</span>
        <span>/month</span>
      </div>
      <ul className='list-disc pl-5 mb-10'>
        <li>10% Off On All Services</li>
        <li>Priority Scheduling</li>
        <li>Maintained Equipment</li>
        <li>Priority Scheduling</li>
      </ul>
      <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 text-sm md:text-base">
        Choose Plan
      </button>
    </div>

    {/* Card2 */}
    <div className='bg-gray-100 p-10 rounded w-[80%] sm:w-[90%] md:w-[45%] lg:w-[25%]'>
      <h5 className='font-bold mb-4 text-xl'>Silver Plan</h5>
      <div className='mb-5'>
        <span className='font-bold text-3xl'>$80</span>
        <span>/month</span>
      </div>
      <ul className='list-disc pl-5 mb-10'>
        <li>15% Off On All Services</li>
        <li>Priority Scheduling</li>
        <li>Maintained Equipment</li>
        <li>Priority Scheduling</li>
      </ul>
      <button className="text-blue-600 border border-blue-600 px-6 py-2 rounded text-sm md:text-base">
        Choose Plan
      </button>
    </div>

    {/* Card3 */}
    <div className='bg-white p-10 rounded w-[80%] sm:w-[90%] md:w-[45%] lg:w-[25%]'>
      <h5 className='font-bold mb-4 text-xl'>Gold Plan</h5>
      <div className='mb-5'>
        <span className='font-bold text-3xl'>$150</span>
        <span>/month</span>
      </div>
      <ul className='list-disc pl-5 mb-10'>
        <li>25% Off On All Services</li>
        <li>Priority Scheduling</li>
        <li>Maintained Equipment</li>
        <li>Priority Scheduling</li>
      </ul>
      <button className="text-blue-600 border border-blue-600 px-6 py-2 rounded text-sm md:text-base">
        Choose Plan
      </button>
    </div>
  </div>
</div>

{/* section-14 */}
   <div className="flex justify-center px-4 sm:px-6 md:px-22">
  <div className="w-full max-w-[600px]">
    <h2 className="text-2xl sm:text-3xl font-medium mt-6 sm:mt-10 mb-6 sm:mb-10 text-left">
      Contact Form
    </h2>

    <div className="flex flex-col md:flex-row gap-4 mb-4">
      <input type="text" placeholder="Name" className="border border-black p-2 w-full md:w-1/2"/>
      <input type="email" placeholder="E-mail Address" className="border border-black p-2 w-full md:w-1/2"/>
    </div>

    <div className="flex flex-col md:flex-row gap-4 mb-4">
      <input type="text" placeholder="Phone" className="border border-black p-2 w-full md:w-1/2"/>
      <select name="subject" id="subject" className="border border-black p-2 w-full md:w-1/2"><option value="">Subject</option>
      </select>
    </div>

    <div className="mb-4">
      <textarea name="message" id="message" placeholder="Message" className="border border-black p-2 w-full h-32"></textarea>
    </div>

    <div className="text-center">
      <button type="submit" className="bg-blue-800 text-white px-6 sm:px-10 md:px-20 py-2 sm:py-2.5 md:py-3 rounded hover:bg-blue-700 transition-all duration-200 text-sm md:text-base">Send Message </button>
    </div>
  </div>
</div>

{/* section-15 */}
<div>
  <h3 className='text-center text-3xl font-medium mt-10'>Our Recent Blog Post</h3>
  <div className='flex flex-wrap gap-10 px-40'>
    <div>
    <div className='w-[20vw] h-[20vw]'></div>
    <span className='text-sm font-bold'>Tips & Trips </span>
    <p>Garden / Sep 26, 2022 </p>
    <h4 className='text-2xl font-medium w-[23vw]'>Top 5 Secrete Home Repairing Tips Discussions</h4>
  </div>
  <div>
    <div className='w-[20vw] h-[20vw]'></div>
    <span className='text-sm font-bold'>Tips & Trips </span>
    <p>Garden / Sep 26, 2022 </p>
    <h4 className='text-2xl font-medium w-[23vw]'>10 Most Popular Comod Clean
Styles for your Home</h4>
  </div>
  <div>
    <div className='w-[20vw] h-[20vw]'></div>
    <span className='text-sm font-bold'>Tips & Trips </span>
    <p>Garden / Sep 26, 2022 </p>
    <h4 className='text-2xl font-medium w-[23vw]'>Repairing Your Home Pipeline Using
Equipment's</h4>
  </div>
  </div>
</div>



  </div>

);

}

export default Webpage;