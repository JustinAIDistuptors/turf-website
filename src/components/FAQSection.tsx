import { useState } from 'react';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'How long does artificial turf typically last?',
      answer: 'With proper maintenance, our artificial turf can last 15-20 years. All our installations come with a minimum 10-year warranty.'
    },
    {
      question: 'Is artificial turf safe for children and pets?',
      answer: 'Yes, our turf is completely safe for children and pets. We use non-toxic materials and offer specialized pet-friendly options with additional drainage and odor control features.'
    },
    {
      question: 'How much maintenance does artificial turf require?',
      answer: 'Artificial turf requires minimal maintenance. Basic care includes occasional rinsing, brushing to maintain the upright position of the grass blades, and removing debris. No mowing, watering, or fertilizing needed.'
    },
    {
      question: 'What is the installation process like?',
      answer: 'Installation typically takes 2-5 days depending on the size of your project. The process includes ground preparation, base installation, turf installation, and infill application. We handle everything from start to finish.'
    },
    {
      question: 'How much does artificial turf cost?',
      answer: 'Costs vary depending on the size of your project and the type of turf selected. Generally, prices range from $8-15 per square foot, including installation. We offer free consultations and quotes.'
    }
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm">
              <button
                className="w-full text-left px-6 py-4 focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <div className="flex justify-between items-center">
                  <h3 className="font-semibold text-lg">{faq.question}</h3>
                  <span className="text-2xl">{openIndex === index ? '−' : '+'}</span>
                </div>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Still have questions?</p>
          <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-all">
            Contact Our Support Team
          </button>
        </div>
      </div>
    </div>
  );
}