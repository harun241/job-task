// FAQ.jsx
import React, { useState } from "react";

const faqData = [
  {
    question: "Do plumbers deal with heating?",
    answer:
      "Some of our local plumbers are also gas registered and experienced working on heating systems, bathrooms and kitchens.",
  },
  {
    question: "Do you charge a call out fee?",
    answer:
      "We charge a standard call out fee which will be discussed during your booking.",
  },
  {
    question: "How quickly can your company send out an engineer?",
    answer:
      "Depending on your location, we can usually send out an engineer within 1-2 hours.",
  },
  {
    question: "What should I do if I get a water leak?",
    answer:
      "Turn off your main water supply and contact our emergency number immediately.",
  },
];

function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto my-16 bg-white dark:bg-gray-800 p-6 md:p-10 rounded-xl shadow-md">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-800 dark:text-gray-100">
        Frequently Asked Questions
      </h2>

      <div className="space-y-4">
        {faqData.map((item, index) => (
          <div
            key={index}
            className="border-b border-gray-200 dark:border-gray-700 last:border-b-0"
          >
            <button
              className="w-full flex justify-between items-center py-4 text-left font-semibold text-gray-800 dark:text-gray-100 focus:outline-none"
              onClick={() => toggleAccordion(index)}
            >
              {item.question}
              <span
                className={`transform transition-transform duration-300 ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              >
                ▼
              </span>
            </button>

            <div
              className={`overflow-hidden transition-max-height duration-300 text-gray-600 dark:text-gray-300 ${
                openIndex === index ? "max-h-96 py-2" : "max-h-0"
              }`}
            >
              <p className="px-2">{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Faq;
