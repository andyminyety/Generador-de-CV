
function Limpiar(){

 var inputNombre = document.getElementById("nombre");
 inputNombre.value = "";
 inputNombre.focus();

 var inputCargo = document.getElementById("cargo");
 inputCargo.value = "";

 var inputPerfil = document.getElementById("perfil");
 inputPerfil.value = "";

 var inputCorreo = document.getElementById("correo");
 inputCorreo.value = "";

 var inputTelefono = document.getElementById("telefono");
 inputTelefono.value = "";

 var inputPaginaWeb = document.getElementById("web");
 inputPaginaWeb.value = "";

 var inputHobbies = document.getElementById("hobbies");
 inputHobbies.value = "";

 var inputEmpleos = document.getElementById("empleo");
 inputEmpleos.value = "";

 var inputEducacion = document.getElementById("educacion");
 inputEducacion.value = "";

 var inputHabilidades = document.getElementById("habilidades");
 inputHabilidades.value = "";
}

function CreateContactElement(){

    var inputNombre = document.getElementById("nombre");
    var valueNombre = inputNombre.value;

    var inputCargo = document.getElementById("cargo");
    var valueCargo = inputCargo.value;

    var inputPerfil = document.getElementById("perfil");
    var valuePerfil = inputPerfil.value;

    var inputCorreo = document.getElementById("correo");
    var valueCorreo = inputCorreo.value;

    var inputTelefono = document.getElementById("telefono");
    var valueTelefono = inputTelefono.value;

    var inputPaginaWeb = document.getElementById("web");
    var valuePaginaWeb = inputPaginaWeb.value;

    var inputHobbies = document.getElementById("hobbies");
    var valueHobbies = inputHobbies.value;

    var inputEmpleos = document.getElementById("empleo");
    var valueEmpleos = inputEmpleos.value;

    var inputEducacion = document.getElementById("educacion");
    var valueEducacion = inputEducacion.value;

    var inputHabilidades = document.getElementById("habilidades");
    var valueHabilidades = inputHabilidades.value;

    var mainContainer = document.getElementById('contact-container');

    var isValid = Validar(inputNombre, inputCargo, inputPerfil, inputCorreo, inputTelefono, 
        inputPaginaWeb, inputHobbies, inputEmpleos, inputEducacion, inputHabilidades);

    if(isValid){

        var mainContainer = document.getElementById('contact-container');

        Curriculum(mainContainer, valueNombre, valueCargo, valuePerfil, valueTelefono, valueCorreo, 
            valuePaginaWeb, valueHobbies, valueEmpleos, valueEducacion, valueHabilidades)
    
        Limpiar();

    }else{
        alert("Debes de llenar todas las informaciones");
    }
}

