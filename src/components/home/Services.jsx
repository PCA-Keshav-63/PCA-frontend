const services = [
  {
    icon: "🦷",
    title: "Dentists",
    
    desc: "Find experienced dentists for checkups, braces, and oral care near you."
  },
  {
    icon: "🎨",
    title: "Painting Contractors",
       desc: "Professional painting services for homes, offices, and buildings."
  },
  {
    icon: "🏥",
    title: "Hospitals",
    
    desc: "Multi-specialty hospitals offering 24x7 emergency and OPD services."
  },
  {
    icon: "🖨️",
    title: "Printing & Publishing",
       desc: "Print brochures, business cards, books, and more at great rates."
  },
  {
    icon: "🐜",
    title: "Pest Control",
    
    desc: "Effective solutions for termite, cockroach, and rodent problems."
  },
  {
    icon: "👩‍⚕️",
    title: "Nursing Services",
    
    desc: "Hire qualified nurses for home care and patient monitoring."
  },
  {
    icon: "📚",
    title: "Coaching",
    
    desc: "Top institutes for competitive exams, school subjects, and more."
  },
  {
    icon: "🧑‍💼",
    title: "Placement Services",
    desc: "Find job placements and recruitment support across industries."
  },
  {
    icon: "♻️",
    title: "Scrap Dealers",
    desc: "Sell or recycle metal, paper, and e-waste at fair market rates."
  },
  {
    icon: "❄️",
    title: "AC Services",
    desc: "Installation, servicing, and repair of all major AC brands."
  },
  {
    icon: "📄",
    title: "Registration Consultants",
    desc: "Help with GST, company, property, and legal document registrations."
  },
  {
    icon: "🧹",
    title: "Housekeeping",
    
    desc: "Trained staff for cleaning services in homes, offices, and hotels."
  },
];

import React, { useEffect } from "react";

const Services = [
  { icon: "🦷", title: "Dentists", count: "1,200+", desc: "Find experienced dentists nearby." },
  { icon: "🎨", title: "Painting", count: "950+", desc: "Professional painting for home & office." },
  { icon: "🏥", title: "Hospitals", count: "1,800+", desc: "Multi-specialty hospitals in your city." },
  { icon: "📚", title: "Coaching", count: "2,200+", desc: "Coaching for school & competitive exams." },
  { icon: "♻️", title: "Scrap Dealers", count: "600+", desc: "Recycle metal, paper & e-waste." },
  { icon: "❄️", title: "AC Services", count: "850+", desc: "Installation & repair of all AC brands." },
];

export default function AutoScrollingServices() {
  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      @keyframes scrollX {
        0% { transform: translateX(0); }
        100% { transform: translateX(-50%); }
      }
      .scrolling-wrapper {
        animation: scrollX 30s linear infinite;
        display: flex;
      }
      .scrolling-container:hover .scrolling-wrapper {
        animation-play-state: paused;
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  return (
    <section className="py-16 bg-white">
      <h2 className="text-3xl font-bold text-center mb-6">
        <span className="text-purple-600">Services</span>
      </h2>
      <p className="text-center text-gray-500 mb-8"></p>

      <div className="overflow-hidden scrolling-container w-full">
        <div className="scrolling-wrapper w-max gap-6">
          {[...services, ...services].map((service, index) => (
            <div
              key={index}
              className="w-72 bg-gray-50 rounded-xl p-5 m-2 text-center shadow hover:shadow-md transition shrink-0"
            >
              <div className="text-4xl mb-2">{service.icon}</div>
              <h3 className="text-lg font-semibold text-gray-800">{service.title}</h3>
              <p className="text-sm text-purple-600 mb-1">{service.count}</p>
              <p className="text-sm text-gray-500">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
