<<<<<<< HEAD
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');
const slides = document.querySelectorAll('.slide');

let index = 0;
display(index);
function display (index) {
	slides.forEach((slide) => {
		slide.style.display = 'none';
	});
	slides[index].style.display = 'flex';
}

function nextSlide () {
	index++;
	if (index > slides.length - 1) {
		index = 0;
	}
	display(index);
}
function prevSlide () {
	index--;
	if (index < 0) {
		index = slides.length - 1;
	}
	display(index);
}

next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);
=======

$(document).ready(function () {

    var name,email,password;
   
    $(".rent").click(function () {
        location.replace("login.html");

    });
    $(".Login").click(function (e) {
        e.preventDefault();
        name = $("input#username").val();
        email = $("input#user-email").val();
        password = $("input#user-password").val();
      
        if(name=="" ||name == null ||email=="" ||email == null ||password=="" ||password == null ){
            alert("Please fill in all details")
        }else{
            location.replace("index.html");
        }

    });
    $(".Signup").click(function () {
        location.replace("index.html");
        // alert("ghj")

    });
});

>>>>>>> dev
