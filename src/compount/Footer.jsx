

export default function Footer() {
  return (
    <>
    <div
      className="text-white bg-black w-100%
      flex justify-between pr-6 footer  pt-3" 
      >
      <div className="pl-10 text-white flex max-sm:flex-col  pt-10 items-start justify-start ">
        <div className="leading-8 font-semibold cursor-pointer">
          <h4 >Resources</h4>
          <h4>Gift Cards</h4>
          <h4>Find a Store</h4>
          <h4>Become a Member</h4>
          <h4>Nike x NBA</h4>
          <h4>Nike Journal</h4> 
          <h4>Site Feedback</h4>
        </div>
        {/* <hr  className="border-gray-50 border-spacing-y-10" /> */}
        
        <div className="pl-10 max-sm:p-1 text-white leading-8">
          <h3 className="font-semibold">Help</h3>
          <div className="font-medium
          max-sm:hidden text-gray-500  text-sm leading-8  cursor-pointer zain">
          <h3>Get Help</h3>
          <h3>Order Status</h3>
          <h3>Shipping and Delivery</h3>
          <h3>Returns</h3>
          <h3>Order Cancellation</h3>
          <h3>Payment Options</h3>
          <h3>Gift Card Balance</h3>
          <h3>Contact Us</h3>
          </div>
        </div>
        <div className="pl-10 max-sm:p-1 text-white leading-8 cursor-pointer zain">
          <h3 className="font-semibold">Company</h3>
         <div className="font-medium
         max-sm:hidden text-gray-500   text-sm leading-8 ">
         <h3>About Nike</h3>
          <h3>News</h3>
          <h3>Careers</h3>
          <h3>Investor</h3>
          <h3>Prupose</h3>
          <h3>Sustainability</h3>
         </div>
        </div>
        <div className="pl-10 max-sm:p-1 leading-8 cursor-pointer zain">
          <h3 className="font-semibold">Promotions & Discounts</h3>
          <div className="text-gray-500  
          max-sm:hidden text-sm leading-8 ">
          <h3>Students</h3>
          <h3>Military</h3>
          <h3>Teacher</h3>
          <h3>First Responders & Medical </h3>
          <h3>Professionals</h3>
          <h3>Birthday</h3>
          </div>
        </div>
        </div>
        <div className="flex justify-between w-40 text-2xl pt-10 pr-6">
          <a href=""><i className="fa-brands fa-facebook"></i></a>
          <a href=""><i className="fa-brands fa-instagram"></i></a>
        <a href=""><i className="fa-brands fa-youtube"></i></a>
        <a href=""><i className="fa-brands fa-twitter"></i></a>
      </div>
    </div>

    <div className=" bg-black text-white">
      <div className="flex ">

      <h2 className="p-6"><a href=""><i className="fa-solid fa-location-dot"></i></a> United states</h2><footer className="p-6 text-gray-500  text-sm ">@2023 Nike, Inc All Rights Reserved</footer>
      </div>

    </div>
      </>
  );
}
