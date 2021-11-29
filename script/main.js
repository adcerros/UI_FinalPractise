$(document).ready(function(){

$(".experiences-btn").click(function() {
    $("#experiences-selected-background").show();
    $(this).removeClass("experiences-btn");
    $(this).addClass("experiences-btn-selected");
    $("#top-btn").removeClass("top-btn-selected");
    $("#top-btn").addClass("top-btn");
    $("#top-selected-background").hide();
    $("#plan-btn").removeClass("plan-btn-selected");
    $("#plan-btn").addClass("plan-btn");
    $("#plan-selected-background").hide();
});

$(".top-btn").click(function() {
    $("#experiences-btn").removeClass("experiences-btn-selected");
    $("#experiences-btn").addClass("experiences-btn");
    $("#experiences-selected-background").hide();
    $("#top-selected-background").show();
    $(this).removeClass("top-btn");
    $(this).addClass("top-btn-selected");
    $("#plan-btn").removeClass("plan-btn-selected");
    $("#plan-btn").addClass("plan-btn");
    $("#plan-selected-background").hide();
});

$(".plan-btn").click(function() {
    $("#experiences-btn").removeClass("experiences-btn-selected");
    $("#experiences-btn").addClass("experiences-btn");
    $("#experiences-selected-background").hide();
    $("#top-btn").removeClass("top-btn-selected");
    $("#top-btn").addClass("top-btn");
    $("#top-selected-background").hide();
    $("#plan-selected-background").show();
    $(this).removeClass("plan-btn");
    $(this).addClass("plan-btn-selected");
});

});