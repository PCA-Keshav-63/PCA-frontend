// import React, { useState } from "react";
// import SeoMeta from "../../components/SeoMeta.jsx"; 

// const categories = {
  
//   Astrology:[
//   "Astrologers",
//   "Numerologists",
//   "Palmists",
//   "Tarot Card Readers",
//   "Vastu Consultants",
//   "Kundali Matching",
//   "Horoscope Readers",
//   "Face Readers",
//   "Gemstone Dealers",
//   "Chinese Astrologers",
//   "Nadi Astrologers",
//   "Name Correction Experts",
//   "Astrology for Marriage",
//   "Career Astrology",
//   "Business Astrology",
//   "Love Problem Solution",
//   "Manglik Dosh Experts",
//   "Lal Kitab Experts",
//   "Remedial Astrology",
//   "Spiritual Healers",
//   "Puja & Havan Organisers",
//   "Online Astrologers",
//   "Daily Horoscope Services",
//   "Kundli Makers",
//   "Astrology Classes",
//   "Numerology Classes",
//   "Face Reading Classes",
//   "Vedic Astrology",
//   "Jyotish Shastra Consultants",
//   "Astrology Software Dealers"
// ],

//  Education: [
//   "Abacus Classes",
//   "Boarding Schools",
//   "CBSE Schools",
//   "Colleges",
//   "Convent Schools",
//   "Dance Classes",
//   "Diploma Courses",
//   "Drawing Classes",
//   "Educational Institutes",
//   "Engineering Colleges",
//   "English Medium Schools",
//   "Institutes",
//   "Kindergartens",
//   "Law Colleges",
//   "Libraries",
//   "MBA Colleges",
//   "Medical Colleges",
//   "Montessori Schools",
//   "Music Classes",
//   "Nursery Schools",
//   "Open Schools",
//   "Open University",
//   "Personality Development",
//   "Project Work",
//   "Schools",
//   "Tutorials",
//   "Universities",
//   "Video Editing Classes",
//   "Home Tutors",
//   "Junior Colleges",
//   "Nursing Colleges",
//   "Primary Schools",
//   "Arts Colleges",
//   "Commerce Colleges",
//   "Science Colleges",
//   "Polytechnic Colleges",
//   "Public Schools",
//   "Air Hostess Training Institutes",
//   "CS Tutorials",
//   "B Ed Colleges",
//   "Military Schools",
//   "Government Colleges",
//   "Veterinary Colleges",
//   "Agricultural Colleges",
//   "Senior Secondary Schools",
//   "Digital Marketing Courses",
//   "Online Training For Python",
//   "Public Libraries",
//   "Degree Colleges",
//   "Secondary Schools",
// ],

  
//   "Home Services": [
//     "Electricians", "Plumbers", "Carpenters", "Laundry Services", "Housekeeping", "AC Repair", "Pest Control"
//   ],
//   "Business & Legal": [
//     "Chartered Accountants", "Company Registration", "GST Filing", "Lawyers", "Notary Services"
//   ],
//   "Travel & Transportation": [
//     "Cab Services", "Flight Booking", "Bus Booking", "Tour Packages", "Travel Insurance", "Driving Schools","Travel & Transport",
//   "Bike On Rent",
//   "Bus Services",
//   "Bus Ticketing Agents",
//   "Car Rental",
//   "Car Rental For Outstation",
//   "Car Rental For Wedding",
//   "Car Rental For Self Driven",
//   "Immigration Consultants",
//   "Railway Ticketing Agents",
//   "Taxi Services",
//   "Tour Operators",
//   "Tour Packages",
//   "Domestic Tour Packages",
//   "International Tour Packages",
//   "Tour Packages For Andaman",
//   "Tour Packages For Bali",
//   "Tour Packages For Goa",
//   "Tour Packages For Kashmir",
//   "Tour Packages For Kerala",
//   "Tour Packages For Ladakh",
//   "Tour Packages For Leh",
//   "Tour Packages For Manali",
//   "Tour Packages For Ooty",
//   "Tourism",
//   "Travel Agents",
//   "Mini Bus On Hire",
//   "Bus On Hire",
//   "Caravan On Rent",
//   "Tempo Travellers On Hire",
//   "Scooters On Rent",
//   "Vintage Car Rental",
//   "Luxury Car Rental",
//   "Bicycle On Rent"
// ],

  
//  "Bank": [
//   "ATM", "Banks", "CA", "Car Loans", "Finance Companies", "Home Loans", "Insurance Companies",
//   "Lawyers", "Loans", "Personal Loans", "Mortgage Loans", "Cooperative Banks",
//   "Stock Brokers", "Tax Consultants"
// ],

