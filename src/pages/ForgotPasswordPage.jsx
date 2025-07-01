// import React, { useState } from "react";
// import { useAuthStore } from "../store/authStore";
// import { useNavigate } from "react-router-dom";

// export default function ForgotPasswordPage() {
//   const [email, setEmail] = useState("");
//   const sendResetOtp = useAuthStore((state) => state.sendResetOtp);
//   const isLoading = useAuthStore((state) => state.isLoading);
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await sendResetOtp(email);
//       // Redirect to Reset Password page and pass email via state
//       navigate("/reset-password", { state: { email } });
//     } catch {
//       // error handled by toast inside store
//     }
//   };

//   return (
//     <main className="forgot-password-page" role="main">
//       <h1>Forgot Password</h1>
//       <form aria-label="Forgot Password Form" onSubmit={handleSubmit}>
//         <label htmlFor="email">Registered Email</label>
//         <input
//           type="email"
//           id="email"
//           name="email"
//           required
//           autoComplete="email"
//           disabled={isLoading}
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           placeholder="Enter your registered email"
//         />
//         <button type="submit" disabled={isLoading}>
//           {isLoading ? "Sending OTP..." : "Send OTP"}
//         </button>
//       </form>
//     </main>
//   );
// }













// import React, { useState } from 'react';

// const ForgotPassword = () => {
//   const [email, setEmail] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Your forgot password logic
//     console.log('Send reset link to:', email);
//   };

//   return (
//     <div style={styles.pageContainer}>
//       <div style={styles.card}>
//         <h2 style={styles.title}>Forgot Password</h2>
//         <p style={styles.description}>Enter your email address to reset your password.</p>
//         <form onSubmit={handleSubmit} style={styles.form}>
//           <input
//             type="email"
//             placeholder="Enter your email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//             style={styles.input}
//           />
//           <button type="submit" style={styles.button}>Send Reset Link</button>
//         </form>
//       </div>
//     </div>
//   );
// };

// const styles = {
//   pageContainer: {
//     minHeight: '100vh',
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     background: 'linear-gradient(135deg, #3b1a7b 0%, #8e2cb5 100%)',
//     padding: '20px',
//   },
//   card: {
//     backgroundColor: '#fff',
//     borderRadius: '12px',
//     boxShadow: '0 8px 20px rgba(0,0,0,0.15)',
//     maxWidth: '400px',
//     width: '100%',
//     padding: '30px 25px',
//     textAlign: 'center',
//   },
//   title: {
//     fontSize: '24px',
//     marginBottom: '8px',
//     color: '#3b1a7b',
//   },
//   description: {
//     fontSize: '14px',
//     marginBottom: '20px',
//     color: '#555',
//   },
//   form: {
//     display: 'flex',
//     flexDirection: 'column',
//     gap: '15px',
//   },
//   input: {
//     padding: '12px 15px',
//     fontSize: '16px',
//     borderRadius: '8px',
//     border: '1.5px solid #ccc',
//     outline: 'none',
//     transition: 'border-color 0.2s',
//   },
//   button: {
//     background: 'linear-gradient(135deg, #6a4dcd 0%, #8e2cb5 100%)',
//     color: '#fff',
//     border: 'none',
//     padding: '12px 0',
//     fontSize: '16px',
//     fontWeight: '600',
//     borderRadius: '8px',
//     cursor: 'pointer',
//     transition: 'opacity 0.3s ease',
//   },
// };

// export default ForgotPassword;









// // ForgotPassword.jsx
// import React, { useState } from "react";

// const ForgotPassword = ({ onSendResetLink }) => {
//   const [email, setEmail] = useState("");
//   const [message, setMessage] = useState(null);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!email) {
//       setMessage("Please enter your email address.");
//       return;
//     }
//     setMessage(null);
//     // Trigger sending password reset email
//     onSendResetLink(email);
//     setMessage(`Password reset link sent to ${email}`);
//   };

//   return (
//     <div className="forgot-password-container" style={{ maxWidth: 400, margin: "auto", padding: 20 }}>
//       <h2>Forgot Password</h2>
//       <form onSubmit={handleSubmit}>
//         <label htmlFor="email">Enter your registered Email Address</label>
//         <input
//           type="email"
//           id="email"
//           placeholder="your.email@example.com"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//           style={{ width: "100%", padding: "8px", margin: "8px 0", borderRadius: 4, border: "1px solid #ccc" }}
//         />
//         <button type="submit" style={{ padding: "10px 20px", backgroundColor: "#6b46c1", color: "white", border: "none", borderRadius: 4 }}>
//           Send Reset Link
//         </button>
//       </form>
//       {message && <p style={{ marginTop: 12 }}>{message}</p>}
//     </div>
//   );
// };

// export default ForgotPassword;









import React, { useState } from "react"
import { Mail } from "lucide-react"
import { useLocation, useNavigate } from "react-router-dom"

const ForgotPassword = ({ onSendResetLink }) => {
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState(null)
const [loading, setLoading] = useState(false)


  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!email) {
      setMessage("Please enter your email address.")
      return
    }

    setLoading(true)
    setMessage(null)

    try {
      const response = await fetch(`http://192.168.1.20:8080/api/v1.0/send-reset-otp?email=${encodeURIComponent(email)}`, {
        method: "POST"
      })

      if (response.ok) {
        setMessage(`✅ Password reset link sent to ${email}`)
       navigate(`/reset-password?email=${email}`, { state: { email } }) 
      }
       else {
        const err = await response.text()
        setMessage(`❌ Failed to send reset link. ${err}`)
      }
    } catch (error) {
      setMessage(`❌ Error: ${error.message}`)
    } finally {
      setLoading(false)
    }
  }
//   const handleSubmit = (e) => {
//     e.preventDefault()
//     if (!email) {
//       setMessage("Please enter your email address.")
//       return
//     }
//     setMessage(null)
//     onSendResetLink(email)
//     setMessage(`Password reset link sent to ${email}`)
//   }

  return (
    <section className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 flex items-center justify-center relative overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>

      <div className="bg-white/10 backdrop-blur-xl p-10 rounded-3xl shadow-2xl max-w-md w-full z-10">
        <h2 className="text-3xl font-bold text-white text-center mb-6">Forgot Password</h2>
        <p className="text-indigo-100 text-center mb-6 text-sm">
          Enter your registered email. We'll send a reset link.
        </p>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="relative">
            <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-300" />
            <input
              type="email"
              id="email"
              placeholder="your.email@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full pl-12 pr-4 py-4 rounded-xl bg-white/90 text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-600 text-lg"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 rounded-xl font-semibold text-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
          >
            Send Reset OTP
          </button>
        </form>
        {message && (
          <p className="text-white text-sm mt-4 text-center">{message}</p>
        )}
      </div>
    </section>
  )
}

export default ForgotPassword
