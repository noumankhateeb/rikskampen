"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

interface AuthFormProps {
  mode: "signin" | "signup";
}

const AuthForm: React.FC<AuthFormProps> = ({ mode }) => {
  const router = useRouter();

  const title = mode === "signin" ? "Welcome back!" : "Create an account";
  const description =
    mode === "signin"
      ? "Please enter your credentials to sign in!"
      : "Please fill in your details to sign up!";
  const submitButtonText = mode === "signin" ? "Sign In" : "Sign Up";

  return (
    <div className="flex h-screen overflow-auto">
      {/* Main Container */}
      <div className="flex bg-white rounded-lg shadow-lg w-full p-6">
        {/* Left Section */}
        <div className="flex flex-col justify-center items-center flex-1">
          <div className="w-full xl:max-w-[450px] px-8 max-w-[380px]">
            {/* Back Button */}
            <button
              onClick={() => router.back()}
              className="flex items-center gap-1 text-gray-600 hover:text-gray-800 mb-6 transition-colors duration-200"
            >
              <img
                src="https://rikskampen.se/public/images/payment/rikskampen.png"
                alt="Logo"
                className="w-auto h-6"
              />
            </button>

            {/* Header */}
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{title}</h1>
              <p className="text-gray-500">{description}</p>
            </div>

            {/* Form */}
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  required
                  autoComplete="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 placeholder-gray-400"
                  placeholder="Email"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                <input
                  type="password"
                  required
                  autoComplete={mode === "signin" ? "current-password" : "new-password"}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 placeholder-gray-400"
                  placeholder="Password"
                />
              </div>

              {/* Render confirm password field only for signup */}
              {mode === "signup" && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    required
                    autoComplete="new-password"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 placeholder-gray-400"
                    placeholder="Confirm Password"
                  />
                </div>
              )}

              {/* Forgot password link only in signin mode */}
              {mode === "signin" && (
                <div className="flex justify-between items-center">
                  <Link
                    href="/forgot-password"
                    className="text-blue-600 hover:underline text-sm transition-colors duration-200"
                  >
                    Forgot password
                  </Link>
                </div>
              )}

              <button
                type="submit"
                className="w-full py-2 px-4 text-lg bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200"
              >
                {submitButtonText}
              </button>
            </form>

            {/* Social Login */}
            <div className="mt-8">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">or continue with</span>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3">
                <button
                  type="button"
                  className="flex items-center justify-center gap-2 px-4 py-2 border rounded-md text-gray-700 hover:outline-none hover:ring-2 hover:ring-blue-500"
                >
                  <img
                    className="w-auto h-6"
                    src="https://ecme-react.themenate.net/img/others/google.png"
                    alt="Google"
                  />
                  <span className="text-sm font-medium">Google</span>
                </button>
                <button
                  type="button"
                  className="flex items-center justify-center gap-2 px-4 py-2 border rounded-md text-gray-700 hover:outline-none hover:ring-2 hover:ring-blue-500"
                >
                  <img
                    className="w-auto h-6"
                    src="https://ecme-react.themenate.net/img/others/github.png"
                    alt="Github"
                  />
                  <span className="text-sm font-medium">Github</span>
                </button>
              </div>

              {/* Conditional link based on mode */}
              <div className="mt-6 text-center">
                {mode === "signin" ? (
                  <span className="text-gray-500 text-sm">
                    Don’t have an account yet?{" "}
                    <Link href="/signup" className="text-blue-600 hover:underline font-medium">
                      Sign up
                    </Link>
                  </span>
                ) : (
                  <span className="text-gray-500 text-sm">
                    Already have an account?{" "}
                    <Link href="/signin" className="text-blue-600 hover:underline font-medium">
                      Sign in
                    </Link>
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div
          className="py-6 px-10 lg:flex flex-col flex-1 justify-between hidden rounded-3xl items-end relative max-w-[520px] 2xl:max-w-[720px]"
          style={{
            // backgroundImage: `url("https://rikskampen.se//storage/settings/January2019/h4Qz0FsJrqaUFmXUtKm3.jpg")`,
            backgroundImage: `url("https://ecme-react.themenate.net/img/others/auth-side-bg.png")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Additional content can be added here if required */}
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
