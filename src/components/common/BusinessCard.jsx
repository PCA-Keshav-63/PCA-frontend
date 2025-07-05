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

// "use client"

// import { MapPin, Phone, Clock } from "lucide-react"
// import { useApp } from "../../context/AppContext.jsx"

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
//     business: businessOwner,
//   } = business

//   const { state, dispatch } = useApp()

//   // Parse JSON strings safely
//   const keywords = keywordsJson ? JSON.parse(keywordsJson) : []
//   const phoneNumbers = phoneNumbersJson ? JSON.parse(phoneNumbersJson) : []
//   const primaryImage = images && images.length > 0 ? images[0].imageUrl : null
//   const owner = businessOwner && businessOwner.length > 0 ? businessOwner[0] : null

//   // Format location
//   const fullAddress = [address, city, district, pincode].filter(Boolean).join(", ")

//   // Format price range
//   const priceRange =
//     priceFrom && priceTo
//       ? `₹${priceFrom} - ₹${priceTo}`
//       : priceFrom
//         ? `From ₹${priceFrom}`
//         : priceTo
//           ? `Up to ₹${priceTo}`
//           : null

//   const handleBookNow = () => {
//     if (!state.isAuthenticated) {
//       dispatch({ type: "SHOW_AUTH_MODAL" })
//       window.location.href = "/login"
//     } else {
//       console.log("Booking service for:", title)
//     }
//   }

//   const handleCall = (phoneNumber) => {
//     window.location.href = `tel:${phoneNumber}`
//   }

//   return (
//     <div className="bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200 overflow-hidden">
//       <div className="flex">
//         {/* Image Section */}
//         <div className="w-48 h-40 flex-shrink-0">
//           <img
//             src={primaryImage || "/placeholder.svg?height=160&width=192"}
//             alt={title}
//             className="w-full h-full object-cover"
//           />
//         </div>

//         {/* Content Section */}
//         <div className="flex-1 p-4">
//           {/* Header */}
//           <div className="mb-2">
//             <div className="flex items-start justify-between">
//               <div>
//                 <h3 className="text-lg font-semibold text-gray-900 mb-1">
//                   {title}
//                   {owner && <span className="text-sm font-normal text-gray-600 ml-2">- {owner.name}</span>}
//                 </h3>
//                 {description && <p className="text-sm text-gray-600 mb-2 line-clamp-2">{description}</p>}
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
//             <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded text-sm font-medium hover:bg-gray-50 transition-colors">
//               View Details
//             </button>
//           </div>

//           {/* Keywords/Tags */}
//           {keywords.length > 0 && (
//             <div className="flex flex-wrap gap-1">
//               {keywords.slice(0, 4).map((keyword, index) => (
//                 <span
//                   key={index}
//                   className="inline-block bg-purple-100 text-purple-700 px-2 py-1 rounded-full text-xs font-medium"
//                 >
//                   #{keyword}
//                 </span>
//               ))}
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   )
// }

// export default BusinessCard

// "use client"

// import { MapPin, Phone, Clock, Star } from "lucide-react" // Added Star icon for ratings
// import { useApp } from "../../context/AppContext.jsx" // Assuming this path is correct

// /**
//  * Renders a responsive and visually enhanced business card.
//  *
//  * @param {object} props - The component props.
//  * @param {object} props.business - The business data object.
//  * @param {string} props.business.title - The title of the business.
//  * @param {string} [props.business.description] - The description of the business.
//  * @param {string} [props.business.address] - The street address.
//  * @param {string} [props.business.pincode] - The pincode.
//  * @param {string} [props.business.city] - The city.
//  * @param {string} [props.business.district] - The district.
//  * @param {number} [props.business.priceFrom] - Starting price.
//  * @param {number} [props.business.priceTo] - Ending price.
//  * @param {string} [props.business.timings] - Business operating hours.
//  * @param {string} [props.business.keywordsJson] - JSON string of keywords/tags.
//  * @param {string} [props.business.phoneNumbersJson] - JSON string of phone numbers.
//  * @param {Array<object>} [props.business.images] - Array of image objects, first one used as primary.
//  * @param {Array<object>} [props.business.business] - Array containing business owner details (first element is used).
//  * @param {number} [props.business.rating] - Optional: Rating of the business (e.g., 4.2).
//  * @param {number} [props.business.totalReviews] - Optional: Total number of reviews (e.g., 79).
//  * @param {boolean} [props.business.isTrending] - Optional: Flag if the business is trending.
//  * @param {boolean} [props.business.isPopular] - Optional: Flag if the business is popular.
//  * @param {boolean} [props.business.isVerified] - Optional: Flag if the business is verified.
//  */
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
//     business: businessOwner, // Destructuring with alias for clarity
//     // Optional props for visual enhancements, based on provided images
//     rating,
//     totalReviews,
//     isTrending,
//     isPopular,
//     isVerified,
//   } = business

//   const { state, dispatch } = useApp()

//   // Parse JSON strings safely
//   const keywords = keywordsJson ? JSON.parse(keywordsJson) : []
//   const phoneNumbers = phoneNumbersJson ? JSON.parse(phoneNumbersJson) : []
//   const primaryImage = images && images.length > 0 ? images[0].imageUrl : null
//   const owner = businessOwner && businessOwner.length > 0 ? businessOwner[0] : null

//   // Format location
//   const fullAddress = [address, city, district, pincode].filter(Boolean).join(", ")

//   // Format price range
//   const priceRange =
//     priceFrom && priceTo
//       ? `₹${priceFrom} - ₹${priceTo}`
//       : priceFrom
//         ? `From ₹${priceFrom}`
//         : priceTo
//           ? `Up to ₹${priceTo}`
//           : null

//   const handleBookNow = () => {
//     if (!state.isAuthenticated) {
//       dispatch({ type: "SHOW_AUTH_MODAL" })
//       // Retain original navigation logic
//       window.location.href = "/login"
//     } else {
//       console.log("Booking service for:", title)
//       // Implement actual booking logic or navigation here
//     }
//   }

//   const handleCall = (phoneNumber) => {
//     window.location.href = `tel:${phoneNumber}`
//   }

//   const handleWhatsApp = (phoneNumber) => {
//     // Basic WhatsApp Web/App link
//     window.open(`https://wa.me/${phoneNumber}`, "_blank")
//   }

//   const handleViewDetails = () => {
//     console.log("Viewing details for:", title)
//     // Implement navigation to a detailed business page here
//     // Example: router.push(`/business/${business.id}`);
//   }

//   return (
//     <div className="bg-white rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 overflow-hidden group">
//       {/* Responsive layout: flex-col on small screens, flex-row on medium+ */}
//       <div className="flex flex-col md:flex-row">        {/* Image Section */}
//         <div className="md:w-52 w-full h-48 md:h-auto flex-shrink-0">
//           <img
//             src={primaryImage || "/placeholder.svg?height=192&width=208"} // Adjusted placeholder size
//             alt={title}
//             className="w-full h-full object-cover rounded-t-xl md:rounded-tr-none md:rounded-l-xl"
//           />
//         </div>

