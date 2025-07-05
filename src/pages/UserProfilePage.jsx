// import React, { useState, useEffect, useRef } from 'react';
// import axios from 'axios';
// import { Edit, Camera, User, Mail, Phone, MapPin } from 'lucide-react';
// import { useAuthStore } from '../store/authStore'; // Adjust import path

// const UserProfilePage = async () => {
//   const [userData, setUserData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [profileImage, setProfileImage] = useState(null);
//   const fileInputRef = useRef(null);

//   const { checkAuth } = useAuthStore.getState(); // Assuming you have user info in auth store
// const authResult = await checkAuth();
// console.log(authResult); // { isAuthenticated: true/false, user: {...} }
//   useEffect(() => {
//     const fetchUserProfile = async () => {
//       try {
//         const response = await axios.get('https://pincodeads.onrender.com/api/v1.0/profile', {
//           headers: {
//             'Authorization': `Bearer ${token}` // Assuming you store token in auth store
//           }
//         });

//         setUserData(response.data);
//         setLoading(false);
//       } catch (err) {
//         setError('Failed to fetch user profile');
//         setLoading(false);
//       }
//     };

//     fetchUserProfile();
//   }, [user.token]);

//   const handleImageUpload = async (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const formData = new FormData();
//       formData.append('profileImage', file);

//       try {
//         const response = await axios.post('https://pincodeads.onrender.com/api/v1.0/upload-profile-image', formData, {
//           headers: {
//             'Content-Type': 'multipart/form-data',
//             'Authorization': `Bearer ${user.token}`
//           }
//         });

//         setProfileImage(response.data.imageUrl);
//       } catch (err) {
//         console.error('Image upload failed', err);
//       }
//     }
//   };

//   if (loading) {
//     return (
//       <div className="flex justify-center items-center min-h-screen">
//         <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-purple-500"></div>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="min-h-screen bg-gray-100 flex items-center justify-center">
//         <div className="bg-white p-8 rounded-xl shadow-lg text-center">
//           <p className="text-red-500 text-xl">{error}</p>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden">
//         {/* Profile Header */}
//         <div className="relative bg-gradient-to-r from-indigo-600 to-purple-600 h-48 flex items-center justify-center">
//           <div className="absolute inset-0 opacity-50 bg-cover bg-center" 
//                style={{backgroundImage: 'url(https://source.unsplash.com/random/800x600?abstract)'}}
//           ></div>

//           <div className="relative z-10 flex flex-col items-center">
//             <div className="relative">
//               <img 
//                 src={profileImage || userData.profilePictureUrl || 'https://via.placeholder.com/150'}
//                 alt="Profile"
//                 className="w-36 h-36 rounded-full border-4 border-white object-cover shadow-lg"
//               />
//               <button 
//                 onClick={() => fileInputRef.current.click()}
//                 className="absolute bottom-0 right-0 bg-indigo-600 text-white p-2 rounded-full shadow-lg hover:bg-indigo-700 transition"
//               >
//                 <Camera className="w-5 h-5" />
//               </button>
//               <input 
//                 type="file" 
//                 ref={fileInputRef}
//                 onChange={handleImageUpload}
//                 className="hidden" 
//                 accept="image/*"
//               />
//             </div>
//             <h1 className="text-2xl font-bold text-white mt-4">{userData.name}</h1>
//             <p className="text-indigo-200">{userData.email}</p>
//           </div>
//         </div>

//         {/* Profile Details */}
//         <div className="p-8 space-y-6">
//           <div className="grid md:grid-cols-2 gap-6">
//             {/* Personal Information */}
//             <div className="bg-gray-50 p-6 rounded-xl">
//               <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
//                 <User className="mr-3 text-indigo-600" /> Personal Information
//               </h2>
//               <div className="space-y-3">
//                 <div>
//                   <label className="text-sm text-gray-600">Full Name</label>
//                   <p className="text-lg font-medium text-gray-900">{userData.name}</p>
//                 </div>
//                 <div>
//                   <label className="text-sm text-gray-600">Email Address</label>
//                   <p className="text-lg font-medium text-gray-900">{userData.email}</p>
//                 </div>
//                 <div>
//                   <label className="text-sm text-gray-600">Phone Number</label>
//                   <p className="text-lg font-medium text-gray-900">{userData.phoneNumber}</p>
//                 </div>
//               </div>
//             </div>