//   "Accommodation": [
//     "Bungalows On Hire", "Cottages On Hire", "Dharamshalas", "Farm House", "Farm House On Hire",
//     "Guest House", "Hostels", "Hotels", "Lodging Services", "Resorts", "Dormitory Services",
//     "Home Stay", "Villas", "Rooms On Hire", "AC Dormitory Services", "Pet Friendly Resorts",
//     "Paying Guest Accommodations For Women", "Water Park Resorts", "Couple Friendly Hotels",
//     "Government Hostels", "Hostels For Men", "Hostels For Women", "Hostels For Working Men",
//     "Hostels For Working Women", "Government Hostels for Women", "Unisex Paying Guest Accommodations",
//     "Single Occupancy PGs", "Mansions", "Couple PGs", "3 Star Hotels", "4 Star Hotels",
//     "5 Star Hotels", "AC Guest House", "AC Paying Guest Accommodations"
//   ],
//   "Automobile & Two Wheeler": [
//     "24 Hours Towing Services", "Automobile Consultants", "Breakdown Services", "Car AC Repair",
//     "Car Dealers", "Car Denting Services", "Car Interior Decorators", "Car Painting Services",
//     "Car Polishing Services", "Car Washing Services", "Driving License Consultants",
//     "Motor Training Schools", "Motorcycle Dealers", "RTO Consultants", "Scooter Dealers",
//     "Towing Services", "Tyre Puncture Repair", "Wheel Alignment Services", "Flatbed Towing",
//     "Emission Testing Centres", "CNG Cylinder Testing Services", "Valet Parking Services",
//     "Honda/Hyundai Car Repair", "Car Detailing", "Car Repair & Services", "PUC Centres"
//   ],

//   "Beauty, Fitness & Sports": [
//     "Adventure Sports", "Badminton Courts", "Beauticians", "Beauty Parlour Classes",
//     "Beauty Parlours", "Beauty Parlours At Home", "Bridal Makeup Artists", "Body Massage Centres",
//     "Boxing Classes", "Fitness Centres", "Hair Stylists", "Health Clubs", "Karate Classes",
//     "Mehandi Classes", "Salons", "Sports Clubs", "Sports Ground", "Swimming Classes",
//     "Tattoo Artists", "Yoga Classes", "Zumba Classes", "Meditation Centres", "Football Clubs",
//     "Nail Art", "Makeup Artists", "Cricket Clubs", "Unisex Spas", "Gyms", "Crossfit Gyms",
//     "Tattoo for Lips", "Online Yoga/Zumba", "Women Gyms", "Salon Services at Home"
//   ],
//   "Events & Weddings": [
//     "Artists", "Auditoriums", "Bands", "Banquet Halls", "Caterers", "Conference Halls",
//     "Convention Halls", "Decorators", "Disc Jockey", "Event Management Companies",
//     "Event Organisers", "Florists", "Kalyana Mandapams", "Magicians", "Mandap Decorators",
//     "Matrimonial Websites", "Musicians", "Photo Studios", "Photographers", "Playback Singers",
//     "Summer Camps", "Tent House", "Marriage Lawns", "Wildlife Photographers", "Car Decorators",
//     "Balloon Decorators", "Wedding Decorators", "Birthday Party Decorators", "Rock Bands",
//     "Wedding Mandap Decorators", "Candid Photographers", "Jugglers", "Saxophone Players",
//     "Aerial Photographers", "Voice Over Artists", "Drone On Rent", "Pre Wedding Photographers",
//     "Comedians", "Tent Decorators", "Room Decorators", "Event Venues",
//   ],
// };