//         {/* Content Section */}
//         <div className="flex-1 p-4 sm:p-6 flex flex-col justify-between">
//           <div>
//             {/* Header with Title and Owner */}
//             <div className="mb-2">
//               <div className="flex items-start justify-between flex-wrap gap-y-1">
//                 <h3 className="text-xl font-bold text-gray-900 leading-tight">
//                   {title}
//                   {owner && (
//                     <span className="text-sm font-medium text-gray-600 ml-2 block sm:inline-block">
//                       - {owner.name}
//                     </span>
//                   )}
//                 </h3>
//                 {/* Rating and Badges (Conditional rendering based on optional props) */}
//                 {(rating || isTrending || isPopular || isVerified) && (
//                   <div className="flex items-center space-x-2 mt-1 sm:mt-0">
//                     {rating && totalReviews && (
//                       <div className="flex items-center text-sm font-semibold text-gray-800 bg-green-100 px-2 py-0.5 rounded-full">
//                         <Star className="w-3 h-3 text-green-500 mr-1 fill-current" />
//                         {rating} <span className="font-normal text-gray-600 ml-1">({totalReviews})</span>
//                       </div>
//                     )}
//                     {isTrending && (
//                       <span className="text-xs font-semibold text-orange-700 bg-orange-100 px-2 py-0.5 rounded-full">
//                         Trending
//                       </span>
//                     )}
//                     {isPopular && (
//                       <span className="text-xs font-semibold text-blue-700 bg-blue-100 px-2 py-0.5 rounded-full">
//                         Popular
//                       </span>
//                     )}
//                     {isVerified && (
//                       <span className="text-xs font-semibold text-purple-700 bg-purple-100 px-2 py-0.5 rounded-full">
//                         Verified
//                       </span>
//                     )}
//                   </div>
//                 )}
//               </div>
//               {description && <p className="text-sm text-gray-600 mt-2 line-clamp-2">{description}</p>}
//             </div>

//             {/* Keywords/Tags - Moved up for prominence as per reference image */}
//             {keywords.length > 0 && (
//               <div className="flex flex-wrap gap-2 mb-3">
//                 {keywords.slice(0, 4).map((keyword, index) => (
//                   <span
//                     key={index}
//                     className="inline-flex items-center bg-purple-50 text-purple-700 px-3 py-1 rounded-full text-xs font-medium transition-colors duration-200 hover:bg-purple-100"
//                   >
//                     #{keyword}
//                   </span>
//                 ))}
//               </div>
//             )}

//             {/* Location */}
//             {fullAddress && (
//               <div className="flex items-start mb-2">
//                 <MapPin className="w-4 h-4 text-red-500 mt-0.5 mr-2 flex-shrink-0" />
//                 <span className="text-sm text-gray-700">{fullAddress}</span>
//               </div>
//             )}

//             {/* Timing and Price */}
//             <div className="flex items-center gap-4 mb-3 text-sm flex-wrap">
//               {timings && (
//                 <div className="flex items-center">
//                   <Clock className="w-4 h-4 text-green-600 mr-1" />
//                   <span className="text-gray-700">{timings}</span>
//                 </div>
//               )}
//               {priceRange && (
//                 <div className="flex items-center">
//                   <span className="text-gray-700 font-semibold">{timings && "• "}{priceRange}</span>
//                 </div>
//               )}
//             </div>
//           </div>

