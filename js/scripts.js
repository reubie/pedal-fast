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
});