// const trendingSearches = [
//   "Real Estate Agents",
//   "Book Shops",
//   "Aadhaar Card Agents",
//   "Yoga Classes",
//   "Estate Agents For Land",
//   "Pmjay Scheme Hospitals",
//   "Tutorials For IIT JEE",
//   "Mobile Phone Repair & Services-MI",
//   "Wrist Watch Dealers",
//   "Education Consultants",
//   "Battery Operated Scooter Dealers-OLA",
//   "Entertainment Centres",
//   "DTH TV Broadcast Service Providers-Sun Direct",
//   "AC Repair & Services-Blue Star",
//   "Tnpsc Tutorials",
//   "Mobile Phone Simcard Dealers-Jio",
//   "MPSC Tutorials",
//   "Shoe Dealers-Nike",
//   "Tirupati Darshanam Ticketing Services",
//   "Bitcoin Services",
//   "Mobile Phone Repair & Services-Nothing",
//   "Cat Tutorials",
//   "Lawyers For District Court",
//   "Ayushman Bharat Yojana Consultants",
//   "Lawyers For Supreme Court",
//   "Sports Shoe Dealers",
//   "Courier Services For Ahmedabad",
//   "Internet Payment Gateway Solution Providers",
//   "Taxi Services For Inter City",
//   "BPSC Tutorials",
//   "Courier Services For Canada",
//   "Demat Account Services",
//   "Automobile Part Dealers-Ashok Leyland",
//   "Prp Hair Transplantation Treatment Doctors",
//   "Mutual Fund Agents-SBI",
//   "Courier Services For Dubai",
//   "BEST Enquiry",
//   "Pickleball Courts",
//   "Khatu Shyam Bhajan Singers",
//   "Dairy Product Retailers-Amul",
//   "Tutorials For Mppsc",
//   "Uber Autorickshaw Attachment Services",
//   "Football Dealers",
//   "Courier Services For Surat",
//   "Battery Operated Auto Rickshaw Dealers-Mini Metro",
//   "Electricity Suppliers-Kseb",
//   "Courier Services For Tirupati",
//   "Packers And Movers For Hyderabad",
//   "Newspaper Advertising Agencies-Dainik Bhaskar",
//   "Tutorials For MHT CET"
// ];


// const deals = [
//   "Apple Store", "Kotak Mahindra Bank", "Sony", "McDonald's"
// ];

// const popularCities = [
//   "Bangalore", "Mumbai", "Chennai", "Delhi", "Hyderabad", "Pune", "Ahmedabad",
//   "Lucknow", "Patna", "Jaipur", "Indore", "Kochi", "Kolkata", "Coimbatore", "Nagpur",
//   "Ludhiana", "Agra", "Bhubaneshwar", "Bhopal", "Guwahati", "Surat", "Madurai",
//   "Visakhapatnam", "Sonepat", "Vadodara", "Meerut", "Thiruvananthapuram", "Gurgaon",
//   "Kozhikode", "Varanasi", "Siliguri", "Allahabad", "Rajkot", "Ghaziabad", "Mysore",
//   "Noida", "Chandigarh", "Navi-Mumbai", "Vijayawada", "Durgapur", "Srinagar", "Nashik",
//   "Panipat", "Jammu", "Jodhpur", "Udaipur-Rajasthan", "Thane", "Raipur-Chhattisgarh",
//   "Amritsar", "Jabalpur"
// ];


// export default function Seo() {
//   const [active, setActive] = useState("Accommodation");

//   return (
//     <section className="p-6 bg-white">
//       {/* ✅ Dynamic SEO Meta Tags */}
//       <SeoMeta
//         title={`Explore ${active} | PincodeAds`}
//         description={`Find trusted ${active} services in your area using PincodeAds' smart hyperlocal search.`}
//       />

