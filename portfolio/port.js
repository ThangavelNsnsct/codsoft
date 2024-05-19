document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    alert(`Thank you for reaching out, ${name}! We will get back to you at ${email}.`);

    // Here you can add code to handle form submission,
    // such as sending the data to a server or email.
    
    // Clear the form
    document.getElementById('contact-form').reset();
});

