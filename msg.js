document.getElementById("messageForm").addEventListener("submit", function(event) {
    event.preventDefault();

    var message = document.getElementById("message").value;

    if (message.trim() !== "") {
        document.getElementById("confirmationMessage").textContent = "Your message has been sent!";
        document.getElementById("message").value = ""; 
    } else {
        document.getElementById("confirmationMessage").textContent = "Please write a message.";
    }
});
