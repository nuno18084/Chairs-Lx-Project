const message =
  "Thank you for subscribing to our Newsletter! Hope to see you soon!";

document
  .getElementById("newsletterForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    alert(message);
  });
