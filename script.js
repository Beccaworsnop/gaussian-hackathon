document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("donationForm");
    const removeButtons = document.querySelectorAll(".remove-btn");

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        alert("Thank you for your donation!");
    });

    removeButtons.forEach(button => {
        button.addEventListener("click", function () {
            this.parentElement.remove();
        });
    });
});