const ideas = [
  "Build a to-do app using only checkboxes and emojis.",
  "Create a weather app that speaks the forecast out loud.",
  "Design a portfolio that only uses black and white — no colors.",
  "Develop a note-taking app where notes disappear after 24 hours.",
  "Create a Pomodoro timer that slowly reveals a picture as you focus.",
  "Build a calculator with only drag-and-drop input.",
  "Design a landing page with only one font and no images.",
  "Make a music player where controls are emoji-based.",
  "Build a blog engine where each post must be under 100 words.",
  "Create a form that changes theme based on the user's typing speed.",
  "Develop a habit tracker using only CSS animations for feedback.",
  "Design a dashboard that adapts its layout based on time of day.",
  "Build a memory game where cards fade instead of flip.",
  "Create a dark-mode-only app with glowing UI elements.",
  "Make a portfolio site inspired by retro Windows or Mac OS.",
  "Build a currency converter that teaches geography along the way.",
  "Create a quiz app that reacts differently based on your confidence.",
  "Design a social card generator that outputs a unique design every time.",
  "Create a one-page app that’s fully operable with just the keyboard.",
  "Build a sticky notes app that rearranges itself randomly every hour.",
  "Create a design system inspired by food (buttons = burgers, cards = toast).",
  "Build a project where everything animates like water.",
  "Create a motivational app that yells compliments in CSS popups.",
  "Design a soundboard with cat meows for every UI event.",
  "Build a digital garden that changes layout daily.",
  "Make a countdown timer that visually melts as time runs out.",
  "Build a game UI using only console-like black-and-green visuals.",
  "Create a résumé with interactive storytelling instead of scroll.",
  "Design a color palette generator that reacts to your voice.",
  "Create a theme switcher app with only rotating cubes as UI.",
  "Build a task app where each task is a character you level up.",
  "Make a web app using no text — only icons.",
  "Design a pixel-art-style calculator.",
  "Create an app that generates excuses for skipping standups.",
  "Build a quote generator that filters quotes based on your mood.",
  "Develop a clock app that displays time using animals.",
  "Create a blog where every scroll changes the entire layout.",
  "Design a survey app where each question looks like a different website.",
  "Build a game where your score is how well your CSS validates.",
  "Create a font switcher that mimics emotions in type.",
  "Build a video player with emoji reactions embedded in the timeline.",
  "Design a flashcard app with animations based on correctness.",
  "Build a UI toolkit where each component is a shape-shifting blob.",
  "Create a joke generator that uses AI-sounding errors as delivery.",
  "Build a nostalgia site that loads like dial-up.",
  "Design a productivity app that grows a digital plant as you focus.",
  "Create a favicon that animates based on app state.",
  "Make a search engine that gives completely useless results.",
  "Create a CSS-only animation demo playground.",
  "Build a memory log where you store “smells” as icons.",
  "Create a live resume that updates its style based on viewer location.",
  "Design a button generator where buttons have personalities.",
  "Build a quote-of-the-day that reveals with a puzzle animation.",
  "Create a photo gallery where every image rotates like a planet.",
  "Design a digital bookshelf with draggable books.",
  "Create a JavaScript horror game with fake browser glitches.",
  "Build a form that changes questions depending on the time of day.",
  "Design a shopping cart that uses gravity to collect items.",
  "Create an onboarding experience for an alien species.",
  "Build a 404 page that turns into a mini-game.",
  "Design a voting app with animated confetti wars.",
  "Make an onboarding form where the user races a ticking bomb.",
  "Create a timer that adds time when you’re being productive.",
  "Build an app where UI grows or shrinks based on mouse speed.",
  "Design a neon sign editor using canvas and glows.",
  "Create a shadow puppets interface — light position affects UI.",
  "Build a story game where you code choices into reality.",
  "Design a mobile-first site that breaks when resized up.",
  "Create a text adventure in pure CSS.",
  "Build a riddle challenge where answers unlock new site sections.",
  "Create a weather app where cities are represented as characters.",
  "Build an app that translates emotions to colors.",
  "Design a terminal-style notes app with modern animations.",
  "Make a site that reveals your portfolio as a time capsule.",
  "Create a visual search engine using image matching.",
  "Build a journal app where you can’t see what you wrote until the next day.",
  "Create a CSS playground that lets users draw with gradients.",
  "Build a reaction tester that tracks clicks per mood emoji.",
  "Create a fake UI that reacts to your decisions like a narrative game.",
  "Build a music visualizer that dances with your typing.",
  "Design a web comic where panels load based on scroll speed.",
  "Make a font quiz — guess the font by its style.",
  "Create a distraction blocker that plays calming audio and hides tabs.",
  "Build an onboarding screen that changes based on your cursor path.",
  "Create a “developer burn-out detector” with interactive questions.",
  "Design a scroll animation where elements fall into place like Tetris.",
  "Build a light/dark mode that shifts depending on your browser tab focus.",
  "Make a randomizer for UX micro-interactions.",
  "Create a fake terminal interface that slowly becomes self-aware.",
  "Build a recipe app where the recipe 'unlocks' with right ingredients.",
  "Design an avatar builder with draggable pixel blocks.",
  "Build a carousel where swiping affects background music.",
  "Create a real-time mood board that changes per user input.",
  "Design a clock that runs backwards in night mode.",
  "Make a sticky notes wall that lets others leave notes anonymously.",
  "Build a challenge where you create a layout with only floats.",
  "Create an emoji keyboard that learns your usage.",
  "Build a social feed where posts fade the longer you look at them.",
  "Make a modal window that tells jokes until you close it.",
  "Create a task list that rewards you with digital pets when completed.",
];

const generateButton = document.getElementById("generateButton");
const ideaText = document.getElementById("ideaText");
const ideaBox = document.getElementById("ideaBox");

generateButton.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * ideas.length);
  ideaText.textContent = ideas[randomIndex];

  ideaBox.classList.add("highlighted");

  ideaBox.style.transform = "scale(1.05)";
  setTimeout(() => {
    ideaBox.style.transform = "scale(1)";
  }, 150);
});