function Curriculum(mainContainer, valueNombre, valueCargo, valuePerfil, valueTelefono, valueCorreo, 
    valuePaginaWeb, valueHobbies, valueEmpleos, valueEducacion, valueHabilidades){

        valueHobbies.split(',').forEach(function(elemento, indice, array) {
            Hobbies1=(array[0]);
            Hobbies2=(array[1]);
            Hobbies3=(array[2]);
            Hobbies4=(array[3]);
        })

        valueEmpleos.split(',').forEach(function(elemento, indice, array) {
            Empleo1=(array[0]);
            Empleo2=(array[1]);
            Empleo3=(array[2]);
        })

        valueEducacion.split(',').forEach(function(elemento, indice, array) {
            Educacion1=(array[0]);
            Educacion2=(array[1]);
        })

        valueHabilidades.split(',').forEach(function(elemento, indice, array) {
            Habilidades1=(array[0]);
            Habilidades2=(array[1]);
            Habilidades3=(array[2]);
            Habilidades4=(array[3]);
        })

    //Main
    var DivCurriculum = document.createElement("div");
    DivCurriculum.setAttribute("class","resume bg-dark b-20");

    var DivLeft = document.createElement("div");
    DivLeft.setAttribute("class","resume_left bg-dark");

    //Perfil
    var DivProfile = document.createElement("div");
    DivProfile.setAttribute("class","resume_profile");

    var Imagen = document.createElement("img");
    Imagen.src="../Generador de CV/assets/Img/user.png";
    Imagen.setAttribute("class","Img");

    var DivContent = document.createElement("div");
    DivContent.setAttribute("class","resume_content");

    var DivInfo = document.createElement("div");
    DivInfo.setAttribute("class","resume_info");

    var DivItem = document.createElement("div");
    DivItem.setAttribute("class","resume_item");

    //Nombre
    var DivTitle = document.createElement("div");
    DivTitle.setAttribute("class","title resume_item b-20");

    var Nombre = document.createElement("p");
    Nombre.setAttribute("class","bold text-white space");
    Nombre.innerText = "" + valueNombre;

    //Cargo
    var Cargo = document.createElement("p");
    Cargo.setAttribute("class","semi-bold text-white space");
    Cargo.innerText = "" + valueCargo;

    var DivTitle1 = document.createElement("div");
    DivTitle1.setAttribute("class","title b-20 card-header text-white bg-primary card-header-new");

    var ParrafoProfile = document.createElement("p");
    ParrafoProfile.setAttribute("class","parrafo");

    var ProfileTitle = document.createElement("p");
    ProfileTitle.setAttribute("class","bold");
    ProfileTitle.innerText = "Perfil";

    var LiProfile = document.createElement("li");
    LiProfile.setAttribute("class","li-profile");

    var DivData = document.createElement("div");
    DivData.setAttribute("class","data text-white space");

    var ParrafoProfile1 = document.createElement("p");
    ParrafoProfile1.setAttribute("class","parrafo1");

    var Profile = document.createElement("p");
    Profile.setAttribute("class","parrafo2");
    Profile.innerText = "" + valuePerfil;

    //Contactos
    var DivTitle2 = document.createElement("div");
    DivTitle2.setAttribute("class","card-title b-20 text-white bg-primary card-header-new");

    var ParrafoContacto = document.createElement("p");
    ParrafoContacto.setAttribute("class","parrafo3");

    var ContactoTitle = document.createElement("p");
    ContactoTitle.setAttribute("class","bold");
    ContactoTitle.innerText = "Contactos";

    var DivContacto = document.createElement("div");
    DivContacto.setAttribute("class","resume_contact");

    var MargenContacto = document.createElement("p");
    MargenContacto.setAttribute("class","margen-abajo-7");

    //Correo
    var UlEmail = document.createElement("ul");
    UlEmail.setAttribute("class","ul-email");

    var LiEmail = document.createElement("li");
    LiEmail.setAttribute("class","li-email");

    var DivIconEmail = document.createElement("div");
    DivIconEmail.setAttribute("class","icon rounded-circle bg-white position-relative");

    var iFasEmail = document.createElement("i");
    iFasEmail.setAttribute("class","fas fa-envelope text-dark");

    var Email = document.createElement("div");
    Email.setAttribute("class","semi-bold text-white");
    Email.innerText = "" + valueCorreo;

    //Teléfono
    var LiNumber = document.createElement("li");
    LiNumber.setAttribute("class","li-number");

    var DivIconNumber = document.createElement("div");
    DivIconNumber.setAttribute("class","icon rounded-circle bg-white position-relative");

    var iFasNumber = document.createElement("i");
    iFasNumber.setAttribute("class","fas fa-address-card text-dark");

    var Cell = document.createElement("div");
    Cell.setAttribute("class","semi-bold text-white");
    Cell.innerText = "" + valueTelefono;

    //Pagina Web
    var LiWeb = document.createElement("li");
    LiWeb.setAttribute("class","li-web");

    var DivIconWeb = document.createElement("div");
    DivIconWeb.setAttribute("class","icon rounded-circle bg-white position-relative");

    var iFasWeb = document.createElement("i");
    iFasWeb.setAttribute("class","fab fa-google text-dark");

    var Web = document.createElement("div");
    Web.setAttribute("class","semi-bold text-white");
    Web.innerText = "" + valuePaginaWeb;

    //Hobbies
    var DivTitle3 = document.createElement("div");
    DivTitle3.setAttribute("class","title b-20 card-header text-white bg-primary card-header-new");

    var ParrafoHobbies = document.createElement("p");
    ParrafoHobbies.setAttribute("class","parrafo4");

    var HobbiesTitle = document.createElement("p");
    HobbiesTitle.setAttribute("class","bold");
    HobbiesTitle.innerText = "Hobbies";

    var DivHobbies = document.createElement("div");
    DivHobbies.setAttribute("class","resume_social text-white");

    var Margen = document.createElement("p");
    Margen.setAttribute("class","margen-abajo-7");

    //Hobby 1
    UlHobby1 = document.createElement("ul");
    UlHobby1.setAttribute("class","ul-musica");
    
    var LiHobby1 = document.createElement("li");
    LiHobby1.setAttribute("class","li-musica");

    var DivIconHobby1 = document.createElement("div");
    DivIconHobby1.setAttribute("class","icon rounded-circle bg-white position-relative margen-icon");

    var iFasHobby1 = document.createElement("i");
    iFasHobby1.setAttribute("class","fas fa-music text-dark");

    var DivHobby1 = document.createElement("div");
    DivHobby1.setAttribute("class","data");

    var Hobby1 = document.createElement("p");
    Hobby1.setAttribute("class","semi-bold text-white");
    Hobby1.innerText = "" + Hobbies1;

    //Hobby 2
    var LiHobby2 = document.createElement("li");
    LiHobby2.setAttribute("class","li-juego");

    var DivIconHobby2 = document.createElement("div");
    DivIconHobby2.setAttribute("class","icon rounded-circle bg-white position-relative");

    var iFasHobby2 = document.createElement("i");
    iFasHobby2.setAttribute("class","fas fa-gamepad text-dark");

    var DivHobby2 = document.createElement("div");
    DivHobby2.setAttribute("class","data");

    var Hobby2 = document.createElement("p");
    Hobby2.setAttribute("class","semi-bold text-white");
    Hobby2.innerText = "" + Hobbies2;

    //Hobby 3
    var LiHobby3 = document.createElement("li");
    LiHobby3.setAttribute("class","li-deporte");

    var DivIconHobby3 = document.createElement("div");
    DivIconHobby3.setAttribute("class","icon rounded-circle bg-white position-relative");

    var iFasHobby3 = document.createElement("i");
    iFasHobby3.setAttribute("class","fas fa-baseball-ball text-dark");

    var DivHobby3 = document.createElement("div");
    DivHobby3.setAttribute("class","data");

    var Hobby3 = document.createElement("p");
    Hobby3.setAttribute("class","semi-bold text-white");
    Hobby3.innerText = "" + Hobbies3;

    //Hobby 4
    var LiHobby4 = document.createElement("li");
    LiHobby4.setAttribute("class","li-programar");

    var DivIconHobby4 = document.createElement("div");
    DivIconHobby4.setAttribute("class","icon rounded-circle bg-white position-relative");

    var iFasHobby4 = document.createElement("i");
    iFasHobby4.setAttribute("class","fas fa-laptop-code text-dark");

    var DivHobby4 = document.createElement("div");
    DivHobby4.setAttribute("class","data");

    var Hobby4 = document.createElement("p");
    Hobby4.setAttribute("class","semi-bold text-white");
    Hobby4.innerText = "" + Hobbies4;

    //Works
    var DivRight = document.createElement("div");
    DivRight.setAttribute("class","resume_right bg-white");

    var DivWork = document.createElement("div");
    DivWork.setAttribute("class","resume_work ancho");

    var DivTitle4 = document.createElement("div");
    DivTitle4.setAttribute("class","title b-20");

    var Work = document.createElement("p");
    Work.setAttribute("class","bold text-white card-header-new2 bg-primary");
    Work.innerText = "Empleos";

    //Work 1
    var UlWork = document.createElement("ul");
    UlWork.setAttribute("class","ul-empleo");

    var LiWork1 = document.createElement("li");
    LiWork1.setAttribute("class","li-empleo1");

    var DivWork1 = document.createElement("div");
    DivWork1.setAttribute("class","info");

    var Work1 = document.createElement("p");
    Work1.setAttribute("class","semi-bold");
    Work1.innerText = "" + Empleo1;

    //Work 2
    var LiWork2 = document.createElement("li");
    LiWork2.setAttribute("class","li-empleo2");

    var DivWork2 = document.createElement("div");
    DivWork2.setAttribute("class","info");

    var Work2 = document.createElement("p");
    Work2.setAttribute("class","semi-bold");
    Work2.innerText = "" + Empleo2;

    //Work 3
    var LiWork3 = document.createElement("li");
    LiWork3.setAttribute("class","li-empleo3");

    var DivWork3 = document.createElement("div");
    DivWork3.setAttribute("class","info");

    var Work3 = document.createElement("p");
    Work3.setAttribute("class","semi-bold");
    Work3.innerText = "" + Empleo3;

    //Educación
    var DivEducation = document.createElement("div");
    DivEducation.setAttribute("class","resume_education ancho");

    var DivTitle5 = document.createElement("div");
    DivTitle5.setAttribute("class","title b-20");

    var Education1 = document.createElement("p");
    Education1.setAttribute("class","bold text-white card-header-new2 bg-primary");
    Education1.innerText = "Educación";

    //Educación 1
    var UlEducation = document.createElement("ul");
    UlEducation.setAttribute("class","ul-educacion");

    var LiEducation = document.createElement("li");
    LiEducation.setAttribute("class","li-educacion");

    var DivEducation1 = document.createElement("div");
    DivEducation1.setAttribute("class","info");

    var Education = document.createElement("p");
    Education.setAttribute("class","semi-bold");
    Education.innerText = "" + Educacion1;

    //Educación 2
    var LiEducation2 = document.createElement("li");
    LiEducation2.setAttribute("class","li-educacion2");

    var DivEducation2 = document.createElement("div");
    DivEducation2.setAttribute("class","info");

    var Education2 = document.createElement("p");
    Education2.setAttribute("class","semi-bold");
    Education2.innerText = "" + Educacion2;

    //Habilidades
    var DivHabilidades = document.createElement("div");
    DivHabilidades.setAttribute("class","resume_skills ancho");

    var DivTitle6 = document.createElement("div");
    DivTitle6.setAttribute("class","title b-20");

    var Habilidad1 = document.createElement("p");
    Habilidad1.setAttribute("class","bold text-white card-header-new2 bg-primary");
    Habilidad1.innerText = "Habilidades";

    var UlHabilidad = document.createElement("ul");
    UlHabilidad.setAttribute("class","ul-habilidad");

    var LiHabilidad = document.createElement("li");
    LiHabilidad.setAttribute("class","li-habilidad1");

    var DivHabilidad1 = document.createElement("div");
    DivHabilidad1.setAttribute("class","info");

    var Habilidad = document.createElement("p");
    Habilidad.setAttribute("class","semi-bold");
    Habilidad.innerText = "" + Habilidades1;

    //Habilidad 2
    var LiHabilidad2 = document.createElement("li");
    LiHabilidad2.setAttribute("class","li-habilidad2");

    var DivHabilidad2 = document.createElement("div");
    DivHabilidad2.setAttribute("class","info");

    var Habilidad2 = document.createElement("p");
    Habilidad2.setAttribute("class","semi-bold");
    Habilidad2.innerText = "" + Habilidades2;

    //Habilidad 3
    var LiHabilidad3 = document.createElement("li");
    LiHabilidad3.setAttribute("class","li-habilidad3");

    var DivHabilidad3 = document.createElement("div");
    DivHabilidad3.setAttribute("class","info");

    var Habilidad3 = document.createElement("p");
    Habilidad3.setAttribute("class","semi-bold");
    Habilidad3.innerText = "" + Habilidades3;

    //Habilidad 4
    var LiHabilidad4 = document.createElement("li");
    LiHabilidad4.setAttribute("class","li-habilidad4");

    var DivHabilidad4 = document.createElement("div");
    DivHabilidad4.setAttribute("class","info");

    var Habilidad4 = document.createElement("p");
    Habilidad4.setAttribute("class","semi-bold");
    Habilidad4.innerText = "" + Habilidades4;

    LiHabilidad4.appendChild(DivHabilidad4);
    DivHabilidad4.appendChild(Habilidad4);

    LiHabilidad3.appendChild(DivHabilidad3);
    DivHabilidad3.appendChild(Habilidad3);

    LiHabilidad2.appendChild(DivHabilidad2);
    DivHabilidad2.appendChild(Habilidad2);

    LiHabilidad.appendChild(DivHabilidad1);
    DivHabilidad1.appendChild(Habilidad);

    UlHabilidad.appendChild(LiHabilidad);
    UlHabilidad.appendChild(LiHabilidad2);
    UlHabilidad.appendChild(LiHabilidad3);
    UlHabilidad.appendChild(LiHabilidad4);

    DivHabilidades.appendChild(DivTitle6);
    DivTitle6.appendChild(Habilidad1);
    DivHabilidades.appendChild(UlHabilidad);

    LiEducation2.appendChild(DivEducation2);
    DivEducation2.appendChild(Education2);

    LiEducation.appendChild(DivEducation1);
    DivEducation1.appendChild(Education);

    UlEducation.appendChild(LiEducation);
    UlEducation.appendChild(LiEducation2);

    DivEducation.appendChild(DivTitle5);
    DivTitle5.appendChild(Education1);
    DivEducation.appendChild(UlEducation);

    LiWork3.appendChild(DivWork3);
    DivWork3.appendChild(Work3);

    LiWork2.appendChild(DivWork2);
    DivWork2.appendChild(Work2);

    LiWork1.appendChild(DivWork1);
    DivWork1.appendChild(Work1);

    UlWork.appendChild(LiWork1);
    UlWork.appendChild(LiWork2);
    UlWork.appendChild(LiWork3);

    DivWork.appendChild(DivTitle4);
    DivTitle4.appendChild(Work);
    DivWork.appendChild(UlWork);

    DivRight.appendChild(DivWork);
    DivRight.appendChild(DivEducation);
    DivRight.appendChild(DivHabilidades);

    LiHobby4.appendChild(DivIconHobby4);
    LiHobby4.appendChild(DivHobby4);
    DivIconHobby4.appendChild(iFasHobby4);
    DivHobby4.appendChild(Hobby4);

    LiHobby3.appendChild(DivIconHobby3);
    LiHobby3.appendChild(DivHobby3);
    DivIconHobby3.appendChild(iFasHobby3);
    DivHobby3.appendChild(Hobby3);

    LiHobby2.appendChild(DivIconHobby2);
    LiHobby2.appendChild(DivHobby2);
    DivIconHobby2.appendChild(iFasHobby2);
    DivHobby2.appendChild(Hobby2);

    LiHobby1.appendChild(DivIconHobby1);
    LiHobby1.appendChild(DivHobby1);
    DivIconHobby1.appendChild(iFasHobby1);
    DivHobby1.appendChild(Hobby1);

    DivTitle3.appendChild(ParrafoHobbies);
    DivTitle3.appendChild(HobbiesTitle);
    DivHobbies.appendChild(Margen);
    DivHobbies.appendChild(UlHobby1);
    UlHobby1.appendChild(LiHobby1);
    UlHobby1.appendChild(LiHobby2);
    UlHobby1.appendChild(LiHobby3);
    UlHobby1.appendChild(LiHobby4);

    LiWeb.appendChild(DivIconWeb);
    LiWeb.appendChild(Web);
    DivIconWeb.appendChild(iFasWeb);

    LiNumber.appendChild(DivIconNumber);
    LiNumber.appendChild(Cell);
    DivIconNumber.appendChild(iFasNumber);

    LiEmail.appendChild(DivIconEmail);
    LiEmail.appendChild(Email);
    DivIconEmail.appendChild(iFasEmail);

    DivTitle2.appendChild(ParrafoContacto);
    DivTitle2.appendChild(ContactoTitle);
    DivContacto.appendChild(MargenContacto);
    DivContacto.appendChild(UlEmail);
    UlEmail.appendChild(LiEmail);
    UlEmail.appendChild(LiNumber);
    UlEmail.appendChild(LiWeb)

    DivTitle1.appendChild(ParrafoProfile);
    DivTitle1.appendChild(ProfileTitle);
    LiProfile.appendChild(DivData);
    DivData.appendChild(ParrafoProfile1);
    DivData.appendChild(Profile);

    DivTitle.appendChild(Nombre);
    DivTitle.appendChild(Cargo);

    DivContent.appendChild(DivTitle);
    DivContent.appendChild(DivTitle1);
    DivContent.appendChild(LiProfile);
    DivContent.appendChild(DivTitle2);
    DivContent.appendChild(MargenContacto);
    DivContent.appendChild(UlEmail);
    DivContent.appendChild(DivTitle3);
    DivContent.appendChild(DivHobbies);

    DivProfile.appendChild(Imagen);

    DivLeft.appendChild(DivProfile);
    DivLeft.appendChild(DivContent);

    DivCurriculum.appendChild(DivLeft);
    DivCurriculum.appendChild(DivRight);

    mainContainer.appendChild(DivCurriculum);
}

