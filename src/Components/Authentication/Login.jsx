import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FiMail, FiLock, FiEye, FiEyeOff, FiArrowRight } from "react-icons/fi";
import { AuthContext } from "../../Provider/AuthProvider";
import Lottie from "lottie-react";
import loginAnimation from "../../assets/login.json";
import axios from "axios";

const Login = () => {
  const { signInUser, setUser, signInWithGoogle } = useContext(AuthContext);
  const [error, setError] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state || "/";

  // সেন্ট্রালাইজড টোকেন জেনারেটর প্রসেস
  const generateAuthToken = async (email) => {
    try {
      await axios.post(
        "https://assignment-10-server-five-rose.vercel.app/jwt",
        { email },
        { withCredentials: true },
      );
    } catch (err) {
      console.error("JWT Matrix initialization failure:", err);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setIsSubmitting(true);

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    try {
      // ১. আগে ফায়ারবেস অথেনটিকেশন কমপ্লিট হবে
      const result = await signInUser(email, password);

      // ২. টোকেন জেনারেশন প্রসেস সম্পূর্ণ শেষ হওয়া পর্যন্ত অপেক্ষা করবে (No Race Condition)
      await generateAuthToken(email);

      setUser(result.user);
      navigate(from, { replace: true });
    } catch (err) {
      setError("Invalid credentials. System handshake failed.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleGoogleLogin = async () => {
    setError("");
    try {
      const result = await signInWithGoogle();

      // গুগল লগইনের জন্যও টোকেন জেনারেশন নিশ্চিত করা হলো
      await generateAuthToken(result.user?.email);

      setUser(result.user);
      navigate(from, { replace: true });
    } catch (err) {
      setError("Google account authentication rejected.");
    }
  };

  return (
    <div className="min-h-screen bg-white text-left flex items-center justify-center select-none antialiased">
      <div className="w-10/12  mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-center py-12">
        {/* Left Side: Premium Input Terminal Shell */}
        <div className="md:col-span-6 xl:col-span-5 max-w-md w-full mx-auto space-y-6">
          <form onSubmit={handleLogin} className="space-y-4">
            {/* Email Field */}
            <div className="space-y-1">
              <label className="text-[10px] font-bold  r text-gray-600">
                Email
              </label>
              <div className="relative flex items-center">
                <FiMail className="absolute left-3.5 text-gray-600 text-sm" />
                <input
                  type="email"
                  name="email"
                  placeholder="name@domain.com"
                  className="w-full pl-10 pr-4 py-4 text-xs font-semibold bg-gray-50/50 border border-gray-100 rounded-xl outline-none text-gray-800 focus:bg-white focus:border-primaryBlue transition-all"
                  required
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="space-y-1">
              <div className="flex justify-between items-center">
                <label className="text-[10px] font-bold  r text-gray-600">
                  Password
                </label>
              </div>
              <div className="relative flex items-center">
                <FiLock className="absolute left-3.5 text-gray-600 text-sm" />
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="••••••••"
                  className="w-full pl-10 pr-11 py-4 text-xs font-semibold bg-gray-50/50 border border-gray-100 rounded-xl outline-none text-gray-800 focus:bg-white focus:border-primaryBlue transition-all"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3.5 text-gray-600 hover:text-gray-600 transition-colors cursor-pointer"
                >
                  {showPassword ? (
                    <FiEyeOff className="text-sm" />
                  ) : (
                    <FiEye className="text-sm" />
                  )}
                </button>
              </div>
            </div>

            {/* Error Terminal Log */}
            {error && (
              <div className="text-[10px] font-bold text-red-500  bg-red-50/50 border border-red-100/50 px-3 py-2 rounded-xl">
                {error}
              </div>
            )}

            {/* Standard Login Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-bold  st text-white bg-gradient-to-r from-primaryBlue to-secondaryIndigo rounded-xl shadow-md active:scale-[0.99] disabled:opacity-50 transition-all cursor-pointer pt-4"
            >
              {isSubmitting ? "Syncing Workspace..." : "Authorize Identity"}
              {!isSubmitting && <FiArrowRight className="text-xs" />}
            </button>
          </form>

          {/* Social Identity Integrations Splitter */}
          <div className="relative flex py-2 items-center">
            <div className="flex-grow border-t border-gray-100"></div>
            <span className="flex-shrink mx-4 text-[9px] font-bold st text-gray-400 ">
              Or Continue With
            </span>
            <div className="flex-grow border-t border-gray-100"></div>
          </div>

          {/* Google Sign In Button */}
          <button
            type="button"
            onClick={handleGoogleLogin}
            className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-2.5 text-xs font-bold text-gray-600 bg-white border border-gray-100 rounded-xl shadow-sm hover:bg-gray-50/50 active:scale-[0.99] transition-all cursor-pointer"
          >
            <FcGoogle className="text-base" />
            Google
          </button>

          {/* Core App Registration Redirect */}
          <p className="text-center text-xs text-gray-600 font-medium">
            New node in the system?{" "}
            <Link
              to="/auth/register"
              className="text-primaryBlue font-bold hover:underline"
            >
              Create Account
            </Link>
          </p>
        </div>

        {/* Right Side: Visual Graphic Shell */}
        <div className="hidden md:col-span-6 xl:col-span-7 flex-shrink-0 lg:flex items-center justify-center pl-6">
          <figure className="w-full max-w-md lg:max-w-lg opacity-90">
            <Lottie animationData={loginAnimation} loop={true} />
          </figure>
        </div>
      </div>
    </div>
  );
};

export default Login;
