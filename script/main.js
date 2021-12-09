

$(document).ready(function(){

    // Pone el header en modo registrado o sin registrar
    $(document).ready(setHeader());
    
    // Cambio a la seccion experiences
    $(".experiences-btn").click(function() {
        $("#ranking").hide();
        $("#messsage-ranking").hide();
        $("#plan-div").hide();
        $("#colecciones-naturaleza").hide();
        $("#colecciones-aventura").hide();
        $("#colecciones-ciudad").hide();
        $("#single-experience-amazonas").hide();
        $("#single-experience-newyork").hide();
        $("#single-experience-japon").hide();
        $("#single-experience-tanzania").hide();
        $("#single-experience-australia").hide();
        paddingAnimationOff("top");
        paddingAnimationOff("plan");
        $(this).removeClass("experiences-btn");
        $(this).addClass("experiences-btn-selected");
        $("#top-btn").removeClass("top-btn-selected");
        $("#top-btn").addClass("top-btn");
        $("#plan-btn").removeClass("plan-btn-selected");
        $("#plan-btn").addClass("plan-btn");
        paddingAnimationOn("experiences");
        $(".my_experiences").show();
    });

    // Cambio a la seccion top
    $(".top-btn").click(function() {
        $(".my_experiences").hide();
        $("#plan-div").hide();
        $("#colecciones-naturaleza").hide();
        $("#colecciones-aventura").hide();
        $("#colecciones-ciudad").hide();
        $("#single-experience-amazonas").hide();
        $("#single-experience-newyork").hide();
        $("#single-experience-japon").hide();
        $("#single-experience-tanzania").hide();
        $("#single-experience-australia").hide();
        paddingAnimationOff("experiences");
        paddingAnimationOff("plan");
        $("#experiences-btn").removeClass("experiences-btn-selected");
        $("#experiences-btn").addClass("experiences-btn");
        $(this).removeClass("top-btn");
        $(this).addClass("top-btn-selected");
        $("#plan-btn").removeClass("plan-btn-selected");
        $("#plan-btn").addClass("plan-btn");
        paddingAnimationOn("top");
        ranking_more_3_users();
        ranking();
    });

    // Cambio a la seccion plan a trip
    $(".plan-btn").click(function() {
        $(".my_experiences").hide();
        $("#ranking").hide();
        $("#messsage-ranking").hide();
        $("#colecciones-naturaleza").hide();
        $("#colecciones-aventura").hide();
        $("#colecciones-ciudad").hide();
        $("#single-experience-amazonas").hide();
        $("#single-experience-newyork").hide();
        $("#single-experience-japon").hide();
        $("#single-experience-tanzania").hide();
        $("#single-experience-australia").hide();
        paddingAnimationOff("experiences");
        paddingAnimationOff("top");
        $("#experiences-btn").removeClass("experiences-btn-selected");
        $("#experiences-btn").addClass("experiences-btn");
        $("#top-btn").removeClass("top-btn-selected");
        $("#top-btn").addClass("top-btn");
        $(this).removeClass("plan-btn");
        $(this).addClass("plan-btn-selected");
        paddingAnimationOn("plan");
        $("#plan-div").show();
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

    
    //Apertura del logIn desde la seccion experiencias
    $("#logToShow").click(function() {
        $("#auxDiv-popUp").show();
        $("#logIn-form").show();
    });


    //Apertura del logIn desde el menu options
    $("#logIn-secondary-btn").click(function() {
        $("#options-btn-selected").hide();
        optionsAnimationOff();
        $("#auxDiv-popUp").show();
        $("#logIn-form").show();
        $("#options-btn").show();
    });

    //Apertura del formulario de cambio de datos desde el menu options
    $("#changeInfo-btn").click(function() {
        $("#options-btn-selected").hide();
        optionsAnimationOff();
        $("#auxDiv-popUp").show();
        showChangeInfoForm()
        $("#options-btn").show();
    });

    //Cierre del formulario de cambio de datos 
    $("#close-changeInfo-btn").click(function() {
        $("#changeInfo-form").hide();
        $("#auxDiv-popUp").hide();
        $("#options-div").show();
        optionsAnimationOn();
        $("#options-btn").hide();
        $("#options-btn-selected").show();
    });

    //Cierre del formulario de cambio de datos desde el boton inferior
    $("#change-submit-btn").click(function(){
        $("#changeInfo-form").hide();
        $("#auxDiv-popUp").hide();
        $("#options-div").show();
        optionsAnimationOn();
        $("#options-btn").hide();
        $("#options-btn-selected").show();
    });
    

    //Boton cierre logIn
    $("#close-logIn-btn").click(function() {
        $("#auxDiv-popUp").hide();
        $("#logIn-form").hide();
    });

    //Boton abrir formulario signUp
    $("#signUp-btn").click(function() {
        $("#logIn-form").hide(); 
        $("#logIn-form").trigger("reset");
        $("#signUp-form").show();
    });

    //Boton cerrar formulario de signUp
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

    //Carga cambio imagen usuario
    $(document).on("change", "#change-userProfileImage", function() {
        let userId = Cookies.get("currentUser");
        var newImage =  document.getElementById("change-userProfileImage").files[0];
        if(newImage != null){
            changeAndSaveImage(userId, newImage);
        }
        $("#changeInfo-form").hide();
        $("#confirmChanges-popUp").show();
        $("#change-loadedImage").show();
    });

    //Boton de cambio de nombre de usuario
    $("#edit-userId-btn").click(function(){
        $("#changeInfo-form").hide();
        $("#change-Id-form").show();
    });

    //Boton de cierre de cambio de nombre de usuario
    $("#close-changeId-btn").click(function(){
        $("#change-Id-form").hide();
        $("#changeInfo-form").show();
    });

    //Boton de submit cambio email
    $("#confirm-changeEmail-btn").click(function(){
        $("#change-email-form").trigger("submit");
    });

    //Boton de cambio de email
    $("#edit-userEmail-btn").click(function(){
        $("#changeInfo-form").hide();
        $("#change-email-form").show();
    });

    //Boton de cierre de cambio de email
    $("#close-changeEmail-btn").click(function(){
        $("#change-email-form").hide();
        $("#changeInfo-form").show();
    });

    //Boton de submit cambio contraseña
    $("#confirm-changePass-btn").click(function(){
        $("#change-pass-form").trigger("submit");
    });
    

    //Boton de cambio de contraseña
    $("#edit-userPass-btn").click(function(){
        $("#changeInfo-form").hide();
        $("#change-pass-form").show();
    });

    //Boton de cierre de cambio de contraseña
    $("#close-changePass-btn").click(function(){
        $("#change-pass-form").hide();
        $("#changeInfo-form").show();
    });


    //Cierre de confirmacion de cambios
    $("#close-confirmChanges-btn").click(function(){
        $("#confirmChanges-popUp").hide();
        showChangeInfoForm();
    });

    //Boton de submit cambio nombre de usuario
    $("#confirm-changeId-btn").click(function(){
        $("#change-Id-form").trigger("submit");
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

    //Cierre mensaje id duplicado en el cambio de id
    $("#close-change-userIdDup-btn").click(function(){
        $("#change-userIdDup-popUp").hide();
        $("#change-Id-form").show();
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
        hideUserProfile(); 
        $("#logOut-confirmation-popUp").hide();
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
                $("#change-userIdDup-popUp").show();
                $("#change-Id-form").hide();
                return false;
            }
            return true;
        },
    );
 
    //Validacion del cambio de nombre de usuario
    var changeIdValidator = $("#change-Id-form").validate({
        submitHandler: function(){
            changeUserId();
            $("#change-Id-form").hide(); 
            $("#confirmChanges-popUp").show();  
            $("#change-Id-form").trigger("reset");
            changeIdValidator.resetForm();
        },
        // Reglas de la validacion
        rules: {
            newUserId:{
                required: true,
                userIdDupChangeId: true
            }
        },
        // Mensajes de error
        messages: {
            newUserId: "<br>Por favor, introduce tu nuevo nombre de usuario",
        },
        // Estilo de los mensajes de error
        errorElement : 'span'  
    });

    //Validacion del cambio de email de usuario
    var changeEmailValidator = $("#change-email-form").validate({
        submitHandler: function(){
            let newuserEmail = $("#newUserEmail").val();
            changeUserEmail(newuserEmail);
            $("#change-email-form").hide(); 
            $("#confirmChanges-popUp").show();  
            $("#change-email-form").trigger("reset");
            changeEmailValidator.resetForm();
        },
        // Reglas de la validacion
        rules: {
            newUserEmail:{
                required: true,
                userEmail: true,
                userEmailDup: true
            }
        },
        // Mensajes de error
        messages: {
            newUserEmail: "<br>Por favor, introduce un mail valido (nombre@dominio.extensión)",
        },
        // Estilo de los mensajes de error
        errorElement : 'span'  
    });

    //Validacion del cambio de contraseña de usuario
    var changePassValidator = $("#change-pass-form").validate({
        submitHandler: function(){
            let newuserPass = $("#newUserPass").val();
            changeUserPass(newuserPass);
            $("#change-pass-form").hide(); 
            $("#confirmChanges-popUp").show();  
            $("#change-pass-form").trigger("reset");
            changePassValidator.resetForm();
        },
        // Reglas de la validacion
        rules: {
            newUserPass:{
                required: true, 
                userPass: true,
                maxlength: 8
            }
        },
        // Mensajes de error
        messages: {
            newUserPass: "<br>Por favor, introduce una contraseña valida (letras y numeros, 8 maximo)",
        },
        // Estilo de los mensajes de error
        errorElement : 'span'  
    });

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
    // FILTRADO DE EXPERIENCIAS //////////////////////////////////////////////
    $("#filterExperiences-btn").click(function(){
        filtreExperiences();
    });   
    
    //pop up AMERICA
       
    $("#show-America").click(function(){
        $("#auxDiv-popUp").show();
        $("#plan-popup").show();
    });  

    
    //pop up OCEANIA
       
    $("#show-Oceania").click(function(){
        $("#auxDiv-popUp").show();
        $("#plan-popup-3").show();
    });  

    
    //pop up AFRICA
       
    $("#show-Africa").click(function(){
        $("#auxDiv-popUp").show();
        $("#plan-popup-2").show();
    });  
    //pop up EUROPA
       
    $("#show-Europa").click(function(){
        $("#auxDiv-popUp").show();
        $("#plan-popup-4").show();
        
    });  
    //pop up ASIA close-plan-btn
       
    $("#show-Asia").click(function(){
        $("#auxDiv-popUp").show();
        $("#plan-popup-5").show();
    });  

    $("#close-plan-btn").click(function(){
        $("#plan-popup").hide();
        $("#auxDiv-popUp").hide();
    });  
    $("#close-plan-btn-2").click(function(){
        $("#plan-popup-2").hide();
        $("#auxDiv-popUp").hide();
    });  
    $("#close-plan-btn-3").click(function(){
        $("#plan-popup-3").hide();
        $("#auxDiv-popUp").hide();
    });  
    $("#close-plan-btn-4").click(function(){
        $("#plan-popup-4").hide();
        $("#auxDiv-popUp").hide();
    });  
    $("#close-plan-btn-5").click(function(){
        $("#plan-popup-5").hide();
        $("#auxDiv-popUp").hide();
    });  

    /*Mostrar popups colecciones*/
    $("#coleccion-aventura-btn").click(function() {
        $(".my_experiences").hide();
        $("#colecciones-aventura").show();
    });

    $("#coleccion-ciudad-btn").click(function() {
        $(".my_experiences").hide();
        $("#colecciones-ciudad").show();
    });

    $("#coleccion-naturaleza-btn").click(function() {
        $(".my_experiences").hide();
        $("#colecciones-naturaleza").show();
    });

    /*Mostrar popups single experiences*/
    $("#experiences-amazonas").click(function() {
        $(".my_experiences").hide();
        $("#single-experience-amazonas").show();
    });
    
    $("#experiences-australia").click(function() {
        $(".my_experiences").hide();
        $("#single-experience-australia").show();
    });

    $("#experiences-test-02").click(function() {
        $(".my_experiences").hide();
        $("#single-experience-japon").show();
    });

    $("#experiences-test-03").click(function() {
        $(".my_experiences").hide();
        $("#single-experience-newyork").show();
    });

    $("#experiences-test-04").click(function() {
        $(".my_experiences").hide();
        $("#single-experience-tanzania").show();
    });

    $("#experiences-test-05").click(function() {
        $(".my_experiences").hide();
        $("#single-experience-australia").show();
    });
    

    ////////////////// EXPERIENCIAS PERSONALES
    //Crear experiencias
    $("#myNewExperiences").empty();

    // Añadir experiencia
    $("#addExperience-btn").click(function(){
        $("#addExperience-form").show();
        $("#myExperiences").hide();
    }); 
    //Cierre
    $("#clsaddExperience-btn").click(function(){
        $("#addExperience-form").hide();
        $("#auxDiv-popUp").hide();
        $("#myExperiences").show();
    }); 
    
    //Tick de imagen cargada
    $(document).on("change", "#experienceImage", function() {
        $("#loadedExperienceImage").show();
    });
    // //Almacenmiento del experiencias
    $("#addExperience-form").validate({
        submitHandler: function(){
            $("#addExperience-form").hide();
            $("#loadedExperienceImage").hide();
            // Lectura de datos
            addExperience();
            //Se muestran los cambios  
            $("#experienceAdded").show(); 
            $("#addExperience-form").trigger("reset");
        },
        // Mensajes de error
        messages: {
            experienceTitle: "<br>Por favor, introduce el titulo de la experiencia",
            experienceDescription: "<br>Por favor, introduce la descripcion de la experiencia",
            experiencePlace: "<br>Por favor, introduce el lugar de la experiencia",
        },
        // Estilo de los mensajes de error
        errorElement : 'span'  
        }); 

    //Confirmacion experiencia añadida
    $("#clsexperienceAdded").click(function(){
        $("#experienceAdded").hide();
        $("#auxDiv-popUp").hide();
    }); 

    //Confirmacion experiencia eliminada
    $("#clsexperienceDeleted").click(function(){
        $("#experienceDeleted").hide();
        $("#auxDiv-popUp").hide();
    }); 

    //Boton de submit añadir experiencias
    $("#saveExperience-btn").click(function(){
        $("#addExperience-form").trigger("submit");
    }); 

    //Boton añadir experiencia
    $("#addExperience-btn-div").click(function(){
      $("#auxDiv-popUp").show();
     $("#addExperience-form").show();
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
    currentUser = Cookies.get("currentUser");
    if (currentUser == "null" | currentUser == null | currentUser == undefined){
        $("#secondary-options-unregistered-div").show();
    }
    else{
        loadOptionsRegistered()
        $("#secondary-options-div").show();
        $("#secondary-options-div").animate({
            width: '100%'
         });
    }
    $("#close-options-btn").show();
    $(".options-div").animate({
        width: '50vw'
     }, 'slow');
}

//Animaciones por pasos mediante funciones anidadas
function optionsAnimationOff (){
    $("#secondary-options-div").animate({
        width: '100vw'
     }, function(){
        currentUser = Cookies.get("currentUser");
        if (currentUser == "null" | currentUser == null | currentUser == undefined){
            $("#secondary-options-unregistered-div").hide();
        }
        else{
            $("#secondary-options-div").hide();
        }
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
    let userData = { "pass": userPass, "name": userName, "email": userEmail, "bornDate": userBornDate, "numberOfExperiences": 0, "likes": 0};
    Cookies.set(String(userEmail) + "-" + "userEmail", userEmail, {secure:true});
    Cookies.set(String(userId), JSON.stringify(userData), {secure:true});
}

//Configuracion de las experiencias
// Se recibe el titulo, una lista de imagenes y la descripcion
// Formato de la lista de experiencias [userId, [lista de experiencias]]
// Formato de las experiencias [title, [listaImagenes], descripcion, [listaComentarios], numeroLikes]
function createExperience(title, images, description){
    let userId = Cookies.get("currentUser");
    let comentaryList = [];
    let newExperience = [title , images, description, comentaryList, 0];
    var experiences = getExperiences();
    let userExperiences = getUserExperiences(userId);
    userExperiences[1].append(newExperience);
    experiences.append(listOfExperiences);
    localStorage.setItem("experiences", experiences);
}

//Funcion para obtener las experiencias (se crea la lista si no existe)
function getExperiences (){
    let experiences = JSON.parse(localStorage.getItem("experiences"));
    // Si no existe la lista de experiencias se crea
    if (experiences == null | experiences == undefined | experiences == "null" | experiences == ""){
        experiences = [];
    }
    return experiences;
}

// Funcion para obtener la lista de experiencias de un usuario (se crea la lista si no existe)
function getUserExperiences (userId){
    let experiences = getExperiences();
    for(let i = 0 ; i < experiences.size(); i++){
        if (experiences[i][0] == String(userId)){
            return experiences[i];
        }
    }
    listOfExperiences = [];
    let userExperiences = [userId, listOfExperiences];
    return userExperiences;
}
//Configuracion de las colecciones

//Cambia la interfaz y pasa a modo usuario
function hideUserProfile(){
    // Se muestra la interfaz estandar
    // Se oculta la interfaz del usuario
    $("#secondary-options-div").hide();
    $("#logOut-btn").hide();
    $("#logToShow").show();
    $("#secondary-options-unregistered-div").show();
    $("#logIn-btn").show();
    Cookies.set("currentUser", null, {secure:true});
    //////////////////// experiences
    $("#userProfile-div").hide();
    $("#addCollection-btn-div").hide();
    $("#addExperience-btn-div").hide();
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
    $("#secondary-options-unregistered-div").hide();
    $("#logIn-btn").hide();
    $("#logToShow").hide();
    $("#logOut-btn").show();
    Cookies.set("currentUser", userId, {secure:true});
    loadOptionsRegistered()
    // Se oculta la interfaz estandar
    // Se muestra la interfaz del usuario
    //////////////////// experiences
    $("#userProfile-div").show();
    $("#addCollection-btn-div").show();
    $("#addExperience-btn-div").show();
}

// Se carga el menu de opciones con la informacion del usuario
function loadOptionsRegistered(){
    let userId = Cookies.get("currentUser");
    let userData = JSON.parse(Cookies.get(userId));
    // Se carga la imagen del usuario
    let userProfileImage = localStorage.getItem(userId + "-" +"profileImg");
    if (userProfileImage == "null" | userProfileImage == null | userProfileImage == undefined){
        $("#userImage").attr("src",'./images/avatar.jpeg');
    }
    else{
        $("#userImage").attr("src",userProfileImage);
    }
    document.getElementById("username-options-bar").innerHTML = "Usuario:  " + userId;
    document.getElementById("pass-options-bar").innerHTML = "Contraseña:  " + userData.pass;
    document.getElementById("email-options-bar").innerHTML = "Email:  " + userData.email;
    document.getElementById("bornDate-options-bar").innerHTML = "Fecha de nacimiento:  " + userData.bornDate;
    $("#secondary-options-div").show();
}

// Se carga el formulario de cambio de informacion del usuario
function showChangeInfoForm(){
    let userId = Cookies.get("currentUser");
    let userData = JSON.parse(Cookies.get(userId));
    // Se carga la imagen del usuario
    let userProfileImage = localStorage.getItem(userId + "-" +"profileImg");
    if (userProfileImage == "null" | userProfileImage == null | userProfileImage == undefined){
        $("#change-userImage").attr("src",'./images/avatar.jpeg');
    }
    else{
        $("#change-userImage").attr("src",userProfileImage);
    }
    document.getElementById("changeInfo-userId").innerHTML = "Usuario:  " + userId;
    document.getElementById("changeInfo-userPass").innerHTML = "Contraseña:  " + userData.pass;
    document.getElementById("changeInfo-userEmail").innerHTML = "Email:  " + userData.email;
    document.getElementById("username-options-bar").innerHTML = "Usuario:  " + userId;
    document.getElementById("pass-options-bar").innerHTML = "Contraseña:  " + userData.pass;
    document.getElementById("email-options-bar").innerHTML = "Email:  " + userData.email;
    document.getElementById("bornDate-options-bar").innerHTML = "Fecha de nacimiento:  " + userData.bornDate;
    $("#changeInfo-form").show();
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

// Recoge los datos del formulario de alta
function getSignUpData() {
    var userId = $("#userId").val();
    let userPass = $("#userPass").val();
    let userName = $("#userName").val();
    let userEmail = $("#userEmail").val();
    let userBornDate = $("#userBornDate").val();
    return { userId, userPass, userName, userEmail, userBornDate};
}

// Pone el header en modo registrado y sin registrar
function setHeader() {
    currentUser = Cookies.get("currentUser");
    if (currentUser == "null" | currentUser == null | currentUser == undefined){
        $("#logOut-btn").hide();
        $("#addExperience-btn-div").hide();
        $("#addCollection-btn-div").hide();
        $("#logIn-btn").show();
        $("#logToShow").show();
    }
    else{
        $("#logIn-btn").hide();
        $("#logToShow").hide();
        $("#logOut-btn").show();
        $("#addExperience-btn-div").show();
        $("#addCollection-btn-div").show();
    }
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

//Cambia el id del usuario
function changeUserId() {
    let userId = Cookies.get("currentUser");
    let userData = JSON.parse(Cookies.get(userId));
    let newuserId = $("#newUserId").val();
    //Se crea la nueva cookie
    Cookies.set("currentUser", newuserId);
    Cookies.set(String(newuserId), JSON.stringify(userData), { secure: true });
    //Se destruye la antigua
    Cookies.set(String(userId), null, { expires: 0 });
    //Se cambian los datos de las imagenes
    let userProfileImage = localStorage.getItem(userId + "-" + "profileImg");
    localStorage.setItem(newuserId + "-" + "profileImg", userProfileImage);
    localStorage.removeItem(userId + "-" + "profileImg", null);
}

//Cambia el email del usuario
function changeUserEmail(newUserEmail) {
    let userId = Cookies.get("currentUser");
    let userData = JSON.parse(Cookies.get(userId));
    let userEmail = userData.email;
    //Se crea la nueva cookie
    userData.email = newUserEmail
    Cookies.set(String(userId), JSON.stringify(userData), { secure: true });
    Cookies.set(String(newUserEmail) + "-" + "userEmail", newUserEmail, {secure:true});
    //Se destruye la antigua
    Cookies.set(String(userEmail) + "-" + "userEmail", null, { expires: 0 });
}

//Cambia la contraseña del usuario
function changeUserPass(newUserPass) {
    let userId = Cookies.get("currentUser");
    let userData = JSON.parse(Cookies.get(userId));
    //Se modifica la cookie
    userData.pass = newUserPass
    Cookies.set(String(userId), JSON.stringify(userData), { secure: true });
}


///// RANKING ///////////////////////////
function ranking() {
  // Guardaremos en un string todas las cookies, teniendo como aspecto un diccionario
  var cookies = getAllCookies()
  // Si no hay niguna cookie, entonces no avanzamos mas
  if(Object.keys(cookies).length === 0){
      return -1
  }
  // En esta lista guardaremos las cookies en forma de diccionario, para ello utilizaremos el for de debajo
  var exps = []
  for(var name in cookies) {
    //console.log(cookies[name])
    // Guardamos en nuestro diccionario solamente a los usuarios con todas sus características
    if(cookies[name].search("{") !== -1){
      // El string que contiene a cada usuario lo parseamos como un diccionario y lo guardamos en la lista exps
      exps.push(JSON.parse(cookies[name]))
    }
      
  }
  let elements = []
  let container = document.querySelector('#for_slick_slider')
  var photo_user
  // Ponemos cada dato nuevo a una lista auxiliar
  for(let i = 0; i < exps.length; i++){
      photo_user = search_user_image(exps[i].name)
      elements.push(
          {
              photo: photo_user,
              like: exps[i].likes,
              phrase: exps[i].name
          }
      )
  }
  
  // Ordenamos la lista de los usuarios
  elements.sort((a, b) => {return b.like - a.like;})
  
  var photo, phrase, like, users
  var row = document.querySelector(".row-ranking")
  container.innerHTML = ''
  // Creamos tantos div como usuarios haya
  for(var i=0; i < elements.length; i++){
      // Asignamos los datos para cada usuario
      var aux = row.cloneNode(true)
      container.appendChild(aux)
  }
    
  users = container.getElementsByClassName("row-ranking")
  for(var i = 0; i < users.length; i++){
    phrase = users[i].getElementsByTagName("p")
    like = users[i].getElementsByClassName("like")
    photo = users[i].getElementsByTagName("img")
    phrase[0].innerHTML = elements[i].phrase
    like[0].innerHTML = elements[i].like
    photo[0].src = elements[i].photo
    // Solo mostramos a los tres primeros usuarios
    if(i > 2){
        users[i].style.display = "none"
    }
  }

  check_status_buttons(users, users.length)
}

function move_ranking(dir){
  // Cogemos todo el ranking
  let container = document.querySelector('#for_slick_slider')
  // Solo habrá que hacer el movimiento de los usuarios una vez
  var once = false
  // Seleccionamos a todos los usuarios
  let users = document.getElementsByClassName("row-ranking")
  let max_lenght = users.length
  // Recorremos a todos los usuarios hasta encontrar al primer visible
  for(var i = 0; i < max_lenght; i++){
    // Buscamos le primer elemento que sea visible y no se ha movido ninguno
    if(users[i].style.display !== 'none' && !once){
      // En caso de que no sea el primer elemento, mostraremos el elemento que se encuentra en la
      // parte superior
      if(dir == 'up' && i-1 >= 0){
        users[i-1].style.display = 'flex'
        users[i].style.display = 'flex'
        users[i+1].style.display = 'flex'
        users[i+2].style.display = 'none'
        once = true
      }
      // En caso de que no sea el ultimo elemento, mostraremos el elemento que se encuentra en la
      // parte inferior
      if(dir== 'down' && i+3 < max_lenght){
        users[i].style.display = 'none'
        users[i+1].style.display = 'flex'
        users[i+2].style.display = 'flex'
        users[i+3].style.display = 'flex'
        once = true
      }
    }
  }
  check_status_buttons(users, max_lenght)
}

// Solo se mostrara el ranking en caso de que haya mas de 3 usuarios registrados
function ranking_more_3_users(){
  let users = document.getElementsByClassName("row-ranking")
  let num_users = users.length
  console.log(num_users)
  if(num_users <= 3){
    console.log("he entrado 1")
    $("#messsage-ranking").show()
    $("#messsage-ranking").attr("style", "display:grid")
    $("#ranking").hide()
  }
  else{
    $("#ranking").show()
    $("#ranking").attr("style", "display:grid")
    $("#messsage-ranking").hide()
  }
}

// Este metodo nos ayudara a obtener todas las cookies de nuestro documento en forma de string
function getAllCookies(){
  var cookies = { };
  // Siempre que existan cookies se procedera a hacerlo
  if (document.cookie && document.cookie != '') {
    var split = document.cookie.split(';');
    for (var i = 0; i < split.length; i++) {
        var name_value = split[i].split("=");
        name_value[0] = name_value[0].replace(/^ /, '');
        cookies[decodeURIComponent(name_value[0])] = decodeURIComponent(name_value[1]);
    }
  }

  return cookies;
}

// Este metodo nos ayudara a buscar la imagen del usuario
function search_user_image(userId){
  let userProfileImage = localStorage.getItem(userId + "-" +"profileImg");
  if (userProfileImage == "null" | userProfileImage == null | userProfileImage == undefined){
    localStorage.setItem(userId + "-" +"profileImg", "null");
    return "./images/avatar.jpeg";
  }
  return userProfileImage
}

// Verificamos si hay más de un usuario o no, para mostrar las flechas o no
function check_status_buttons(users, max_lenght){
  var button_up = document.querySelector("#arrow-button-up");
  var button_down = document.querySelector("#arrow-button-down");
  // En caso de que se muestre el primer elemento, entonces significa que no se puede subir mas
  if(users[0].style.display == 'flex' || users[0].style.display == ''){
    button_up.style.color = 'gray';
    button_up.style.cursor = 'default';
  }
  else{
    button_up.style.color = 'black';
    button_up.style.cursor = 'pointer';
  }
  // En caso de que se muestre el ultimo elemento, entonces significa que no se puede bajar
  if(users[max_lenght-1].style.display == 'flex' || users[max_lenght-1].style.display == ''){
    button_down.style.color = 'gray';
    button_down.style.cursor = 'default';
  }
  else{
    button_down.style.color = 'black';
    button_down.style.cursor = 'pointer';
  }
}
//CODIGO BUSQUEDA//
/////////////////////////////
/////////////////////////////
//////////////////////////
// Filtra los resultados sobre el texto introducido
function filtreExperiences() {
    let keywords = $("#keywords").val();
    //Se muestra el searching for:
    if (keywords != "") {  
        document.getElementById("searchingForText").innerHTML = "Buscando por : " + "''" +  String(keywords).toLowerCase() + "''" ;
        $("#searchingForDiv").show();
    }
    else {
        $("#searchingForDiv").hide();
    }
    var hiddenExps = new Array();
    var showExps = new Array();
    // Se muestran todas por si hay alguna oculta y se almacenan el numero de experiencias y el numero de bloques
    let numberOfDefaultExperiences = resetExperiences();

    //Se almacenan los textos y las imagenes
    var { experiencesImages, experiencesTitles, experiencesDescriptions } = saveDefaultExperiences(numberOfDefaultExperiences);
    // Se almacen las posiciones donde estan las experiencias a ocultar y a mostrar
    selectExperiences(numberOfDefaultExperiences, keywords, hiddenExps, showExps);
    // Se reorganizan intercambiando los contenidos entre mostradas y no mostradas
    refactorExperiencesUi(showExps, experiencesImages, experiencesTitles, experiencesDescriptions, numberOfDefaultExperiences);
}

// Modifica la seccion de experiences tras filtrar los resultados
function refactorExperiencesUi(showExps, experiencesImages, experiencesTitles, experiencesDescriptions, numberOfDefaultExperiences) {
    var aux;
    for (let j = 0; j < showExps.length; j++) {
        //Img
        aux = experiencesImages[j];
        experiencesImages[j] = experiencesImages[showExps[j]];
        experiencesImages[showExps[j]] = aux;
        //Title
        aux = experiencesTitles[j];
        experiencesTitles[j] = experiencesTitles[showExps[j]];
        experiencesTitles[showExps[j]] = aux;
        //Desc
        aux = experiencesDescriptions[j];
        experiencesDescriptions[j] = experiencesDescriptions[showExps[j]];
        experiencesDescriptions[showExps[j]] = aux;
    }
    // Se realiza el cambio en el html
    for (let j = 0; j < numberOfDefaultExperiences; j++) {
        document.getElementById("img" + j).src = experiencesImages[j];
        document.getElementById("title" + j).innerHTML = experiencesTitles[j];
        document.getElementById("description" + j).innerHTML = experiencesDescriptions[j];
    }
    //Se ocultan las no seleccionadas recorriendo desde las seleccionadas
    for (j = showExps.length; j < numberOfDefaultExperiences; j++) {
        $("#img" + j).hide();
        $("#title" + j).hide();
        $("#description" + j).hide();
    }
}

//Selecciona las experencias que deben mostrarse tras el filtrado
function selectExperiences(numberOfDefaultExperiences, keywords, hiddenExps, showExps) {
    for (let j = 0; j < numberOfDefaultExperiences; j++) {
        let currentElement = document.getElementById("exp" + j);
        currentElement = String(currentElement.textContent).toLowerCase();
        if (currentElement.search(String(keywords).toLowerCase()) == -1) {
            hiddenExps.push(j);
        }
        else {
            showExps.push(j);
        }
    }
}

// Guarda los datos de las experiencias de la tercera seccion para operar con ellos
function saveDefaultExperiences(numberOfDefaultExperiences) {
    var experiencesImages = new Array();
    var experiencesTitles = new Array();
    var experiencesDescriptions = new Array();
    for (let j = 0; j < numberOfDefaultExperiences; j++) {
        experiencesImages.push(document.getElementById("img" + j).src);
        experiencesTitles.push(document.getElementById("title" + j).textContent);
        experiencesDescriptions.push(document.getElementById("description" + j).textContent);
    }
    return { experiencesImages, experiencesTitles, experiencesDescriptions };
}
//Reinicia las experiencias
function resetExperiences() {
    let i = 0;
    while (document.getElementById("exp" + i) != null) {
        $("#img" + i).show();
        $("#title" + i).show();
        $("#description" + i).show();
        i++;
    }
    return i;
}


// Añadir experiencias
function addExperience() {
    let userId = Cookies.get("currentUser");
    let userCookie = Cookies.get(userId);
    let userData = JSON.parse(userCookie);

    let {experienceTitle, experienceImage, experiencePlace, experienceDescription } = getExperienceData();
    let numberOfBigDiv = (userData.numberOfExperiences) % 2;
    let realNumberBigDiv = Math.floor(userData.numberOfExperiences / 2);
    alert(userData.numberOfExperiences + " - " + numberOfBigDiv + " - " + realNumberBigDiv);
    if (numberOfBigDiv == 0){
      $("#userExperiences").prepend("<div id='coupleExperiences-div-" + realNumberBigDiv  + "'" +  "class='d-flex justify-content-center mt-5'>");
    }


      $("#coupleExperiences-div-" + realNumberBigDiv).prepend("<div id=experience-" + userData.numberOfExperiences + "class='d-flex mr-1 ml-1'><div class='col'><img src='images/amazonas2.jpg' class='myprofile-experiences-image' onclick='showExperiencesPopUp()'>" + 
            "<div class='experiences-options-btn'>" + 
                    "<button id=" + userId + "-experience-" + userData.numberOfExperiences + "-like-btn" + "class='change-experiences-btn' type=button value=Buscar><img src='./images/like-icon.png'  class='options-icon'></button>" + 
                    "<button id=" + userId + "-experience-" + userData.numberOfExperiences + "-comment-btn" + "class='change-experiences-btn' type=button value=Buscar><img src='./images/comment-icon.png' class='options-icon  mr-2 ml-2'></button>" + 
                    "<button class='change-experiences-btn' type=button value=Buscar><img src='./images/delete-icon.png' class='options-icon' onclick=deleteExperience(" + userData.numberOfExperiences + ")></button>" + 
            "</div>" + 
            "<div class='myprofile-experiences-info'>" + 
                "<p class='titles-experiences-white'>" + experienceTitle + "</p>" + 
                "<div class='col ml-2'>"   + 
                    "<p class='text-experiences-info-white'>10 likes</p>" + 
                    "<p class='text-experiences-info-white'>5 comentarios</p>" + 
                "</div>" + 
                "<hr class='experiences-info-separator'>" + 
                "<div id='experiences-test-00-coments' class='col mb-4 ml-2'>" + 
                    "<p class='text-experiences-info-white mb-2'>Comentarios</p>" + 
                    "<p id='experiences-test-00-coment-00' class='text-experiences-comments'>Muestra de comentarios</p> " +  
                  "<p id='experiences-test-00-coment-00' class='text-experiences-comments'>Muestra de comentarios</p>" +
                "</div>" +
                "<div class='d-flex'></div>" +
            "</div>"  +   
        "</div>" +
    "</div>");
    
    userData.numberOfExperiences++;
    Cookies.set(String(userId), JSON.stringify(userData), { secure: true });


}

// Lectura de los datos del usuario al insertar experiencias
function getExperienceData() {
    let userId = Cookies.get("currentUser");
    let userCookie = Cookies.get(userId);
    let userData = JSON.parse(userCookie);
    let experienceTitle = $("#experienceTitle").val();
    let experienceDescription = $("#experienceDescription").val();
    let experiencePlace = $("#experiencePlace").val();
    let experienceImage = document.getElementById("experienceImage").files[0];
    return {experienceTitle, experienceImage, experiencePlace, experienceDescription};
}

function showExperiencesPopUp(){
 document.getElementById("single-experience-amazonas").style.display = "block";
 document.getElementById("my_experiences").style.display = "none";
}
