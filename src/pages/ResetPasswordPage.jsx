// import React, { useState } from "react";
// import { useAuthStore } from "../store/authStore";
// import { useLocation, useNavigate } from "react-router-dom";

// export default function ResetPasswordPage() {
//   const location = useLocation();
//   const navigate = useNavigate();

//   // Email passed from previous Forgot Password page
//   const emailFromState = location.state?.email || "";

//   const [email, setEmail] = useState(emailFromState);
//   const [otp, setOtp] = useState("");
//   const [newPassword, setNewPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");

//   const isLoading = useAuthStore((state) => state.isLoading);
//   const resetPassword = useAuthStore((state) => state.resetPassword);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (newPassword !== confirmPassword) {
//       alert("Passwords do not match");
//       return;
//     }
//     try {
//       await resetPassword({ email, otp, newPassword });
//       // Redirect to homepage or login page after successful reset
//       navigate("/");
//     } catch {
//       // error handled internally in store with toast
//     }
//   };

//   return (
//     <main className="reset-password-page" role="main">
//       <h1>Reset Password</h1>
//       <form aria-label="Reset Password Form" onSubmit={handleSubmit}>
//         <label htmlFor="email">Email</label>
//         <input
//           type="email"
//           id="email"
//           name="email"
//           required
//           value={email}
//           disabled={Boolean(emailFromState)}
//           onChange={(e) => setEmail(e.target.value)}
//           autoComplete="email"
//           placeholder="Registered email"
//         />

//         <label htmlFor="otp">OTP</label>
//         <input
//           type="text"
//           id="otp"
//           name="otp"
//           required
//           value={otp}
//           maxLength={6}
//           inputMode="numeric"
//           onChange={(e) => setOtp(e.target.value)}
//           disabled={isLoading}
//           placeholder="Enter OTP sent to your email"
//         />

//         <label htmlFor="newPassword">New Password</label>
//         <input
//           type="password"
//           id="newPassword"
//           name="newPassword"
//           required
//           minLength={6}
//           value={newPassword}
//           autoComplete="new-password"
//           onChange={(e) => setNewPassword(e.target.value)}
//           disabled={isLoading}
//           placeholder="Enter new password"
//         />

//         <label htmlFor="confirmPassword">Confirm New Password</label>
//         <input
//           type="password"
//           id="confirmPassword"
//           name="confirmPassword"
//           required
//           minLength={6}
//           value={confirmPassword}
//           autoComplete="new-password"
//           onChange={(e) => setConfirmPassword(e.target.value)}
//           disabled={isLoading}
//           placeholder="Confirm new password"
//         />

//         <button type="submit" disabled={isLoading}>
//           {isLoading ? "Resetting Password..." : "Reset Password"}
//         </button>
//       </form>
//     </main>
//   );
// }









import React, { useState } from "react"
import { Lock, Mail, KeyRound } from "lucide-react"
import { useAuthStore } from "../store/authStore"
import { useLocation, useNavigate } from "react-router-dom"
import { useParams } from "react-router-dom"

export default function ResetPasswordPage() {
  const location = useLocation()
  const navigate = useNavigate()
  const emailFromState = location.state?.email || ""
  const params = useParams()
  const [email, setEmail] = useState(params.email || emailFromState || "")
  const [otp, setOtp] = useState("")
  const [newPassword, setNewPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [Loading, setLoading] = useState(false)

  const isLoading = useAuthStore((state) => state.isLoading)
  const resetPassword = useAuthStore((state) => state.resetPassword)

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (newPassword !== confirmPassword) {
      alert("Passwords do not match")
      return
    }
    setLoading(true);
    try {
        console.log("Resetting password for:", email, otp, newPassword)
      await resetPassword({ email, otp, newPassword })
      navigate("/")
    } catch {
        alert("Error resetting password")
    }
    setLoading(false);
  }

  return (
    <section className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 flex items-center justify-center relative overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-24 right-16 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
      <div className="absolute -bottom-8 left-24 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>

      <div className="bg-white/10 backdrop-blur-xl p-10 rounded-3xl shadow-2xl max-w-md w-full z-10">
        <h1 className="text-3xl font-bold text-white text-center mb-6">Reset Password</h1>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="relative">
            <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-300" />
            <input
              type="email"
              value={email}
              disabled={Boolean(emailFromState)}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Registered email"
              className="w-full pl-12 pr-4 py-4 rounded-xl bg-white/90 text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-600 text-lg"
            />
          </div>

          <div className="relative">
            <KeyRound className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-300" />
            <input
              type="text"
              value={otp}
              maxLength={6}
              inputMode="numeric"
               autoComplete="one-time-code"
              onChange={(e) => setOtp(e.target.value)}
              disabled={isLoading}
              placeholder="Enter OTP"
              className="w-full pl-12 pr-4 py-4 rounded-xl bg-white/90 text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-600 text-lg"
            />
          </div>

          <div className="relative">
            <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-300" />
            <input
              type="password"
              value={newPassword}
              minLength={6}
              autoComplete="new-password"
              onChange={(e) => setNewPassword(e.target.value)}
              disabled={isLoading}
              placeholder="New password"
              className="w-full pl-12 pr-4 py-4 rounded-xl bg-white/90 text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-600 text-lg"
            />
          </div>

          <div className="relative">
            <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-300" />
            <input
              type="password"
              value={confirmPassword}
              minLength={6}
              autoComplete="new-password"
              onChange={(e) => setConfirmPassword(e.target.value)}
              disabled={isLoading}
              placeholder="Confirm new password"
              className="w-full pl-12 pr-4 py-4 rounded-xl bg-white/90 text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-600 text-lg"
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 rounded-xl font-semibold text-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
          >
            {isLoading ? "Resetting Password..." : "Reset Password"}
          </button>
        </form>
      </div>
    </section>
  )
}
