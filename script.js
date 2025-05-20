function submitForm() {
  const checkbox = document.getElementById("agree");
  if (checkbox.checked) {
      alert("Thank you for accepting the terms.");
  } else {
      alert("Please agree to the terms before continuing.");
  }
}