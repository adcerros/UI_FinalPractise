

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
        $("#logIn-form").trigger("reset");
        $("#signUp-form").show();
    });

    $("#close-signUp-btn").click(function() {
        $("#signUp-form").hide();
        $("#auxDiv-popUp").hide();
    });

    //Boton de reset formulario de signUp
    $("#reset-signUp-btn").click(function(){
        $("#signUp-form").trigger("reset");
        signUpValidator.resetForm();
    }); 

    //Boton de submit formulario de signUp
    $("#submit-signUp-btn").click(function(){
        $("#signUp-form").trigger("submit");
    });

    //Cerrar mensaje de ok registro
    $("#close-signUp-ok-btn").click(function(){
        $("#signUp-ok-popUp").hide();
        $("#auxDiv-popUp").hide();
    });

    //Carga imagen usuario
    $(document).on("change", "#userProfileImage", function() {
        saveImage($("#userId").val(), document.getElementById("userProfileImage").files[0]);
        $("#loadedImage").show();
    });

    //Cierre mensaje id duplicado
    $("#close-emailDup-btn").click(function(){
        $("#emailDup-popUp").hide();
        $("#signUp-form").show();
    });

    //Cierre mensaje id duplicado
    $("#close-userIdDup-btn").click(function(){
        $("#userIdDup-popUp").hide();
        $("#signUp-form").show();
    });

    //Cierre id inexistente
    $("#close-badLogInId-btn").click(function(){
        $("#badLogInId-popUp").hide();
        $("#logIn-form").show();
    });

    //Cierre contraseña e id no coinciden
    $("#close-badLogIn-btn").click(function(){
        $("#badLogIn-popUp").hide();
        $("#logIn-form").show();
    });

    // Boton submit login
    $("#confirmLogin-btn").click(function(){
        $("#logIn-form").trigger("submit");
    });

    //Cierre logIn ok
    $("#close-logInOk-btn").click(function(){
        $("#logInOk-popUp").hide();
        $("#auxDiv-popUp").hide();
    });

    //Cierre de sesion
    $("#logOut-btn").click(function(){
        $("#auxDiv-popUp").show();
        $("#logOut-confirmation-popUp").show();
    });

    //Cierre de confirmacion de logOut
    $("#close-logOut-confirmation-btn").click(function(){
        $("#logOut-confirmation-popUp").hide();
        $("#auxDiv-popUp").hide();
    });

    //Confirmacion de logOut
    $("#logOut-confirmation-btn").click(function(){
        $("#logOut-confirmation-popUp").hide();
        $("#logOut-btn").hide();
        $("#logIn-btn").show();
        $("#logOut-confirmation-message-popUp").show();
    });

    //Cierre de mensaje de confirmacion de logOut
    $("#close-logOut-confirmation-message-btn").click(function(){
        $("#logOut-confirmation-message-popUp").hide();
        $("#auxDiv-popUp").hide();
    });


    // VALIDACIONES DE FORMULARIOS //////////////////////////////////////////
    //Funciones para la validacion de expresiones regulares
    // Comprobacion de la expresion regular de la contraseña
    $.validator.addMethod(
        "userPass",
        function(value) {
            return /^[a-zA-Z0-9]+$/.test(value);
        },
        "<br>El formato no es valido, se admiten letras y numeros (8 maximo)"
    );

    // Comprobacion de la expresion regular del email
    $.validator.addMethod(
        "userEmail",
        function(value) {
            return /^[a-zA-Z0-9]+@{1}[a-zA-Z0-9]+(\.{1})[a-zA-Z0-9]+$/.test(value);
        },
        "<br>El formato no es valido, debe ser del tipo: nombre@dominio.extensión"
    );

    // Comprobacion de la expresion regular de la feha de nacimiento
    $.validator.addMethod(
        "userBornDate",
        function(value) {
            return /^^([0-2][0-9]|3[0-1])(\/)(0[1-9]|1[0-2])\2(\d{4})$/.test(value);
        },
        "<br>El formato no es valido, debe ser del tipo: dd/mm/aaaa"
    );

    // Comprobacion de email duplicado
    $.validator.addMethod(
        "userEmailDup",
        function(value) {
            if (Cookies.get(String(value) + "-" + "userEmail") == value){
                $("#emailDup-popUp").show();
                $("#signUp-form").hide();
                return false;
            }
            return true;
        },
    );

    // Comprobacion de Id duplicado en el signUp
    $.validator.addMethod(
        "userIdDupSignUp",
        function(value) {
            if (Cookies.get(String(value)) != null){
                $("#userIdDup-popUp").show();
                $("#signUp-form").hide();
                return false;
            }
            return true;
        },
    );

    // Comprobacion de Id duplicado en el cambio de nombre
    $.validator.addMethod(
        "userIdDupChangeId",
        function(value) {
            if (Cookies.get(String(value)) != null){
                $("#userIdDup-popUp").show();
                $("#changeProfileId-form").hide();
                return false;
            }
            return true;
        },
    );

    //Validacion del formulario de alta
    var signUpValidator = $("#signUp-form").validate({
        submitHandler: function(){
            var { userId, userPass, userName, userEmail, userBornDate} = getSignUpData();
            // Se crean las cookies y se muestra la interfaz del usuario
            setSignUpCookie(userId, userPass, userName, userEmail, userBornDate);
            showUserProfile(userId); 
            $("#signUp-form").hide(); 
            $("#signUp-ok-popUp").show();  
            $("#signUp-form").trigger("reset");
            signUpValidator.resetForm();
        },
        // Reglas de la validacion
        rules: {
            userId:{
                required: true,
                userIdDupSignUp: true
            },
            userPass: {
                required: true, 
                userPass: true,
                maxlength: 8
            },
            userName: "required",
            userEmail: {
                required: true, 
                userEmail: true,
                userEmailDup: true,
            },
            userBornDate: {
                required: true, 
                userBornDate: true,
            },
            chckTerms: "required"
        },
        // Mensajes de error
        messages: {
            userId: "<br>Por favor, introduce tu nombre de usuario",
            userPass: "<br>Por favor, introduce una contraseña (letras y numeros, 8 maximo)",
            userName: "<br>Por favor, introduce tu nombre y tus apellidos",
            userEmail: "<br>Por favor, introduce un mail valido (nombre@dominio.extensión)",
            userBornDate: "<br>Por favor, introduce tu fecha de nacimiento (dd/mm/aaaa)",
            chckTerms: "Tienes que aceptar los terminos de uso<br>"
        },
        // Estilo de los mensajes de error
        errorElement : 'span'  
    });

    //Validacion del formulario de login
    var logInValidator = $("#logIn-form").validate({
        submitHandler: function(){
            let logInId = $("#logInId").val();
            let userCookie = Cookies.get(logInId)
            // El usuario existe
            if (userCookie != null){
                let userData = JSON.parse(userCookie);
                let logInPass = $("#logInPass").val();
                // El usuario y la contraseña no coinciden
                if(logInPass != userData.pass){
                    $("#logIn-form").hide(); 
                    $("#badLogIn-popUp").show();
                } 
                else{
                    $("#logIn-form").hide();
                    $("#logInOk-popUp").show();  
                    $("#logIn-form").trigger("reset");
                    logInValidator.resetForm();
                    showUserProfile(logInId);  
                }
            }
            // Usuario inexistente
            else{
                $("#logIn-form").hide(); 
                $("#badLogInId-popUp").show();
            }

        },
        // Reglas de la validacion del formulario
        rules: {
            logInId: "required",
            logInPass: "required"
        },
        // Mensajes de error
        messages: {
            logInId: "<br>Por favor, introduce tu nombre de usuario registrado",
            logInPass: "<br>Por favor, introduce una contraseña",
            
        },
        // Estilo de los mensajes de error
        errorElement : 'span'  
    });

});