//       {/* ✅ Category Tabs */}
//       <div className="flex flex-wrap gap-3 mb-6">
//         {Object.keys(categories).map((cat) => (
//           <button
//             key={cat}
//             onClick={() => setActive(cat)}
//             className={`px-4 py-2 rounded-full text-sm font-medium ${
//               active === cat ? "bg-purple-600 text-white" : "bg-gray-200 text-gray-700"
//             }`}
//           >
//             {cat}
//           </button>
//         ))}
//       </div>

//       {/* ✅ Services under selected category */}
//       <div className="flex flex-wrap gap-3 mb-10 text-xs text-gray-800">
//         {categories[active].map((service, i) => (
//           <span
//             key={i}
//             className="border border-gray-300 px-3 py-1 rounded-full hover:bg-purple-100 cursor-pointer"
//           >
//             {service}
//           </span>
//         ))}
//       </div>

//       {/* ✅ Trending Searches */}
//       <div className="mb-6">
//         <h3 className="text-xl font-semibold mb-2">Trending Searches</h3>
//         <div className="flex flex-wrap gap-3 text-xs text-gray-600">
//           {trendingSearches.map((item, i) => (

//             <span key={i} className="underline underline-offset-2 cursor-pointer">
//               {item}
//             </span>
//           ))}
//         </div>
//       </div>

//       {/* ✅ Deals & Offers */}
//       {/* <div>
//         <h3 className="text-xl font-semibold mb-2">Deals and Offers</h3>
//         <div className="flex flex-wrap gap-3 text-xs text-gray-600">
//           {deals.map((item, i) => (
//             <span key={i} className="underline underline-offset-2 cursor-pointer">
//               {item}
//             </span>
//           ))}
//         </div>
//       </div> */}

  

//     </section>
//   );
// }








import React, { useState } from "react";
import SeoMeta from "../../components/SeoMeta.jsx"; 

