// Grab references to all DOM elements we interact with
const noBtn = document.getElementById("noBtn");              // "No" button (moves around)
const yesBtn = document.getElementById("yesBtn");            // "Yes" button
const kitten = document.getElementById("kitten");            // Kitten / fail-state container
const buttons = document.getElementById("buttons");          // Wrapper for Yes / No buttons
const question = document.getElementById("question");        // Main question text
const audio = document.getElementById("celebrationAudio");   // Celebration audio on YES

// Track how many times the user tries to click/hover "No"
let attempts = 0;

// Number of attempts before triggering kitten mode
const maxAttempts = 5;

// Simple device check used for analytics segmentation
const isMobile = window.matchMedia("(max-width: 768px)").matches;

// Listen for both hover (desktop) and click (mobile / fallback) on "No"
noBtn.addEventListener("mouseenter", handleNoInteraction);
noBtn.addEventListener("click", handleNoInteraction);

/**
 * Handles any interaction with the "No" button.
 * - Increments attempt counter
 * - Sends analytics event
 * - Either moves the button or triggers kitten mode
 */
function handleNoInteraction() {
    attempts++;
  
    // Track each "No" attempt with device type + attempt count
    trackNoAttempt(isMobile, attempts);

    // Once the user hits the max attempts, switch to kitten mode
    if (attempts >= maxAttempts) {
    triggerKittenMode();
    return;
    }

    // Otherwise, randomly reposition the "No" button
    moveNoButtonRandomly();
}

/**
 * Moves the "No" button to a random location
 * within the visible viewport bounds
 */
function moveNoButtonRandomly() {
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);

    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
}

/**
 * Final fail-state when the user insists on clicking "No"
 * - Updates page state for analytics
 * - Hides buttons and question
 * - Shows kitten
 * - Triggers optional chaos / explosion effect
 */
function triggerKittenMode() {
    // Virtual pageview for GA (SPA-style tracking)
    trackPageState("Don't Play With Me 😿");

    // Remove the question and buttons
    question.textContent = "";
    buttons.classList.add("hidden");

    // Reveal the kitten message / image
    kitten.classList.remove("hidden");

    // Optional chaos mode 🔥 (screen shake)
    setTimeout(() => {
      document.body.classList.add("explode");
    }, 2500);

    // Final dark screen + message
    setTimeout(() => {
      trackPageState("💥 Too Late");

      document.body.classList.remove("explode");
      document.body.classList.add("dark");
      document.body.innerHTML = "<h1>💥 Too late.</h1>";
    }, 3500);
    
}

// Handle a successful "Yes" click
yesBtn.addEventListener("click", () => {
  // Track acceptance as a virtual page state
  trackPageState("Valentine Accepted 💕");

  // Track conversion event with device + number of attempts
  trackYesClick(isMobile, attempts);

  // Update UI to celebrate
  question.textContent = "Yay!! 💕 I knew you’d say yes!";
  buttons.classList.add("hidden");

  // Play celebration audio (may be blocked by browser autoplay rules)
  audio.volume = 0.5;
  audio.play().catch(e => {
    console.log("Autoplay blocked:", e);
  });
});