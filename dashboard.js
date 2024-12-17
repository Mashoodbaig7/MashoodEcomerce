document.addEventListener('DOMContentLoaded', function () {
    const username = localStorage.getItem('username');
    const email = localStorage.getItem('email');
    const profileImageSrc = localStorage.getItem('profileImage');
  
    // Display user information
    if (username && email) {
        document.getElementById('display-username').innerText = username;
        document.getElementById('display-email').innerText = email;
        document.getElementById('display-username-profile').innerText = username;
        document.getElementById('display-email-profile').innerText = email;
    } else {
        alert("User data not found. Redirecting to login.");
        window.location.href = 'login.html';
    }
  
    // Display saved profile image or default if not available
    const profileImage = document.getElementById('profile-image');
    const profileImageMain = document.getElementById('profile-image-main');
    if (profileImageSrc) {
        profileImage.src = profileImageSrc;
        profileImageMain.src = profileImageSrc;
    }
  
    // Handle profile image upload
    document.getElementById('upload-image').addEventListener('change', function(event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                const imageSrc = e.target.result;
                profileImage.src = imageSrc;
                profileImageMain.src = imageSrc;
                localStorage.setItem('profileImage', imageSrc); // Save image to localStorage
            };
            reader.readAsDataURL(file);
        }
    });
  
    // Logout functionality
    document.getElementById('logout-button').addEventListener('click', function () {
        localStorage.clear();
        window.location.href = 'login.html';
    });
  });