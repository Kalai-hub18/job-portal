document.addEventListener("DOMContentLoaded", function() {
    const loginLink = document.querySelector('.Login');
    const registerLink = document.querySelector('.RegisterNow');
    const steps = document.querySelectorAll('.step');
    
    console.log("DOM fully loaded and parsed");

    if (loginLink) {
        console.log("Login link found");
        loginLink.addEventListener('click', function(e) {
            e.preventDefault();
            // Code to open login modal or redirect to login page
            alert('Login functionality to be implemented.');
        });
    } else {
        console.log("Login link not found");
    }

    if (registerLink) {
        console.log("Register link found");
        registerLink.addEventListener('click', function(e) {
            e.preventDefault();
            alert('RegisterNow functionality to be implemented.');
        });
    } else {
        console.log("Register link not found");
    }

    steps.forEach((step, index) => {
        console.log(`Step ${index + 1} found`);
        step.addEventListener('click', function(e) {
            e.preventDefault();
            switch (index) {
                case 0:
                    alert('Register Account functionality to be implemented.');
                    break;
                case 1:
                    alert('Find Job functionality to be implemented.');
                    break;
                case 2:
                    alert('Apply Job functionality to be implemented.');
                    break;
                default:
                    console.log("No matching case for step index.");
            }
                });
});
});
