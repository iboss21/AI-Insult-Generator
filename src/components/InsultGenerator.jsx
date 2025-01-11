import React, { useState } from 'react';

/**
 * InsultGenerator:
 * - Calls the selected AI provider to generate an insult.
 * - Displays the insult and provides share functionality.
 * - This is just a placeholder; you need to implement real API calls.
 */
function InsultGenerator({ user, aiProvider }) {
  const [insult, setInsult] = useState('');
  const [loading, setLoading] = useState(false);

  const generateInsult = async () => {
    setLoading(true);
    setInsult('');

    // TODO: Call your actual AI provider API here.
    // For now, we mock a random insult.
    const mockInsults = [
      'Your code is so buggy, even GitHub wants a break!',
      "I’ve seen turtles code faster than you type!",
      'Your logic is so twisted, it belongs in a riddle museum!',
    ];

    // Simulate network delay
    setTimeout(() => {
      // Randomly pick an insult
      const randomInsult =
        mockInsults[Math.floor(Math.random() * mockInsults.length)];

      setInsult(`[${aiProvider}] ${randomInsult}`);
      setLoading(false);
    }, 1000);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: 'Check out this AI insult!',
          text: insult,
        })
        .then(() => console.log('Shared successfully!'))
        .catch((error) => console.log('Error sharing:', error));
    } else {
      // Fallback: copy to clipboard or show a message
      navigator.clipboard.writeText(insult);
      alert('Insult copied to clipboard!');
    }
  };

  return (
    <div className="max-w-sm w-full bg-gray-100 p-6 rounded-md shadow-md text-center">
      <h2 className="text-xl font-bold mb-4">
        Welcome, {user?.name || 'User'}!
      </h2>
      <p className="mb-4">
        Current Provider: <span className="font-semibold">{aiProvider}</span>
      </p>
      <button
        className="w-full bg-red-500 text-white py-2 rounded-md mb-4"
        onClick={generateInsult}
        disabled={loading}
      >
        {loading ? 'Generating...' : 'Generate Insult'}
      </button>

      {insult && (
        <div className="bg-white p-4 rounded-md shadow-md mb-4">
          <p className="text-gray-800 italic">{insult}</p>
        </div>
      )}

      {insult && (
        <button
          className="w-full bg-blue-500 text-white py-2 rounded-md"
          onClick={handleShare}
        >
          Share Insult
        </button>
      )}
    </div>
  );
}

export default InsultGenerator;
