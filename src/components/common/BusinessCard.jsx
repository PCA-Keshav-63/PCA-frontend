// "use client"

// import { Star, MapPin, Phone } from "lucide-react"
// import { useApp } from "../../context/AppContext.jsx"

// function BusinessCard({ business }) {
//   const { name, category, rating, reviews, image, location, phone, isOpen } = business
//   const { state, dispatch } = useApp()

//   const handleBookNow = () => {
//     if (!state.isAuthenticated) {
//       dispatch({ type: "SHOW_AUTH_MODAL" })
//       // In a real app, you might want to redirect to login page
//       window.location.href = "/login"
//     } else {
//       // Handle booking logic for authenticated users
//       console.log("Booking service for:", name)
//     }
//   }

//   return (
//     <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 overflow-hidden border border-gray-100">
//       {/* Image */}
//       <div className="relative overflow-hidden">
//         <img
//           src={image || "/placeholder.svg?height=200&width=300"}
//           alt={name}
//           className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-300"
//         />
//         <div className="absolute top-4 right-4">
//           <div
//             className={`px-3 py-1 rounded-full text-sm font-semibold backdrop-blur-md ${
//               isOpen ? "bg-green-500/90 text-white" : "bg-red-500/90 text-white"
//             }`}
//           >
//             {isOpen ? "Open Now" : "Closed"}
//           </div>
//         </div>
//       </div>

//       <div className="p-6">
//         {/* Header */}
//         <div className="mb-4">
//           <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-indigo-600 transition-colors">{name}</h3>
//           <p className="text-indigo-600 font-medium">{category}</p>
//         </div>

//         {/* Rating */}
//         <div className="flex items-center mb-4">
//           <div className="flex items-center space-x-1">
//             {[...Array(5)].map((_, i) => (
//               <Star
//                 key={i}
//                 className={`w-4 h-4 ${i < Math.floor(rating) ? "text-yellow-400 fill-current" : "text-gray-300"}`}
//               />
//             ))}
//             <span className="ml-2 font-semibold text-gray-900">{rating}</span>
//           </div>
//           <span className="ml-2 text-gray-600">({reviews} reviews)</span>
//         </div>

//         {/* Details */}
//         <div className="space-y-2 mb-6">
//           <div className="flex items-center text-gray-600">
//             <MapPin className="w-4 h-4 mr-2 text-indigo-500" />
//             <span className="text-sm">{location}</span>
//           </div>
//           <div className="flex items-center text-gray-600">
//             <Phone className="w-4 h-4 mr-2 text-indigo-500" />
//             <span className="text-sm">{phone}</span>
//           </div>
//         </div>

//         {/* Actions */}
//         <div className="flex gap-3">
//           <button
//             onClick={handleBookNow}
//             className="flex-1 bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 px-4 rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-200 font-semibold"
//           >
//             Book Now
//           </button>
//           <button className="px-4 py-3 border-2 border-gray-200 rounded-xl hover:border-indigo-300 hover:bg-indigo-50 transition-all duration-200 font-semibold text-gray-700">
//             View Details
//           </button>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default BusinessCard

"use client"

import { MapPin, Phone, Clock } from "lucide-react"
import { useApp } from "../../context/AppContext.jsx"

