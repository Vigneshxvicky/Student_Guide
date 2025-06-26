// d:\VICKY_PERSONAL PROJECT\Student_Guide\Ademy\ademy-frontend\src\AuthPage.jsx (Example)

import React from "react";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";

function AuthPage({
  authMode,
  setAuthMode,
  authForm,
  handleAuthInput,
  handleAuth,
  authError,
  setAuthError,
  handleGoogleAuth, // New prop for Google auth
}) {
  const isLogin = authMode === "login";
  // Replace with your actual Google Client ID (or load from env)
  const GOOGLE_CLIENT_ID =
    "758885795298-g81qvv2iq8g5civ78cp7rbj0i5n699j1.apps.googleusercontent.com";

  const handleGoogleSuccess = (credentialResponse) => {
    console.log("Google Login Success:", credentialResponse);
    handleGoogleAuth(credentialResponse.credential); // Call the dedicated Google auth handler
  };
  const handleGoogleError = () => {
    console.log("Google Login Failed");
    setAuthError("Google login failed. Please try again.");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-6">
          {isLogin ? "Login to StudyHub" : "Register for StudyHub"}
        </h2>
        {authError && (
          <p className="text-red-500 text-center mb-4">{authError}</p>
        )}
        <form onSubmit={handleAuth}>
          {!isLogin && (
            <div className="mb-4">
              <label
                htmlFor="username"
                className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2"
              >
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                value={authForm.username}
                onChange={handleAuthInput}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-200 dark:bg-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required={!isLogin}
              />
            </div>
          )}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={authForm.email}
              onChange={handleAuthInput}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-200 dark:bg-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={authForm.password}
              onChange={handleAuthInput}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-200 dark:bg-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
            >
              {isLogin ? "Login" : "Register"}
            </button>
          </div>
        </form>
        <div className="mt-6 text-center">
          <p className="text-gray-700 dark:text-gray-300">
            {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
            <button
              onClick={() => {
                setAuthMode(isLogin ? "register" : "login");
                setAuthError(""); // Clear error on mode switch
              }}
              className="text-blue-500 hover:text-blue-700 font-bold focus:outline-none"
            >
              {isLogin ? "Register here" : "Login here"}
            </button>
          </p>
        </div>

        {/* Google Login Button */}
        <div className="mt-6 flex justify-center">
          <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
            <GoogleLogin
              onSuccess={handleGoogleSuccess}
              onError={handleGoogleError}
              // type='standard' // or 'icon'
              // theme='outline' // or 'filled_blue', 'filled_black'
              // size='large' // or 'medium', 'small'
              // className="w-full max-w-xs" // Adjust width as needed
              // text='Sign in with Google' // Customize button text
              // logo_alignment='left' // or 'right'
              // You can customize the button's appearance here
              type="standard" // or "icon"
              theme="filled_black" // or "filled_blue", "filled_black"
              size="large" // or "medium", "small"
            />
          </GoogleOAuthProvider>
        </div>
      </div>
    </div>
  );
}

export default AuthPage;
