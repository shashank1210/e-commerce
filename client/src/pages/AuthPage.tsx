import React, { useState } from 'react';
import Login from '../components/auth/Login';
import Signup from '../components/auth/Signup';
import Illustration from '../assets/abstract.jpg';

const AuthPage: React.FC = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <div
      className="flex flex-col min-h-screen items-center justify-center"
      style={{
        backgroundImage: `url(${Illustration})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div
        className="flex w-full max-w-xl rounded-lg shadow-lg overflow-hidden
                   bg-white/30 backdrop-blur-md border border-white/40"
      >
        {/* Right Side - Form */}
        <div className="w-full p-8">
          {isSignUp ? <Signup /> : <Login />}
          <div className="mt-6 text-center">
            <button
              className="text-lg font-semibold text-blue-600 hover:text-blue-800 transition duration-300"
              onClick={() => setIsSignUp(!isSignUp)}
            >
              {isSignUp ? 'Already have an account? Login' : "Don't have an account? Sign Up"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
