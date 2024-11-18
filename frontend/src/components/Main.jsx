// components/NoTemplates.js
import React from 'react';

function NoTemplates({ onCreateTemplateClick }) {
  return (
    <div className="text-center p-10 bg-white shadow-lg rounded-md">
      <h1 className="text-2xl font-semibold text-gray-800 mb-4">No templates yet</h1>
      <p className="text-gray-600 mb-6">Create a template to get started.</p>
      <button
        onClick={onCreateTemplateClick}
        className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600"
      >
        Create a Template
      </button>
    </div>
  );
}

export default NoTemplates;
