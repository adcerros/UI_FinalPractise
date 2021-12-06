

$(document).ready(function(){

    // Pone el header en modo registrado o sin registrar
    $(document).ready(setHeader());

    // Cambio a la seccion experiences
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

    // Cambio a la seccion top
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

    // Cambio a la seccion plan a trip
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
    let userData = { "pass": userPass, "name": userName, "email": userEmail, "bornDate": userBornDate, "numberOfExperiences": 0};
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
    $("#secondary-options-unregistered-div").show();
    $("#logIn-btn").show();
    Cookies.set("currentUser", null, {secure:true});
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
    $("#logOut-btn").show();
    Cookies.set("currentUser", userId, {secure:true});
    loadOptionsRegistered()
    // Se oculta la interfaz estandar
    // Se muestra la interfaz del usuario
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
        $("#logIn-btn").show();
    }
    else{
        $("#logIn-btn").hide();
        $("#logOut-btn").show();
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