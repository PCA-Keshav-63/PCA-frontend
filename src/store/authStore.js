// import { create } from "zustand";
// import axios from "axios";

// // API base URL — switch automatically in dev/production
// const API_URL =
//   import.meta.env.MODE === "development"
//     ? "https://pincodeads.onrender.com/api/v1.0"
//     : "";

// axios.defaults.withCredentials = true; // Allow sending cookies

// export const useAuthStore = create((set) => ({
//   user: null,
//   isAuthenticated: false,
//   isLoading: false,
//   error: null,
//   message: null,
//   isCheckingAuth: true, // For lazy auth on app load

//   // ✅ Register user (signup)
//   register: async ({ name, email, password, role = "USER" }) => {
//     set({ isLoading: true, error: null });
//     try {
//       const response = await axios.post(`${API_URL}/register`, {
//         name,
//         email,
//         password,
//         role, // assuming backend accepts role from frontend
//       });
//       set({
//         user: response.data,
//         isAuthenticated: false,
//         isLoading: false,
//         message: "Registration successful. Please verify your email.",
//       });
//     } catch (err) {
//       set({
//         error: err.response?.data?.message || "Registration failed",
//         isLoading: false,
//       });
//       throw err;
//     }
//   },

//   // ✅ Login
//   login: async (email, password) => {
//     set({ isLoading: true, error: null });
//     try {
//       const response = await axios.post(`${API_URL}/login`, {
//         email,
//         password,
//       });

//       // No need to store token manually — cookie is HttpOnly
//       set({
//         user: { email: response.data.email }, // Add role if returned
//         isAuthenticated: true,
//         isLoading: false,
//         error: null,
//       });
//     } catch (err) {
//       set({
//         error: err.response?.data?.message || "Login failed",
//         isLoading: false,
//       });
//       throw err;
//     }
//   },

//   // ✅ Logout
//   logout: async () => {
//     set({ isLoading: true, error: null });
//     try {
//       await axios.post(`${API_URL}/logout`);
//       set({
//         user: null,
//         isAuthenticated: false,
//         isLoading: false,
//       });
//     } catch (err) {
//       set({ error: "Logout failed", isLoading: false });
//     }
//   },

//   // ✅ Check if logged in (on page refresh)
//   checkAuth: async () => {
//     set({ isCheckingAuth: true, error: null });
//     try {
//       const res = await axios.get(`${API_URL}/is-authenticated`);
//       if (res.data === true) {
//         set({
//           isAuthenticated: true,
//           user: {}, // You can fetch profile separately if needed
//           isCheckingAuth: false,
//         });
//       } else {
//         set({ isAuthenticated: false, isCheckingAuth: false });
//       }
//     } catch (err) {
//       set({ isAuthenticated: false, isCheckingAuth: false });
//     }
//   },

//   // ✅ Send OTP for email verification
//   sendEmailOtp: async () => {
//     try {
//       await axios.post(`${API_URL}/send-otp`);
//     } catch (err) {
//       set({ error: "Failed to send verification OTP" });
//       throw err;
//     }
//   },

//   // ✅ Verify email with OTP
//   verifyEmailOtp: async (otp) => {
//     try {
//       await axios.post(`${API_URL}/verify-otp`, { otp });
//       set({ message: "Email verified successfully" });
//     } catch (err) {
//       set({ error: "Invalid or expired OTP" });
//       throw err;
//     }
//   },

//   // ✅ Send password reset OTP
//   sendResetOtp: async (email) => {
//     try {
//       await axios.post(`${API_URL}/send-reset-otp?email=${email}`);
//       set({ message: "OTP sent to email" });
//     } catch (err) {
//       set({ error: "Failed to send reset OTP" });
//       throw err;
//     }
//   },

//   // ✅ Reset password using OTP
//   resetPassword: async ({ email, otp, newPassword }) => {
//     try {
//       await axios.post(`${API_URL}/reset-password`, {
//         email,
//         otp,
//         newPassword,
//       });
//       set({ message: "Password reset successful" });
//     } catch (err) {
//       set({ error: "Failed to reset password" });
//       throw err;
//     }
//   },
// }));

















// import { create } from "zustand";
// import axios from "axios";
// import { toast } from "react-toastify";

// // API base URL — switch automatically in dev/production
// const API_URL =
//   import.meta.env.MODE === "development"
//     ? "https://pincodeads.onrender.com/api/v1.0"
//     : "https://pincodeads.onrender.com/api/v1.0";

// axios.defaults.withCredentials = true; // Allow sending cookies

// export const useAuthStore = create((set) => ({
//   user: null,
//   isAuthenticated: false,
//   isLoading: false,
//   error: null,
//   message: null,
//   isCheckingAuth: true, // For lazy auth on app load