//           {/* Actions */}
//           <div className="flex flex-wrap gap-3 mt-4">
//             {phoneNumbers.length > 0 && (
//               <>
//                 {/* Call Button */}
//                 <button
//                   onClick={() => handleCall(phoneNumbers[0])}
//                   className="flex items-center bg-green-600 text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-green-700 transition-colors shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
//                 >
//                   <Phone className="w-4 h-4 mr-2" />
//                   Call {phoneNumbers[0]}
//                 </button>
//                 {/* WhatsApp Button (as seen in reference image) */}
//                 <button
//                   onClick={() => handleWhatsApp(phoneNumbers[0])}
//                   className="flex items-center bg-green-500 text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-green-600 transition-colors shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-50"
//                 >
//                   {/* WhatsApp SVG Icon */}
//                   <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
//                     <path d="M12.04 2C7.34 2 3.56 5.78 3.56 10.48C3.56 12.02 4.02 13.47 4.8 14.73L3.62 18.23L7.33 17.06C8.55 17.77 9.98 18.15 11.48 18.15L12.04 18.15C16.74 18.15 20.52 14.37 20.52 9.67C20.52 4.97 16.74 2 12.04 2ZM16.32 14.61C16.04 15.11 15.19 15.35 14.74 15.4C14.28 15.44 13.97 15.42 12.07 14.62C9.79 13.62 8.35 11.28 8.16 11.04C7.98 10.8 7.23 9.8 7.23 8.78C7.23 8.25 7.6 7.9 7.94 7.72C8.24 7.56 8.57 7.53 8.77 7.53C8.96 7.53 9.19 7.56 9.4 7.9C9.64 8.25 10.27 9.77 10.34 9.91C10.43 10.09 10.5 10.29 10.37 10.49C10.24 10.69 10.18 10.63 9.94 10.87C9.77 11.04 9.28 11.59 9.17 11.83C9.06 12.07 8.94 12.19 9.18 12.38C9.42 12.57 11.66 14.07 13.91 13.06C14.56 12.77 15.02 12.73 15.4 12.92C15.77 13.11 16.01 13.56 16.15 13.8C16.3 14.04 16.58 14.36 16.32 14.61Z" />
//                   </svg>
//                   WhatsApp
//                 </button>
//               </>
//             )}
//             {/* Book Now Button */}
//             <button
//               onClick={handleBookNow}
//               className="bg-blue-600 text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
//             >
//               Book Now
//             </button>
//             {/* View Details Button */}
//             <button
//               onClick={handleViewDetails}
//               className="border border-gray-300 text-gray-700 px-5 py-2 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-opacity-50"
//             >
//               View Details
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default BusinessCard

// "use client"

// import { useState, useEffect } from "react"
// import { MapPin, Phone, Clock, Star, User } from "lucide-react"
// import { useApp } from "../../context/AppContext.jsx"

// /**
//  * Renders a responsive and visually enhanced business card.
//  *
//  * @param {object} props - The component props.
//  * @param {object} props.business - The business data object.
//  */
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
//     business: businessOwner, // Array of owner objects
//     rating,
//     totalReviews,
//     isTrending,
//     isPopular,
//     isVerified,
//   } = business

//   const { state, dispatch } = useApp()
//   const isAuthenticated = state.isAuthenticated

//   // Parse JSON strings safely
//   const keywords = keywordsJson ? JSON.parse(keywordsJson) : []
//   const phoneNumbers = phoneNumbersJson ? JSON.parse(phoneNumbersJson) : []
//   const owner = businessOwner && businessOwner.length > 0 ? businessOwner[0] : null

//   // Carousel state for auto-swipe
//   const [currentImageIndex, setCurrentImageIndex] = useState(0)

//   useEffect(() => {
//     if (images && images.length > 1) {
//       const interval = setInterval(() => {
//         setCurrentImageIndex((prevIndex) =>
//           prevIndex === images.length - 1 ? 0 : prevIndex + 1
//         )
//       }, 3000)
//       return () => clearInterval(interval)
//     }
//   }, [images])

//   // Format location
//   const fullAddress = [address, city, district, pincode].filter(Boolean).join(", ")

//   // Format price range
//   const priceRange =
//     priceFrom && priceTo
//       ? `₹${priceFrom} - ₹${priceTo}`
//       : priceFrom
//         ? `From ₹${priceFrom}`
//         : priceTo
//           ? `Up to ₹${priceTo}`
//           : null

//   const handleBookNow = () => {
//     if (!isAuthenticated) {
//       dispatch({ type: "SHOW_AUTH_MODAL" })
//       window.location.href = "/login"
//     } else {
//       // Implement actual booking logic or navigation here
//       console.log("Booking service for:", title)
//     }
//   }

//   const handleCall = (phoneNumber) => {
//     window.location.href = `tel:${phoneNumber}`
//   }

//   // Responsive image height for desktop
//   const desktopImageHeight = "h-72" // 18rem (288px), adjust as needed

