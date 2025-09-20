import React from "react";
import Spline from "@splinetool/react-spline";

const About = () => {
  return (
    <section id="about" className="min-h-[90vh] p-5 my-8 mx-8 flex ">

        <div className="max-w-30vw">
            <img className="max-h-[60vh]" 
            src="/profilePic.png" alt="" />
        </div>


      <div className="w-70vw ml-[5%] z-10 mt-[70%] md:mt-[40%] lg:mt-0 items-center">
        {/* Box with gradiem */}
        <div
          className="relative w-[95%] sm:w-48 h-9 bg-gradient-to-r from-[#656565] to-[#e99b63] shadow-[0_0_15px_rgba(255,255,0.4)]
            rounded-full"
        >
          <div className="insert-[3px] bg-black rounded-full flex justify-center items-center h-9 ">
            <h4>ABOUT ME</h4>
          </div>
        </div>

        <div>
          <h2 className="font-semibold text-3xl md:text-5xl sm:text-4xl my-8">
            RAHMAT
            <br />
            TULLUS
          </h2>

          <p className="text-base tracking-wider text-gray sm:text-lg max-w-[25rem]">
            I enjoy discovering new perspectives, developing skills, and
            connecting with people who share the same passion for growth and
            innovation.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