//   // Register (Sign-Up)
//   register: async ({ name, email, password, role = "USER" }) => {
//     set({ isLoading: true, error: null, message: null });
//     try {
//       const response = await axios.post(`${API_URL}/register`, {
//         name,
//         email,
//         password,
//         role,
//       });
//       set({
//         user: response.data,
//         isAuthenticated: false, // usually user must verify email first
//         isLoading: false,
//         message: "Registration successful. Please verify your email.",
//       });
//       toast.success("Registration successful. Please verify your email.");
//     } catch (err) {
//       const errorMsg = err.response?.data?.message || "Registration failed";
//       set({ error: errorMsg, isLoading: false });
//       toast.error(errorMsg);
//       throw err;
//     }
//   },

//   // Login (Sign-In)
//   login: async (email, password) => {
//     set({ isLoading: true, error: null, message: null });
//     try {
//       const response = await axios.post(`${API_URL}/login`, { email, password });

//       // Assuming backend sends role and email in response.data
//       set({
//         user: { email: response.data.email, role: response.data.role },
//         isAuthenticated: true,
//         isLoading: false,
//         error: null,
//       });
//       toast.success("Login successful");
//     } catch (err) {
//       const errorMsg = err.response?.data?.message || "Login failed";
//       set({ error: errorMsg, isLoading: false });
//       toast.error(errorMsg);
//       throw err;
//     }
//   },

//   // Logout
//   logout: async () => {
//     set({ isLoading: true, error: null, message: null });
//     try {
//       await axios.post(`${API_URL}/logout`);
//       set({
//         user: null,
//         isAuthenticated: false,
//         isLoading: false,
//       });
//       toast.info("Logged out successfully");
//     } catch (err) {
//       set({ error: "Logout failed", isLoading: false });
//       toast.error("Logout failed");
//     }
//   },

//   // Check if authenticated, on app load or refresh
// //   checkAuth: async () => {
// //     set({ isCheckingAuth: true, error: null });
// //     try {
// //       const res = await axios.get(`${API_URL}/is-authenticated`);
// //       if (res.data === true) {
// //         // optionally fetch user profile for additional info (role etc)
// //         const profileRes = await axios.get(`${API_URL}/profile`);
// //         set({
// //           isAuthenticated: true,
// //           user: profileRes.data,
// //           isCheckingAuth: false,
// //         });
// //       } else {
// //         set({ isAuthenticated: false, user: null, isCheckingAuth: false });
// //       }
// //     } catch {
// //       set({ isAuthenticated: false, user: null, isCheckingAuth: false });
// //     }
// //   },

//   // Send OTP for email verification (optional)
//   sendEmailOtp: async () => {
//     set({ isLoading: true, error: null, message: null });
//     try {
//       await axios.post(`${API_URL}/send-otp`);
//       set({ message: "Verification OTP sent", isLoading: false });
//       toast.success("Verification OTP sent");
//     } catch (err) {
//       set({ error: "Failed to send verification OTP", isLoading: false });
//       toast.error("Failed to send verification OTP");
//       throw err;
//     }
//   },

//   // Verify email with OTP
//   verifyEmailOtp: async (otp) => {
//     set({ isLoading: true, error: null, message: null });
//     try {
//       await axios.post(`${API_URL}/verify-otp`, { otp });
//       set({ message: "Email verified successfully", isLoading: false });
//       toast.success("Email verified successfully");
//     } catch (err) {
//       set({ error: "Invalid or expired OTP", isLoading: false });
//       toast.error("Invalid or expired OTP");
//       throw err;
//     }
//   },

//   // Send reset password OTP (Forgot Password)
//   sendResetOtp: async (email) => {
//     set({ isLoading: true, error: null, message: null });
//     try {
//       await axios.post(`${API_URL}/send-reset-otp`, { email });
//       set({ message: "OTP sent to email", isLoading: false });
//       toast.success("OTP sent to email");
//     } catch (err) {
//       set({ error: "Failed to send reset OTP", isLoading: false });
//       toast.error("Failed to send reset OTP");
//       throw err;
//     }
//   },

//   // Reset password with OTP
//   resetPassword: async ({ email, otp, newPassword }) => {
//     set({ isLoading: true, error: null, message: null });
//     console.log("Resetting password for:", email, otp, newPassword);
//     try {
        
//         console.log("Resetting password for:", email, otp, newPassword);
//         await axios.post(`${API_URL}/reset-password`, {
//         email,
//         otp,
//         newPassword,
//       });
//       set({ message: "Password reset successful", isLoading: false });
//       toast.success("Password reset successful");
//     } catch (err) {
//       set({ error: "Failed to reset password", isLoading: false });
//       toast.error("Failed to reset password");
//       throw err;
//     }
//   },
// }));









import { create } from "zustand";
import axios from "axios";
import { toast } from "react-toastify";

// API base URL — switch automatically in dev/production
const API_URL =
  import.meta.env.MODE === "development"
    ? "https://pincodeads.onrender.com/api/v1.0"
    : "https://pincodeads.onrender.com/api/v1.0";
//   import.meta.env.MODE === "development"
//     ? "https://pincodeads.onrender.com/api/v1.0"
//     : "https://pincodeads.onrender.com/api/v1.0";

// axios.defaults.withCredentials = true; // Allow sending cookies
axios.defaults.withCredentials = true; // Allow sending cookies

