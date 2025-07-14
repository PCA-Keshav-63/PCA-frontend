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
    id,
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
    business: businessOwner,
    rating,
    totalReviews,
    isTrending,
    isPopular,
    // isVerified will be handled client-side
  } = business;

  const { state, dispatch } = useApp();

  const keywords = keywordsJson ? JSON.parse(keywordsJson) : [];
  const phoneNumbers =
    phoneNumbersJson && phoneNumbersJson !== "null"
      ? JSON.parse(phoneNumbersJson)
      : [];
  const owner =
    businessOwner && businessOwner.length > 0 ? businessOwner[0] : null;

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imagesPerView, setImagesPerView] = useState(1);
  const [isVerified, setIsVerified] = useState(false); // <- Add this state

  // Fetch isVerified from backend based on business ID
  useEffect(() => {
    async function checkVerificationStatus() {
      try {
        const res = await fetch(`/api/businesses/${id}`);
        const data = await res.json();
        setIsVerified(data.isVerified || false);
      } catch (err) {
        console.error("Error checking verification status", err);
        setIsVerified(false);
      }
    }

    if (id) checkVerificationStatus();
  }, [id]);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 1024) {
        setImagesPerView(1);
      } else if (window.innerWidth >= 640) {
        setImagesPerView(1);
      } else {
        setImagesPerView(1);
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

  const fullAddress = [address, city, district, pincode]
    .filter(Boolean)
    .join(", ");

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

  const desktopImageHeight = "h-80";

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
    <div className="bg-white rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 overflow-hidden group relative">
      {!isVerified && (
        <span className="absolute top-3 left-3 z-20 bg-red-100 text-red-700 text-xs font-semibold px-2 py-1 rounded-full shadow">
          Unverified
        </span>
      )}

      <div className="flex flex-col md:flex-row">
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

        <div className="flex-1 p-4 sm:p-6 flex flex-col justify-between">
          <div>
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

            {fullAddress && (
              <div className="flex items-start mb-2">
                <MapPin className="w-4 h-4 text-red-500 mt-0.5 mr-2 flex-shrink-0" />
                <span className="text-sm text-gray-700">{fullAddress}</span>
              </div>
            )}

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

          <div className="flex flex-wrap gap-3 mt-4">
            {phoneNumbers.length > 0 && isAuthenticated && (
              <button
                onClick={() => handleCall(phoneNumbers[0])}
                className="flex items-center bg-green-600 text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-green-700 transition-colors shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
              >
                <Phone className="w-4 h-4 mr-2" />
                Call {phoneNumbers[0]}
              </button>
            )}
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
