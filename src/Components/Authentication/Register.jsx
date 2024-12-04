import React, { useContext, useState } from "react";
import registerImg from "../../assets/register.jpg";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../Provider/AuthProvider";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";

const Register = () => {
  const {
    createUserAccount,
    user,
    setUser,
    signInWithGoogle,
    updateProfileInfo,
  } = useContext(AuthContext);
  const [error, setError] = useState(null);
  const [show, setShow] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    const user = { name, photo, email, password };

    setError("");

    // Password validation
    const strongPassword = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

    if (!strongPassword.test(password)) {
      setError(
        "Password must be at least 6 characters and include both uppercase and lowercase letters."
      );
      return;
    }

    createUserAccount(email, password)
      .then((result) => {
        updateProfileInfo({ displayName: name, photoURL: photo })
          .then(() => {
            setUser(result.user);
          })
          .catch((error) => {
            setError(error);
          });
      })
      .catch(() => {
        setError("This email is already used");
      });
  };

  const signInWithGoogleRegister = () => {
    signInWithGoogle()
      .then((result) => {
        setUser(result.user);
      })
      .catch((error) => {
        setError(error);
      });
  };

  return (
    <div className="bg-gradient-to-t from-gray-100 to-gray-100">
      <div className="w-10/12 mx-auto flex justify-center min-h-screen items-center gap-10 ">
        <div className="flex-grow">
          <form onSubmit={handleRegister}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="name"
                name="name"
                className="input rounded-none"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo</span>
              </label>
              <input
                type="text"
                placeholder="photo URL"
                name="photo"
                className="input rounded-none"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                className="input rounded-none"
                required
              />
            </div>
            <div className="form-control relative">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type={show ? "text" : "password"}
                placeholder="password"
                name="password"
                className="input rounded-none"
                required
              />
              <div
                onClick={() => setShow(!show)}
                className="absolute right-3 bottom-4"
              >
                {show ? (
                  <FaRegEyeSlash></FaRegEyeSlash>
                ) : (
                  <FaRegEye className="text-gray-700"></FaRegEye>
                )}
              </div>
            </div>
            <div className="mt-2">
              {error && <p className="text-red-600 text-sm">{error}</p>}
            </div>
            <div className="form-control mt-6">
              <button className="btn text-white bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-indigo-500 hover:to-blue-500 hover:scale-105 duration-500 rounded-none">
                Register
              </button>
            </div>
          </form>
          <div className="form-control mt-3">
            <button
              onClick={signInWithGoogleRegister}
              className="btn bg-white border border-gray-300 hover:scale-105 duration-500 rounded-none"
            >
              <FcGoogle />
              Sign in with Google
            </button>
          </div>
          <div className="mt-3">
            <p className="text-center">
              Already have an account?{" "}
              <Link
                to="/auth/sign-in"
                className="text-indigo-500 hover:opacity-50"
              >
                Login
              </Link>
            </p>
          </div>
        </div>
        <figure className="max-sm:hidden w-5/12 flex items-center">
          <img className="h-full w-full" src={registerImg} alt="" />
        </figure>
      </div>
    </div>
  );
};

export default Register;
