import { logo } from "../assets";
import { CiLocationOn } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";



function FooterBlue() {
    return (
      // Main container div with flex column layout, centered items, padding, text color, and background color
      <div className="fixed bottom-0 left-0 w-screen flex flex-col items-center px-16 pt-16 pb-8 text-white bg-blue-800 max-md:px-5">
        
        {/* // Inner container div with flex column layout, max width, and specific width */}
        <div className="flex flex-col max-w-full w-[1274px]">
          
          {/* // Horizontal divider */}
          <div className="shrink-0 h-px bg-indigo-200 bg-opacity-50 max-md:max-w-full" />
          
          {/* // Section with flex layout for spacing and alignment */}
          <div className="flex gap-5 justify-between items-start px-0.5 mt-5 w-full max-md:flex-wrap max-md:max-w-full">
            
            {/* // Logo and description */}
            <div className="flex flex-col mt-2 mr-20 text-sm leading-6">
              <img
                loading="lazy"
                srcSet={logo}
                className="self-center aspect-[3.33] w-[304px]"
              />
              <div className="mt-6">
                Engineering Innovation and empowering futures with innovative solutions with a global impact.{" "}
              </div>
            </div>
            
            {/* // Quick links */}
            <div className="flex flex-col mt-2 text-sm">
              <div className="text-base font-semibold">Quick Links</div>
              <div className="mt-4 text-sky-100">Home</div>
              <div className="mt-4">About Us</div>
              <div className="mt-4">Products</div>
              <div className="mt-4">
                Solutions & Services
              </div>
              <div className="mt-4">Contact Us</div>
            </div>
            
            {/* // Third column with contact information */}
            <div className="flex gap-5 self-stretch max-md:flex-wrap">
              <div className="shrink-0 self-start mt-2 w-px bg-indigo-200 bg-opacity-50 h-[304px]" />
              <div className="flex flex-col grow shrink-0 basis-0 w-fit max-md:max-w-full max-sm:hidden">
                
                {/* // Contact Us section with addresses and phone numbers */}
                <div className="flex gap-4 max-md:flex-wrap">
                    <CiLocationOn size={50} className="my-auto aspect-[0.96] w-[23px]"/>
                  <div className="flex flex-col grow shrink-0 basis-0 w-fit max-md:max-w-full max-sm:hidden">
                    <div className="self-center text-base font-semibold">
                      Contact Us
                    </div>

                    <div className="flex gap-4 mt-6 text-sm max-md:flex-wrap max-sm:hidden">
                      <div className="flex-auto">
                        <span className="font-semibold">Singapore</span>
                        <br />
                        <span>
                          Ingenium Automation + Engineering Pte Ltd,
                        </span>
                        <br />
                        <span className="">111 North Bridge Road #21-01,</span>
                        <br />
                        <span className="">Peninsula Plaza,</span>
                        <br />
                        <span className="">Singapore (179098).</span>
                      </div>
                     
                      <CiLocationOn size={50} className="shrink-0 self-start aspect-[0.96] w-[23px]"/>
                    
                      <div className="flex-auto">
                        <span className="font-semibold">Idia</span>
                        <br />
                        <span className="">
                          Ingenium Automation + Engineering Pte Ltd,
                        </span>
                        <br />
                        <span className="">111 North Bridge Road #21-01,</span>
                        <br />
                        <span className="">Peninsula Plaza,</span>
                        <br />
                        <span className="">Singapore (179098).</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* // Additional contact information with phone numbers */}
                <div className="flex gap-5 mt-5 w-full text-sm max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
                  <div className="flex flex-1 gap-3.5">
                  <IoCallOutline size={50} className="shrink-0 w-6 aspect-square"/>
                   
                    <div className="my-auto">(65) 6854 3761</div>
                  </div>
                  <div className="flex flex-1 gap-3.5">
                  <IoCallOutline size={50} className="shrink-0 w-6 aspect-square"/>

                    <div className="my-auto">(65) 6854 3761</div>
                  </div>
                </div>
                
                {/* // Additional address and contact information */}
                <div className="flex gap-4 mt-7 text-sm max-md:flex-wrap">
                   <CiLocationOn size={50} className="shrink-0 self-start aspect-[0.96] w-[23px]"
                  />
                  <div className="flex-auto font-semibold">
                    <span className="">Engineering Office</span>
                    <br />
                    <span className="">
                      Ingenium Automation + Engineering Pte Ltd ,
                    </span>
                    <br />
                    <span className="">10,Ubi Crescent #05-08,</span>
                    <br />
                    <span className="">Ubi Techpark Lobby B,</span>
                    <br />
                    <span className="">Singapore (408564)</span>
                  </div>
                  
                  <CiLocationOn size={50} className="shrink-0 self-start mt-1.5 aspect-[0.96] w-[23px]"/>

                  <div className="flex-auto">
                    <span className="font-semibold">Admin Office</span>
                    <br />
                    <span className="">
                      Ingenium Automation + Engineering Pte Ltd,
                    </span>
                    <br />
                    <span className="">111 North Bridge Road #21-01,</span>
                    <br />
                    <span className="">Peninsula Plaza,</span>
                    <br />
                    <span className="">Singapore (179098).</span>
                  </div>
                </div>
                
                {/* // Additional phone numbers for contact */}
                <div className="flex gap-5 items-start mt-2 w-full text-sm max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
                  <div className="flex flex-1 gap-3.5">
                  <IoCallOutline size={50} className="shrink-0 w-6 aspect-square"/>
                    <div className="my-auto">(65) 6854 3761</div>
                  </div>
                  <div className="flex flex-1 gap-3.5">
                  <IoCallOutline size={50} className="shrink-0 w-6 aspect-square"/>

                    <div className="my-auto">(65) 6854 3761</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* // Horizontal divider for separating sections */}
          <div className="shrink-0 mt-7 h-px bg-indigo-200 bg-opacity-50 max-md:max-w-full" />
          
          {/* // Footer section with copyright and additional links */}
          <div className="flex gap-5 justify-between mt-6 max-w-full text-sm w-[342px]">
            <div>@Copyright 2022</div>
            <div className="flex gap-5 justify-between whitespace-nowrap">
              <div>Help</div>
              <div>Privacy</div>
              <div>Terms</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default FooterBlue;
  