//             {/* Additional Details */}
//             <div className="bg-gray-50 p-6 rounded-xl">
//               <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
//                 <MapPin className="mr-3 text-indigo-600" /> Additional Details
//               </h2>
//               <div className="space-y-3">
//                 <div>
//                   <label className="text-sm text-gray-600">User Type</label>
//                   <p className="text-lg font-medium text-gray-900 capitalize">
//                     {userData.userType || 'Not Specified'}
//                   </p>
//                 </div>
//                 <div>
//                   <label className="text-sm text-gray-600">Registration Date</label>
//                   <p className="text-lg font-medium text-gray-900">
//                     {new Date(userData.registrationDate).toLocaleDateString()}
//                   </p>
//                 </div>
//                 <div>
//                   <label className="text-sm text-gray-600">Account Status</label>
//                   <p className={`text-lg font-medium ${
//                     userData.accountStatus === 'active' 
//                       ? 'text-green-600' 
//                       : 'text-red-600'
//                   }`}>
//                     {userData.accountStatus?.toUpperCase() || 'UNKNOWN'}
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Actions */}
//           <div className="flex justify-end space-x-4 mt-6">
//             <button 
//               className="flex items-center bg-indigo-600 text-white px-6 py-2 rounded-xl hover:bg-indigo-700 transition"
//               onClick={() => {/* Edit Profile Logic */}}
//             >
//               <Edit className="mr-2 w-5 h-5" /> Edit Profile
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UserProfilePage;


















// import React, { useState, useEffect, useRef } from 'react';
// import axios from 'axios';
// import { Edit, Camera, User, MapPin } from 'lucide-react';
// import { useAuthStore } from '../store/authStore';

// const UserProfilePage = () => {
//   const [userData, setUserData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [profileImage, setProfileImage] = useState(null);
//   const fileInputRef = useRef(null);

//   const { user, checkAuth } = useAuthStore();

//   useEffect(() => {
//     const fetchProfile = async () => {
//       setLoading(true);
//       // Ensure authentication and get user/token
//       const authResult = await checkAuth();
//       if (!authResult?.isAuthenticated || !authResult?.user) {
//         setError("You are not logged in.");
//         setLoading(false);
//         return;
//       }
//       try {
//         setUserData(authResult.user);
//         setLoading(false);
//       } catch (err) {
//         setError('Failed to fetch user profile');
//         setLoading(false);
//       }
//     };
//     fetchProfile();
//     // eslint-disable-next-line
//   }, []);

//   const handleImageUpload = async (e) => {
//     const file = e.target.files[0];
//     if (file && user?.token) {
//       const formData = new FormData();
//       formData.append('profileImage', file);

//       try {
//         const response = await axios.post(
//           'https://pincodeads.onrender.com/api/v1.0/upload-profile-image',
//           formData,
//           {
//             headers: {
//               'Content-Type': 'multipart/form-data',
//               'Authorization': `Bearer ${user.token}`,
//             },
//           }
//         );
//         setProfileImage(response.data.imageUrl);
//       } catch (err) {
//         console.error('Image upload failed', err);
//       }
//     }
//   };

//   if (loading) {
//     return (
//       <div className="flex justify-center items-center min-h-screen">
//         <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-purple-500"></div>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="min-h-screen bg-gray-100 flex items-center justify-center">
//         <div className="bg-white p-8 rounded-xl shadow-lg text-center">
//           <p className="text-red-500 text-xl">{error}</p>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden">
//         {/* Profile Header */}
//         <div className="relative bg-gradient-to-r from-indigo-600 to-purple-600 h-48 flex items-center justify-center">
//           <div className="absolute inset-0 opacity-50 bg-cover bg-center"
//                style={{backgroundImage: 'url(https://source.unsplash.com/random/800x600?abstract)'}}
//           ></div>
//           <div className="relative z-10 flex flex-col items-center">
//             <div className="relative">
//               <img
//                 src={profileImage || userData.profilePictureUrl || 'https://via.placeholder.com/150'}
//                 alt="Profile"
//                 className="w-36 h-36 rounded-full border-4 border-white object-cover shadow-lg"
//               />
//               <button
//                 onClick={() => fileInputRef.current.click()}
//                 className="absolute bottom-0 right-0 bg-indigo-600 text-white p-2 rounded-full shadow-lg hover:bg-indigo-700 transition"
//               >
//                 <Camera className="w-5 h-5" />
//               </button>
//               <input
//                 type="file"
//                 ref={fileInputRef}
//                 onChange={handleImageUpload}
//                 className="hidden"
//                 accept="image/*"
//               />
//             </div>
//             <h1 className="text-2xl font-bold text-white mt-4">{userData.name}</h1>
//             <p className="text-indigo-200">{userData.email}</p>
//           </div>
//         </div>

//         {/* Profile Details */}
//         <div className="p-8 space-y-6">
//           <div className="grid md:grid-cols-2 gap-6">
//             {/* Personal Information */}
//             <div className="bg-gray-50 p-6 rounded-xl">
//               <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
//                 <User className="mr-3 text-indigo-600" /> Personal Information
//               </h2>
//               <div className="space-y-3">
//                 <div>
//                   <label className="text-sm text-gray-600">Full Name</label>
//                   <p className="text-lg font-medium text-gray-900">{userData.name}</p>
//                 </div>
//                 <div>
//                   <label className="text-sm text-gray-600">Email Address</label>
//                   <p className="text-lg font-medium text-gray-900">{userData.email}</p>
//                 </div>
//                 <div>
//                   <label className="text-sm text-gray-600">Phone Number</label>
//                   <p className="text-lg font-medium text-gray-900">{userData.phoneNumber}</p>
//                 </div>
//               </div>
//             </div>

//             {/* Additional Details */}
//             <div className="bg-gray-50 p-6 rounded-xl">
//               <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
//                 <MapPin className="mr-3 text-indigo-600" /> Additional Details
//               </h2>
//               <div className="space-y-3">
//                 <div>
//                   <label className="text-sm text-gray-600">User Type</label>
//                   <p className="text-lg font-medium text-gray-900 capitalize">
//                     {userData.userType || 'Not Specified'}
//                   </p>
//                 </div>
//                 <div>
//                   <label className="text-sm text-gray-600">Registration Date</label>
//                   <p className="text-lg font-medium text-gray-900">
//                     {new Date(userData.registrationDate).toLocaleDateString()}
//                   </p>
//                 </div>
//                 <div>
//                   <label className="text-sm text-gray-600">Account Status</label>
//                   <p className={`text-lg font-medium ${
//                     userData.accountStatus === 'active'
//                       ? 'text-green-600'
//                       : 'text-red-600'
//                   }`}>
//                     {userData.accountStatus?.toUpperCase() || 'UNKNOWN'}
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Actions */}
//           <div className="flex justify-end space-x-4 mt-6">
//             <button
//               className="flex items-center bg-indigo-600 text-white px-6 py-2 rounded-xl hover:bg-indigo-700 transition"
//               onClick={() => {/* Edit Profile Logic */}}
//             >
//               <Edit className="mr-2 w-5 h-5" /> Edit Profile
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UserProfilePage;




















// "use client"

// import { useState, useEffect, useRef } from "react"
// import axios from "axios"
// import { Camera, User, Mail, Phone, Calendar, Edit3 } from "lucide-react"
// import { useAuthStore } from "../store/authStore"

// const UserProfilePage = () => {
//   const [userData, setUserData] = useState(null)
//   const [loading, setLoading] = useState(true)
//   const [error, setError] = useState(null)
//   const [profileImage, setProfileImage] = useState(null)
//   const [imageUploading, setImageUploading] = useState(false)
//   const fileInputRef = useRef(null)
//   const { user, checkAuth } = useAuthStore()

//   useEffect(() => {
//     const fetchProfile = async () => {
//       setLoading(true)
//       const authResult = await checkAuth()
//       if (!authResult?.isAuthenticated || !authResult?.user) {
//         setError("You are not logged in.")
//         setLoading(false)
//         return
//       }

