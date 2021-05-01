class solicitud{
    descripcion;
    nombre_usu;

    setDescripcion(descripcion){this.descripcion=descripcion}
    setNombre_usu(nombre_usu){this.nombre_usu=nombre_usu}

    getDescripcion(){return this.descripcion}
    getNombre_usu(){return this.nombre_usu}

    imprimir(){
        return 'Descripcion: '+this.descripcion+' Usuario que lo solicito: '+this.nombre_usu;
    }
}

function validarSoli_usuario() {
    var resp = validarNombre_Usuario();
    if (resp==false) {
        return false;
    }
    var resp = validarContra_Usuario();
    if (resp==false) {
        return false;
    }
}

function validarNombre_Usuario() {
    var NombreUsuario_soli = document.getElementById('txtSoli_usuario').value;
    var NombreUsuario = localStorage.getItem('usuario');
    if (NombreUsuario_soli != NombreUsuario) {
        Swal.fire({
            icon: 'error',
            title: 'validacion Usuario',
            text: 'Su nombre de usuario no coinside'
          });
        return false;
    }
    return true;
}

function validarContra_Usuario() {
    var Contra_usuaio_soli = document.getElementById('txtSoli_contra').value;
    var Contra_usuaio = localStorage.getItem('contraseña');
    if (Contra_usuaio_soli != Contra_usuaio) {
        Swal.fire({
            icon: 'error',
            title: 'validacion Usuario',
            text: 'Su contraseña no coinside'
          });
        return false;
    }
    return true;
}

