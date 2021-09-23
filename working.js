$(document).ready(function(){
    $("#bikesWork").mouseenter(function(){
        $(".hovering").css ("color", "tomato")
        $(".hovering").show()   
    })

    $("#bikes-descr").mouseleave(function(){
        $(".para2").hide()
    })
})