// Function to show notification popup for Limited Offer
function showNotification() {
    const isSignedIn = false; // Replace this with actual sign-in check

  if (!isSignedIn) {
    let popup = document.getElementById("notificationPopup");
    popup.style.display = "block";

    // Auto-hide the popup after 3 seconds
    setTimeout(() => {
      popup.style.display = "none";
    }, 3000);
  } else {
    window.location.href = "notifications.html"; // Redirect if signed in
  }
}

// Function to sliders 
const wrapper = document.querySelector('.sliderWrapper');
const menuItems = document.querySelectorAll('.menuItem');

menuItems.forEach((item, index) => {
    item.addEventListener("click", () => {
        wrapper.style.transform = `translateX(${-100 * index}vw)`;
    });
}); 

// JavaScript for dynamic payment method handling
const creditCardOption = document.getElementById('creditCardOption');
const cardDetails = document.getElementById('cardDetails');

// Add an event listener for changes in payment method selection
document.querySelectorAll('input[name="payment"]').forEach((input) => {
input.addEventListener('change', () => {
    if (creditCardOption.checked) {
        cardDetails.style.display = 'block';
    } else {
        cardDetails.style.display = 'none';
    }
    });
});    

// Selecting multiple Buy buttons
const productButtons = document.querySelectorAll(".productButton");
const payment = document.getElementById("payment");
const close = document.querySelector(".close");

// Loop through all buttons
productButtons.forEach((button) => {
    button.addEventListener("click", () => {
        payment.style.display = "flex";
    });
});

// Close modal functionality
close.addEventListener("click", () => {
    payment.style.display = "none";
});

// Order confirmation function
document.querySelector(".payButton").addEventListener("click", function() {
    document.getElementById("confirmationModal").style.display = "flex";
});

document.getElementById("closeModal").addEventListener("click", function() {
    document.getElementById("confirmationModal").style.display = "none";
});

// Function to close the order confirmation modal
document.getElementById("closeModal2").addEventListener("click", function() {
    document.getElementById("confirmationModal").style.display = "none";
    window.location.reload(); // Reloads the current page
});

// Function for submit button - Contact page
document.querySelector(".contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); 
    let message = document.getElementById("confirmationMessage");
    message.style.display = "block";
    message.textContent = "Thank you for reaching us! We'll get back to you.";
});

// Modal function for cart
function openModal() {
    document.getElementById("cartModal").style.display = "block";
    setTimeout(closeModal, 2000); // Auto-close after 2 seconds
}

function closeModal() {
    document.getElementById("cartModal").style.display = "none";
}