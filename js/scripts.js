$(document).ready(function () {

    var email, password, regName, regPassword, regEmail, passwordConfirm;

    $(".rent").click(function () {
        location.replace("our-fleet.html");

    });
    $(".Login").click(function (e) {
        e.preventDefault();
        email = $("input#user-email").val();
        password = $("input#user-password").val();

        if (email == "" || email == null || password == "" || password == null) {
            $(".display").show().text("Please fill in all details")
        } else {
            $(".display").hide();
            location.replace("our-fleet.html");
        }

    });
    $(".Signup").click(function (e) {
        e.preventDefault()
        regName = $("input#UserName").val();
        regEmail = $("input#Email").val();
        regPassword = $("input#password").val();
        passwordConfirm = $("input#confirm-password").val();

        if (regName == "" || regName == null || regEmail == "" || regEmail == null || regPassword == "" ||
            regPassword == null || passwordConfirm == "" || passwordConfirm == null) {
            $(".display").show().text("Please fill in all details")
        } else if (regPassword != passwordConfirm) {
            $(".display").show().text("Passwords do not match")
            $("input#password").val("");
            $("input#confirm-password").val("");
        } else {
            $(".display").hide()
            location.replace("our-fleet.html");

        }
    });
  


    const next = document.querySelector('.next');
    const prev = document.querySelector('.prev');
    const slides = document.querySelectorAll('.slide');

    let index = 0;
    display(index);

    function display(index) {
        slides.forEach((slide) => {
            slide.style.display = 'none';
        });
        slides[index].style.display = 'flex';
    }

    function nextSlide() {
        index++;
        if (index > slides.length - 1) {
            index = 0;
        }
        display(index);
    }

    function prevSlide() {
        index--;
        if (index < 0) {
            index = slides.length - 1;
        }
        display(index);
    }

    next.addEventListener('click', nextSlide);
    prev.addEventListener('click', prevSlide);
});