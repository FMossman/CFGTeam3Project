// Get references to form elements
const form = document.querySelector('form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');

// Function to handle form submission
function handleSubmit(event) {
  event.preventDefault(); // Prevent form from submitting

  // Get input values
  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const message = messageInput.value.trim();

  console.log('Name:', name);
  console.log('Email:', email);
  console.log('Message:', message);

  // Perform basic form validation
  if (name === '' || email === '' || message === '') {
    return alert('Please fill in all fields');
  }

  // Create an object to store the form data
  const formData = {
    name,
    email,
    message
  };

  // Clear form inputs
  nameInput.value = '';
  emailInput.value = '';
  messageInput.value = '';

  // Display a success message
  if (submit = onclick) {
    return alert('Thank you for your message! We will get back to you soon.');
}
}
// Attach the form submission event listener
form.addEventListener('submit', handleSubmit);
