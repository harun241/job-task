function About() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 px-6">
      <div className="max-w-3xl text-center">
        {/* Heading */}
        <h2 className="text-4xl font-extrabold text-gray-800 dark:text-gray-100 mb-4">
          About Us
        </h2>

        {/* Sub text */}
        <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
          Welcome to <span className="font-semibold text-blue-600 dark:text-blue-400">MyWebsite</span>!  
          We are dedicated to providing you with the best experience possible.  
          Our mission is to build clean, user-friendly, and professional web applications that make life easier.
        </p>

        {/* Extra highlight */}
        <div className="mt-8 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
          <p className="text-gray-700 dark:text-gray-300">
            🚀 This project demonstrates a modern React app powered by{" "}
            <span className="font-semibold text-blue-600 dark:text-blue-400">TailwindCSS</span> and{" "}
            <span className="font-semibold text-green-600 dark:text-green-400">React Router</span>.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