const categories = {
  Astrology:[
    "Astrologers",
    "Numerologists",
    "Palmists",
    "Tarot Card Readers",
    "Vastu Consultants",
    "Kundali Matching",
    "Horoscope Readers",
    "Face Readers",
    "Gemstone Dealers",
    "Chinese Astrologers",
    "Nadi Astrologers",
    "Name Correction Experts",
    "Astrology for Marriage",
    "Career Astrology",
    "Business Astrology",
    "Love Problem Solution",
    "Manglik Dosh Experts",
    "Lal Kitab Experts",
    "Remedial Astrology",
    "Spiritual Healers",
    "Puja & Havan Organisers",
    "Online Astrologers",
    "Daily Horoscope Services",
    "Kundli Makers",
    "Astrology Classes",
    "Numerology Classes",
    "Face Reading Classes",
    "Vedic Astrology",
    "Jyotish Shastra Consultants",
    "Astrology Software Dealers"
  ],

  Education: [
    "Abacus Classes",
    "Boarding Schools",
    "CBSE Schools",
    "Colleges",
    "Convent Schools",
    "Dance Classes",
    "Diploma Courses",
    "Drawing Classes",
    "Educational Institutes",
    "Engineering Colleges",
    "English Medium Schools",
    "Institutes",
    "Kindergartens",
    "Law Colleges",
    "Libraries",
    "MBA Colleges",
    "Medical Colleges",
    "Montessori Schools",
    "Music Classes",
    "Nursery Schools",
    "Open Schools",
    "Open University",
    "Personality Development",
    "Project Work",
    "Schools",
    "Tutorials",
    "Universities",
    "Video Editing Classes",
    "Home Tutors",
    "Junior Colleges",
    "Nursing Colleges",
    "Primary Schools",
    "Arts Colleges",
    "Commerce Colleges",
    "Science Colleges",
    "Polytechnic Colleges",
    "Public Schools",
    "Air Hostess Training Institutes",
    "CS Tutorials",
    "B Ed Colleges",
    "Military Schools",
    "Government Colleges",
    "Veterinary Colleges",
    "Agricultural Colleges",
    "Senior Secondary Schools",
    "Digital Marketing Courses",
    "Online Training For Python",
    "Public Libraries",
    "Degree Colleges",
    "Secondary Schools",
  ],

  "Home Services": [
    "Electricians", "Plumbers", "Carpenters", "Laundry Services", "Housekeeping", "AC Repair", "Pest Control"
  ],
  "Business & Legal": [
    "Chartered Accountants", "Company Registration", "GST Filing", "Lawyers", "Notary Services"
  ],
  "Travel & Transportation": [
    "Cab Services", "Flight Booking", "Bus Booking", "Tour Packages", "Travel Insurance", "Driving Schools",
    "Travel & Transport",
    "Bike On Rent",
    "Bus Services",
    "Bus Ticketing Agents",
    "Car Rental",
    "Car Rental For Outstation",
    "Car Rental For Wedding",
    "Car Rental For Self Driven",
    "Immigration Consultants",
    "Railway Ticketing Agents",
    "Taxi Services",
    "Tour Operators",
    "Tour Packages",
    "Domestic Tour Packages",
    "International Tour Packages",
    "Tour Packages For Andaman",
    "Tour Packages For Bali",
    "Tour Packages For Goa",
    "Tour Packages For Kashmir",
    "Tour Packages For Kerala",
    "Tour Packages For Ladakh",
    "Tour Packages For Leh",
    "Tour Packages For Manali",
    "Tour Packages For Ooty",
    "Tourism",
    "Travel Agents",
    "Mini Bus On Hire",
    "Bus On Hire",
    "Caravan On Rent",
    "Tempo Travellers On Hire",
    "Scooters On Rent",
    "Vintage Car Rental",
    "Luxury Car Rental",
    "Bicycle On Rent"
  ],

  "Bank": [
    "ATM", "Banks", "CA", "Car Loans", "Finance Companies", "Home Loans", "Insurance Companies",
    "Lawyers", "Loans", "Personal Loans", "Mortgage Loans", "Cooperative Banks",
    "Stock Brokers", "Tax Consultants"
  ],

  "Accommodation": [
    "Bungalows On Hire", "Cottages On Hire", "Dharamshalas", "Farm House", "Farm House On Hire",
    "Guest House", "Hostels", "Hotels", "Lodging Services", "Resorts", "Dormitory Services",
    "Home Stay", "Villas", "Rooms On Hire", "AC Dormitory Services", "Pet Friendly Resorts",
    "Paying Guest Accommodations For Women", "Water Park Resorts", "Couple Friendly Hotels",
    "Government Hostels", "Hostels For Men", "Hostels For Women", "Hostels For Working Men",
    "Hostels For Working Women", "Government Hostels for Women", "Unisex Paying Guest Accommodations",
    "Single Occupancy PGs", "Mansions", "Couple PGs", "3 Star Hotels", "4 Star Hotels",
    "5 Star Hotels", "AC Guest House", "AC Paying Guest Accommodations"
  ],
  "Automobile & Two Wheeler": [
    "24 Hours Towing Services", "Automobile Consultants", "Breakdown Services", "Car AC Repair",
    "Car Dealers", "Car Denting Services", "Car Interior Decorators", "Car Painting Services",
    "Car Polishing Services", "Car Washing Services", "Driving License Consultants",
    "Motor Training Schools", "Motorcycle Dealers", "RTO Consultants", "Scooter Dealers",
    "Towing Services", "Tyre Puncture Repair", "Wheel Alignment Services", "Flatbed Towing",
    "Emission Testing Centres", "CNG Cylinder Testing Services", "Valet Parking Services",
    "Honda/Hyundai Car Repair", "Car Detailing", "Car Repair & Services", "PUC Centres"
  ],

  "Beauty, Fitness & Sports": [
    "Adventure Sports", "Badminton Courts", "Beauticians", "Beauty Parlour Classes",
    "Beauty Parlours", "Beauty Parlours At Home", "Bridal Makeup Artists", "Body Massage Centres",
    "Boxing Classes", "Fitness Centres", "Hair Stylists", "Health Clubs", "Karate Classes",
    "Mehandi Classes", "Salons", "Sports Clubs", "Sports Ground", "Swimming Classes",
    "Tattoo Artists", "Yoga Classes", "Zumba Classes", "Meditation Centres", "Football Clubs",
    "Nail Art", "Makeup Artists", "Cricket Clubs", "Unisex Spas", "Gyms", "Crossfit Gyms",
    "Tattoo for Lips", "Online Yoga/Zumba", "Women Gyms", "Salon Services at Home"
  ],
  "Events & Weddings": [
    "Artists", "Auditoriums", "Bands", "Banquet Halls", "Caterers", "Conference Halls",
    "Convention Halls", "Decorators", "Disc Jockey", "Event Management Companies",
    "Event Organisers", "Florists", "Kalyana Mandapams", "Magicians", "Mandap Decorators",
    "Matrimonial Websites", "Musicians", "Photo Studios", "Photographers", "Playback Singers",
    "Summer Camps", "Tent House", "Marriage Lawns", "Wildlife Photographers", "Car Decorators",
    "Balloon Decorators", "Wedding Decorators", "Birthday Party Decorators", "Rock Bands",
    "Wedding Mandap Decorators", "Candid Photographers", "Jugglers", "Saxophone Players",
    "Aerial Photographers", "Voice Over Artists", "Drone On Rent", "Pre Wedding Photographers",
    "Comedians", "Tent Decorators", "Room Decorators", "Event Venues",
  ],
};

