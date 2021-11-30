function paddingAnimationOn (id){
    $("." + id + "-btn-selected:focus").animate({
        padding: '2.5vw'
     });
     $("." + id + "-btn-selected").animate({
        padding: '2.5vw'
     });
     $("." + id + "-btn").animate({
        padding: '2.5vw'
     });
}

function paddingAnimationOff (id){
    $("." + id + "-btn-selected:focus").animate({
        padding: '0%'
     });
     $("." + id + "-btn-selected").animate({
        padding: '0%'
     });
     $("." + id + "-btn").animate({
        padding: '0%'
     });
}

$(document).ready(function(){

$(".experiences-btn").click(function() {
    paddingAnimationOff("top");
    paddingAnimationOff("plan");
    $(this).removeClass("experiences-btn");
    $(this).addClass("experiences-btn-selected");
    $("#top-btn").removeClass("top-btn-selected");
    $("#top-btn").addClass("top-btn");
    $("#plan-btn").removeClass("plan-btn-selected");
    $("#plan-btn").addClass("plan-btn");
    paddingAnimationOn("experiences");
});

$(".top-btn").click(function() {
    paddingAnimationOff("experiences");
    paddingAnimationOff("plan");
    $("#experiences-btn").removeClass("experiences-btn-selected");
    $("#experiences-btn").addClass("experiences-btn");
    $(this).removeClass("top-btn");
    $(this).addClass("top-btn-selected");
    $("#plan-btn").removeClass("plan-btn-selected");
    $("#plan-btn").addClass("plan-btn");
    paddingAnimationOn("top");

});

$(".plan-btn").click(function() {
    paddingAnimationOff("experiences");
    paddingAnimationOff("top");
    $("#experiences-btn").removeClass("experiences-btn-selected");
    $("#experiences-btn").addClass("experiences-btn");
    $("#top-btn").removeClass("top-btn-selected");
    $("#top-btn").addClass("top-btn");
    $(this).removeClass("plan-btn");
    $(this).addClass("plan-btn-selected");
    paddingAnimationOn("plan");
});

$("#options-btn").click(function() {
    $("#options-div").show();
    $("#options-btn").hide();
    $("#options-btn-selected").show();
});

$("#options-btn-selected").click(function() {
    $("#options-div").hide();
    $("#options-btn-selected").hide();
    $("#options-btn").show();
});

});

