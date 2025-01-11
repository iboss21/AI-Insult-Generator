import React, { useState } from 'react';
import Layout from './Layout';
import SocialLogin from './components/SocialLogin';
import ProviderSelector from './components/ProviderSelector';
import InsultGenerator from './components/InsultGenerator';

/**
 * App:
 * - Manages global state for user login status and which AI provider is selected.
 * - Renders different components (SocialLogin, ProviderSelector, InsultGenerator).
 */
function App() {
  const [user, setUser] = useState(null);      // null or an object with user info
  const [aiProvider, setAiProvider] = useState(null); // e.g., 'openAI', 'azure', 'google'

  // Handler for "successful" social login
  const handleLogin = (userData) => {
    setUser(userData);
  };

  // Handler for selecting an AI provider
  const handleProviderSelect = (provider) => {
    setAiProvider(provider);
  };

  return (
    <Layout>
      {/* If no user is logged in, show the social login */}
      {!user && <SocialLogin onLogin={handleLogin} />}

      {/* If user is logged in but hasn't selected a provider yet */}
      {user && !aiProvider && (
        <ProviderSelector onSelect={handleProviderSelect} />
      )}

      {/* If both user and provider are selected, show the insult generator */}
      {user && aiProvider && (
        <InsultGenerator user={user} aiProvider={aiProvider} />
      )}
    </Layout>
  );
}

export default App;
