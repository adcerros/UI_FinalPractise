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

function optionsAnimationOn (){
    $("#secondary-options-div").show();
    $("#close-options-btn").show();
    $(".options-div").animate({
        width: '50vh'
     }, 'slow');
     $("#secondary-options-div").animate({
        width: '100%'
     });
}

//Animaciones por pasos mediante funciones anidadas
function optionsAnimationOff (){
    $("#secondary-options-div").animate({
        width: '60%'
     }, function(){
         $("#secondary-options-div").hide();
         $("#close-options-btn").hide();
         $(".options-div").animate({
        width: '0%'
     }, 'slow', function(){
        $("#options-div").hide();
   });
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

// Apertura del menu opciones
$("#options-btn").click(function() {
    $("#options-div").show();
    optionsAnimationOn();
    $("#options-btn").hide();
    $("#options-btn-selected").show();
});

//Cierre del menu opciones mediante el boton opciones
$("#options-btn-selected").click(function() {
    optionsAnimationOff();
    $("#options-btn-selected").hide();
    $("#options-btn").show();
});

//Cierre del menu opciones mediante el boton de cerrar especifico
$("#close-options-btn").click(function() {
    optionsAnimationOff();
    $("#options-btn-selected").hide();
    $("#options-btn").show();
});

//Apertura del logIn
$("#logIn-btn").click(function() {
    $("#auxDiv-popUp").show();
    $("#logIn-form").show();
});

$("#close-logIn-btn").click(function() {
    $("#auxDiv-popUp").hide();
    $("#logIn-form").hide();
});

$("#signUp-btn").click(function() {
    $("#logIn-form").hide();
    $("#signUp-form").show();
});

$("#close-signUp-btn").click(function() {
    $("#signUp-form").hide();
    $("#auxDiv-popUp").hide();
});

//Boton de reset formulario de signUp
$("#reset-signUp-btn").click(function(){
    $("#signUp-form").trigger("reset");
}); 

//Boton de reset formulario de signUp
$("#submit-signUp-btn").click(function(){
    $("#signUp-form").trigger("submit");
});
});

