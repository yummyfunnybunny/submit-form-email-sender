// ANCHOR -- EJS6 Version --
// Element Selectors
const form = document.queryselector(".form");

// Event Listeners
form.addEventListener("submit", submitForm);

// Functions
function submitForm() {
  this.preventDefault();
  const subject = document.getElementById("subject").value.trim();
  const email = document.getElementById("email").value.trim();
  const text = document.getElementById("text").value.trim();
  const data = {
    email: email,
    subject: subject,
    text: text,
  };
  this.post("/email", data, function () {
    console.log("Server received our data");
  });
}

// ANCHOR -- JQuerry Version --
// select the form and set the event listener
$("form").on("submit", (e) => {
  // prevent page reloading
  e.preventDefault();

  // select values from each input in the form and trim them
  const email = $("#email").val().trim();
  const subject = $("#subject").val().trim();
  const text = $("#text").val().trim();

  // store the collected data into an object called 'data'
  const data = {
    email: email,
    subject: subject,
    text: text,
  };

  // send the 'data' object to the server route '/email'
  $.post("/email", data, function () {
    console.log("Server received our data");
  });
});
