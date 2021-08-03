// variable global de validacion
var valTask = false;

// variables globales para la fecha actual
var today = new Date();
var dd = String(today.getDate()).padStart(2, "0");
var mm = String(today.getMonth() + 1).padStart(2, "0");
var yyyy = today.getFullYear();
today = yyyy + "-" + mm + "-" + dd;
todayPrint = dd + "-" + mm + "-" + yyyy;

// const swalDeletetask = Swal.mixin({
//     customClass: {
//         cancelButton: 'btn btn-outline-secondary btn-nuevo padding-buttons',
//         confirmButton: 'btn btn-outline-primary btn-nuevo margin-buttons'
//     },
//     buttonsStyling: false
// })

// validar comentario de la tarea lista
function validarPendiente() {
    var valPendiente = $("#txtTask").val();
    var valFecha = $("#txtfechaLimite").val();

    if (valPendiente != "") {
        $("#val_txtTask").css("display", "none");
    } else if (valPendiente == "") {
        $("#val_txtTask").css("display", "");
    }
    if (valFecha == undefined) {
        $("#val_txtfechaLimite").css("display", "");
    } else if (valFecha != undefined) {
        $("#val_txtfechaLimite").css("display", "none");
    }

    if (valPendiente != "" && valFecha != "") {
        valTask = true;
    } else {
        valTask = false;
    }
}

var grafics = {
    graficaAdmin: function () {
        Chart.defaults.global.defaultFontSize = 18;

        var donutAdmin = document.getElementById("donutAdmin");
        if (donutAdmin != null) {
            new Chart(donutAdmin, {
                type: "doughnut",
                data: {
                    labels: [
                        "Producción",
                        "Logística internacional",
                        "En proceso",
                        "Despacho aduanal",
                        "Entrega última milla",
                        "Proyecto concluido",
                    ],
                    datasets: [{
                        data: [10, 04, 15, 05, 05, 10],
                        backgroundColor: [
                            "#d2d6de",
                            "#23bb52",
                            "#007bff",
                            "#6c757d",
                            "#7800b6",
                            "#008f39",
                        ],
                    }],
                },
                options: {
                    title: false,
                    maintainAspectRatio: false,
                    responsive: true,
                    rotation: -Math.PI,
                    cutoutPercentage: 30,
                    circumference: Math.PI,
                    legend: {
                        position: "bottom",
                    },
                },
            });
        }
    },
};

