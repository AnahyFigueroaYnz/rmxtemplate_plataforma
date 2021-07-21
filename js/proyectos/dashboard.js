// variable global de validacion
var valTask = false;

// variables globales para la fecha actual
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0');
var yyyy = today.getFullYear();
today = yyyy + '-' + mm + '-' + dd;
todayPrint = dd + '-' + mm + '-' + yyyy;

const swalDeletetask = Swal.mixin({
    customClass: {
        cancelButton: 'btn btn-outline-secondary btn-nuevo padding-buttons',
        confirmButton: 'btn btn-outline-primary btn-nuevo margin-buttons'
    },
    buttonsStyling: false
});
var task_dashGlobales =
    [
        {
            id_task_dash: 1,
            task_dash: "Hola",
            fecha_limite: "2021-07-22",
        },
        {
            id_task_dash: 2,
            task_dash: "Adios",
            fecha_limite: "2021-07-22",
        },
    ];

// validar comentario de la tarea lista
function validarPendiente() {
    var valPendiente = $('#txtTask').val();
    var valFecha = $('#txtfechaLimite').val();
        
    if (valPendiente != '') {
        document.getElementById('val_txtTask').style.display = 'none';
    } else if (valPendiente == '') {
        document.getElementById('val_txtTask').style.display = '';
    }
    if (valFecha == undefined) {
        document.getElementById('val_txtfechaLimite').style.display = '';
    } else if (valFecha != undefined) {
        document.getElementById('val_txtfechaLimite').style.display = 'none';
    }

    if (valPendiente != '' && valFecha != "") {
        valTask = true;
    } else {
        valTask = false;
    }
}

var grafics = {
    graficaAdmin: function () {
        var sourcingAd = 10;
        var cotizadosAd = 4;
        var produccionAd = 15;
        var puerto_salidaAd = 5;
        var puerto_llegadaAd = 5;
        var concluidoAd = 10;

        Chart.defaults.global.defaultFontSize = 18;
        
        var donutAdmin = document.getElementById("donutAdmin");
        if (donutAdmin != null) {
            var chartAdmin = new Chart(donutAdmin, {
                type: 'doughnut',
                data: {
                    labels: [
                        "Sourcing",
                        "Cotizacion aceptada",
                        "En proceso",
                        "En puerto de salida",
                        "En puerto de llegada",
                        "Proyecto concluido"
                    ],
                    datasets: [
                        {
                            data: [
                                sourcingAd,
                                cotizadosAd,
                                produccionAd,
                                puerto_salidaAd,
                                puerto_llegadaAd,
                                concluidoAd
                            ],
                            backgroundColor: ['#d2d6de', '#23bb52', '#007bff', '#6c757d', '#7800b6', '#008f39'],
                        }
                    ]
                },
                options: {
                    title: {
                        display: false,
                        text: 'Chart.js Doughnut Chart'
                    },
                    maintainAspectRatio: false,
                    responsive: true,
                    rotation: -Math.PI,
                    cutoutPercentage: 30,
                    circumference: Math.PI,
                    legend: {
                        position: 'bottom'
                    },
                }
            });
        }
    },
    graficaAsesor: function () {
        var sourcingAs = 5;
        var cotizadosAs = 3;
        var produccionAs = 3;
        var puerto_salidaAs = 2;
        var puerto_llegadaAs = 2;
        var concluidoAs=1;

        Chart.defaults.global.defaultFontSize = 18;

        var donutAsesor = document.getElementById("donutAsesor");
        if (donutAsesor != null) {
            var charAsesor = new Chart(donutAsesor, {
                type: 'doughnut',
                data: {
                    labels: [
                        "Sourcing",
                        "Cotizacion aceptada",
                        "En proceso",
                        "En puerto de salida",
                        "En puerto de llegada",
                        "Proyecto concluido"
                    ],
                    datasets: [
                        {
                            data: [
                                sourcingAs,
                                cotizadosAs,
                                produccionAs,
                                puerto_salidaAs,
                                puerto_llegadaAs,
                                concluidoAs
                            ],
                            backgroundColor: ['#d2d6de', '#23bb52', '#007bff', '#6c757d', '#7800b6', '#008f39'],
                        }
                    ]
                },
                options: {
                    title: {
                        display: false,
                        text: 'Chart.js Doughnut Chart'
                    },
                    maintainAspectRatio: false,
                    responsive: true,
                    rotation: -Math.PI,
                    cutoutPercentage: 30,
                    circumference: Math.PI,
                    legend: {
                        position: 'bottom'
                    },
                }
            });
        }
    },
    graficaCliente: function () {
        var sourcingCl = 5;
        var cotizadosCl = 5;
        var produccionCl = 3;
        var puerto_salidaCl = 1;
        var puerto_llegadaCl = 2;
        var concluidoCl = 1;
        
        Chart.defaults.global.defaultFontSize = 18;

        var donutCliente = $('#donutCliente').get(0);
        if (donutCliente != null) {
            var charCliente = new Chart(donutCliente, {
                type: 'doughnut',
                data: {
                    labels: [
                        "Sourcing",
                        "Cotizacion aceptada",
                        "En proceso",
                        "En puerto de salida",
                        "En puerto de llegada",
                        "Proyecto concluido"
                    ],
                    datasets: [
                        {
                            data: [
                                sourcingCl,
                                cotizadosCl,
                                produccionCl,
                                puerto_salidaCl,
                                puerto_llegadaCl,
                                concluidoCl
                            ],
                            backgroundColor: ['#d2d6de', '#23bb52', '#007bff', '#6c757d', '#7800b6', '#008f39'],
                        }
                    ]
                },
                options: {
                    title: {
                        display: false,
                        text: 'Chart.js Doughnut Chart'
                    },
                    maintainAspectRatio: false,
                    responsive: true,
                    rotation: -Math.PI,
                    cutoutPercentage: 30,
                    circumference: Math.PI,
                    legend: {
                        position: 'bottom'
                    },
                }
            });
        }
    },
}

var task = {
    addCheck: function(){
        $(document).on('click', '.btnNoCheck', function(event) {
            event.preventDefault();
            jQuery.noConflict();

            var id = {id_task_dash: $(this).data('id')};
            var id_task_dash = id.id_task_dash;

            var data = {
                id_task_dash: id_task_dash,
                estatus: 1,
                fecha_cambio: today
            }
            response = true;
            if (response == 'false') {
                title = "Error!";
                icon = "error";
                mensaje = "No se puede terminar esta tarea";
            } else {
                icon = "success";
                title = "Correcto";
                mensaje = "Se terminó la tarea correctamente";
            }
            swal.fire({
                title: title,
                text: mensaje,
                icon: icon,
                timer: 2000,
                showConfirmButton: false,
                timerProgressBar: true,
            }).then((result) => {
                jQuery(function ($) {
                    $("#modalComentarios").modal('hide');
                });
                $('#idTask').val(0);
                $('#idCust').val(0);
                $('.txtComentario').val('');
                $("#btnNoCheck"+id_task_dash+"").addClass('hide-button');
                $("#btnCheck"+id_task_dash+"").removeClass('hide-button');
                $("#taskNoCheck"+id_task_dash+"").addClass('hide-button');
                $("#taskCheck"+id_task_dash+"").removeClass('hide-button');
                $('#limite'+id_task_dash+'').addClass('hide-button');
                $("#nocheckDate"+id_task_dash+"").addClass('hide-button');
                $("#checkDate"+id_task_dash+"").removeClass('hide-button');
                $("#checkDate"+id_task_dash+"").html(todayPrint);
            });
        });
    },

    removeCheck: function(){
        $(document).on('click', '.btnCheck', function(event) {
            event.preventDefault();

            var id = {id_task_dash: $(this).data('id')};
            var id_task_dash = id.id_task_dash;

            var data = {
                id_task_dash: id_task_dash,
                estatus: 0,
                fecha_cambio: 0000-00-00
            }
            $("#btnCheck"+id_task_dash+"").addClass('hide-button');
            $("#btnNoCheck"+id_task_dash+"").removeClass('hide-button');
            $("#taskCheck"+id_task_dash+"").addClass('hide-button');
            $("#taskNoCheck"+id_task_dash+"").removeClass('hide-button');
            $('#limite'+id_task_dash+'').removeClass('hide-button');
            $("#checkDate"+id_task_dash+"").addClass('hide-button');
            $("#nocheckDate"+id_task_dash+"").removeClass('hide-button');
        });
    }
}

var pendientes = {
    add_edit: function(){
        $(document).on('click', '#btnAgregar', function(event) {
            event.preventDefault();
            jQuery.noConflict();
            var id_task_dash = $('#txtIdTask').val();

            validarPendiente();

            if (valTask == true) {
                if (id_task_dash == '') {
                    var data = {
                        id_usuario: $('#txtIdUsuario').val(),
                        task_dash: $('#txtTask').val(),
                        estatus: 0,
                        fecha_limite: $('#txtfechaLimite').val()
                    }
                    
                    swal.fire({
                        title: "Correcto",
                        text: "Se guardo la tarea correctamente",
                        icon: "success",
                        timer: 2000,
                        showConfirmButton: false,
                        timerProgressBar: true,
                    }).then((result) => {
                        $('#txtIdTask').val();
                        jQuery(function ($) {
                            $('#modalTask').modal('hide');
                        });
                        location.reload();
                    });
                } else if (id_task_dash != '') {
                    var data = {
                        id_task_dash: id_task_dash,
                        task_dash: $('#txtTask').val(),
                        estatus: 0,
                        fecha_limite: $('#txtfechaLimite').val()
                    }
                    
                    swal.fire({
                        title: "Correcto",
                        text: "Se guardo la tarea correctamente",
                        icon: "success",
                        timer: 2000,
                        showConfirmButton: false,
                        timerProgressBar: true,
                    }).then((result) => {
                        $('#txtIdTask').val();
                        jQuery(function ($) {
                            $('#modalTask').modal('hide');
                        });
                        location.reload();
                    });
                }
            }            
        });

        $(document).on('click', '#btnAddTask', function(event) {
            event.preventDefault();
            jQuery.noConflict();

            jQuery(function ($) {
                $('#modalTask').modal();
            });
            $('#titleModal').html('Nuevo pendiente');
        }); 

        $(document).on('click', '.editTask', function(event) {
            event.preventDefault();
            jQuery.noConflict();

            var id = {id_task_dash: $(this).data('id')};
            var id_task_dash = id.id_task_dash;
            var data = {
                id_task_dash: id_task_dash
            }

            jQuery(function ($) {
                $('#modalTask').modal();
            });
            
            $('#titleModal').html('Editar pendiente');
            $('#txtIdTask').val(id_task_dash);
            
            for (var i = 0; i < task_dashGlobales.length; i++) {
                if (id_task_dash == task_dashGlobales[i].id_task_dash) {
                    $('#txtTask').val(task_dashGlobales[i].task_dash);
                    if (task_dashGlobales[i].fecha_limite === null || task_dashGlobales[i].fecha_limite === 0000-00-00 || task_dashGlobales[i].fecha_limite === '') {
                        $('#txtfechaLimite').val();
                    } else {
                        $('#txtfechaLimite').val(task_dashGlobales[i].fecha_limite);
                    }
                }
            }
        });

        $(document).on('click', '.deleteTask', function(event) {
            event.preventDefault();

            var id = {id_task_dash: $(this).data('id')};
            var id_task_dash = id.id_task_dash;
            var data = {
                id_task_dash: id_task_dash,
                activo: 0
            }
            swalDeletetask.fire({
                title: "¿Está seguro de eliminar esté pendiente?",
                text: "¡No podrás revertir esto, la información se perderá!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonText: "Si, eliminar!",
                reverseButtons: true
            }).then(result => {
                if (result.value) {
                    location.reload();
                }
            });
        });
    },
}

jQuery(document).ready(function () {
    grafics.graficaAdmin(this);
    grafics.graficaAsesor(this);
    grafics.graficaCliente(this);
    task.addCheck(this);
    task.removeCheck(this);
    pendientes.add_edit(this);
});