function BusinessCard({ business }) {
  const {
    title,
    description,
    address,
    pincode,
    city,
    district,
    priceFrom,
    priceTo,
    timings,
    keywordsJson,
    phoneNumbersJson,
    images,
    business: businessOwner,
  } = business

  const { state, dispatch } = useApp()

  // Parse JSON strings safely
  const keywords = keywordsJson ? JSON.parse(keywordsJson) : []
  const phoneNumbers = phoneNumbersJson ? JSON.parse(phoneNumbersJson) : []
  const primaryImage = images && images.length > 0 ? images[0].imageUrl : null
  const owner = businessOwner && businessOwner.length > 0 ? businessOwner[0] : null

  // Format location
  const fullAddress = [address, city, district, pincode].filter(Boolean).join(", ")

  // Format price range
  const priceRange =
    priceFrom && priceTo
      ? `₹${priceFrom} - ₹${priceTo}`
      : priceFrom
        ? `From ₹${priceFrom}`
        : priceTo
          ? `Up to ₹${priceTo}`
          : null

  const handleBookNow = () => {
    if (!state.isAuthenticated) {
      dispatch({ type: "SHOW_AUTH_MODAL" })
      window.location.href = "/login"
    } else {
      console.log("Booking service for:", title)
    }
  }

  const handleCall = (phoneNumber) => {
    window.location.href = `tel:${phoneNumber}`
  }

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200 overflow-hidden">
      <div className="flex">
        {/* Image Section */}
        <div className="w-48 h-40 flex-shrink-0">
          <img
            src={primaryImage || "/placeholder.svg?height=160&width=192"}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content Section */}
        <div className="flex-1 p-4">
          {/* Header */}
          <div className="mb-2">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                  {title}
                  {owner && <span className="text-sm font-normal text-gray-600 ml-2">- {owner.name}</span>}
                </h3>
                {description && <p className="text-sm text-gray-600 mb-2 line-clamp-2">{description}</p>}
              </div>
            </div>
          </div>

          {/* Location */}
          {fullAddress && (
            <div className="flex items-start mb-2">
              <MapPin className="w-4 h-4 text-red-500 mt-0.5 mr-2 flex-shrink-0" />
              <span className="text-sm text-gray-700">{fullAddress}</span>
            </div>
          )}

          {/* Timing and Price */}
          <div className="flex items-center gap-4 mb-3 text-sm">
            {timings && (
              <div className="flex items-center">
                <Clock className="w-4 h-4 text-green-600 mr-1" />
                <span className="text-gray-700">{timings}</span>
              </div>
            )}
            {priceRange && (
              <div className="flex items-center">
                <span className="text-gray-700">• {priceRange}</span>
              </div>
            )}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2 mb-3">
            {phoneNumbers.length > 0 && (
              <button
                onClick={() => handleCall(phoneNumbers[0])}
                className="flex items-center bg-green-600 text-white px-4 py-2 rounded text-sm font-medium hover:bg-green-700 transition-colors"
              >
                <Phone className="w-4 h-4 mr-1" />
                {phoneNumbers[0]}
              </button>
            )}
            <button
              onClick={handleBookNow}
              className="bg-blue-600 text-white px-4 py-2 rounded text-sm font-medium hover:bg-blue-700 transition-colors"
            >
              Book Now
            </button>
            <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded text-sm font-medium hover:bg-gray-50 transition-colors">
              View Details
            </button>
          </div>

          {/* Keywords/Tags */}
          {keywords.length > 0 && (
            <div className="flex flex-wrap gap-1">
              {keywords.slice(0, 4).map((keyword, index) => (
                <span
                  key={index}
                  className="inline-block bg-purple-100 text-purple-700 px-2 py-1 rounded-full text-xs font-medium"
                >
                  #{keyword}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default BusinessCard

















// "use client";

// import { useState, useEffect } from "react";
// import { MapPin, Phone, Clock } from "lucide-react";
// import { useApp } from "../../context/AppContext.jsx";

// function BusinessCard({ business }) {
//   const {
//     title,
//     description,
//     address,
//     pincode,
//     city,
//     district,
//     priceFrom,
//     priceTo,
//     timings,
//     keywordsJson,
//     phoneNumbersJson,
//     images,
//     business: businessOwner, // nested business object
//   } = business;

//   const { state, dispatch } = useApp();
//   console.log("Business Data:", business);
//   // Parse JSON strings safely
//   const keywords = keywordsJson ? JSON.parse(keywordsJson) : [];
//   const phoneNumbers = phoneNumbersJson ? JSON.parse(phoneNumbersJson) : [];
//   const primaryImage = images && images.length > 0 ? images[0].imageUrl : null;

//   // Get business name and profile picture from nested business object if present
//   const ownerName = businessOwner?.name;
//   const ownerProfilePicture = businessOwner?.profilePictureUrl;
//   console.log("Business Owner:", businessOwner);

//   // Carousel state for auto-swipe
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   useEffect(() => {
//     if (images && images.length > 1) {
//       const interval = setInterval(() => {
//         setCurrentImageIndex((prevIndex) =>
//           prevIndex === images.length - 1 ? 0 : prevIndex + 1
//         );
//       }, 3000);
//       return () => clearInterval(interval);
//     }
//   }, [images]);

//   // Format location
//   const fullAddress = [address, city, district, pincode]
//     .filter(Boolean)
//     .join(", ");

//   // Format price range
//   const priceRange =
//     priceFrom && priceTo
//       ? `₹${priceFrom} - ₹${priceTo}`
//       : priceFrom
//       ? `From ₹${priceFrom}`
//       : priceTo
//       ? `Up to ₹${priceTo}`
//       : null;

//   const handleBookNow = () => {
//     if (!state.isAuthenticated) {
//       dispatch({ type: "SHOW_AUTH_MODAL" });
//       window.location.href = "/login";
//     } else {
//       console.log("Booking service for:", title);
//     }
//   };

//   const handleCall = (phoneNumber) => {
//     window.location.href = `tel:${phoneNumber}`;
//   };

//   return (
//     <div className="bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200 overflow-hidden">
//       <div className="flex">
//         {/* Image Carousel Section */}
//         <div className="w-48 h-40 flex-shrink-0 relative overflow-hidden">
//           {images && images.length > 0 ? (
//             <>
//               <div
//                 className="flex transition-transform duration-500 ease-in-out h-full"
//                 style={{
//                   transform: `translateX(-${currentImageIndex * 100}%)`,
//                 }}
//               >
//                 {images.map((image, index) => (
//                   <img
//                     key={image.id || index}
//                     src={image.imageUrl || "/placeholder.svg"}
//                     alt={`${title} - Image ${index + 1}`}
//                     className="w-full h-full object-cover flex-shrink-0"
//                   />
//                 ))}
//               </div>
//               {images.length > 1 && (
//                 <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1">
//                   {images.map((_, index) => (
//                     <div
//                       key={index}
//                       className={`w-2 h-2 rounded-full ${
//                         index === currentImageIndex ? "bg-white" : "bg-white/50"
//                       }`}
//                     />
//                   ))}
//                 </div>
//               )}
//             </>
//           ) : (
//             <img
//               src="/placeholder.svg?height=160&width=192"
//               alt={title}
//               className="w-full h-full object-cover"
//             />
//           )}
//         </div>

//         {/* Content Section */}
//         <div className="flex-auto p-4">
//           {/* Header */}
//           <div className="mb-2">
//             <div className="flex items-start justify-between">
//               <div>
//                 <h3 className="text-lg font-semibold text-gray-900 mb-1">
//                   {title}
//                 </h3>
//                 {(ownerProfilePicture || ownerName) && (
//                   <div className="flex items-center mb-1">
//                     {ownerProfilePicture && (
//                       <img
//                         src={ownerProfilePicture}
//                         alt={ownerName}
//                         className="w-6 h-6 rounded-full border border-gray-200 mr-2"
//                       />
//                     )}
//                     {ownerName && (
//                       <span className="text-sm font-normal text-gray-600">
//                         by {ownerName}
//                       </span>
//                     )}
//                   </div>
//                 )}
//                 {description && (
//                   <p className="text-sm text-gray-600 mb-2 line-clamp-2">
//                     {description}
//                   </p>
//                 )}
//               </div>
//             </div>
//           </div>

//           {/* Location */}
//           {fullAddress && (
//             <div className="flex items-start mb-2">
//               <MapPin className="w-4 h-4 text-red-500 mt-0.5 mr-2 flex-shrink-0" />
//               <span className="text-sm text-gray-700">{fullAddress}</span>
//             </div>
//           )}

//           {/* Timing and Price */}
//           <div className="flex items-center gap-4 mb-3 text-sm">
//             {timings && (
//               <div className="flex items-center">
//                 <Clock className="w-4 h-4 text-green-600 mr-1" />
//                 <span className="text-gray-700">{timings}</span>
//               </div>
//             )}
//             {priceRange && (
//               <div className="flex items-center">
//                 <span className="text-gray-700">• {priceRange}</span>
//               </div>
//             )}
//           </div>

//           {/* Actions */}
//           <div className="flex items-center gap-2 mb-3">
//             {phoneNumbers.length > 0 && (
//               <button
//                 onClick={() => handleCall(phoneNumbers[0])}
//                 className="flex items-center bg-green-600 text-white px-4 py-2 rounded text-sm font-medium hover:bg-green-700 transition-colors"
//               >
//                 <Phone className="w-4 h-4 mr-1" />
//                 {phoneNumbers[0]}
//               </button>
//             )}
//             <button
//               onClick={handleBookNow}
//               className="bg-blue-600 text-white px-4 py-2 rounded text-sm font-medium hover:bg-blue-700 transition-colors"
//             >
//               Book Now
//             </button>
            
//             {/* Keywords/Tags */}
//             {keywords.length > 0 && (
//               <div className="flex flex-wrap gap-1">
//                 {keywords.slice(0, 4).map((keyword, index) => (
//                   <span
//                     key={index}
//                     className="inline-block bg-purple-100 text-purple-700 px-2 py-1 rounded-full text-xs font-medium"
//                   >
//                     #{keyword}
//                   </span>
//                 ))}
//               </div>
//             )}
//           </div>

//         </div>
//       </div>
//     </div>
//   );
// }

// export default BusinessCard;













// "use client";

// import { useState, useEffect } from "react";
// import { MapPin, Phone, Clock } from "lucide-react";
// import { useApp } from "../../context/AppContext.jsx";

// function BusinessCard({ business }) {
//   const {
//     title,
//     description,
//     address,
//     pincode,
//     city,
//     district,
//     priceFrom,
//     priceTo,
//     timings,
//     keywordsJson,
//     phoneNumbersJson,
//     images,
//     business: businessOwner, // nested business object
//   } = business;

//   const { state, dispatch } = useApp();

//   // Parse JSON strings safely
//   const keywords = keywordsJson ? JSON.parse(keywordsJson) : [];
//   const phoneNumbers = phoneNumbersJson ? JSON.parse(phoneNumbersJson) : [];
//   const primaryImage = images && images.length > 0 ? images[0].imageUrl : null;

//   // Get business name and profile picture from nested business object if present
//   const ownerName = businessOwner?.name;
//   const ownerProfilePicture = businessOwner?.profilePictureUrl;

//   // Carousel state for auto-swipe
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   useEffect(() => {
//     if (images && images.length > 1) {
//       const interval = setInterval(() => {
//         setCurrentImageIndex((prevIndex) =>
//           prevIndex === images.length - 1 ? 0 : prevIndex + 1
//         );
//       }, 3500);
//       return () => clearInterval(interval);
//     }
//   }, [images]);

//   // Format location
//   const fullAddress = [address, city, district, pincode]
//     .filter(Boolean)
//     .join(", ");

//   // Format price range
//   const priceRange =
//     priceFrom && priceTo
//       ? `₹${priceFrom} - ₹${priceTo}`
//       : priceFrom
//       ? `From ₹${priceFrom}`
//       : priceTo
//       ? `Up to ₹${priceTo}`
//       : null;

//   const handleBookNow = () => {
//     if (!state.isAuthenticated) {
//       dispatch({ type: "SHOW_AUTH_MODAL" });
//       window.location.href = "/login";
//     } else {
//       console.log("Booking service for:", title);
//     }
//   };

//   const handleCall = (phoneNumber) => {
//     window.location.href = `tel:${phoneNumber}`;
//   };

//   return (
//     <div className="bg-white rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300 overflow-hidden max-w-xl mx-auto sm:max-w-full">
//       <div className="flex flex-col sm:flex-row">
//         {/* Image Carousel Section */}
//         <div className="relative w-full sm:w-48 h-56 sm:h-40 flex-shrink-0 overflow-hidden rounded-t-xl sm:rounded-l-xl sm:rounded-tr-none shadow-inner bg-gray-100">
//           {images && images.length > 0 ? (
//             <>
//               <div
//                 className="flex h-full transition-transform duration-700 ease-in-out"
//                 style={{
//                   transform: `translateX(-${currentImageIndex * 100}%)`,
//                 }}
//               >
//                 {images.map((image, index) => (
//                   <img
//                     key={image.id || index}
//                     src={image.imageUrl || "/placeholder.svg"}
//                     alt={`${title} - Image ${index + 1}`}
//                     className="w-full h-full object-cover flex-shrink-0"
//                     loading="lazy"
//                     draggable={false}
//                   />
//                 ))}
//               </div>
//               {images.length > 1 && (
//                 <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-2">
//                   {images.map((_, index) => (
//                     <span
//                       key={index}
//                       className={`w-3 h-3 rounded-full cursor-pointer ${
//                         index === currentImageIndex
//                           ? "bg-white shadow-md"
//                           : "bg-white/50"
//                       }`}
//                       aria-label={`Slide ${index + 1}`}
//                     />
//                   ))}
//                 </div>
//               )}
//             </>
//           ) : (
//             <img
//               src="/placeholder.svg?height=224&width=192"
//               alt={title}
//               className="w-full h-full object-cover"
//               loading="lazy"
//               draggable={false}
//             />
//           )}
//         </div>

//         {/* Content Section */}
//         <div className="flex-auto p-5 sm:p-6 flex flex-col justify-between">
//           {/* Header */}
//           <div>
//             <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2 gap-2 sm:gap-0">
//               <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 truncate max-w-full">
//                 {title}
//               </h3>
//             </div>
//             {(ownerProfilePicture || ownerName) && (
//               <div className="flex items-center space-x-3 mt-1 mb-3">
//                 {ownerProfilePicture && (
//                   <img
//                     src={ownerProfilePicture}
//                     alt={ownerName}
//                     className="w-8 h-8 rounded-full border border-gray-300 object-cover select-none"
//                     draggable={false}
//                   />
//                 )}
//                 {ownerName && (
//                   <span className="text-sm font-medium text-gray-600 truncate">
//                     by {ownerName}
//                   </span>
//                 )}
//               </div>
//             )}
//             {description && (
//               <p className="text-sm text-gray-700 leading-relaxed mb-4 line-clamp-3">
//                 {description}
//               </p>
//             )}
//           </div>

//           {/* Location */}
//           {fullAddress && (
//             <div className="flex items-center text-sm text-gray-700 mb-3">
//               <MapPin className="w-5 h-5 text-red-500 mr-2 flex-shrink-0" />
//               <span className="truncate">{fullAddress}</span>
//             </div>
//           )}

//           {/* Timing and Price */}
//           <div className="flex flex-wrap items-center gap-5 mb-5 text-sm text-gray-700">
//             {timings && (
//               <div className="flex items-center whitespace-nowrap">
//                 <Clock className="w-5 h-5 text-green-600 mr-1" />
//                 <span>{timings}</span>
//               </div>
//             )}
//             {priceRange && (
//               <div className="flex items-center whitespace-nowrap">
//                 <span>• {priceRange}</span>
//               </div>
//             )}
//           </div>

//           {/* Actions and Keywords */}
//           <div className="flex flex-wrap items-center gap-3 sm:gap-4">
//             {phoneNumbers.length > 0 && (
//               <button
//                 onClick={() => handleCall(phoneNumbers[0])}
//                 className="flex items-center bg-green-600 text-white px-5 py-2 rounded-md text-sm font-semibold shadow-md hover:bg-green-700 active:bg-green-800 focus:outline-none focus:ring-2 focus:ring-green-500 transition-colors duration-200"
//                 aria-label={`Call ${phoneNumbers[0]}`}
//               >
//                 <Phone className="w-5 h-5 mr-2" />
//                 {phoneNumbers[0]}
//               </button>
//             )}
//             <button
//               onClick={handleBookNow}
//               className="bg-blue-600 text-white px-5 py-2 rounded-md text-sm font-semibold shadow-md hover:bg-blue-700 active:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-200"
//               aria-label="Book Now"
//             >
//               Book Now
//             </button>

//             {/* Keywords/Tags */}
//             {keywords.length > 0 && (
//               <div className="flex flex-wrap gap-2 max-w-full overflow-x-auto scrollbar-thin scrollbar-thumb-purple-300 scrollbar-track-purple-50">
//                 {keywords.slice(0, 5).map((keyword, index) => (
//                   <span
//                     key={index}
//                     className="inline-flex items-center whitespace-nowrap bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs font-semibold cursor-default select-none"
//                   >
//                     #{keyword}
//                   </span>
//                 ))}
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default BusinessCard;
