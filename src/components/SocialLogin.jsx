import React from 'react';

/**
 * SocialLogin:
 * - Presents buttons or forms for social login (Google, Facebook, Twitter, etc.).
 * - On successful login, calls onLogin(...) with user info.
 */
function SocialLogin({ onLogin }) {
  // TODO: Implement real social media login flows (Firebase/Auth0/etc.)
  
  const handleMockLogin = () => {
    const mockUser = {
      name: 'Test User',
      email: 'testuser@example.com',
      // Add more mock user details if desired
    };
    onLogin(mockUser);
  };

  return (
    <div className="max-w-sm w-full bg-gray-100 p-6 rounded-md shadow-md">
      <h2 className="text-xl font-bold mb-4">Social Login</h2>
      <p className="mb-4">Please sign in with one of the following providers:</p>

      {/* Replace these with real login buttons */}
      <button
        className="w-full bg-blue-500 text-white py-2 rounded-md mb-2"
        onClick={handleMockLogin}
      >
        Sign in with Google
      </button>
      <button
        className="w-full bg-blue-800 text-white py-2 rounded-md"
        onClick={handleMockLogin}
      >
        Sign in with Facebook
      </button>
    </div>
  );
}

export default SocialLogin;
