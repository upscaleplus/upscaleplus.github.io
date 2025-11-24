// Minimal client-side behavior: validate email and display a friendly message.
// This example does NOT send data to a server. Replace the fetch/action when you have a backend.

document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("waitlistForm");
  const email = document.getElementById("email");
  const message = document.getElementById("formMessage");
  const yearSpan = document.getElementById("year");
  yearSpan.textContent = new Date().getFullYear();

  function validEmail(e) {
    // simple email regex (sufficient for lightweight validation)
    return /\S+@\S+\.\S+/.test(e);
  }

  form.addEventListener("submit", function(ev) {
    ev.preventDefault();
    message.textContent = "";
    const val = email.value.trim();
    if (!val) {
      message.textContent = "Please enter your email address.";
      message.style.color = "#ffbaba";
      return;
    }
    if (!validEmail(val)) {
      message.textContent = "Please provide a valid email address.";
      message.style.color = "#ffbaba";
      return;
    }

    // Simulate success (replace with real API call when ready)
    message.style.color = "#baf3ff";
    message.textContent = "Thanks — you're on the waitlist! We'll email updates soon.";
    form.reset();

    // Optionally: localStorage to remember signup state for this demo site
    try {
      localStorage.setItem("videoupscale_waitlist", JSON.stringify({email: val, time: Date.now()}));
    } catch (e) {
      // ignore storage errors
    }
  });
});
