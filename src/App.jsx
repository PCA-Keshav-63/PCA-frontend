// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App

// import { Routes, Route } from "react-router-dom"
// import Layout from "./layouts/Layout.jsx"
// import HomePage from "./pages/HomePage.jsx"
// import SearchPage from "./pages/SearchPage.jsx"
// import DashboardPage from "./pages/DashboardPage.jsx"
// import LoginPage from "./pages/LoginPage.jsx"
// import ProfilePage from "./pages/ProfilePage.jsx"
// import AboutPage from "./pages/AboutPage.jsx"
// import CategoriesPage from "./pages/CategoriesPage.jsx"
// import CategoryServicesPage from "./pages/CategoryServicePage.jsx"
// import ShopOwnerRegistrationPage from "./pages/ShopOwnerRegistrationPage.jsx"

// function App() {
//   return (
//     <Layout>
//       <Routes>
//         <Route path="/" element={<HomePage />} />
//         <Route path="/search" element={<SearchPage />} />
//         <Route path="/dashboard" element={<DashboardPage />} />
//         <Route path="/login" element={<LoginPage />} />
//         <Route path="/profile" element={<ProfilePage />} />
//         <Route path="/about" element={<AboutPage />} />
//         <Route path="/categories" element={<CategoriesPage />} />
//         <Route path="/categories/:categoryId" element={<CategoryServicesPage />} />
//         <Route path="/shopowner-registration" element={<ShopOwnerRegistrationPage />} />
//       </Routes>
//     </Layout>
//   )
// }

// export default App

// import { Routes, Route, Navigate } from "react-router-dom";
// import Layout from "./layouts/Layout.jsx";
// import HomePage from "./pages/HomePage.jsx";
// import SearchPage from "./pages/SearchPage.jsx";
// import DashboardPage from "./pages/DashboardPage.jsx";
// import LoginPage from "./pages/LoginPage.jsx";
// import ProfilePage from "./pages/ProfilePage.jsx";
// import AboutPage from "./pages/AboutPage.jsx";
// import CategoriesPage from "./pages/CategoriesPage.jsx";
// import CategoryServicesPage from "./pages/CategoryServicePage.jsx";
// import ShopOwnerRegistrationPage from "./pages/ShopOwnerRegistrationPage.jsx";
// import ForgotPasswordPage from "./pages/ForgotPasswordPage.jsx";
// import UserProfilePage from "./pages/UserProfilePage.jsx";
// import ResetPasswordPage from "./pages/ResetPasswordPage.jsx";
// import { useAuthStore } from "./store/authStore";
// import { useEffect } from "react";
// // function PrivateRoute({ children }) {
// //   const { isAuthenticated, isCheckingAuth } = useAuthStore();

// //   if (isCheckingAuth) {
// //     return <div>Loading...</div>; // Show loading indicator while auth state is checked
// //   }

// //   if (!isAuthenticated) {
// //     return <Navigate to="/login" replace />;
// //   }

// //   return children;
// // }

// function App() {
//   useEffect(() => {
//     // Wake up Render backend
//     fetch("https://pincodeads.onrender.com").catch(() => {}); // Ignore errors, just wake up the server
//   }, []);
//   return (
//     <Layout>
//       <Routes>
//         <Route path="/" element={<HomePage />} />
//         <Route path="/search" element={<SearchPage />} />
//         <Route path="/dashboard" element={<DashboardPage />} />
//         <Route path="/login" element={<LoginPage />} />
//         <Route path="/profile" element={<ProfilePage />} />
//         <Route path="/about" element={<AboutPage />} />
//         <Route path="/user-profile" element={<UserProfilePage />} />
//         <Route path="/categories" element={<CategoriesPage />} />
//         <Route
//           path="/categories/:categoryId"
//           element={<CategoryServicesPage />}
//         />
//         <Route
//           path="/shopowner-registration"
//           element={<ShopOwnerRegistrationPage />}
//         />
//         <Route path="/forgot-password" element={<ForgotPasswordPage />} />
//         <Route path="/reset-password" element={<ResetPasswordPage />} />
//       </Routes>
//     </Layout>
//   );
// }

// export default App;

import { Routes, Route, Navigate } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react"; // <-- Add this import
import Layout from "./layouts/Layout.jsx";
import HomePage from "./pages/HomePage.jsx";
import SearchPage from "./pages/SearchPage.jsx";
import DashboardPage from "./pages/DashboardPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import ProfilePage from "./pages/ProfilePage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import CategoriesPage from "./pages/CategoriesPage.jsx";
import CategoryServicesPage from "./pages/CategoryServicePage.jsx";
import ShopOwnerRegistrationPage from "./pages/ShopOwnerRegistrationPage.jsx";
import ForgotPasswordPage from "./pages/ForgotPasswordPage.jsx";
import UserProfilePage from "./pages/UserProfilePage.jsx";
import ResetPasswordPage from "./pages/ResetPasswordPage.jsx";
import NotFoundPage from "./pages/404Page.jsx"; // <-- Import your 404 page
import { useEffect } from "react";

function App() {
  useEffect(() => {
    // Wake up Render backend
    fetch("https://pincodeads.onrender.com").catch(() => {});
  }, []);
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/user-profile" element={<UserProfilePage />} />
        <Route path="/categories" element={<CategoriesPage />} />
        <Route
          path="/categories/:categoryId"
          element={<CategoryServicesPage />}
        />
        <Route
          path="/shopowner-registration"
          element={<ShopOwnerRegistrationPage />}
        />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/reset-password" element={<ResetPasswordPage />} />
        <Route path="*" element={<NotFoundPage />} />{" "}
        {/* <-- Catch-all 404 route */}
      </Routes>
      <Analytics />
      <SpeedInsights />
    </Layout>
  );
}

export default App;
