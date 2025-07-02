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

import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { Edit, Camera, User, MapPin } from 'lucide-react';
import { useAuthStore } from '../store/authStore';

const UserProfilePage = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [profileImage, setProfileImage] = useState(null);
  const fileInputRef = useRef(null);

  const { user, checkAuth } = useAuthStore();

  useEffect(() => {
    const fetchProfile = async () => {
      setLoading(true);
      // Ensure authentication and get user/token
      const authResult = await checkAuth();
      if (!authResult?.isAuthenticated || !authResult?.user) {
        setError("You are not logged in.");
        setLoading(false);
        return;
      }
      try {
        setUserData(authResult.user);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch user profile');
        setLoading(false);
      }
    };
    fetchProfile();
    // eslint-disable-next-line
  }, []);

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (file && user?.token) {
      const formData = new FormData();
      formData.append('profileImage', file);

      try {
        const response = await axios.post(
          'https://pincodeads.onrender.com/api/v1.0/upload-profile-image',
          formData,
          {
            headers: {
              'Content-Type': 'multipart/form-data',
              'Authorization': `Bearer ${user.token}`,
            },
          }
        );
        setProfileImage(response.data.imageUrl);
      } catch (err) {
        console.error('Image upload failed', err);
      }
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-purple-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="bg-white p-8 rounded-xl shadow-lg text-center">
          <p className="text-red-500 text-xl">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden">
        {/* Profile Header */}
        <div className="relative bg-gradient-to-r from-indigo-600 to-purple-600 h-48 flex items-center justify-center">
          <div className="absolute inset-0 opacity-50 bg-cover bg-center"
               style={{backgroundImage: 'url(https://source.unsplash.com/random/800x600?abstract)'}}
          ></div>
          <div className="relative z-10 flex flex-col items-center">
            <div className="relative">
              <img
                src={profileImage || userData.profilePictureUrl || 'https://via.placeholder.com/150'}
                alt="Profile"
                className="w-36 h-36 rounded-full border-4 border-white object-cover shadow-lg"
              />
              <button
                onClick={() => fileInputRef.current.click()}
                className="absolute bottom-0 right-0 bg-indigo-600 text-white p-2 rounded-full shadow-lg hover:bg-indigo-700 transition"
              >
                <Camera className="w-5 h-5" />
              </button>
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleImageUpload}
                className="hidden"
                accept="image/*"
              />
            </div>
            <h1 className="text-2xl font-bold text-white mt-4">{userData.name}</h1>
            <p className="text-indigo-200">{userData.email}</p>
          </div>
        </div>

        {/* Profile Details */}
        <div className="p-8 space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Personal Information */}
            <div className="bg-gray-50 p-6 rounded-xl">
              <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                <User className="mr-3 text-indigo-600" /> Personal Information
              </h2>
              <div className="space-y-3">
                <div>
                  <label className="text-sm text-gray-600">Full Name</label>
                  <p className="text-lg font-medium text-gray-900">{userData.name}</p>
                </div>
                <div>
                  <label className="text-sm text-gray-600">Email Address</label>
                  <p className="text-lg font-medium text-gray-900">{userData.email}</p>
                </div>
                <div>
                  <label className="text-sm text-gray-600">Phone Number</label>
                  <p className="text-lg font-medium text-gray-900">{userData.phoneNumber}</p>
                </div>
              </div>
            </div>

            {/* Additional Details */}
            <div className="bg-gray-50 p-6 rounded-xl">
              <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                <MapPin className="mr-3 text-indigo-600" /> Additional Details
              </h2>
              <div className="space-y-3">
                <div>
                  <label className="text-sm text-gray-600">User Type</label>
                  <p className="text-lg font-medium text-gray-900 capitalize">
                    {userData.userType || 'Not Specified'}
                  </p>
                </div>
                <div>
                  <label className="text-sm text-gray-600">Registration Date</label>
                  <p className="text-lg font-medium text-gray-900">
                    {new Date(userData.registrationDate).toLocaleDateString()}
                  </p>
                </div>
                <div>
                  <label className="text-sm text-gray-600">Account Status</label>
                  <p className={`text-lg font-medium ${
                    userData.accountStatus === 'active'
                      ? 'text-green-600'
                      : 'text-red-600'
                  }`}>
                    {userData.accountStatus?.toUpperCase() || 'UNKNOWN'}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex justify-end space-x-4 mt-6">
            <button
              className="flex items-center bg-indigo-600 text-white px-6 py-2 rounded-xl hover:bg-indigo-700 transition"
              onClick={() => {/* Edit Profile Logic */}}
            >
              <Edit className="mr-2 w-5 h-5" /> Edit Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfilePage;