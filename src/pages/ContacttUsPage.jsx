import React, { useState } from "react";

const ContactUsPage = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* Contact Us Section */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 px-4 py-12">
        <div className="w-full max-w-3xl bg-white rounded-2xl shadow-2xl p-10">
          <h2 className="text-4xl font-bold text-center text-[#7209b7] mb-2">
            How can we assist you?
          </h2>
         
          <p className="text-gray-600 text-center mb-10 text-lg">
            We're here to answer your questions
          </p>

          {submitted ? (
            <p className="text-center text-xl text-green-600 font-semibold">
              ✅ Thank you! We'll get back to you soon.
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={form.firstName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#7209b7]"
                    placeholder="Enter your first name"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={form.lastName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#7209b7]"
                    placeholder="Enter your last name"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#7209b7]"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#7209b7]"
                  placeholder="Tell us what’s on your mind..."
                />
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="bg-[#7209b7] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#560bad] transition"
                >
                  Send Message
                </button>
              </div>
            </form>
          )}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-[#7209b7] mb-10">
            Frequently Asked Questions
          </h2>
          <FAQSection />
        </div>
      </section>
    </>
  );
};

const FAQSection = () => {
  const [visibleCount, setVisibleCount] = useState(5);
  const [openIndexes, setOpenIndexes] = useState([]);

  const faqs = [
    { question: "What is Sabka Pincode – Sabka Ad Zone?", answer: "It’s a platform to find and connect with trusted local businesses near your pincode." },
    { question: "How do I list my business?", answer: "Simply sign up and follow the prompts to create your business listing." },
    { question: "Is this service free to use?", answer: "Yes, it’s completely free for users searching local services." },
    { question: "Can I contact businesses directly?", answer: "Yes, each listing provides a direct contact option to call or message the business." },
    { question: "How does the platform verify businesses?", answer: "All businesses go through a basic verification to ensure legitimacy." },
    { question: "Can I leave a review?", answer: "Yes, you can rate and review listed businesses after using their services." },
    { question: "Do I need to create an account?", answer: "You can browse without one, but an account helps personalize your experience." },
    { question: "What cities are covered?", answer: "We’re live in 100+ cities and expanding fast!" },
    { question: "How do I update my business info?", answer: "Go to your dashboard and edit your profile any time." },
    { question: "Can I book services online?", answer: "Yes! Many businesses offer instant booking through the platform." },

    
  { question: "What is Sabka Pincode – Sabka Ad Zone?", answer: "It’s a platform to find and connect with trusted local businesses near your pincode." },
  { question: "How do I list my business?", answer: "Simply sign up and follow the prompts to create your business listing." },
  { question: "Is this service free to use?", answer: "Yes, it’s completely free for users searching local services." },
  { question: "Can I contact businesses directly?", answer: "Yes, each listing provides a direct contact option to call or message the business." },
  { question: "How does the platform verify businesses?", answer: "All businesses go through a basic verification to ensure legitimacy." },
  { question: "Can I leave a review?", answer: "Yes, you can rate and review listed businesses after using their services." },
  { question: "Do I need to create an account?", answer: "You can browse without one, but an account helps personalize your experience." },
  { question: "What cities are covered?", answer: "We’re live in 100+ cities and expanding fast!" },
  { question: "How do I update my business info?", answer: "Go to your dashboard and edit your profile any time." },
  { question: "Can I book services online?", answer: "Yes! Many businesses offer instant booking through the platform." },
  { question: "How can I report a fake listing?", answer: "Each profile has a 'Report' button you can use to flag inappropriate listings." },
  { question: "Is my personal data secure?", answer: "Yes, we use secure servers and encryption to keep your data protected." },
  { question: "Can I add multiple businesses?", answer: "Yes, once verified, you can manage multiple businesses under one account." },
  { question: "Can I search based on ratings?", answer: "Absolutely. You can filter results by rating, location, or service type." },
  { question: "Are there any ads on the site?", answer: "We keep ads minimal and relevant to your search." },
  { question: "How do I reset my password?", answer: "Use the 'Forgot Password' option on the login page to reset it via email." },
  { question: "What if I can’t find a business in my area?", answer: "You can request us to add new listings—we’re always expanding." },
  { question: "How soon will a business respond?", answer: "Most respond within 24 hours, but it can vary by service provider." },
  { question: "Do you support regional languages?", answer: "Yes, we’re working to support multiple Indian languages across regions." },
  { question: "How do I advertise my business on the platform?", answer: "Upgrade to a featured listing in your dashboard to boost visibility." },
  { question: "Can I share a listing with friends?", answer: "Yes, each listing has share buttons for WhatsApp, Instagram, and more." },
  { question: "Is there a mobile app?", answer: "Yes! Our app is available on both Android and iOS." },
  { question: "Do businesses get notified instantly?", answer: "Yes, service requests are sent in real-time to the business’s dashboard and email." },
  { question: "How do I contact support?", answer: "Use the contact form or call our helpline during business hours." },
  { question: "Can I save favorite businesses?", answer: "Yes, you can bookmark them to revisit easily from your profile." },
];

 

  const handleToggle = (index) => {
    if (openIndexes.includes(index)) {
      setOpenIndexes(openIndexes.filter((i) => i !== index)); // close it
    } else {
      setOpenIndexes([...openIndexes, index]); // open it
    }
  };

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 5);
  };

  return (
    <div className="space-y-4">
      {faqs.slice(0, visibleCount).map((faq, index) => (
        <div
          key={index}
          className="border rounded-lg p-4 cursor-pointer transition hover:shadow"
          onClick={() => handleToggle(index)}
        >
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-medium text-gray-800">
              {faq.question}
            </h3>
            <span className="text-2xl text-purple-600">
              {openIndexes.includes(index) ? "-" : "+"}
            </span>
          </div>
          {openIndexes.includes(index) && (
            <p className="text-gray-600 mt-2">{faq.answer}</p>
          )}
        </div>
      ))}

      {visibleCount < faqs.length && (
        <div className="text-center mt-6">
          <button
            onClick={handleLoadMore}
            className="px-6 py-2 bg-[#7209b7] text-white rounded-full hover:bg-[#560bad] transition"
          >
            Read More FAQs
          </button>
        </div>
      )}
    </div>
  );
};


export default ContactUsPage;