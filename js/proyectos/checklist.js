// variable global de validacion
var valCheck = false;
// variables globales para la fecha actual
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0');
var yyyy = today.getFullYear();
today = yyyy + '-' + mm + '-' + dd;
todayPrint = dd + '-' + mm + '-' + yyyy;

//Variables para archivo done
var arreglo_done = new Array();
var frmData_done = new FormData();
var file_Files_done = " ";

// base de la url para los archivos
var baseURL = $('#baseURL').html();

var sourcing = {
    // cambiar el estatus y la fecha de la tarea realizada a listo
    addCheck: function () {
        $(document).on('click', '.btnNoCheckS', function (event) {
            event.preventDefault();
            var id_sourcing= $(this).data('id');
            $('#idTask').val(0);
            $('#idSour').val(0);
            $('.txtComentario').val('');
            $("#btnNoCheckS" + id_sourcing + "").addClass('hide-button');
            $("#btnCheckS" + id_sourcing + "").removeClass('hide-button');
            $("#taskNoCheckS" + id_sourcing + "").addClass('hide-button');
            $("#taskCheckS" + id_sourcing + "").removeClass('hide-button');

            $("#nocheckDateS" + id_sourcing + "").addClass('hide-button');
            $("#checkDateS" + id_sourcing + "").removeClass('hide-button');
            $("#checkDateS" + id_sourcing + "").html(todayPrint);
        });
    },

    // devolver los valores de estatus y fecha a tarea sin realizar
    removeCheck: function () {
        $(document).on('click', '.btnCheckS', function (event) {
            event.preventDefault();
            var id = { id_sourcing: $(this).data('id') };

            $("#btnCheckS" + id.id_sourcing + "").addClass('hide-button');
            $("#btnNoCheckS" + id.id_sourcing + "").removeClass('hide-button');
            $("#taskCheckS" + id.id_sourcing + "").addClass('hide-button');
            $("#taskNoCheckS" + id.id_sourcing + "").removeClass('hide-button');

            $("#checkDateS" + id.id_sourcing + "").addClass('hide-button');
            $("#nocheckDateS" + id.id_sourcing + "").removeClass('hide-button');
            $("#collapseTaskS" + id.id_sourcing + "").removeClass('show');
        });
    }
}

var production = {
    addCheck: function () {
        $(document).on('click', '.btnNoCheckP', function (event) {
            event.preventDefault();
            var id_production= $(this).data('id');
            // comprobar si coincide con los id requeridos
            // sino no coicide entones solo poner la tarea lista

            $('#idTask').val(0);
            $('#idProc').val(0);
            $('.txtComentario').val('');
            $("#btnNoCheckP" + id_production + "").addClass('hide-button');
            $("#btnCheckP" + id_production + "").removeClass('hide-button');
            $("#taskNoCheckP" + id_production + "").addClass('hide-button');
            $("#taskCheckP" + id_production + "").removeClass('hide-button');

            $("#noCheckDateP" + id_production + "").addClass('hide-button');
            $("#checkDateP" + id_production + "").removeClass('hide-button');
            $("#checkDateP" + id_production + "").html(todayPrint);
        });
    },

    removeCheck: function () {
        $(document).on('click', '.btnCheckP', function (event) {
            event.preventDefault();
            var id = { id_production: $(this).data('id') };

            $("#btnCheckP" + id.id_production + "").addClass('hide-button');
            $("#btnNoCheckP" + id.id_production + "").removeClass('hide-button');
            $("#taskCheckP" + id.id_production + "").addClass('hide-button');
            $("#taskNoCheckP" + id.id_production + "").removeClass('hide-button');

            $("#checkDateP" + id.id_production + "").addClass('hide-button');
            $("#noCheckDateP" + id.id_production + "").removeClass('hide-button');
            $("#collapseTaskP" + id.id_production + "").removeClass('show');
        });
    }
}

var freight = {
    addCheck: function () {
        $(document).on('click', '.btnNoCheckF', function (event) {
            event.preventDefault();
            var id = { id_freight: $(this).data('id') };

            // comprobar si coincide con los id requeridos
            // sino no coicide entones solo poner la tarea lista
            
            var id_freight = id.id_freight;
            
            $('#idTask').val(0);
            $('#idFrei').val(0);
            $('.txtComentario').val('');
            $("#btnNoCheckF" + id_freight + "").addClass('hide-button');
            $("#btnCheckF" + id_freight + "").removeClass('hide-button');
            $("#taskNoCheckF" + id_freight + "").addClass('hide-button');
            $("#taskCheckF" + id_freight + "").removeClass('hide-button');

            $("#nocheckDateF" + id_freight + "").addClass('hide-button');
            $("#checkDateF" + id_freight + "").removeClass('hide-button');
            $("#checkDateF" + id_freight + "").html(todayPrint);
        });
    },

    removeCheck: function () {
        $(document).on('click', '.btnCheckF', function (event) {
            event.preventDefault();
            var id = { id_freight: $(this).data('id') };

            $("#btnCheckF" + id.id_freight + "").addClass('hide-button');
            $("#btnNoCheckF" + id.id_freight + "").removeClass('hide-button');
            $("#taskCheckF" + id.id_freight + "").addClass('hide-button');
            $("#taskNoCheckF" + id.id_freight + "").removeClass('hide-button');

            $("#checkDateF" + id.id_freight + "").addClass('hide-button');
            $("#nocheckDateF" + id.id_freight + "").removeClass('hide-button');
            $("#collapseTaskF" + id.id_freight + "").removeClass('show');
        });
    }
}

var customs = {
    addCheck: function () {
        $(document).on('click', '.btnNoCheckC', function (event) {
            event.preventDefault();
            var id_customs = $(this).data('id');
            
            $('#idTask').val(0);
            $('#idCust').val(0);
            $('.txtComentario').val('');
            $("#btnNoCheckC" + id_customs + "").addClass('hide-button');
            $("#btnCheckC" + id_customs + "").removeClass('hide-button');
            $("#taskNoCheckC" + id_customs + "").addClass('hide-button');
            $("#taskCheckC" + id_customs + "").removeClass('hide-button');

            $("#nocheckDateC" + id_customs + "").addClass('hide-button');
            $("#checkDateC" + id_customs + "").removeClass('hide-button');
            $("#checkDateC" + id_customs + "").html(todayPrint);

        });
    },

    removeCheck: function () {
        $(document).on('click', '.btnCheckC', function (event) {
            event.preventDefault();
            var id = { id_customs: $(this).data('id') };
            $("#btnCheckC" + id.id_customs + "").addClass('hide-button');
            $("#btnNoCheckC" + id.id_customs + "").removeClass('hide-button');
            $("#taskCheckC" + id.id_customs + "").addClass('hide-button');
            $("#taskNoCheckC" + id.id_customs + "").removeClass('hide-button');

            $("#checkDateC" + id.id_customs + "").addClass('hide-button');
            $("#nocheckDateC" + id.id_customs + "").removeClass('hide-button');
            $("#collapseTaskC" + id.id_customs + "").removeClass('show');
        });
    }
}

var quoted = {
    addCheck: function () {
        $(document).on('click', '.btnNoCheckQ', function (event) {
            event.preventDefault();
            var id = { id_quoted: $(this).data('id') };
            $('#idTask').val(6);
            $('#idQuo').val(id.id_quoted);

            $("#btnNoCheckQ" + id.id_quoted + "").addClass('hide-button');
            $("#btnCheckQ" + id.id_quoted + "").removeClass('hide-button');

            $("#nocheckDateQ" + id.id_quoted + "").addClass('hide-button');
            $("#checkDateQ" + id.id_quoted + "").removeClass('hide-button');
            $("#checkDateQ" + id.id_quoted + "").html(todayPrint);
        });
    },

    removeCheck: function () {
        $(document).on('click', '.btnCheckQ', function (event) {
            event.preventDefault();
            var id = { id_quoted: $(this).data('id') };
            $("#btnCheckQ" + id.id_quoted + "").addClass('hide-button');
            $("#btnNoCheckQ" + id.id_quoted + "").removeClass('hide-button');

            $("#checkDateQ" + id.id_quoted + "").addClass('hide-button');
            $("#nocheckDateQ" + id.id_quoted + "").removeClass('hide-button');
            $("#collapseTaskQ" + id.id_quoted + "").removeClass('show');
        });
    }
}

var done = {
    addCheck: function () {
        $(document).on('click', '.btnNoCheckD', function (event) {
            event.preventDefault();
            var id = { id_done: $(this).data('id') };
            var id_done = id.id_done;
            $('#idDone_d').val(id_done);
            $('#idDone_d').val();
            $('#lblDone').html('');
            $("#btnNoCheckD" + id_done + "").addClass('hide-button');
            $("#btnCheckD" + id_done + "").removeClass('hide-button');
            $("#taskNoCheckD" + id_done + "").addClass('hide-button');
            $("#taskCheckD" + id_done + "").removeClass('hide-button');

            $("#nocheckDateD" + id_done + "").addClass('hide-button');
            $("#checkDateD" + id_done + "").removeClass('hide-button');
            $("#checkDateD" + id_done + "").html(todayPrint);
        });
    },

    removeCheck: function () {
        $(document).on('click', '.btnCheckD', function (event) {
            event.preventDefault();
            var id = { id_done: $(this).data('id') };

            $("#btnCheckD" + id.id_done + "").addClass('hide-button');
            $("#btnNoCheckD" + id.id_done + "").removeClass('hide-button');
            $("#taskCheckD" + id.id_done + "").addClass('hide-button');
            $("#taskNoCheckD" + id.id_done + "").removeClass('hide-button');

            $("#checkDateD" + id.id_done + "").addClass('hide-button');
            $("#nocheckDateD" + id.id_done + "").removeClass('hide-button');
            $("#collapseTaskD" + id.id_done + "").removeClass('show');            
            $('#srcPDF').html();
            $('#imgEvidencia').attr('src', '');
        });
    },
}

jQuery(document).ready(function () {
    sourcing.addCheck(this);
    sourcing.removeCheck(this);

    production.addCheck(this);
    production.removeCheck(this);

    freight.addCheck(this);
    freight.removeCheck(this);

    customs.addCheck(this);
    customs.removeCheck(this);

    quoted.addCheck(this);
    quoted.removeCheck(this);

    done.addCheck(this);
    done.removeCheck(this);
    done.getdoc(this);
});