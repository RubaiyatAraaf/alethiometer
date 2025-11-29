## Alethiometer

Your Personal Oracle: The Ancient Oracle of Truth

## Inspiration

My project, Alethiometer, is directly inspired by the fictional truth-telling device from Philip Pullman’s **His Dark Materials** trilogy, particularly as realized in the film and television adaptations. The core idea is to capture the instrument’s blend of ancient, intricate design (brass, clockwork, arcane symbols) with its profound function: revealing hidden truths. I wanted to build a digital oracle that feels like a powerful, physical artifact.

## What it does

The Alethiometer is a web application designed to act as a grounded large language model (LLM) query tool. It interprets a user's question, uses the Gemini API to search for and synthesize information, and then presents the answer in a compelling, thematic format.

**Key functionality includes:**

1. **Grounded Interpretation:** Users presents an image containing a claim, headline, or statement to the Alethiometer.

2. **Symbolic Input (Conceptual):** The UI translates the user’s query into symbolic "intents" displayed visually (like turning the Alethiometer's hands).

3. **Real-Time Retrieval:** It uses Google Search grounding via the Gemini API to ensure answers are based on up-to-date, verifiable data.

4. **Thematic Output:** The final synthesized answer, complete with original source citations, is displayed as a mystical "reading," maintaining the project’s mysterious aesthetic.

## How I built it

The project is built using **Vite** for the build process and the **Gemini API** for core intelligence.

* **Frontend (UI/UX):** I used Tailwind CSS to implement the sophisticated antique brass and clockwork aesthetic, focusing heavily on responsive design to make the intricate details look good on both mobile and desktop. Custom CSS was used for complex visual effects, such as the subtle glowing symbols and shifting depth of the central display.

* **Core Logic (JavaScript):** The application uses asynchronous JavaScript functions to handle user input, manage the loading states (with visual gear-turning animations), and communicate with the backend.

* **Intelligence (Gemini API):** I integrated the **`gemini-2.0-flash-lite`** model, utilizing its `tools: [{ "google_search": {} }]` feature to ensure all textual responses are grounded in real-time, external data, making the "truth" revealed verifiable.

* **Data Handling:** I ensure all API calls include proper **system instructions** to guide the model's tone and persona, making the generated text fit the theme of an ancient, wise oracle.

## Challenges I ran into

The primary challenge was balancing the rich, intricate aesthetic of a physical, antique device with the need for a clean, intuitive modern UI.

1. **Aesthetic Complexity:** Implementing the layered brass, aged wood, and glowing effects using only CSS proved complex, requiring careful use of gradients, shadows, and pseudo-elements to achieve depth without relying on external image assets.

2. **LLM Persona Consistency:** Ensuring the Gemini model’s output consistently maintained the required "ancient oracle" persona, while still delivering accurate, factual information from the search grounding, required meticulous tuning of the system instructions.

3. **API Call Management:** Implementing robust error handling and **exponential backoff** for the asynchronous fetch calls to the Gemini API was crucial for stability and a smooth user experience under network load.

## Accomplishments that I'm proud of

1. **Thematic Fidelity:** I successfully translated the look and feel of a complex, three-dimensional movie prop into a fully functional and highly aesthetic 2D web interface.

2. **Seamless Grounding:** The integration of the Google Search tool via the Gemini API works flawlessly, providing a foundation of factual truth beneath the mystical presentation.

## What's next for Alethiometer

I plan to expand the Alethiometer with several new features:

* **Dæmon Companion Feature:** Implement a small, animated dæmon (animal spirit) on the screen that reacts visually to the LLM's interpretation confidence or sentiment of the resulting text.

* **Symbolic Query Builder:** Develop a drag-and-drop interface where users can select 3-5 keywords/symbols before submitting the text query, which would be included in the prompt to the LLM for more targeted readings.

* **History Log:** Implement local storage (or a small database if required) to save previous "readings" for users to review later.