const trendingSearches = [
  "Real Estate Agents",
  "Book Shops",
  "Aadhaar Card Agents",
  "Yoga Classes",
  "Estate Agents For Land",
  "Pmjay Scheme Hospitals",
  "Tutorials For IIT JEE",
  "Mobile Phone Repair & Services-MI",
  "Wrist Watch Dealers",
  "Education Consultants",
  "Battery Operated Scooter Dealers-OLA",
  "Entertainment Centres",
  "DTH TV Broadcast Service Providers-Sun Direct",
  "AC Repair & Services-Blue Star",
  "Tnpsc Tutorials",
  "Mobile Phone Simcard Dealers-Jio",
  "MPSC Tutorials",
  "Shoe Dealers-Nike",
  "Tirupati Darshanam Ticketing Services",
  "Bitcoin Services",
  "Mobile Phone Repair & Services-Nothing",
  "Cat Tutorials",
  "Lawyers For District Court",
  "Ayushman Bharat Yojana Consultants",
  "Lawyers For Supreme Court",
  "Sports Shoe Dealers",
  "Courier Services For Ahmedabad",
  "Internet Payment Gateway Solution Providers",
  "Taxi Services For Inter City",
  "BPSC Tutorials",
  "Courier Services For Canada",
  "Demat Account Services",
  "Automobile Part Dealers-Ashok Leyland",
  "Prp Hair Transplantation Treatment Doctors",
  "Mutual Fund Agents-SBI",
  "Courier Services For Dubai",
  "BEST Enquiry",
  "Pickleball Courts",
  "Khatu Shyam Bhajan Singers",
  "Dairy Product Retailers-Amul",
  "Tutorials For Mppsc",
  "Uber Autorickshaw Attachment Services",
  "Football Dealers",
  "Courier Services For Surat",
  "Battery Operated Auto Rickshaw Dealers-Mini Metro",
  "Electricity Suppliers-Kseb",
  "Courier Services For Tirupati",
  "Packers And Movers For Hyderabad",
  "Newspaper Advertising Agencies-Dainik Bhaskar",
  "Tutorials For MHT CET"
];

const deals = [
  "Apple Store", "Kotak Mahindra Bank", "Sony", "McDonald's"
];

