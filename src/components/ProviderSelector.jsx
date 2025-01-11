import React from 'react';

/**
 * ProviderSelector:
 * - Allows users to choose which AI provider they'd like to use:
 *   OpenAI, Google Cloud AI, Azure, etc.
 */
function ProviderSelector({ onSelect }) {
  const handleSelect = (provider) => {
    onSelect(provider);
  };

  return (
    <div className="max-w-sm w-full bg-gray-100 p-6 rounded-md shadow-md">
      <h2 className="text-xl font-bold mb-4">Choose an AI Provider</h2>
      <button
        className="w-full bg-purple-600 text-white py-2 rounded-md mb-2"
        onClick={() => handleSelect('openAI')}
      >
        OpenAI
      </button>
      <button
        className="w-full bg-green-600 text-white py-2 rounded-md mb-2"
        onClick={() => handleSelect('google')}
      >
        Google Cloud AI
      </button>
      <button
        className="w-full bg-blue-700 text-white py-2 rounded-md"
        onClick={() => handleSelect('azure')}
      >
        Microsoft Azure AI
      </button>
    </div>
  );
}

export default ProviderSelector;
