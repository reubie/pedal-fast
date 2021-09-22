$(document).ready(function () {

    var name,email,password;
   
    $(".rent").click(function () {
        location.replace("sign.html");

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