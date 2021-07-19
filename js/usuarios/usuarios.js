const swalDelete = Swal.mixin({
    customClass: {
        cancelButton: "btn btn-outline-secondary btn-nuevo margin-buttons",
        confirmButton: "btn btn-outline-danger btn-nuevo padding-buttoni"
    },
    buttonsStyling: false
});

var usuarios = {
    add_usuario: function () {
        $(document).on("click", "#btnNuevoAgente", function (event) {
            event.preventDefault();
            jQuery.noConflict();
            jQuery(function ($) {
                $("#modal_nuevo_asesor").modal();
            });
        });

        $("#agregar_usuarios").on("submit", function (form) {
            form.preventDefault();
            var pass = document.getElementById("txt_contrasena").value;
            var conpas = document.getElementById("txt_confirm_contrasena").value;
            if (pass != conpas) {
                swal.fire({
                    title:"Error!", 
                    text:"Contraseñas no coinciden!", 
                    icon:"warning",
                    timer: 2000,
                    showConfirmButton: false,
                    timerProgressBar: true,
                });
            } else {
                var data = {
                    email: $("#txt_email").val(),
                    nombre: $("#txt_nombre").val(),
                    contrasena: $("#txt_contrasena").val(),
                    id_nivelusuario: $("#sel_id_nivelusuario").val()
                };

                swal.fire({
                    title: "CORRECTO",
                    text: "SE AGREGO CORRECTAMENTE EL USUARIO",
                    icon: "success",
                }).then((result) => {
                        location.reload();
                });
            }
        });
    },

    datos_editar_usuarios: function () {
        $(document).on("click", ".editar_user", function (event) {
            event.preventDefault();
            jQuery.noConflict();
            jQuery(function ($) {
                $("#modal_usuarios_editar").modal();
            });

            var id_usuario = $(this).data("id");

            name = $(this).parents("tr").find("td").eq(0).text();
            nivel = $(this).parents("tr").find("td").eq(1).text();
                if (nivel.trim()== root) {
                    nivel = 1;
                }else if (nivel.trim()== Administrador) {
                    nivel = 2;
                }else if (nivel.trim()== Asesor) {
                    nivel = 3;
                } else if (nivel.trim()== Cliente) {
                    nivel = 4;
                }

            email = $(this).parents("tr").find("td").eq(2).text();

            $("#id_usuario_editar").val(id_usuario);
            $("#txt_nombre_editar").val(name.trim());
            $("#txt_user_editar").val(email.trim());
            $("#txt_password_editar").val('');
            $("#select_nivel_editar").val(nivel);
        });
    },

    editar_editar_usuarios: function () {
        $("#editar_usuarios").on("submit", function (e) {
            e.preventDefault();
            var data = {
                id_usuario: $("#id_usuario_editar").val(),
                nombre: $("#txt_nombre_editar").val(),
                email: $("#txt_user_editar").val(),
                id_nivelusuario: $("#select_nivel_editar").val(),
                contrasena: $("#txt_password_editar").val()
            };
            var response = true;

            if (response == "false") {
                title = "Error!";
                icon = "error";
                mensaje = "No se pudo realizar la actualicación";
            } else {
                icon = "success";
                title = "Actualización de información";
                mensaje = "Se actualizo la información correctamente";
            }
            swal({
                title: title,
                text: mensaje,
                icon: icon,
                timer: 2000,
                showConfirmButton: false,
                timerProgressBar: true,
            }).then((result) => {
                location.reload();
            });
        });
    },

    eliminar_usuario: function () {
        $(document).on("click", ".eliminar_user", function (event) {
            event.preventDefault();
            jQuery.noConflict();
            id_usuario = $(this).data("id");
            var data = {
                id_usuario: id_usuario
            };

            swalDelete.fire({
                title: "¿Está seguro?",
                text: "El usuario se eliminará!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonText: "Si, eliminar!",
                reverseButtons: true
            }).then(result => {
                if (result.value) {
                    Swal.fire(
                        'Eliminado!',
                        'Se elimino correctamente',
                        'success'
                    );
                    var toDelete = "#tr_" + id_usuario;
                    $(toDelete).remove();
                }
            });
        });
    },
};
jQuery(document).ready(function () {
    usuarios.add_usuario(this);
    usuarios.datos_editar_usuarios(this);
    usuarios.editar_editar_usuarios(this);
    usuarios.eliminar_usuario(this);
});
