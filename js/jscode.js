function myFunction() {
  var x = document.getElementById("myInput");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}
const form = document.getElementById('information-section');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  alert('Thank you for signing up!');
});