const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener("click", mobileMenu);

function mobileMenu()   {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll('.nav-link');
navLink.forEach((n) => n.addEventListener("click", closeMenu));

function closeMenu()    {
    hamburger.classList.remove("active");
    navMenu.classList.toggle("active");
}



const picker = new easepick.create({
    element: "#datepicker",
    css: [
        "https://cdn.jsdelivr.net/npm/@easepick/bundle@1.2.1/dist/index.css"
    ],
    zIndex: 10,
    grid: 2,
    calendars: 2,
    inline: true,
    plugins: [
        "RangePlugin"
    ]
})



function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }













  





  document.getElementById('membershipRegistrationForm').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default form submission.

    // Remove existing thank-you message if it exists to prevent duplicates
    let existingThankYouMessage = document.getElementById('thankYouMessage');
    if (existingThankYouMessage) {
        existingThankYouMessage.remove();
    }

    // Create and insert the thank-you message
    let thankYouMessage = document.createElement('div');
    thankYouMessage.id = 'thankYouMessage'; // Assign an ID for possible removal or styling
    thankYouMessage.textContent = 'Thank you for your registration!';
    thankYouMessage.style.marginTop = '20px';
    thankYouMessage.style.fontSize = '16px';
    thankYouMessage.style.color = '#4CAF50'; // Example styling, adjust as needed

    // Find the submit button within the form
    let submitBtn = document.getElementById('submitBtn');

    // Insert the thank-you message right after the submit button
    submitBtn.parentNode.insertBefore(thankYouMessage, submitBtn.nextSibling);
});








document.getElementById('membershipRegistrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission.

    displayThankYouMessage();
});

function displayThankYouMessage() {
    // Target the container where you want to display the thank-you message
    let messageContainer = document.getElementById('registrationMessage');

    // Update the innerHTML of the container with your message
    messageContainer.innerHTML = '<p style="margin-top: 20px; font-size: 16px; color: #4CAF50;">Thank you for your registration!</p>';

    // Optionally, focus on the message for accessibility
    messageContainer.focus();
}






















document.getElementById('bookingForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const selectedRoom = document.getElementById('roomType').value;
    const numberOfBeds = document.getElementById('beds').value;

    // Constructing booking information
    const bookingInfo = {
        roomType: selectedRoom,
        beds: numberOfBeds,
    };

    console.log('Booking Information:', bookingInfo);
    alert('Your booking request has been submitted. Thank you!');

    // This is where you'd integrate with a server-side logic or API
    // to process the booking information.
});






document.getElementById('bookingForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission.

    displayThankYouMessagebookingForm();
});

function displayThankYouMessagebookingForm() {
    // Target the container where you want to display the thank-you message
    let messageContainer = document.getElementById('bookingFormMassage');

    // Update the innerHTML of the container with your message
    messageContainer.innerHTML = '<p style="margin-top: 20px; font-size: 16px; color: #4CAF50;">Thank you for Booking your stay!</p>';

    // Optionally, focus on the message for accessibility
    messageContainer.focus();
}













function bookingMessage() {
    // Target the container where you want to display the thank-you message
    let messageContainer = document.getElementById('Swimmingbtn');

    // Update the innerHTML of the container with your message
    messageContainer.innerHTML = '<p style="margin-top: 20px; font-size: 16px; color: #4CAF50;">Thank you for booking!</p>';

    // Optionally, focus on the message for accessibility
    messageContainer.focus();

}  




function bookingMessageIndoorGames() {
    // Target the container where you want to display the thank-you message
    let messageContainer = document.getElementById('IndoorGames');

    // Update the innerHTML of the container with your message
    messageContainer.innerHTML = '<p style="margin-top: 20px; font-size: 16px; color: #4CAF50;">Thank you for booking!</p>';

    // Optionally, focus on the message for accessibility
    messageContainer.focus();

}




function bookingMessageOutdoorGames() {
    // Target the container where you want to display the thank-you message
    let messageContainer = document.getElementById('OutdoorGames');

    // Update the innerHTML of the container with your message
    messageContainer.innerHTML = '<p style="margin-top: 20px; font-size: 16px; color: #4CAF50;">Thank you for booking!</p>';

    // Optionally, focus on the message for accessibility
    messageContainer.focus();

}  



function bookingMessageCinema() {
    // Target the container where you want to display the thank-you message
    let messageContainer = document.getElementById('CinemaBooking');

    // Update the innerHTML of the container with your message
    messageContainer.innerHTML = '<p style="margin-top: 20px; font-size: 16px; color: #4CAF50;">Thank you for booking!</p>';

    // Optionally, focus on the message for accessibility
    messageContainer.focus();

}  