export const useAuthStore = create((set) => ({
  user: null,
  isAuthenticated: false,
  isLoading: false,
  error: null,
  message: null,
  isCheckingAuth: true, // For lazy auth on app load

  // Register (Sign-Up)
register: async ({ name, email, password, role, phoneNumber }) => {
  set({ isLoading: true, error: null, message: null });
  try {
    const response = await axios.post(`${API_URL}/register`, {
      name,
      email,
      password,
      role,
      phoneNumber,
    });
    set({
      user: response.data,
      isAuthenticated: false, // usually user must verify email first
      isLoading: false,
      message: "Registration successful. Please verify your email.",
    });
    toast.success("Registration successful. Please verify your email.");

    // Immediately log in the user after registration
    await useAuthStore.getState().login(email, password);

  } catch (err) {
    const errorMsg = err.response?.data?.message || "Registration failed";
    set({ error: errorMsg, isLoading: false });
    toast.error(errorMsg);
    throw err;
  }
},

  // Login (Sign-In)
login: async (email, password) => {
  set({ isLoading: true, error: null, message: null });
  try {
    const response = await axios.post(`${API_URL}/login`, { email, password });

    // If backend sends token in response.data.token
    if (response.data.token) {
      localStorage.setItem("token", response.data.token);
    }

    set({
      user: { email: response.data.email, role: response.data.role },
      isAuthenticated: true,
      isLoading: false,
      error: null,
    });
    toast.success("Login successful");
  } catch (err) {
    const errorMsg = err.response?.data?.message || "Login failed";
    set({ error: errorMsg, isLoading: false });
    toast.error(errorMsg);
    throw err;
  }
},

  // Logout
logout: async () => {
  set({ isLoading: true, error: null, message: null });
  try {
    await axios.post(`${API_URL}/logout`);
    localStorage.removeItem("token"); // Remove token from localStorage
    set({
      user: null,
      isAuthenticated: false,
      isLoading: false,
    });
    toast.info("Logged out successfully");
  } catch (err) {
    set({ error: "Logout failed", isLoading: false });
    toast.error("Logout failed");
  }
},

 // Check if authenticated, on app load or refresh
checkAuth: async () => {
  set({ isCheckingAuth: true, error: null });
  try {
    // Get token from localStorage
    const token = localStorage.getItem("token");
    if (!token) {
      set({ isAuthenticated: false, user: null, isCheckingAuth: false });
      return;
    }

    // Pass token in Authorization header
    const res = await axios.get(`${API_URL}/is-authenticated`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    if (res.data === true) {
      // Optionally fetch user profile for additional info (role etc)
      const profileRes = await axios.get(`${API_URL}/profile`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      set({
        isAuthenticated: true,
        user: profileRes.data,
        isCheckingAuth: false,
      });
      return { isAuthenticated: true, user: profileRes.data };
    } else {
      set({ isAuthenticated: false, user: null, isCheckingAuth: false });
      return { isAuthenticated: false, user: null };
    }
  } catch {
    set({ isAuthenticated: false, user: null, isCheckingAuth: false });
    return { isAuthenticated: false, user: null, error: err };
  }
},

  // Send OTP for email verification (optional)
  sendEmailOtp: async (email) => {
    set({ isLoading: true, error: null, message: null });
    try {
      await axios.post(`${API_URL}/send-otp`, { email });
      set({ message: "Verification OTP sent", isLoading: false });
      toast.success("Verification OTP sent");
    } catch (err) {
      set({ error: "Failed to send verification OTP", isLoading: false });
      toast.error("Failed to send verification OTP");
      throw err;
    }
  },

  // Verify email with OTP
  verifyEmailOtp: async ({ email, otp }) => {
    set({ isLoading: true, error: null, message: null, isAuthenticated: true });
    try {
      await axios.post(`${API_URL}/verify-otp`, { email, otp });
      set({ message: "Email verified successfully", isLoading: false });
      toast.success("Email verified successfully");
    } catch (err) {
      set({ error: "Invalid or expired OTP", isLoading: false });
      toast.error("Invalid or expired OTP");
      throw err;
    }
  },

  // Send reset password OTP (Forgot Password)
  sendResetOtp: async (email) => {
    set({ isLoading: true, error: null, message: null });
    try {
      await axios.post(`${API_URL}/send-reset-otp`, { email });
      set({ message: "OTP sent to email", isLoading: false });
      toast.success("OTP sent to email");
    } catch (err) {
      set({ error: "Failed to send reset OTP", isLoading: false });
      toast.error("Failed to send reset OTP");
      throw err;
    }
  },

  // Reset password with OTP
  resetPassword: async ({ email, otp, newPassword }) => {
    set({ isLoading: true, error: null, message: null });
    console.log("Resetting password for:", email, otp, newPassword);
    try {
        
        console.log("Resetting password for:", email, otp, newPassword);
        await axios.post(`${API_URL}/reset-password`, {
        email,
        otp,
        newPassword,
      });
      set({ message: "Password reset successful", isLoading: false });
      toast.success("Password reset successful");
    } catch (err) {
      set({ error: "Failed to reset password", isLoading: false });
      toast.error("Failed to reset password");
      throw err;
    }
  },
}));