//   return (
//     <div className="bg-white rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 overflow-hidden group">
//       {/* Responsive layout: flex-col on small screens, flex-row on medium+ */}
//       <div className="flex flex-col md:flex-row">
//         {/* Image Carousel Section */}
//         <div className={`relative w-full md:w-80 ${desktopImageHeight} flex-shrink-0 overflow-hidden`}>
//           {images && images.length > 0 ? (
//             <>
//               <div
//                 className="flex h-full transition-transform duration-700 ease-in-out"
//                 style={{
//                   width: `${images.length * 100}%`,
//                   transform: `translateX(-${currentImageIndex * (100 / images.length)}%)`,
//                 }}
//               >
//                 {images.map((image, index) => (
//                   <img
//                     key={image.id || index}
//                     src={image.imageUrl || "/placeholder.svg"}
//                     alt={`${title} - Image ${index + 1}`}
//                     className="w-full h-full object-contain bg-gray-100 flex-shrink-0"
//                     style={{ minWidth: "100%" }}
//                     loading="lazy"
//                     draggable={false}
//                   />
//                 ))}
//               </div>
//               {images.length > 1 && (
//                 <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
//                   {images.map((_, index) => (
//                     <span
//                       key={index}
//                       className={`w-3 h-3 rounded-full cursor-pointer ${
//                         index === currentImageIndex
//                           ? "bg-indigo-600 shadow-md"
//                           : "bg-white/60"
//                       }`}
//                       aria-label={`Slide ${index + 1}`}
//                       onClick={() => setCurrentImageIndex(index)}
//                     />
//                   ))}
//                 </div>
//               )}
//             </>
//           ) : (
//             <img
//               src="/placeholder.svg?height=288&width=320"
//               alt={title}
//               className="w-full h-full object-contain bg-gray-100"
//               loading="lazy"
//               draggable={false}
//             />
//           )}
//         </div>

//         {/* Content Section */}
//         <div className="flex-1 p-4 sm:p-6 flex flex-col justify-between">
//           <div>
//             {/* Header with Title and Owner */}
//             <div className="mb-2">
//               <div className="flex items-start justify-between flex-wrap gap-y-1">
//                 <h3 className="text-xl font-bold text-gray-900 leading-tight">
//                   {title}
//                 </h3>
//                 {/* Rating and Badges */}
//                 {(rating || isTrending || isPopular || isVerified) && (
//                   <div className="flex items-center space-x-2 mt-1 sm:mt-0">
//                     {rating && totalReviews && (
//                       <div className="flex items-center text-sm font-semibold text-gray-800 bg-green-100 px-2 py-0.5 rounded-full">
//                         <Star className="w-3 h-3 text-green-500 mr-1 fill-current" />
//                         {rating} <span className="font-normal text-gray-600 ml-1">({totalReviews})</span>
//                       </div>
//                     )}
//                     {isTrending && (
//                       <span className="text-xs font-semibold text-orange-700 bg-orange-100 px-2 py-0.5 rounded-full">
//                         Trending
//                       </span>
//                     )}
//                     {isPopular && (
//                       <span className="text-xs font-semibold text-blue-700 bg-blue-100 px-2 py-0.5 rounded-full">
//                         Popular
//                       </span>
//                     )}
//                     {isVerified && (
//                       <span className="text-xs font-semibold text-purple-700 bg-purple-100 px-2 py-0.5 rounded-full">
//                         Verified
//                       </span>
//                     )}
//                   </div>
//                 )}
//               </div>
//               {/* Business Owner Name and Profile */}
//               {owner && (
//                 <div className="flex items-center gap-2 mt-1 mb-2">
//                   {owner.profilePictureUrl ? (
//                     <img
//                       src={owner.profilePictureUrl}
//                       alt={owner.name}
//                       className="w-7 h-7 rounded-full border border-gray-300 object-cover select-none"
//                       draggable={false}
//                     />
//                   ) : (
//                     <User className="w-6 h-6 text-gray-400" />
//                   )}
//                   <span className="text-sm font-medium text-gray-700 truncate">
//                     {owner.name}
//                   </span>
//                 </div>
//               )}
//               {description && <p className="text-sm text-gray-600 mt-2 line-clamp-2">{description}</p>}
//             </div>

