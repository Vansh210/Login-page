document.getElementById('opt-in-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    alert(`Thank you for subscribing with ${email}!`);
    // Here you can add your code to handle the form submission, e.g., sending the email to your server
});