var task = {
    Check: function () {
        $(document).on("click", ".btn-check-bf", function (event) {
            event.preventDefault();
            var id_task_dash = $(this).data("id");

            $('#btnCheck_' + id_task_dash +'').removeClass('btn-light btn-nuevo btn-check-bf');
            $('#btnCheck_' + id_task_dash +'').addClass('btn-success btn-check-af');
            $('#btnCheck_' + id_task_dash +'').html('<i class="fas fa-check"></i>');
            
            $('#checkDate_' + id_task_dash +'').removeClass('hide-button');
            $('#checkDate_' + id_task_dash +'').html(today);

            $('#limiteDate_' + id_task_dash +'').removeClass('badge-info');
            $('#limiteDate_' + id_task_dash +'').addClass('badge-secondary');

            $('#task_' + id_task_dash +'').css('font-weight', '600');
            $('#task_' + id_task_dash +'').css('text-decoration', 'line-through');
            // <td style="vertical-align: middle">secondary;font-weight: 600;
            //     <a id="btnNoCheck01" class="btn btn btn-light btn-nuevo btn-check-bf btnNoCheck "></a>
            //     <a id="btnCheck01" class="btn btn btn-success btn-check-af btnCheck hide-button "><i class="fas fa-check"></i></a>
            // </td>
            // <td style="vertical-align: middle">
            //     <span class="td-text">Actualizar perfil</span>
            //     <small id="limiteDate01" class="badge badge-info">23/07/2021</small>
            //     <small id="CheckDate01" class="badge badge-secondary checkDate hide-button ">21/07/2021</small>
            //     <small id="NoCheckDate01" class="badge badge-secondary nocheckDate"></small>
            // </td>
            // <td style="vertical-align: middle">
            //     <a href="" type="button" class="editTask" data-id="01" data-toggle="modal"><i class="fas fa-edit"></i></a>
            //     <a href="" type="button" class="deleteTask trash" data-id="01"><i class="far fa-trash-alt"></i></a>

            //     $("#btnNoCheck" + id_task_dash + "").addClass('hide-button');
            //     $("#btnCheck" + id_task_dash + "").removeClass('hide-button');
            //     $("#taskNoCheck" + id_task_dash + "").addClass('hide-button');
            //     $("#taskCheck" + id_task_dash + "").removeClass('hide-button');
            //     $('#limite' + id_task_dash + '').addClass('hide-button');
            //     $("#nocheckDate" + id_task_dash + "").addClass('hide-button');
            //     $("#checkDate" + id_task_dash + "").removeClass('hide-button');
            //     $("#checkDate" + id_task_dash + "").html(todayPrint);
        });
        $(document).on("click", ".btn-check-af", function (event) {
            event.preventDefault();
            var id_task_dash = $(this).data("id");
            
            $('#btnCheck_' + id_task_dash +'').removeClass('btn-success btn-check-af');
            $('#btnCheck_' + id_task_dash +'').addClass('btn-light btn-nuevo btn-check-bf');
            $('#btnCheck_' + id_task_dash +'').html('&nbsp;&nbsp;');
            
            $('#checkDate_' + id_task_dash +'').addClass('hide-button');
            $('#checkDate_' + id_task_dash +'').html('');

            $('#limiteDate_' + id_task_dash +'').removeClass('badge-secondary');
            $('#limiteDate_' + id_task_dash +'').addClass('badge-info');

            $('#task_' + id_task_dash +'').css('font-weight', '400');
            $('#task_' + id_task_dash +'').css('text-decoration', 'none');
        });
    },

    removeCheck: function () {
    },
};
/*
    // var pendientes = {
    //     add_edit: function () {
    //         $(document).on('click', '#btnAgregar', function (event) {
    //             event.preventDefault();
    //             jQuery.noConflict();
    //             var id_task_dash = $('#txtIdTask').val();

    //             validarPendiente();

    //             if (valTask == true) {
    //                 if (id_task_dash == '') {
    //                     var data = {
    //                         id_usuario: $('#txtIdUsuario').val(),
    //                         task_dash: $('#txtTask').val(),
    //                         estatus: 0,
    //                         fecha_limite: $('#txtfechaLimite').val()
    //                     }
    //                     // response = cargar_ajax.run_server_ajax('Plataforma/taskDash', data);
    //                     // if (response == 'false') {
    //                     //     title = "Error!";
    //                     //     icon = "error";
    //                     //     mensaje = "Tarea no registrada correctamente";
    //                     // } else {
    //                     //     icon = "success";
    //                     //     title = "Correcto";
    //                     //     mensaje = "Se guardo la tarea correctamente";
    //                     // }
    //                     // swal.fire({
    //                     //     title: title,
    //                     //     text: mensaje,
    //                     //     icon: icon,
    //                     //     timer: 2000,
    //                     //     showConfirmButton: false,
    //                     //     timerProgressBar: true,
    //                     // }).then((result) => {
    //                     //     $('#txtIdTask').val();
    //                     //     jQuery(function ($) {
    //                     //         $('#modalTask').modal('hide');
    //                     //     });
    //                     //     location.reload();
    //                     // });
    //                 } else if (id_task_dash != '') {
    //                     var data = {
    //                         id_task_dash: id_task_dash,
    //                         task_dash: $('#txtTask').val(),
    //                         estatus: 0,
    //                         fecha_limite: $('#txtfechaLimite').val()
    //                     }
    //                     // response = cargar_ajax.run_server_ajax('Plataforma/taskDashEdit', data);
    //                     // if (response == 'false') {
    //                     //     title = "Error!";
    //                     //     icon = "error";
    //                     //     mensaje = "Tarea no registrada correctamente";
    //                     // } else {
    //                     //     icon = "success";
    //                     //     title = "Correcto";
    //                     //     mensaje = "Se guardo la tarea correctamente";
    //                     // }
    //                     // swal.fire({
    //                     //     title: title,
    //                     //     text: mensaje,
    //                     //     icon: icon,
    //                     //     timer: 2000,
    //                     //     showConfirmButton: false,
    //                     //     timerProgressBar: true,
    //                     // }).then((result) => {
    //                     //     $('#txtIdTask').val();
    //                     //     jQuery(function ($) {
    //                     //         $('#modalTask').modal('hide');
    //                     //     });
    //                     //     //location.reload();
    //                     // });
    //                 }
    //             }
    //         });

    //         $(document).on('click', '#btnAddTask', function (event) {
    //                 // if (id_task_dash == '') {
    //                 //     var data = {
    //                 //         id_usuario: $('#txtIdUsuario').val(),
    //                 //         task_dash: $('#txtTask').val(),
    //                 //         estatus: 0,
    //                 //         fecha_limite: $('#txtfechaLimite').val()
    //                 //     };
    //                 //     
    //                 //     swal.fire({
    //                 //         title: "Correcto",
    //                 //         text: "Se guardo la tarea correctamente",
    //                 //         icon: "success",
    //                 //         timer: 2000,
    //                 //         showConfirmButton: false,
    //                 //         timerProgressBar: true,
    //                 //     }).then((result) => {
    //                 //         $('#txtIdTask').val();
    //                 //         jQuery(function ($) {
    //                 //             $('#modalTask').modal('hide');
    //                 //         });
    //                 //         location.reload();
    //                 //     });
    //                 // } else if (id_task_dash != '') {
    //                 //     var data = {
    //                 //         id_task_dash: id_task_dash,
    //                 //         task_dash: $('#txtTask').val(),
    //                 //         estatus: 0,
    //                 //         fecha_limite: $('#txtfechaLimite').val()
    //                 //     }
    //                 //     
    //                 //     swal.fire({
    //                 //         title: "Correcto",
    //                 //         text: "Se guardo la tarea correctamente",
    //                 //         icon: "success",
    //                 //         timer: 2000,
    //                 //         showConfirmButton: false,
    //                 //         timerProgressBar: true,
    //                 //     }).then((result) => {
    //                 //         $('#txtIdTask').val();
    //                 //         jQuery(function ($) {
    //                 //             $('#modalTask').modal('hide');
    //                 //         });
    //                 //         location.reload();
    //                 //     });
    //                 // }
    //             }            
    //         });

    //         $(document).on('click', '#btnAddTask', function(event) {
    //             event.preventDefault();
    //             jQuery.noConflict();

    //             jQuery(function ($) {
    //                 $('#modalTask').modal();
    //             });
    //             $('#titleModal').html('Nuevo pendiente');
    //         }); 

    //         $(document).on('click', '.editTask', function(event) {
    //             event.preventDefault();
    //             jQuery.noConflict();

    //             var id = {id_task_dash: $(this).data('id')};
    //             var id_task_dash = id.id_task_dash;
    //             var data = {
    //                 id_task_dash: id_task_dash
    //             };

    //             jQuery(function ($) {
    //                 $('#modalTask').modal();
    //             });
    //             $('#titleModal').html('Editar pendiente');
    //             $('#txtIdTask').val(id_task_dash);

    //             // response = cargar_ajax.run_server_ajax('Plataforma/taskData', data);
    //             $('#txtTask').val(response.task_dash);
    //             // if (response.fecha_limite === null || response.fecha_limite === 0000 - 00 - 00 || response.fecha_limite === '') {
    //             //     $('#txtfechaLimite').val();
    //             // } else {
    //             //     $('#txtfechaLimite').val(response.fecha_limite);
    //             // }
    //         });

    //         $(document).on('click', '.deleteTask', function (event) {
    //             event.preventDefault();

    //             var id = { id_task_dash: $(this).data('id') };
                
    //             $('#titleModal').html('Editar pendiente');
    //             $('#txtIdTask').val(id_task_dash);
                
    //             for (var i = 0; i < task_dashGlobales.length; i++) {
    //                 if (id_task_dash == task_dashGlobales[i].id_task_dash) {
    //                     $('#txtTask').val(task_dashGlobales[i].task_dash);
    //                     if (task_dashGlobales[i].fecha_limite === null || task_dashGlobales[i].fecha_limite === 0000-00-00 || task_dashGlobales[i].fecha_limite === '') {
    //                         $('#txtfechaLimite').val();
    //                     } else {
    //                         $('#txtfechaLimite').val(task_dashGlobales[i].fecha_limite);
    //                     }
    //                 }
    //             }
    //         });

    //         $(document).on('click', '.deleteTask', function(event) {
    //             event.preventDefault();

    //             var id = {id_task_dash: $(this).data('id')};
    //             var id_task_dash = id.id_task_dash;
    //             var data = {
    //                 id_task_dash: id_task_dash,
    //                 activo: 0
    //             };
    //             swalDeletetask.fire({
    //                 title: "¿Está seguro de eliminar esté pendiente?",
    //                 text: "¡No podrás revertir esto, la información se perderá!",
    //                 icon: "warning",
    //                 showCancelButton: true,
    //                 confirmButtonText: "Si, eliminar!",
    //                 reverseButtons: true
    //             }).then(result => {
    //                 if (result.value) {
    //                     location.reload();
    //                 }
    //             });
    //         });
    //     },

    //     limite_task: function () {
    //         var idUsuario = $('#idUsuario').val();
    //         var data = {
    //             id_usuario: idUsuario,
    //         }
    //         // response = cargar_ajax.run_server_ajax('Plataforma/taskDatas', data);
    //         // if (response != false) {
    //         //     response.forEach(element => {
    //         //         var last = element.fecha_limite;
    //         //         var elem = last.split('-');
    //         //         var dia = elem[2];
    //         //         var mes = elem[1];
    //         //         var anio = elem[0];
    //         //         var lastday = dia - 01;
    //         //         var intDay = parseInt(dd);
    //         //         if (element.estatus === '1') {
    //         //             $('#limite' + element.id_task_dash + '').addClass('hide-button');
    //         //         }

    //         //         if (lastday === intDay || parseInt(dia) === intDay) {
    //         //             $('#limite' + element.id_task_dash + '').removeClass('badge-warning');
    //         //             $('#limite' + element.id_task_dash + '').addClass('badge-danger');
    //         //             if (element.correo === '0') {
    //         //                 var dataT = {
    //         //                     id_task_dash: element.id_task_dash,
    //         //                     correo: 1,
    //         //                 }
    //         //                 var dataC = {
    //         //                     id_task_dash: element.id_task_dash,
    //         //                     id_usuario: element.id_usuario,
    //         //                 }
    //         //                 // cargar_ajax.run_server_ajax('plataforma/taskDashCorreo', dataT);
    //         //                 // response = cargar_ajax.run_server_ajax('plataforma/correo_pendiente', dataC);
    //         //             }
    //         //             if (element.correo === '1' && parseInt(dia) === intDay) {
    //         //                 var dataT = {
    //         //                     id_task_dash: element.id_task_dash,
    //         //                     correo: 2,
    //         //                 }
    //         //                 var dataC = {
    //         //                     id_task_dash: element.id_task_dash,
    //         //                     id_usuario: element.id_usuario,
    //         //                 }
    //         //                 // cargar_ajax.run_server_ajax('plataforma/taskDashCorreo', dataT);
    //         //                 // response = cargar_ajax.run_server_ajax('plataforma/correo_pendiente', dataC);
    //         //             }
    //         //         }
    //         //     });
    //         // }
    //     }
    // }
*/

jQuery(document).ready(function () {
    grafics.graficaAdmin(this);
    task.Check(this);
});