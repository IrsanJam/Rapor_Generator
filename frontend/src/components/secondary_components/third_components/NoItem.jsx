import React from 'react';

const NoItem = ({ onCreateTemplateClick }) => {
  return (
    <div className="text-center h-screen flex justify-center items-start pt-20 p-4 bg-white shadow-lg ">
      <div className="w-full">
        <div className="flex justify-center items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
            class="w-12 text-slate-500"
          >
            <path d="M5.625 1.5c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0016.5 9h-1.875a1.875 1.875 0 01-1.875-1.875V5.25A3.75 3.75 0 009 1.5H5.625z"></path>
            <path d="M12.971 1.816A5.23 5.23 0 0114.25 5.25v1.875c0 .207.168.375.375.375H16.5a5.23 5.23 0 013.434 1.279 9.768 9.768 0 00-6.963-6.963z"></path>
          </svg>
        </div>

        <h1 className="text-2xl font-semibold text-gray-800 mb-4">No templates yet</h1>
        <p className="text-gray-600 mb-6">Create a template to get started.</p>
        <button
          onClick={onCreateTemplateClick}
          className="px-6 py-2 bg-gray-900 text-white font-semibold rounded-md hover:bg-gray-300"
        >
          Create a Template
        </button>
      </div>
    </div>
  );
};

export default NoItem;