//             {/* Keywords/Tags */}
//             {keywords.length > 0 && (
//               <div className="flex flex-wrap gap-2 mb-3">
//                 {keywords.slice(0, 4).map((keyword, index) => (
//                   <span
//                     key={index}
//                     className="inline-flex items-center bg-purple-50 text-purple-700 px-3 py-1 rounded-full text-xs font-medium transition-colors duration-200 hover:bg-purple-100"
//                   >
//                     #{keyword}
//                   </span>
//                 ))}
//               </div>
//             )}

//             {/* Location */}
//             {fullAddress && (
//               <div className="flex items-start mb-2">
//                 <MapPin className="w-4 h-4 text-red-500 mt-0.5 mr-2 flex-shrink-0" />
//                 <span className="text-sm text-gray-700">{fullAddress}</span>
//               </div>
//             )}

//             {/* Timing and Price */}
//             <div className="flex items-center gap-4 mb-3 text-sm flex-wrap">
//               {timings && (
//                 <div className="flex items-center">
//                   <Clock className="w-4 h-4 text-green-600 mr-1" />
//                   <span className="text-gray-700">{timings}</span>
//                 </div>
//               )}
//               {priceRange && (
//                 <div className="flex items-center">
//                   <span className="text-gray-700 font-semibold">{timings && "• "}{priceRange}</span>
//                 </div>
//               )}
//             </div>
//           </div>

//           {/* Actions */}
//           <div className="flex flex-wrap gap-3 mt-4">
//             {/* Call Button - Only show number if authenticated */}
//             {phoneNumbers.length > 0 && isAuthenticated && (
//               <button
//                 onClick={() => handleCall(phoneNumbers[0])}
//                 className="flex items-center bg-green-600 text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-green-700 transition-colors shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
//               >
//                 <Phone className="w-4 h-4 mr-2" />
//                 Call {phoneNumbers[0]}
//               </button>
//             )}
//             {/* If not authenticated, show a disabled button or prompt */}
//             {phoneNumbers.length > 0 && !isAuthenticated && (
//               <button
//                 disabled
//                 className="flex items-center bg-gray-300 text-gray-500 px-5 py-2 rounded-lg text-sm font-medium cursor-not-allowed"
//                 title="Login to view number"
//               >
//                 <Phone className="w-4 h-4 mr-2" />
//                 Login to view number
//               </button>
//             )}
//             {/* Book Now Button */}
//             <button
//               onClick={handleBookNow}
//               className="bg-blue-600 text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
//             >
//               Book Now
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default BusinessCard

"use client";

import { useState, useEffect } from "react";
import { MapPin, Phone, Clock, Star, User } from "lucide-react";
import { useApp } from "../../context/AppContext.jsx";
import { useAuthStore } from "../../store/authStore"; // Zustand store for authentication
import toast from "react-hot-toast";
/**
 * Renders a responsive and visually enhanced business card.
 *
 * @param {object} props - The component props.
 * @param {object} props.business - The business data object.
 */
