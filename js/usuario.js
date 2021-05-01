class usuarios{
    nombre;
    contrasenia;
    direccion;
    
    setNombre(nombre){this.nombre=nombre}
    setContrasenia(contrasenia){this.contrasenia=contrasenia}
    setDireccion(direccion){this.direccion=direccion}

    getNombre(){return this.nombre}
    getContrasenia(){return this.contrasenia}
    getDireccion(){return this.direccion}

    imprimir(){
        return 'Nombre: '+this.nombre+' Contraseña: '+this.contrasenia+' Direccion: '+this.direccion;
    }
}

function validarFormRegisUsuario() {
    var resp1 = validaRut();
    if (resp1==false) {
        return false;
    }
    var resp2 =  validarFecha();
    if (resp2==false){
        return false;
    }
    var resp3 = validarContasenia();
    if (resp3==false) {
        return false;
    }
}



function validarInicio_sesion() {
    var resp4 = validarContra_ini();
    if (resp4 == false) {
        return false;
    }
    var resp5 = validarUsuario_ini();
    if (resp5 == false) {
        return false;
    }
}

function validaRut() {
    var rut = document.getElementById('txtRut').value;
    console.log('Su rut es:'+rut);
    var num = 3;
    var suma = 0;
    for (let index = 0; index < 8; index++) {
        var caracter = rut.slice(index,index+1);
        console.log(caracter+ ' x '+num);
        suma = suma + ( caracter * num );
        num = num -1;
        if (num == 1) {
            num = 7;
        }
    }
    console.log('suma es:'+suma);
    var resto = suma % 11;
    console.log('resto:'+resto);
    var dv = 11 - resto;
    if ( dv > 9) {
        if ( dv == 10) {
            dv ='K';
        }else{
            dv = 0;
        }
    }
    console.log('dv:' + dv);
    var dv_usuario = rut.slice(-1).toUpperCase();
    if ( dv != dv_usuario ) {
        Swal.fire({
            icon: 'error',
            title: 'validacion rut',
            text: 'el rut es incorrecto, verifique'
          });
        return false;
    }
    return true;

}

function validarFecha() {
    var fechaUsuario = document.getElementById('txtFechaNaci').value;
    var fechaSistema = new Date();
    console.log('Fecha Usuario:'+fechaUsuario);
    console.log('Fecha Sistema:'+fechaSistema);

    var ano = fechaUsuario.slice(0,4);
    var mes = fechaUsuario.slice(5,7);
    var dia = fechaUsuario.slice(8,10);
    var fechaNuevaUsuario = new Date(ano,(mes-1),dia);
    console.log('Nueva Fecha:'+fechaNuevaUsuario);
    
    if ( fechaNuevaUsuario > fechaSistema) {
        Swal.fire({
            icon: 'error',
            title: 'validacion de fecha de nacimento',
            text: 'la fecha de nacimento no es valida'
          });
        return false;
    }

    var elDia = 24 * 60 * 60 * 1000;
    var dias =Math.trunc(( fechaSistema.getTime() - fechaNuevaUsuario.getTime()) / elDia);
    console.log('Dias:'+dias);
    var anos =Math.trunc( dias / 365) ;
    console.log('Años:'+anos);
    if ( anos < 18) {
        Swal.fire({
            icon: 'error',
            title: 'validacion de fecha de nacimento',
            text: 'Usted es menor de edad, su edad es: '+anos
          })
        return false;
    }
    return true;
}

function validarContasenia() {
    var contaseniaUsuario = document.getElementById('txtContraseña').value;
    var contra2Usuario = document.getElementById('txtContra_2').value;
    if(contaseniaUsuario != contra2Usuario){
        Swal.fire({
            icon: 'error',
            title: 'validacion de contraseña',
            text: 'Las contraseñas no son iguales'
          });
          return false
    }
    return true
    
}

function validarContra_ini() {
    var Contra_ini = document.getElementById('txtContraseña_ini').value;
    var Contra_db = localStorage.getItem('contraseña');
    if (Contra_ini != Contra_db) {
        Swal.fire({
            icon: 'error',
            title: 'validacion Usuario',
            text: 'Su contraseña no coinside'
          });
        return false;
    }
    return true;
}
function validarUsuario_ini(params) {
    var NombreUsuario_ini = document.getElementById('txtUsuario_ini').value;
    var NombreUsuario_db = localStorage.getItem('usuario');
    
    if (NombreUsuario_ini != NombreUsuario_db) {
        Swal.fire({
            icon: 'error',
            title: 'validacion Usuario',
            text: 'Su nombre de usuario no coinside'
          });
        return false;
    }
    return true;
}