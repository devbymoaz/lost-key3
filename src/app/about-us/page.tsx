"use client";
import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const faqs = [
  {
    question: "What is this platform about?",
    answer:
      "Our platform helps users efficiently manage lost and found items. Whether you've lost something or found an item, you can report and search for it here.",
  },
  {
    question: "How can I report a lost item?",
    answer:
      "To report a lost item, navigate to the 'Report Lost Item' section, provide necessary details including item description, last seen location, and your contact details. Our system will match your report with found items.",
  },
  {
    question: "How can I report a found item?",
    answer:
      "If you've found an item, go to the 'Report Found Item' page and submit details such as item type, description, and where you found it. We will notify users who have reported similar lost items.",
  },
  {
    question: "How does the matching system work?",
    answer:
      "Our platform uses an intelligent matching system that compares lost and found reports based on keywords, locations, and timestamps. If there's a match, both parties are notified via email or on their dashboard.",
  },
  {
    question: "Is there a way to verify ownership?",
    answer:
      "Yes! When someone claims a found item, they are required to provide proof of ownership, such as purchase receipts, unique identifiers, or images taken previously.",
  },
  {
    question: "What if I receive a false claim?",
    answer:
      "If you suspect a false claim, do not hand over the item. Instead, contact support with relevant details, and we will assist in verifying the rightful owner.",
  },
];

export default function Page() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-4xl font-bold text-center text-primary mb-6">FAQs - Instructions</h1>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border border-primary rounded-lg">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center p-4 bg-primary text-white text-left text-lg font-semibold"
            >
              {faq.question}
              {openIndex === index ? (
                <FaChevronUp className="text-xl" />
              ) : (
                <FaChevronDown className="text-xl" />
              )}
            </button>

            <div
              className={`overflow-hidden transition-all duration-300 ${
                openIndex === index ? "max-h-40 p-4 bg-white text-gray-800" : "max-h-0"
              }`}
            >
              {faq.answer}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
