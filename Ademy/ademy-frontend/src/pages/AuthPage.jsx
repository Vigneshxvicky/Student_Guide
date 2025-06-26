import React from 'react';

const AuthPage = ({
  authMode,
  authForm,
  handleAuthInput,
  handleAuth,
  authError,
  setAuthMode,
  setAuthError,
}) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900">
      {/* App Title */}
      <div className="flex items-center gap-3 mb-8">
        <span className="text-3xl md:text-4xl">🎓</span>
        <span className="text-3xl md:text-4xl font-extrabold text-purple-600 dark:text-purple-400 drop-shadow-lg tracking-wide">
          StudyHub
        </span>
      </div>
      <form
        onSubmit={handleAuth}
        className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 w-full max-w-sm"
      >
        <h2 className="text-xl font-bold text-purple-600 dark:text-purple-400 text-center mb-6">
          {authMode === "login" ? "Login" : "Register"}
        </h2>
        {authMode === "register" && (
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={authForm.username}
            onChange={handleAuthInput}
            className="w-full p-2 mb-4 rounded border dark:bg-gray-700 dark:text-gray-100"
            required
          />
        )}
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={authForm.email}
          onChange={handleAuthInput}
          className="w-full p-2 mb-4 rounded border dark:bg-gray-700 dark:text-gray-100"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={authForm.password}
          onChange={handleAuthInput}
          className="w-full p-2 mb-4 rounded border dark:bg-gray-700 dark:text-gray-100"
          required
        />
        {authError && (
          <div className="text-red-500 text-sm text-center mb-4">
            {authError}
          </div>
        )}
        <button
          type="submit"
          className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700 transition"
        >
          {authMode === "login" ? "Login" : "Register"}
        </button>
        <button
          type="button"
          className="w-full text-sm text-purple-600 dark:text-purple-400 mt-4"
          onClick={() => {
            setAuthMode(authMode === "login" ? "register" : "login");
            setAuthError("");
          }}
        >
          {authMode === "login"
            ? "Need an account? Register"
            : "Have an account? Login"}
        </button>
      </form>
    </div>
  );
};

export default AuthPage;