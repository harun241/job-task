// ContactSection.jsx
import React from "react";

const GetInTouchSection = () => {
  return (
    <section className="bg-blue-600 text-white flex flex-col items-center justify-center py-10 px-5 md:px-10 lg:px-20 mt-20 rounded-3xl">
      
      {/* Heading */}
      <h2 className="font-extrabold mb-4 text-3xl sm:text-4xl md:text-5xl lg:text-[58px] text-center max-w-full">
        Get In Touch
      </h2>

      {/* Paragraph */}
      <p className="text-center mb-8 text-base sm:text-lg md:text-xl lg:text-[24px] leading-relaxed max-w-[90%] md:max-w-[1000px]">
        Contact us now to enquire our plumbing services, whether you have a
        commercial project that requires support, or a domestic plumbing task
        that needs the attention of a trusted professional.
      </p>

      {/* Button */}
      <a
        href="#"
        className="bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-200 transition px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-4 lg:px-[6rem] lg:py-[1.5rem] text-center"
      >
        Book a Professional Plumber →
      </a>
    </section>
  );
};

export default GetInTouchSection;
