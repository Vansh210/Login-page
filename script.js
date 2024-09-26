document.getElementById('optinForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const fullname = document.getElementById('fullname').value;
    const email = document.getElementById('email').value;
    console.log(`Full Name: ${fullname}\nEmail: ${email}`);
    alert(`Thank you for subscribing, ${fullname}!`);
    window.location.href = 'https://sites.google.com/view/mindful-connect/thank-you';
});
