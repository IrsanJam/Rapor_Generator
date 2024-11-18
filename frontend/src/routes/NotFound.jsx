import React from 'react';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-zinc-900 via-blue-700 to-blue-950 flex items-center justify-center">
      <div className="text-center p-10 bg-white rounded-lg shadow-2xl">
        <div className="text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-zinc-900 to-blue-900">
          404
        </div>
        <p className="text-3xl text-gray-800 mt-4">Oops! Page not found</p>
        <p className="text-lg text-gray-600 mt-2">
          Sorry, the page you are looking for does not exist. It might have been moved or deleted.
        </p>
        <button
          onClick={() => (window.location.href = '/main')}
          className="mt-6 px-8 py-3 bg-gradient-to-r from-zinc-900 to-blue-800 text-white font-semibold rounded-full shadow-lg hover:shadow-2xl transition duration-300 transform hover:scale-105"
        >
          Back to Home
        </button>
        <div className="mt-10 flex justify-center">
          <svg
            className="w-64 h-64 text-zinc-500"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 10h1m4 0h1m3-5v16m1 0a1 1 0 001 1h8a1 1 0 001-1V9m-5-3h4a2 2 0 012 2v9.17a2 2 0 01-.58 1.41l-3.58 3.59a2 2 0 01-1.42.58H13a2 2 0 01-2-2V6a2 2 0 012-2zm-7 7h4m0 0v2a2 2 0 001 1.73v.54a2 2 0 11-4 0v-.54a2 2 0 001-1.73v-2z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
