const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", function () {

    navLinks.classList.toggle("active");

});

const menuItems =
    document.querySelectorAll(".nav-links a");

menuItems.forEach(function(item) {

    item.addEventListener("click", function() {

        navLinks.classList.remove("active");

    });

});

const bookingForm =
    document.getElementById("bookingForm");

const successMessage =
    document.getElementById("successMessage");


bookingForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const nama =
        document.getElementById("nama").value;

    const layanan =
        document.getElementById("layananSelect").value;


    successMessage.innerHTML =
        "✓ Terima kasih, " +
        nama +
        "! Booking " +
        layanan +
        " berhasil dikirim.";


    successMessage.style.display = "block";


    bookingForm.reset();

});

const tanggal =
    document.getElementById("tanggal");


const today =
    new Date()
    .toISOString()
    .split("T")[0];


tanggal.min = today;

const cards =
    document.querySelectorAll(
        ".service-card, .doctor-card, .testimonial"
    );


function checkScroll() {

    cards.forEach(function(card) {

        const cardPosition =
            card.getBoundingClientRect().top;

        const screenPosition =
            window.innerHeight - 80;


        if (cardPosition < screenPosition) {

            card.style.opacity = "1";

            card.style.transform =
                "translateY(0)";

        }

    });

}

cards.forEach(function(card) {

    card.style.opacity = "0";

    card.style.transform =
        "translateY(30px)";

    card.style.transition =
        "0.7s ease";

});


window.addEventListener(
    "scroll",
    checkScroll
);

checkScroll();

document.getElementById("year")
    .textContent =
    new Date().getFullYear();