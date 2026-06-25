import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import {
  FiUser,
  FiImage,
  FiMail,
  FiLock,
  FiEye,
  FiEyeOff,
  FiUserPlus,
} from "react-icons/fi";
import { AuthContext } from "../../Provider/AuthProvider";
import Lottie from "lottie-react";
import registerAnimation from "../../assets/register.json";
import axios from "axios";

const Register = () => {
  const { createUserAccount, setUser, signInWithGoogle, updateProfileInfo } =
    useContext(AuthContext);
  const [error, setError] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  // সেন্ট্রালাইজড টোকেন জেনারেটর প্রসেস
  const generateAuthToken = async (email) => {
    try {
      await axios.post(
        "https://assignment-10-server-five-rose.vercel.app/jwt",
        { email },
        { withCredentials: true },
      );
    } catch (err) {
      console.error(
        "JWT Matrix initialization failure during registration:",
        err,
      );
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");
    setIsSubmitting(true);

    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    // Password validation criteria
    const strongPassword = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if (!strongPassword.test(password)) {
      setError(
        "Key metrics failed: At least 6 characters with uppercase and lowercase variants required.",
      );
      setIsSubmitting(false);
      return;
    }

    try {
      // ১. ফায়ারবেস অ্যাকাউন্ট ক্রিয়েশন
      const result = await createUserAccount(email, password);

      // ২. প্রোফাইল ইনফো আপডেট
      await updateProfileInfo({ displayName: name, photoURL: photo });

      // ৩. ব্যাকএন্ডে সেশন টোকেন ড্রপ করা (No Race Condition)
      await generateAuthToken(email);

      setUser({ ...result.user, displayName: name, photoURL: photo });
      navigate("/");
    } catch (err) {
      setError(
        err?.message?.includes("email-already-in-use")
          ? "This email identity node already exists."
          : "Handshake aborted.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleGoogleRegister = async () => {
    setError("");
    try {
      const result = await signInWithGoogle();

      // গুগল রেজিস্ট্রেশনের ক্ষেত্রেও টোকেন সিকিউরিটি লেয়ার নিশ্চিত করা হলো
      await generateAuthToken(result.user?.email);

      setUser(result.user);
      navigate("/");
    } catch (err) {
      setError("Google infrastructure registration rejected.");
    }
  };

  return (
    <div className="min-h-screen lg:py-20  bg-white text-left flex items-center justify-center select-none antialiased">
      <div className="w-10/12  mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-center py-12">
        {/* Left Side: Premium Input Terminal Shell */}
        <div className="md:col-span-6 xl:col-span-5 max-w-md w-full mx-auto space-y-6">
          <form onSubmit={handleRegister} className="space-y-4">
            {/* Name Field */}
            <div className="space-y-1">
              <label className="text-[10px] font-bold uppercase r text-gray-600">
                Full Name
              </label>
              <div className="relative flex items-center">
                <FiUser className="absolute left-3.5 text-gray-600 text-sm" />
                <input
                  type="text"
                  name="name"
                  placeholder="Tanvir Mahmud"
                  className="w-full pl-10 pr-4 py-4 text-xs font-semibold bg-gray-50/50 border border-gray-100 rounded-xl outline-none text-gray-800 focus:bg-white focus:border-primaryBlue transition-all"
                  required
                />
              </div>
            </div>

            {/* Photo URL Field */}
            <div className="space-y-1">
              <label className="text-[10px] font-bold uppercase r text-gray-600">
                Photo URL Vector
              </label>
              <div className="relative flex items-center">
                <FiImage className="absolute left-3.5 text-gray-600 text-sm" />
                <input
                  type="url"
                  name="photo"
                  placeholder="https://domain.com/avatar.png"
                  className="w-full pl-10 pr-4 py-4 text-xs font-semibold bg-gray-50/50 border border-gray-100 rounded-xl outline-none text-gray-800 focus:bg-white focus:border-primaryBlue transition-all"
                  required
                />
              </div>
            </div>

            {/* Email Field */}
            <div className="space-y-1">
              <label className="text-[10px] font-bold uppercase r text-gray-600">
                Email Address
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
              <label className="text-[10px] font-bold uppercase r text-gray-600">
                Security Key
              </label>
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

            {/* Registration Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-bold uppercase st text-white bg-gradient-to-r from-primaryBlue to-secondaryIndigo rounded-xl shadow-md active:scale-[0.99] disabled:opacity-50 transition-all cursor-pointer pt-4"
            >
              {isSubmitting ? "Generating Node..." : "Initialize Profile"}
              {!isSubmitting && <FiUserPlus className="text-xs" />}
            </button>
          </form>

          {/* Social Splitter */}
          <div className="relative flex py-2 items-center">
            <div className="flex-grow border-t border-gray-100"></div>
            <span className="flex-shrink mx-4 text-[9px] font-bold st text-gray-300 uppercase">
              Or Signup With
            </span>
            <div className="flex-grow border-t border-gray-100"></div>
          </div>

          {/* Google Button */}
          <button
            type="button"
            onClick={handleGoogleRegister}
            className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-4 text-xs font-bold text-gray-600 bg-white border border-gray-100 rounded-xl shadow-sm hover:bg-gray-50/50 active:scale-[0.99] transition-all cursor-pointer"
          >
            <FcGoogle className="text-base" />
            Google
          </button>

          {/* Login Redirect */}
          <p className="text-center text-xs text-gray-600 font-medium">
            Already authenticated?{" "}
            <Link
              to="/auth/sign-in"
              className="text-primaryBlue font-bold hover:underline"
            >
              Sign In
            </Link>
          </p>
        </div>

        {/* Right Side: Visual Graphic Shell */}
        <div className="hidden md:col-span-6 xl:col-span-7 flex-shrink-0 lg:flex items-center justify-center pl-6">
          <figure className="w-8/12">
            <Lottie animationData={registerAnimation} loop={true} />
          </figure>
        </div>
      </div>
    </div>
  );
};

export default Register;
