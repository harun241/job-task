

import Faq from "../component/Faq.jsx";
import Footer from "../component/Footer";

import GetInTouch from "../component/GetInTouch";

function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-start bg-gray-50 dark:bg-gray-900 px-6 text-center pt-20">
      <h1 className="text-5xl font-extrabold text-gray-800 dark:text-gray-100 mb-4">
        Welcome to MyWebsite
      </h1>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed max-w-xl">
        This is the main landing page of your application.  
        Explore our features, learn more about us, and get in touch.  
        We build modern, responsive web apps using React and TailwindCSS.
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
        <a
          href="/about"
          className="px-6 py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
        >
          Learn More
        </a>
        <a
          href="/contact"
          className="px-6 py-3 rounded-lg bg-green-600 text-white font-semibold hover:bg-green-700 transition"
        >
          Contact Us
        </a>
        
      </div>
      <GetInTouch></GetInTouch>
<Faq></Faq>
<Footer></Footer>
    </div>
  );
}

export default Home;