/////////////////////////////////  CODIGO JS /////////////////////////////////////////
////// ANIMACIONES /////////
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

////// REGISTRO ///////////
//Configuracion de las cookies de registro
function setSignUpCookie(userId, userPass, userName, userEmail, userBornDate){
    let userData = { "pass": userPass, "name": userName, "email": userEmail, "bornDate": userBornDate, "numberOfExperiences": 0};
    Cookies.set(String(userEmail) + "-" + "userEmail", userEmail, {secure:true});
    Cookies.set(String(userId), JSON.stringify(userData), {secure:true});   
}

//Cambia la interfaz y pasa a modo usuario
function showUserProfile(userId){
    // Se carga la imagen del usuario
    let userProfileImage = localStorage.getItem(userId + "-" +"profileImg");
    if (userProfileImage == "null" | userProfileImage == null | userProfileImage == undefined){
        localStorage.setItem(userId + "-" +"profileImg", "null");
        $("#userImage").attr("src",'./images/avatar.jpeg');
    }
    else{
        $("#userImage").attr("src",userProfileImage);
    }
    // Se cambia el nombre por defecto del id en la interfaz
    $("#logIn-btn").hide();
    $("#logOut-btn").show();
    Cookies.set("currentUser", userId, {secure:true});
    // Se oculta la interfaz estandar
    // Se muestra la interfaz del usuario
}

// Funcion para guardar la imagen en el localStorage
function saveImage(userId, userProfileImage){
    var reader = new FileReader();
    reader.onload = function(){
        localStorage.setItem(userId + "-" +"profileImg", reader.result);
    }
    reader.readAsDataURL(userProfileImage);
}


// Funcion para actualizar la imagen del usuario
function changeAndSaveImage(userId, userProfileImage){
    var reader = new FileReader();
    reader.onload = function(){
        d = new Date();
        localStorage.setItem(userId + "-" +"profileImg", reader.result);
        $("#userImage").attr("src", reader.result); 
    }
    reader.readAsDataURL(userProfileImage);
}


function getSignUpData() {
    var userId = $("#userId").val();
    let userPass = $("#userPass").val();
    let userName = $("#userName").val();
    let userEmail = $("#userEmail").val();
    let userBornDate = $("#userBornDate").val();
    return { userId, userPass, userName, userEmail, userBornDate};
}


