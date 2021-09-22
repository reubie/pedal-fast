$(document).ready(function () {

    var name,email,password;
   
    $(".rent").click(function () {
        location.replace("our-fleet.html");

    });
    $(".Login").click(function (e) {
        e.preventDefault();
        name = $("input#username").val();
        email = $("input#user-email").val();
        password = $("input#user-password").val();
      
        if(name=="" ||name == null ||email=="" ||email == null ||password=="" ||password == null ){
            alert("Please fill in all details")
        }else{
            location.replace("our-fleet.html.html");
        }

    });
    $(".Signup").click(function () {
        location.replace("our-fleet.html.html");
        // alert("ghj")

    });
});