function BusinessCard({ business }) {
  const { user, isAuthenticated, checkAuth, logout } = useAuthStore();
  const {
    title,
    description,
    address,
    pincode,
    city,
    category: categories,
    district,
    priceFrom,
    priceTo,
    timings,
    keywordsJson,
    phoneNumbersJson,
    images,
    business: businessOwner, // Array of owner objects
    rating,
    totalReviews,
    isTrending,
    isPopular,
    isVerified,
  } = business;

  const { state, dispatch } = useApp();

  // Parse JSON strings safely
  const keywords = keywordsJson ? JSON.parse(keywordsJson) : [];
  const phoneNumbers =
    phoneNumbersJson && phoneNumbersJson !== "null"
      ? JSON.parse(phoneNumbersJson)
      : [];
  const owner =
    businessOwner && businessOwner.length > 0 ? businessOwner[0] : null;
  console.log("phonenumber", phoneNumbers);

  // Carousel state for auto-swipe and multi-image display
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imagesPerView, setImagesPerView] = useState(1);

  // Responsive: show more images on desktop
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 1024) {
        setImagesPerView(1); // Show 2 images on large screens
      } else if (window.innerWidth >= 640) {
        setImagesPerView(1); // Show 1 image on tablets
      } else {
        setImagesPerView(1); // Show 1 image on mobile
      }
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (images && images.length > imagesPerView) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) =>
          prevIndex + imagesPerView >= images.length
            ? 0
            : prevIndex + imagesPerView
        );
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [images, imagesPerView]);

  // Format location
  const fullAddress = [address, city, district, pincode]
    .filter(Boolean)
    .join(", ");

  // Format price range
  const priceRange =
    priceFrom && priceTo
      ? `₹${priceFrom} - ₹${priceTo}`
      : priceFrom
      ? `From ₹${priceFrom}`
      : priceTo
      ? `Up to ₹${priceTo}`
      : null;

  const handleBookNow = () => {
    toast("This feature is coming soon!", { icon: "🚧" });
  };

  const handleCall = (phoneNumber) => {
    window.location.href = `tel:${phoneNumber}`;
  };

  // Responsive image height for desktop
  const desktopImageHeight = "h-80"; // 20rem (320px), adjust as needed

  // Calculate visible images for carousel
  const getVisibleImages = () => {
    if (!images || images.length === 0) return [];
    if (images.length <= imagesPerView) return images;
    let visible = [];
    for (let i = 0; i < imagesPerView; i++) {
      visible.push(images[(currentImageIndex + i) % images.length]);
    }
    return visible;
  };

  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 overflow-hidden group">
      {/* Responsive layout: flex-col on small screens, flex-row on medium+ */}
      <div className="flex flex-col md:flex-row">
        {/* Image Carousel Section */}
        <div
          className={`relative w-full md:w-[420px] ${desktopImageHeight} flex-shrink-0 overflow-hidden`}
        >
          {images && images.length > 0 ? (
            <>
              <div className="flex h-full w-full gap-2 justify-center items-center">
                {getVisibleImages().map((image, idx) => (
                  <img
                    key={image.id || idx}
                    src={image.imageUrl || "/placeholder.svg"}
                    alt={`${title} - Image ${currentImageIndex + idx + 1}`}
                    className="w-full h-full object-contain bg-gray-100 rounded-lg"
                    style={{
                      maxWidth: imagesPerView > 1 ? "48%" : "100%",
                      minWidth: imagesPerView > 1 ? "48%" : "100%",
                      maxHeight: "100%",
                    }}
                    loading="lazy"
                    draggable={false}
                  />
                ))}
              </div>
              {images.length > imagesPerView && (
                <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
                  {images.map((_, index) => (
                    <span
                      key={index}
                      className={`w-3 h-3 rounded-full cursor-pointer ${
                        index === currentImageIndex
                          ? "bg-indigo-600 shadow-md"
                          : "bg-white/60"
                      }`}
                      aria-label={`Slide ${index + 1}`}
                      onClick={() => setCurrentImageIndex(index)}
                    />
                  ))}
                </div>
              )}
            </>
          ) : (
            <div className="flex justify-center items-center w-full h-full bg-gray-100 rounded-lg">
              <img
                src={categories.iconUrl}
                alt={title}
                className=" w-1/2 h-1/2 object-contain bg-gray-100"
                loading="lazy"
                draggable={false}
              />
            </div>
          )}
        </div>

        {/* Content Section */}
        <div className="flex-1 p-4 sm:p-6 flex flex-col justify-between">
          <div>
            {/* Header with Title and Owner */}
            <div className="mb-2">
              <div className="flex items-start justify-between flex-wrap gap-y-1">
                <h3 className="text-xl font-bold text-gray-900 leading-tight">
                  {title}
                </h3>
                {(rating || isTrending || isPopular || isVerified) && (
                  <div className="flex items-center space-x-2 mt-1 sm:mt-0">
                    {rating && totalReviews && (
                      <div className="flex items-center text-sm font-semibold text-gray-800 bg-green-100 px-2 py-0.5 rounded-full">
                        <Star className="w-3 h-3 text-green-500 mr-1 fill-current" />
                        {rating}{" "}
                        <span className="font-normal text-gray-600 ml-1">
                          ({totalReviews})
                        </span>
                      </div>
                    )}
                    {isTrending && (
                      <span className="text-xs font-semibold text-orange-700 bg-orange-100 px-2 py-0.5 rounded-full">
                        Trending
                      </span>
                    )}
                    {isPopular && (
                      <span className="text-xs font-semibold text-blue-700 bg-blue-100 px-2 py-0.5 rounded-full">
                        Popular
                      </span>
                    )}
                    {isVerified && (
                      <span className="text-xs font-semibold text-purple-700 bg-purple-100 px-2 py-0.5 rounded-full">
                        Verified
                      </span>
                    )}
                  </div>
                )}
              </div>
              {/* Business Owner Name and Profile */}
              {owner && (
                <div className="flex items-center gap-2 mt-1 mb-2">
                  {owner.profilePictureUrl ? (
                    <img
                      src={owner.profilePictureUrl}
                      alt={owner.name}
                      className="w-7 h-7 rounded-full border border-gray-300 object-cover select-none"
                      draggable={false}
                    />
                  ) : (
                    <User className="w-6 h-6 text-gray-400" />
                  )}
                  <span className="text-sm font-medium text-gray-700 truncate">
                    {owner.name}
                  </span>
                </div>
              )}
              {description && (
                <p className="text-sm text-gray-600 mt-2 line-clamp-2">
                  {description}
                </p>
              )}
            </div>

            {/* Keywords/Tags */}
            {keywords.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-3">
                {keywords.slice(0, 4).map((keyword, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center bg-purple-50 text-purple-700 px-3 py-1 rounded-full text-xs font-medium transition-colors duration-200 hover:bg-purple-100"
                  >
                    #{keyword}
                  </span>
                ))}
              </div>
            )}

            {/* Location */}
            {fullAddress && (
              <div className="flex items-start mb-2">
                <MapPin className="w-4 h-4 text-red-500 mt-0.5 mr-2 flex-shrink-0" />
                <span className="text-sm text-gray-700">{fullAddress}</span>
              </div>
            )}

            {/* Timing and Price */}
            <div className="flex items-center gap-4 mb-3 text-sm flex-wrap">
              {timings && (
                <div className="flex items-center">
                  <Clock className="w-4 h-4 text-green-600 mr-1" />
                  <span className="text-gray-700">{timings}</span>
                </div>
              )}
              {priceRange && (
                <div className="flex items-center">
                  <span className="text-gray-700 font-semibold">
                    {timings && "• "}
                    {priceRange}
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-wrap gap-3 mt-4">
            {/* Call Button - Only show number if authenticated */}
            {phoneNumbers.length > 0 && isAuthenticated && (
              <button
                onClick={() => handleCall(phoneNumbers[0])}
                className="flex items-center bg-green-600 text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-green-700 transition-colors shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
              >
                <Phone className="w-4 h-4 mr-2" />
                Call {phoneNumbers[0]}
              </button>
            )}
            {/* If not authenticated, show a disabled button or prompt */}
            {phoneNumbers.length > 0 && !isAuthenticated && (
              <button
                disabled
                className="flex items-center bg-gray-300 text-gray-500 px-5 py-2 rounded-lg text-sm font-medium cursor-not-allowed"
                title="Login to view number"
              >
                <Phone className="w-4 h-4 mr-2" />
                Login to view number
              </button>
            )}
            {/* Book Now Button */}
            <button
              onClick={handleBookNow}
              className="bg-blue-600 text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BusinessCard;