function Validar(inputNombre, inputCargo, inputPerfil, inputCorreo, inputTelefono, 
    inputPaginaWeb, inputHobbies, inputEmpleos, inputEducacion, inputHabilidades){
        
    var IsValid = true;

    //Validar Nombre
    var valueNombre = inputNombre.value;

    if(valueNombre == "" || valueNombre == null || valueNombre == undefined){

        IsValid = false;
        inputNombre.classList.add("error");
    }else{
        inputNombre.classList.remove("error");
    }

    //Validar Cargo
    var valueCargo = inputCargo.value;

    if(valueCargo == "" || valueCargo == null || valueCargo == undefined){

        IsValid = false;
        inputCargo.classList.add("error");
    }else{
        inputCargo.classList.remove("error");
    }

    //Validar Perfil
    var valuePerfil = inputPerfil.value;

    if(valuePerfil == "" || valuePerfil == null || valuePerfil == undefined){

        IsValid = false;
        inputPerfil.classList.add("error");
    }else{
        inputPerfil.classList.remove("error");
    }
    
    //Validar Correo
    var valueCorreo = inputCorreo.value;

    if(valueCorreo == "" || valueCorreo == null || valueCorreo == undefined){

        IsValid = false;
        inputCorreo.classList.add("error");
    }else{
        inputCorreo.classList.remove("error");
    }
    
    //Validar Telefono   
    var valueTelefono = inputTelefono.value;

    if(valueTelefono == "" || valueTelefono == null || valueTelefono == undefined){

        IsValid = false;
        inputTelefono.classList.add("error");
    }else{
        inputTelefono.classList.remove("error");
    }

    //Validar Pagina Web
    var valuePaginaWeb = inputPaginaWeb.value;
 
    if(valuePaginaWeb == "" || valuePaginaWeb == null || valuePaginaWeb == undefined){
 
        IsValid = false;
        inputPaginaWeb.classList.add("error");
    }else{
        inputPaginaWeb.classList.remove("error");
    }

    //Validar Hobbies
    var valueHobbies = inputHobbies.value;

    if(valueHobbies == "" || valueHobbies == null || valueHobbies == undefined){

        IsValid = false;
        inputHobbies.classList.add("error");
    }else{
        inputHobbies.classList.remove("error");
    }

    //Validar Empleos
    var valueEmpleos = inputEmpleos.value;

    if(valueEmpleos == "" || valueEmpleos == null || valueEmpleos == undefined){

        IsValid = false;
        inputEmpleos.classList.add("error");
    }else{
        inputEmpleos.classList.remove("error");
    }
    
    //Validar Educación
    var valueEducacion = inputEducacion.value;

    if(valueEducacion == "" || valueEducacion == null || valueEducacion == undefined){

        IsValid = false;
        inputEducacion.classList.add("error");
    }else{
        inputEducacion.classList.remove("error");
    }

    //Validar Habilidades
    var valueHabilidades = inputHabilidades.value;

    if(valueHabilidades == "" || valueHabilidades == null || valueHabilidades == undefined){

        IsValid = false;
        inputHabilidades.classList.add("error");
    }else{
        inputHabilidades.classList.remove("error");
    }

    return IsValid;
}