const popularCities = [
  "Bangalore", "Mumbai", "Chennai", "Delhi", "Hyderabad", "Pune", "Ahmedabad",
  "Lucknow", "Patna", "Jaipur", "Indore", "Kochi", "Kolkata", "Coimbatore", "Nagpur",
  "Ludhiana", "Agra", "Bhubaneshwar", "Bhopal", "Guwahati", "Surat", "Madurai",
  "Visakhapatnam", "Sonepat", "Vadodara", "Meerut", "Thiruvananthapuram", "Gurgaon",
  "Kozhikode", "Varanasi", "Siliguri", "Allahabad", "Rajkot", "Ghaziabad", "Mysore",
  "Noida", "Chandigarh", "Navi-Mumbai", "Vijayawada", "Durgapur", "Srinagar", "Nashik",
  "Panipat", "Jammu", "Jodhpur", "Udaipur-Rajasthan", "Thane", "Raipur-Chhattisgarh",
  "Amritsar", "Jabalpur"
];

const pcaCategories = [
  "Dentists", "Painting Contractors", "Hospitals", "Printing & Publishing Services",
  "Pest Control Services", "Nursing Services", "Coaching", "Placement Services",
  "Scrap Dealers", "AC Service", "Registration Consultants", "House keeping Services",
  "Car Repair & Services", "Body Massage Centers", "Real Estate", "Event Organizer",
  "Internet Website Designers", "Fabricators", "Courier Services", 
  "Chartered Accountant", "Jewellery Showrooms", "Beauty Spa", "Caterers", 
  "Astrologers", "Photographers", "Dermatologists", 
  "Computer & Laptop Repair & Services", "Interior Designers", "Transporters",
  "Computer Training Institutes", "Lawyers", "Furniture Repair Services", 
  "Packers & Movers", "Electricians", "Security System", "Hobbies", 
  "Vocational training"
];

export default function Seo() {
  const [active, setActive] = useState("Accommodation");

  return (
    <section className="p-6 bg-white">
      {/* ✅ Dynamic SEO Meta Tags */}
      <SeoMeta
        title={`Explore ${active} | PincodeAds`}
        description={`Find trusted ${active} services in your area using PincodeAds' smart hyperlocal search.`}
      />

      {/* ✅ Category Tabs */}
      <div className="flex flex-wrap gap-3 mb-6">
        {Object.keys(categories).map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`px-4 py-2 rounded-full text-sm font-medium ${
              active === cat ? "bg-purple-600 text-white" : "bg-gray-200 text-gray-700"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* ✅ Services under selected category */}
      <div className="flex flex-wrap gap-3 mb-10 text-xs text-gray-800">
        {categories[active].map((service, i) => (
          <span
            key={i}
            className="border border-gray-300 px-3 py-1 rounded-full hover:bg-purple-100 cursor-pointer"
          >
            {service}
          </span>
        ))}
      </div>

      {/* ✅ Trending Searches */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Trending Searches</h3>
        <div className="flex flex-wrap gap-3 text-xs text-gray-600">
          {trendingSearches.map((item, i) => (
            <span key={i} className="underline underline-offset-2 cursor-pointer">
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Uncomment if Deals & Offers section needed */}
      {/* 
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Deals and Offers</h3>
        <div className="flex flex-wrap gap-3 text-xs text-gray-600">
          {deals.map((item, i) => (
            <span key={i} className="underline underline-offset-2 cursor-pointer">
              {item}
            </span>
          ))}
        </div>
      </div> 
      */}

      {/* ✅ Popular Cities */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Popular Cities</h3>
        {/* <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3 text-xs text-gray-600"> */}
         <div className="flex flex-wrap gap-3 text-xs text-gray-600">
          {popularCities.map((city, i) => (
            <span 
              key={i} 
              className="underline underline-offset-2 cursor-pointer hover:text-purple-600 transition"
            >
              {city}
            </span>
          ))}
        </div>
      </div>

      {/* ✅ Explore PCA Categories */}
      <div>
        <h3 className="text-xl font-semibold mb-2">Explore PCA Categories</h3>
        <div className="flex flex-wrap gap-3 text-xs text-gray-800">
          {pcaCategories.map((category, i) => (
            <span
              key={i}
              className="border border-gray-300 px-3 py-1 rounded-full hover:bg-purple-100 cursor-pointer"
            >
              {category}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}