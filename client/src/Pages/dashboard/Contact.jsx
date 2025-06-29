import React, { useState } from "react";
import BreadCrumb from "../../Components/minor/BreadCrumb";

const faqData = [
  {
    title: "How can I rent products?",
    faqs: [
      {
        q: "How do I create an account?",
        a: "You can create an account by clicking on the 'Sign Up' button and filling out the form.",
      },
      {
        q: "Is there a rental fee?",
        a: "Yes, each product has its own rental fee based on the duration.",
      },
      {
        q: "Can I rent multiple products at once?",
        a: "Yes, add multiple products to your cart and proceed to checkout.",
      },
      {
        q: "How long can I rent a product?",
        a: "You can choose from daily or monthly rental durations as available.",
      },
    ],
  },
  {
    title: "How do I list for rent?",
    faqs: [
      {
        q: "How do I upload my product?",
        a: "Go to your dashboard and click on 'List Products for Rent'.",
      },
      {
        q: "What information is required?",
        a: "You’ll need to provide title, description, location, pricing, and images.",
      },
      {
        q: "Can I edit my listing later?",
        a: "Yes, you can manage your listings anytime from your account dashboard.",
      },
      {
        q: "Are there any listing fees?",
        a: "Currently, listing is free but subject to change with prior notice.",
      },
    ],
  },
  {
    title: "Ordering and Payment",
    faqs: [
      {
        q: "What payment methods do you accept?",
        a: "We accept credit/debit cards and PayPal.",
      },
      {
        q: "Can I cancel an order?",
        a: "Orders can be cancelled before they are confirmed by the lender.",
      },
      {
        q: "Is my payment secure?",
        a: "Yes, all payments are processed securely through Stripe.",
      },
      {
        q: "Do I get a receipt?",
        a: "Yes, an invoice will be emailed to you after checkout.",
      },
    ],
  },
  {
    title: "Shipping and Product Information",
    faqs: [
      {
        q: "Who handles delivery?",
        a: "Delivery is managed between renter and lister or through our logistics partners.",
      },
      {
        q: "Can I track my rental?",
        a: "Yes, tracking is available when shipped through our partner.",
      },
      {
        q: "What if the product is damaged?",
        a: "Security deposit may be used and disputes handled by our support team.",
      },
      {
        q: "Are the products verified?",
        a: "Yes, we verify users and products for quality and reliability.",
      },
    ],
  },
];

const Contact = () => {
  const [openFAQ, setOpenFAQ] = useState({});

  const toggleFAQ = (section, index) => {
    setOpenFAQ((prev) => ({
      ...prev,
      [`${section}-${index}`]: !prev[`${section}-${index}`],
    }));
  };

  return (
    <div className="w-full text-gray-800">
      {/* Hero Section */}
      <div className="relative h-screen bg-[#fff5f1] flex flex-col justify-center items-center text-center px-4 gap-y-3">
        <BreadCrumb />
        <h1 className="text-5xl font-bold text-[#4b2e2e] mb-4">
          Customer Support
        </h1>
        <p className="max-w-xl text-lg">
          Find answers to frequently asked questions or get in touch with our
          customer service
        </p>
      </div>

      {/* FAQ Section */}
      <div className="w-4/5 mx-auto py-10 px-4 space-y-16">
        {faqData.map((section, sIndex) => (
          <div
            key={sIndex}
            className="flex flex-col md:flex-row gap-x-6 items-start"
          >
            <h2 className="text-4xl font-bold mb-6 text-[#4b2e2e] w-full md:w-2/5">
              {section.title}
            </h2>
            <div className="flex flex-col gap-4 w-full md:w-3/5">
              {section.faqs.map((faq, i) => {
                const isOpen = openFAQ[`${sIndex}-${i}`];
                return (
                  <div key={i} className="bg-white shadow-sm px-4 py-3 rounded">
                    <button
                      onClick={() => toggleFAQ(sIndex, i)}
                      className="w-full flex justify-between items-center font-medium text-left"
                    >
                      <span>{faq.q}</span>
                      <span className="text-xl">{isOpen ? "−" : "+"}</span>
                    </button>
                    {isOpen && (
                      <p className="mt-2 text-sm text-gray-600">{faq.a}</p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Get in Touch Section */}
      <div className="min-h-screen bg-[#fff5f1] flex flex-col justify-center items-center text-center px-4">
        <h2 className="text-5xl font-bold text-[#4b2e2e] mb-4">Get in Touch</h2>
        <p className="max-w-xl text-lg mb-8">
          Didn't get your answer? Contact us directly.
        </p>
        <div className="flex flex-col  md:flex-row gap-6">
          <div className="bg-white py-2 rounded shadow w-72 flex flex-col gap-y-3">
            <h4 className="text-xl font-semibold text-[#4b2e2e] mb-2">
              Email Us
            </h4>
            <p className="text-sm text-gray-600">
              Send us an email and we’ll get back to you within 24 hours.
            </p>
            <big className="text-center pt-2 border-t border-dashed border-[#4b2e2e]">
              easlyrented@gmail.com
            </big>
          </div>
          <div className="bg-white py-2 rounded shadow w-72 flex flex-col gap-y-3">
            <h4 className="text-xl font-semibold text-[#4b2e2e] mb-2">
              Call Us
            </h4>
            <p className="text-sm text-gray-600">
              Talk to our support team for urgent queries during business hours.
            </p>
            <big className="text-center pt-2 border-t border-dashed border-[#4b2e2e]">
              +92 304 2323445
            </big>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
