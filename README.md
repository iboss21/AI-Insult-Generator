
# AI Insult Generator

A **React + Vite + Tailwind CSS** starter project for an AI-powered “Random Insult Generator” app.  
This scaffold includes:

- **Mocked social login** (e.g., Google, Facebook) to demonstrate the login process.  
- **AI provider selection** (OpenAI, Google Cloud, Azure) to let users choose an AI service.  
- **Mocked insult generation** to showcase how you’d integrate real API calls.  
- **Tailwind CSS** for rapid styling and responsiveness.  
- A simple, maintainable structure with minimal dependencies.

> **Disclaimer**: This is a **template**. You **must** add **actual** social login flows, AI provider integrations, and moderation logic to create a fully functional production app.

---

## Features

1. **Mocked Social Login**  
   - Demonstrates user sign-in flow.  
   - Replace with real providers (e.g., Firebase Auth, Auth0).

2. **AI Provider Selection**  
   - Users can pick which AI service to use: OpenAI, Google, or Azure (currently mocked).

3. **Insult Generation**  
   - Example insult array is used to simulate AI output.  
   - Replace with real API calls to your chosen AI provider.

4. **Responsive Layout**  
   - Tailwind CSS ensures a responsive, modern UI.

5. **Share Functionality**  
   - Uses the [Web Share API](https://developer.mozilla.org/docs/Web/API/Navigator/share) when available.  
   - Falls back to clipboard copy if sharing isn’t supported.

---

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/ai-insult-generator.git
cd ai-insult-generator
```

### 2. Install Dependencies

```bash
npm install
```
_or_
```bash
yarn
```

### 3. Run the Development Server

```bash
npm run dev
```
_or_
```bash
yarn dev
```

- By default, this starts the app on [http://localhost:5173/](http://localhost:5173/).  

### 4. Build for Production

```bash
npm run build
```
_or_
```bash
yarn build
```

- Creates an optimized build in the `dist/` folder, ready for deployment.

---

## Project Structure

```
ai-insult-generator/
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── vite.config.js
├── README.md
├── index.html
└── src
    ├── main.jsx           // App entry point
    ├── App.jsx            // Main application component
    ├── Layout.jsx         // Layout wrapper (header/footer)
    ├── styles
    │   └── index.css      // Tailwind & global CSS
    └── components
        ├── SocialLogin.jsx        // Mocked social login UI
        ├── ProviderSelector.jsx   // AI provider selection
        └── InsultGenerator.jsx    // Core insult generation UI
```

---

## Next Steps

1. **Social Login**  
   - Replace the **mock** login in `SocialLogin.jsx` with real authentication (e.g., **Firebase Auth**, **Auth0**, **Passport.js**).

2. **AI Provider Integrations**  
   - In `InsultGenerator.jsx`, swap out the mocked insults with real requests to your chosen AI providers:  
     - **OpenAI** via [OpenAI API](https://platform.openai.com/docs/api-reference).  
     - **Google Cloud** via [Google Cloud AI platform](https://cloud.google.com/ai-platform).  
     - **Azure** via [Azure Cognitive Services](https://azure.microsoft.com/services/cognitive-services/).  
   - Securely store and handle your API keys (best in a backend or a serverless function).

3. **Content Moderation**  
   - Filter out or manage inappropriate AI outputs.  
   - Many AI providers include built-in moderation endpoints or guidelines.

4. **User Profiles & Persistence**  
   - Consider creating user profiles (e.g., storing favorites, history) via a backend database.  
   - Could use **Firebase** or your own **Node/Express** + **MongoDB**/ **PostgreSQL** approach.

5. **Deployment**  
   - Deploy to a static hosting service like **Netlify** or **Vercel** if you don’t need server logic.  
   - For secure key management, deploy a backend proxy on **Heroku**, **Railway**, or **Fly.io**.

---

## Contributing

1. **Fork** the repository.  
2. **Create** a branch for your feature (`git checkout -b feature/my-new-feature`).  
3. **Commit** your changes (`git commit -m 'Add some new feature'`).  
4. **Push** to the branch (`git push origin feature/my-new-feature`).  
5. **Open** a Pull Request.

We welcome any improvements, from UI tweaks to integrations with more AI providers!

---

## License

This project is licensed under a [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0/).  
You are free to share and adapt this project, as long as you provide appropriate credit.

---

**Enjoy building your AI Insult Generator—and remember to keep it fun, responsible, and respectful!**
```