//       try {
//         setUserData(authResult.user)
//         setProfileImage(authResult.user.profilePictureUrl || null)
//         setLoading(false)
//       } catch (err) {
//         setError("Failed to fetch user profile")
//         setLoading(false)
//       }
//     }

//     fetchProfile()
//   }, [])

//   const handleImageUpload = async (e) => {
//     const file = e.target.files[0]
//     if (file && user?.token) {
//       setImageUploading(true)
//       const formData = new FormData()
//       formData.append("profileImage", file)

//       try {
//         const response = await axios.post("https://pincodeads.onrender.com/api/v1.0/profile/update", formData, {
//           headers: {
//             "Content-Type": "multipart/form-data",
//             Authorization: `Bearer ${user.token}`,
//           },
//         })

//         const updatedImageUrl = response.data.profilePictureUrl || response.data.imageUrl
//         if (updatedImageUrl) {
//           setProfileImage(updatedImageUrl)
//           setUserData((prev) => ({ ...prev, profilePictureUrl: updatedImageUrl }))
//         }
//       } catch (err) {
//         console.error("Image upload failed", err)
//         alert("Failed to upload profile image, please try again.")
//       } finally {
//         setImageUploading(false)
//       }
//     }
//   }

//   if (loading) {
//     return (
//       <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-indigo-500 via-purple-700 to-pink-600">
//         <div className="text-center">
//           <div className="animate-spin rounded-full h-20 w-20 border-t-4 border-b-4 border-white/30 border-t-white mx-auto"></div>
//           <p className="text-white text-lg font-medium mt-4">Loading your profile...</p>
//         </div>
//       </div>
//     )
//   }

//   if (error) {
//     return (
//       <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-700 to-pink-600 flex items-center justify-center px-4">
//         <div className="bg-white p-8 rounded-2xl shadow-2xl max-w-md w-full text-center">
//           <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
//             <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
//               />
//             </svg>
//           </div>
//           <p className="text-red-600 text-lg font-semibold">{error}</p>
//         </div>
//       </div>
//     )
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-700 to-pink-600 py-8 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-4xl mx-auto">
//         <div className="bg-white rounded-3xl shadow-2xl overflow-hidden backdrop-blur-sm">
//           {/* Enhanced Profile Header */}
//           <div className="relative bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 px-8 py-12 sm:py-16">
//             {/* Background Pattern */}
//             <div className="absolute inset-0 bg-black/10">
//               <div
//                 className="absolute inset-0"
//                 style={{
//                   backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
//                 }}
//               ></div>
//             </div>

//             <div className="relative flex flex-col items-center text-center">
//               {/* Profile Picture Section */}
//               <div className="relative group mb-6">
//                 <div className="relative">
//                   <img
//                     src={
//                       profileImage ||
//                       userData.profilePictureUrl ||
//                       "https://via.placeholder.com/150?text=No+Image" ||
//                       "/placeholder.svg"
//                     }
//                     alt="Profile"
//                     className="w-32 h-32 sm:w-40 sm:h-40 rounded-full border-4 border-white object-cover shadow-2xl transition-transform duration-300 group-hover:scale-105"
//                   />
//                   {imageUploading && (
//                     <div className="absolute inset-0 bg-black/50 rounded-full flex items-center justify-center">
//                       <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-white"></div>
//                     </div>
//                   )}
//                 </div>

//                 <button
//                   onClick={() => fileInputRef.current.click()}
//                   disabled={imageUploading}
//                   className="absolute -bottom-2 -right-2 bg-white hover:bg-gray-50 text-indigo-600 p-3 rounded-full shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-110 focus:outline-none focus:ring-4 focus:ring-white/50 disabled:opacity-50 disabled:cursor-not-allowed"
//                   type="button"
//                   aria-label="Change Profile Picture"
//                 >
//                   <Camera className="w-5 h-5" />
//                 </button>

