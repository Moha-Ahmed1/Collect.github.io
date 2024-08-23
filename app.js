document
  .getElementById("registrationForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    var password = document.getElementById("password").value;
    var reenter = document.getElementById("reenter").value;

    if (password !== reenter) {
      alert("Passwords do not match!");
      return false;
    }

    alert("Registration successful!");
    // You can add further code to submit the form data to your server.
  });
