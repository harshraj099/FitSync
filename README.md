# 🧠 AI Prompt Enhancer

An AI-powered tool that helps users **enhance, rewrite, and optimize prompts** for various platforms like ChatGPT and Claude — with support for different tones and styles.

---

## 🚀 Features

- ✍️ **Prompt Enhancement**
  - Improves the clarity, structure, and impact of your original prompt
- 🎭 **Tone/Style Selector**
  - Choose how your prompt result should sound: Formal, Friendly, Concise, Poetic, etc.
- 🔁 **Try Again Button**
  - Generate alternate improved versions with a single click
- 📋 **Quick Copy**
  - Instantly copy the enhanced prompt to clipboard
- 🎞️ **Animated Typing Output**
  - Visually engaging output that simulates typing

---

## 🛠️ Tech Stack

### Frontend
- **React** – UI Framework
- **Tailwind CSS** – Utility-first styling
- **DaisyUI** – UI component library
- **Axios** – API calls to backend
- **Vite** – Fast frontend bundler

### Backend
- **Node.js + Express** – API server for handling enhancement requests
- **OpenRouter API** – Sends prompt requests to multiple AI models:
  - `mistralai/devstral-small:free`
  - `google/gemma-3n-e4b-it:free`
  - `nousresearch/deephermes-3-mistral-24b-preview:free`
  - `meta-llama/llama-3.3-8b-instruct:free`
- **dotenv** – Securely manage API keys

---

## 🤖 Model Selection & Fallback

To ensure reliability and the best possible prompt enhancement, this app uses multiple AI models available through the OpenRouter API. The backend tries these models in a prioritized order:

1. `mistralai/devstral-small:free`  
2. `google/gemma-3n-e4b-it:free`  
3. `nousresearch/deephermes-3-mistral-24b-preview:free`  
4. `meta-llama/llama-3.3-8b-instruct:free`

### How it works:
- When a prompt enhancement request is made, the backend first attempts to generate a response using the top-priority model (`devstral-small`).
- If the request fails or the response is unsatisfactory (due to rate limits, errors, or quality), it automatically falls back to the next model in the list.
- This fallback logic ensures continuous service availability even if some models are temporarily unavailable or overloaded.
- Users get consistent results with improved robustness across different AI providers.




