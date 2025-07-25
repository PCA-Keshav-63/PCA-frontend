// import { Link } from "react-router-dom"
// import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

// function Footer() {
//   return (
//     <footer className="bg-gray-900 text-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
//         <div className="grid md:grid-cols-4 gap-8">
//           {/* Brand */}
//           <div className="md:col-span-1">
//             <div className="flex items-center space-x-2 mb-6">
//               <div className="w-10 h-10 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center">
//                 <span className="text-white font-bold text-xl">P</span>
//               </div>
//               <div className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
//                 PincodeAds
//               </div>
//             </div>
//             <p className="text-gray-400 mb-6 leading-relaxed">
//               Your trusted platform for discovering and booking amazing local services. Connect with the best businesses
//               in your area.
//             </p>
//             <div className="flex space-x-4">
//               {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
//                 <a
//                   key={index}
//                   href="#"
//                   className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-indigo-600 transition-colors duration-200"
//                 >
//                   <Icon className="w-5 h-5" />
//                 </a>
//               ))}
//             </div>
//           </div>

//           {/* For Customers */}
//           <div>
//             <h3 className="text-lg font-bold mb-6 text-white">For Customers</h3>
//             <ul className="space-y-3">
//               {[
//                 { name: "Search Services", path: "/search" },
//                 { name: "Book Appointments", path: "/bookings" },
//                 { name: "Write Reviews", path: "/reviews" },
//                 { name: "Mobile App", path: "/app" },
//                 { name: "Help Center", path: "/help" },
//               ].map((item) => (
//                 <li key={item.name}>
//                   <Link
//                     to={item.path}
//                     className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center space-x-2"
//                   >
//                     <span>{item.name}</span>
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* For Businesses */}
//           <div>
//             <h3 className="text-lg font-bold mb-6 text-white">For Businesses</h3>
//             <ul className="space-y-3">
//               {[
//                 { name: "List Your Business", path: "/list-business" },
//                 { name: "Business Dashboard", path: "/dashboard" },
//                 { name: "Pricing Plans", path: "/pricing" },
//                 { name: "Success Stories", path: "/stories" },
//                 { name: "Business Resources", path: "/resources" },
//               ].map((item) => (
//                 <li key={item.name}>
//                   <Link to={item.path} className="text-gray-400 hover:text-white transition-colors duration-200">
//                     {item.name}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Contact */}
//           <div>
//             <h3 className="text-lg font-bold mb-6 text-white">Get in Touch</h3>
//             <div className="space-y-4">
//               <div className="flex items-center space-x-3">
//                 <Mail className="w-5 h-5 text-indigo-400" />
//                 <span className="text-gray-400">pincodeads@gmail.com</span>
//               </div>
//               <div className="flex items-center space-x-3">
//                 <Phone className="w-5 h-5 text-indigo-400" />
//                 <span className="text-gray-400">+1 (555) 123-4567</span>
//               </div>
//               <div className="flex items-center space-x-3">
//                 <MapPin className="w-5 h-5 text-indigo-400" />
//                 <span className="text-gray-400">San Francisco, CA</span>
//               </div>
//             </div>

//             {/* Newsletter */}
//             <div className="mt-6">
//               <h4 className="font-semibold mb-3 text-white">Stay Updated</h4>
//               <div className="flex">
//                 <input
//                   type="email"
//                   placeholder="Enter your email"
//                   className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-white"
//                 />
//                 <button className="bg-gradient-to-r from-indigo-600 to-purple-600 px-4 py-2 rounded-r-lg hover:shadow-lg transition-all duration-200">
//                   Subscribe
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Bottom */}
//         <div className="border-t border-gray-800 mt-12 pt-8">
//           <div className="flex flex-col md:flex-row justify-between items-center">
//             <p className="text-gray-400 text-sm">&copy; 2024  PincodeAds. All rights reserved.</p>
//             <div className="flex space-x-6 mt-4 md:mt-0">
//               <Link to="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
//                 Privacy Policy
//               </Link>
//               <Link to="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
//                 Terms of Service
//               </Link>
//               <Link to="/cookies" className="text-gray-400 hover:text-white text-sm transition-colors">
//                 Cookie Policy
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   )
// }

// export default Footer


import { Link } from "react-router-dom";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";
import { useTranslation } from "react-i18next";

function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <img src="../../niche2.png" alt="PincodeAds Logo" />
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              {t("footer.description")}
            </p>
            <div className="flex space-x-4">
              {[
                { Icon: Facebook, url: null },
                { Icon: Twitter, url: "https://x.com/PincodeAds" },
                { Icon: Instagram, url: "https://www.instagram.com/pincodeads/" },
                { Icon: Linkedin, url: null },
              ].map(({ Icon, url }, index) => (
                <a
                  key={index}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-indigo-600 transition-colors duration-200"
                >
                  <Icon className="w-5 h-5 text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* For Customers */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">
              {t("footer.customers.title")}
            </h3>
            <ul className="space-y-3">
              {[
                { key: "search", path: "/search" },
                { key: "book", path: "/bookings" },
                { key: "review", path: "/reviews" },
                { key: "app", path: "/app" },
                { key: "help", path: "/help" },
              ].map((item) => (
                <li key={item.key}>
                  <Link
                    to={item.path}
                    className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center space-x-2"
                  >
                    <span>{t(`footer.customers.${item.key}`)}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* For Businesses */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">
              {t("footer.businesses.title")}
            </h3>
            <ul className="space-y-3">
              {[
                { key: "list", path: "/list-business" },
                { key: "dashboard", path: "*" },
                { key: "pricing", path: "/pricing" },
                { key: "stories", path: "/stories" },
                { key: "resources", path: "/resources" },
              ].map((item) => (
                <li key={item.key}>
                  <Link
                    to={item.path}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {t(`footer.businesses.${item.key}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">
              {t("footer.contact.title")}
            </h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-indigo-400" />
                <span className="text-gray-400">pincodeads@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-indigo-400" />
                <span className="text-gray-400">+91 84528 13108</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-indigo-400" />
                <span className="text-gray-400">Dahisar, Mumbai</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; 2025 PincodeAds. {t("footer.bottom.rights")}
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link
                to="/privacy"
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                {t("footer.bottom.privacy")}
              </Link>
              <Link
                to="/terms"
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                {t("footer.bottom.terms")}
              </Link>
              <Link
                to="/cookies"
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                {t("footer.bottom.cookies")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