//                 <input
//                   type="file"
//                   ref={fileInputRef}
//                   onChange={handleImageUpload}
//                   className="hidden"
//                   accept="image/*"
//                   aria-label="Upload Profile Picture"
//                 />
//               </div>

//               {/* User Info */}
//               <div className="space-y-3">
//                 <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
//                   {userData.name}
//                 </h1>
//                 <div className="flex items-center justify-center space-x-2 text-indigo-100">
//                   <Mail className="w-4 h-4 flex-shrink-0" />
//                   <p className="text-sm sm:text-base font-medium break-all max-w-xs sm:max-w-sm lg:max-w-md">
//                     {userData.email}
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Enhanced Personal Information Section */}
//           <div className="p-8 sm:p-12">
//             <div className="mb-8">
//               <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 flex items-center mb-6">
//                 <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center mr-4">
//                   <User className="w-5 h-5 text-indigo-600" />
//                 </div>
//                 Personal Information
//               </h2>
//             </div>

//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//               {/* Full Name */}
//               <div className="group">
//                 <div className="bg-gray-50 hover:bg-gray-100 rounded-2xl p-6 transition-all duration-300 hover:shadow-md">
//                   <div className="flex items-center mb-3">
//                     <div className="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center mr-3">
//                       <User className="w-4 h-4 text-indigo-600" />
//                     </div>
//                     <label className="text-sm font-semibold text-gray-600 uppercase tracking-wide">Full Name</label>
//                   </div>
//                   <p className="text-xl font-semibold text-gray-900">{userData.name || "Not provided"}</p>
//                 </div>
//               </div>

//               {/* Email Address */}
//               <div className="group">
//                 <div className="bg-gray-50 hover:bg-gray-100 rounded-2xl p-6 transition-all duration-300 hover:shadow-md">
//                   <div className="flex items-center mb-3">
//                     <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mr-3">
//                       <Mail className="w-4 h-4 text-purple-600" />
//                     </div>
//                     <label className="text-sm font-semibold text-gray-600 uppercase tracking-wide">Email Address</label>
//                   </div>
//                   <p className="text-xl font-semibold text-gray-900 break-all">{userData.email || "Not provided"}</p>
//                 </div>
//               </div>

//               {/* Phone Number */}
//               <div className="group">
//                 <div className="bg-gray-50 hover:bg-gray-100 rounded-2xl p-6 transition-all duration-300 hover:shadow-md">
//                   <div className="flex items-center mb-3">
//                     <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mr-3">
//                       <Phone className="w-4 h-4 text-green-600" />
//                     </div>
//                     <label className="text-sm font-semibold text-gray-600 uppercase tracking-wide">Phone Number</label>
//                   </div>
//                   <p className="text-xl font-semibold text-gray-900">{userData.phoneNumber || "Not provided"}</p>
//                 </div>
//               </div>

//               {/* Registration Date */}
//               <div className="group">
//                 <div className="bg-gray-50 hover:bg-gray-100 rounded-2xl p-6 transition-all duration-300 hover:shadow-md">
//                   <div className="flex items-center mb-3">
//                     <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center mr-3">
//                       <Calendar className="w-4 h-4 text-orange-600" />
//                     </div>
//                     <label className="text-sm font-semibold text-gray-600 uppercase tracking-wide">Member Since</label>
//                   </div>
//                   <p className="text-xl font-semibold text-gray-900">
//                     {userData.createdAt
//                       ? new Date(userData.createdAt).toLocaleDateString("en-US", {
//                           year: "numeric",
//                           month: "long",
//                           day: "numeric",
//                         })
//                       : userData.registrationDate
//                         ? new Date(userData.registrationDate).toLocaleDateString("en-US", {
//                             year: "numeric",
//                             month: "long",
//                             day: "numeric",
//                           })
//                         : "Not available"}
//                   </p>
//                 </div>
//               </div>
//             </div>

//             {/* Action Button */}
//             <div className="mt-12 text-center">
//               <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-indigo-300">
//                 <Edit3 className="w-5 h-5 mr-2" />
//                 Edit Profile
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default UserProfilePage


























"use client"

import { useState, useEffect, useRef } from "react"
import axios from "axios"
import { Camera, User, Mail, Phone, Calendar } from "lucide-react"
import { useAuthStore } from "../store/authStore"

const UserProfilePage = () => {
  const [userData, setUserData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [profileImage, setProfileImage] = useState(null)
  const [imageUploading, setImageUploading] = useState(false)
  const fileInputRef = useRef(null)
  const { user, checkAuth } = useAuthStore()

  useEffect(() => {
    const fetchProfile = async () => {
      setLoading(true)
      const authResult = await checkAuth()
      if (!authResult?.isAuthenticated || !authResult?.user) {
        setError("You are not logged in.")
        setLoading(false)
        return
      }

      try {
        setUserData(authResult.user)
        setProfileImage(authResult.user.profilePictureUrl || null)
        setLoading(false)
      } catch (err) {
        setError("Failed to fetch user profile")
        setLoading(false)
      }
    }

    fetchProfile()
  }, [])

  const handleImageUpload = async (e) => {
    const file = e.target.files[0]
    if (file && user?.token) {
      setImageUploading(true)
      const formData = new FormData()
      formData.append("profileImage", file)

      try {
        const response = await axios.post("https://pincodeads.onrender.com/api/v1.0/profile/update", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${user.token}`,
          },
        })

        const updatedImageUrl = response.data.profilePictureUrl || response.data.imageUrl
        if (updatedImageUrl) {
          setProfileImage(updatedImageUrl)
          setUserData((prev) => ({ ...prev, profilePictureUrl: updatedImageUrl }))
        }
      } catch (err) {
        console.error("Image upload failed", err)
        alert("Failed to upload profile image, please try again.")
      } finally {
        setImageUploading(false)
      }
    }
  }

  // Handler for Edit Profile button
  const handleEditProfile = () => {
    alert("Edit Profile clicked!") // You can replace this with actual editing logic or navigation
  }

  // if (loading) {
  //   return (
  //     <div className="flex justify-center items-center min-h-screen bg-white ">
  //       <div className="text-center">
  //         {/* <div className="mx-auto h-20 w-20 rounded-full animate-spin bg-gradient-to-br from-indigo-500 via-purple-700 to-pink-600 p-[3px]"></div>
  //         <p className="text-gradient-to-br from-indigo-500 via-purple-700 to-pink-600 text-lg font-medium mt-4">Loading your profile...</p> */}
  //         <div className="animate-spin rounded-full h-20 w-20 border-4 border-t-indigo-500 border-b-transparent border-l-transparent border-r-transparent"></div>
  //         <p className="text-indigo-600 text-lg font-medium mt-4 ml-6">Loading your profile...</p>
  //       </div>
  //     </div>
  //   )
  // }

  if (loading) {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-white">
      <div className="animate-spin rounded-full h-20 w-20 border-4 border-t-indigo-500 border-b-transparent border-l-transparent border-r-transparent mb-6"></div>
      <p className="text-indigo-600 text-lg font-medium">Loading your profile...</p>
    </div>
  )
}

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-700 to-pink-600 flex items-center justify-center px-4">
        <div className="bg-white p-8 rounded-2xl shadow-2xl max-w-md w-full text-center">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
              />
            </svg>
          </div>
          <p className="text-red-600 text-lg font-semibold">{error}</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 py-6 px-3 sm:px-4 lg:px-6">
      <div className="max-w-3xl mx-auto">
  <div className="bg-white rounded-3xl shadow-2xl overflow-hidden backdrop-blur-sm max-w-2xl mx-auto">


          {/* Enhanced Profile Header */}
          <div className="relative bg-white px-6 py-6 sm:py-8 border-b">

           

            <div className="relative flex flex-col items-center text-center">
              {/* Profile Picture Section */}
              <div className="relative group mb-6">
                <div className="relative">
                  
                  <img
                    src={
                      profileImage ||
                      userData.profilePictureUrl ||
                      "../../person.png" ||
                      "/placeholder.svg"
                    }
                    alt=""
                    className="w-32 h-32 sm:w-40 sm:h-40 rounded-full object-cover shadow-2xl transition-transform duration-300 group-hover:scale-105"
                  />
                  {imageUploading && (
                    <div className="absolute inset-0 bg-black/50 rounded-full flex items-center justify-center">
                      <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-white"></div>
                    </div>
                  )}
                </div>

                <button
                  onClick={() => fileInputRef.current.click()}
                  disabled={imageUploading}
                  className="absolute -bottom-2 -right-2 bg-white hover:bg-gray-50 text-indigo-600 p-3 rounded-full shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-110 focus:outline-none focus:ring-4 focus:ring-white/50 disabled:opacity-50 disabled:cursor-not-allowed"
                  type="button"
                  aria-label="Change Profile Picture"
                >
                  <Camera className="w-5 h-5" />
                </button>

                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleImageUpload}
                  className="hidden"
                  accept="image/*"
                  aria-label="Upload Profile Picture"
                />
              </div>

              {/* User Info */}
              <div className="space-y-3">
                <h3 className="text-1xl sm:text-1xl lg:text-3xl font-bold text-Black tracking-tight">
                  {userData.name}
                </h3>
                <div className="flex items-center justify-center space-x-2 text-indigo-100">
                  <Mail className="w-4 h-4 flex-shrink-0" />
                  <p className="text-sm sm:text-base font-bold text-gray-800 break-all max-w-xs sm:max-w-sm lg:max-w-md">
                  {userData.email}
                   </p>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Personal Information Section */}
          <div className="p-6 sm:p-8">
            <div className="mb-8">
              <h2 className="text-xl sm:text-xl font-bold text-gray-900 flex items-center mb-6">
                <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center mr-4">
                  <User className="w-5 h-5 text-indigo-600" />
                </div>
                Personal Information
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {/* Full Name */}
              <div className="group">
                <div className="bg-gray-50 hover:bg-gray-100 rounded-2xl p-6 transition-all duration-300 hover:shadow-md">
                  <div className="flex items-center mb-3">
                    <div className="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center mr-3">
                      <User className="w-4 h-4 text-indigo-600" />
                    </div>
                    <label className="text-s font-semibold text-gray-600 uppercase tracking-wide">Full Name</label>
                  </div>
                  <p className="text-s font-semibold text-gray-900">{userData.name || "Not provided"}</p>
                </div>
              </div>

              {/* Email Address */}
              <div className="group">
                <div className="bg-gray-50 hover:bg-gray-100 rounded-2xl p-6 transition-all duration-300 hover:shadow-md">
                  <div className="flex items-center mb-3">
                    <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mr-3">
                      <Mail className="w-4 h-4 text-purple-600" />
                    </div>
                    <label className="text-s font-semibold text-gray-600 uppercase tracking-wide">Email Address</label>
                  </div>
                  <p className="text-s font-semibold text-gray-900 break-all">{userData.email || "Not provided"}</p>
                </div>
              </div>

              {/* Phone Number */}
              <div className="group">
                <div className="bg-gray-50 hover:bg-gray-100 rounded-2xl p-6 transition-all duration-300 hover:shadow-md">
                  <div className="flex items-center mb-3">
                    <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mr-3">
                      <Phone className="w-4 h-4 text-green-600" />
                    </div>
                    <label className="text-s font-semibold text-gray-600 uppercase tracking-wide">Phone Number</label>
                  </div>
                  <p className="text-s font-semibold text-gray-900">{userData.phoneNumber || "Not provided"}</p>
                </div>
              </div>

              {/* Registration Date */}
              <div className="group">
                <div className="bg-gray-50 hover:bg-gray-100 rounded-2xl p-6 transition-all duration-300 hover:shadow-md">
                  <div className="flex items-center mb-3">
                    <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center mr-3">
                      <Calendar className="w-4 h-4 text-orange-600" />
                    </div>
                    <label className="text-s font-semibold text-gray-600 uppercase tracking-wide">Member Since</label>
                  </div>
                  <p className="text-s font-semibold text-gray-900">
                    {userData.createdAt
                      ? new Date(userData.createdAt).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })
                      : userData.registrationDate
                        ? new Date(userData.registrationDate).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })
                        : "Not available"}
                  </p>
                </div>
              </div>
            </div>

            
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserProfilePage


