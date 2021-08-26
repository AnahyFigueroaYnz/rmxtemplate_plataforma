var dd;
var mm;
var yyyy;
var date;
var dtfm;
var frmt;
var liID;
var tabID;
var tabText;
var valFecha;
var todayPrint;
var tabMobil = false;
var winWidth = $(window).width();
var countTask = 0;

function winSize() {
    if (window.innerHeight <= 832) {
        tabMobil = true;
        tabText = $(".responsive-tabs > li a.active").html();
        $("#txtTabDrop").val(tabText);
        $("#tabActive").html(tabText);

        tabID = $("#txtTabDrop").val();
        $("#tab" + tabID + "")
            .parent()
            .removeClass("active");

        $("#liActive").removeClass("hidden");
        $("#liActive").addClass("active");
        $("#tabActive").addClass("active");
    }
    if (window.innerWidth >= 833) {
        tabMobil = false;
        tabText = $(".responsive-tabs > li a.active").html();
        $("#txtTabDrop").val(tabText);
        $("#tabActive").html(tabText);

        tabID = $("#txtTabDrop").val();
        $("#tab" + tabID + "")
            .parent()
            .addClass("active");
        $("#liActive").addClass("hidden");
        $("#liActive").removeClass("active");
        $("#tabActive").removeClass("active");

        $(".responsive-tabs").removeClass("open");
    }
}

function fechaLive() {
    today = new Date();
    dd = String(today.getDate()).padStart(2, "0");
    mm = String(today.getMonth() + 1).padStart(2, "0");
    yyyy = today.getFullYear();
    today = yyyy + "-" + mm + "-" + dd;
    todayPrint = dd + "-" + mm + "-" + yyyy;
}

$(document).ready(function () {
    jQuery.noConflict();
    console.log("Window Width: " + window.innerWidth + "class used: col");
    winSize();
    fechaLive();
    // puerto 2525
    // Email.send({
    //     Host : "smtp.elasticemail.com",
    //     Username : "anahy.figueroa@reachmx.com",
    //     Password : "19A92781D4036E1247C31B7BE19C22E445DB",
    //     To : 'anahy.figueroa@reachmx.com',
    //     From : "anahyfigueroaynz@gmail.com",
    //     Subject : "This is the subject",
    //     Body : "And this is the body"
    // }).then(
    //   message => alert(message)
    // <i class="far fa-calendar-check"></i>
    // );

    window.onresize = function () {
        winSize();
    };

    $("#liActive").click(function () {
        $(".responsive-tabs").toggleClass("open");
    });
    $(".badgeCheck").html(todayPrint);

    $(".lstTask").on("change", function () {
        id = $(this).data("id");
        var clase = $(this).attr("class");
        if (clase == "lstTask") {
            $("#badgetCheck" + id + "").removeClass("hidden");
        } else if (clase == "lstTask done") {
            $("#badgetCheck" + id + "").addClass("hidden");
        }
    });

    $(document).on("change", ".fileClip", function (event) {
        event.preventDefault();
        id = $(this).data("id");

        spClass = ".nameFile" + id;
        spName = $("" + spClass + "").html();

        if (spName == "") {
            inputFile = event.currentTarget;
            fileName = inputFile.files[0].name;

            $(inputFile).parent().find("" + spClass + "").html(fileName);

            $("#fileClip" + id + "").addClass("hidden");
            $("#upFiles" + id + "").removeClass("hidden");
            $("#cancelEx" + id + "").removeClass("hidden");
        }
    });

    $(document).on("click", ".upFiles", function (event) {
        event.preventDefault();
        id = $(this).data("id");

        $("#upFiles" + id + "").addClass("hidden");
        $("#cancelEx" + id + "").addClass("hidden");
        $("#docName" + id + "").addClass("hidden");
        $("#docFile" + id + "").removeClass("hidden");
        $("#trashCan" + id + "").removeClass("hidden");
    });

    $(document).on("click", ".cancelEx", function (event) {
        event.preventDefault();
        id = $(this).data("id");

        $(".nameFile" + id + "").html("");

        $("#fileClip" + id + "").removeClass("hidden");
        $("#upFiles" + id + "").addClass("hidden");
        $("#cancelEx" + id + "").addClass("hidden");
        $("#docName" + id + "").removeClass("hidden");
        $("#docFile" + id + "").addClass("hidden");
        $("#trashCan" + id + "").addClass("hidden");
    });

    $(document).on("click", ".trashCan", function (event) {
        event.preventDefault();
        id = $(this).data("id");

        $(".nameFile" + id + "").html("");

        $("#fileClip" + id + "").removeClass("hidden");
        $("#upFiles" + id + "").addClass("hidden");
        $("#cancelEx" + id + "").addClass("hidden");
        $("#docName" + id + "").removeClass("hidden");
        $("#docFile" + id + "").addClass("hidden");
        $("#trashCan" + id + "").addClass("hidden");
    });

    $(document).on("click", ".docFile", function (event) {
        event.preventDefault();
        id = $(this).data("id");
        
        nameFile = $("#docName" + id + "").html();

        $("#modalDocs").modal();
        $("#titleModalDoc").html(nameFile);
    });

    $(document).on("click", ".btn-extend", function (event) {
        event.preventDefault();

        var clase = $(".card-extend").attr("class");
        if (clase == "card card-extend collapsed-card expanding-card") {
            $("#extendText").html("Ver menos");
            $(".card-extend .card-tools").css("border-bottom", "1px solid #dee2e6");
        } else if (clase == "card card-extend collapsing-card") {
            $("#extendText").html("Ver más");
            $(".card-extend .card-tools").css("border-bottom", "0px");
        }
    });

    $(document).on("click", ".editProyecto", function (event) {
        event.preventDefault();        
        pyFolio = $("#dataFolio").html();
        pyNombre = $("#dataProyecto").html();

        $("#modalProyecto").modal();
        $("#titleModalP").html(pyFolio + "_" + pyNombre);
    });

    $(document).on("click", ".editProyect", function (event) {
        event.preventDefault();        
        pyFolio = $("#dataFolio").html();
        pyNombre = $("#dataProyecto").html();

        $("#modalProyect").modal();
        $("#titleModal").html(pyFolio + "_" + pyNombre);
    });

    $(document).on("click", "#tabProductos", function (event) {
        event.preventDefault();
        $("#txtTabDrop").val("Productos");
        $("#tabActive").html("Productos");

        if (tabMobil == true) {
            $("#liActive").addClass("active");
            $("#tabActive").addClass("active");
            $("#liActive").removeClass("hidden");
            $(this).parent().removeClass("active");
            $(".responsive-tabs").toggleClass("open");
        } else if (tabMobil == false) {
            $("#liActive").removeClass("active");
            $("#tabActive").removeClass("active");
            $("#liActive").addClass("hidden");
            $(this).parent().addClass("active");
            $(".responsive-tabs").removeClass("open");
        }

        $(this).addClass("active");
        $("#tabDocumentos").removeClass("active");
        $("#tabDocumentos").parent().removeClass("active");
        $("#tabCotizacion").removeClass("active");
        $("#tabCotizacion").parent().removeClass("active");
        $("#tabChecklist").removeClass("active");
        $("#tabChecklist").parent().removeClass("active");
    });

    $(document).on("click", ".imgFirst", function (event) {
        event.preventDefault();
        id = $(this).data("id");

        $(".img-carousel").parent().removeClass("active");
        $("#imgCarFirst_" + id + "").addClass("active");
    });
    $(document).on("click", ".imgSecond", function (event) {
        event.preventDefault();
        id = $(this).data("id");

        $(".img-carousel").parent().removeClass("active");
        $("#imgCarSecond_" + id + "").addClass("active");
    });

    $(document).on("click", ".imgThird", function (event) {
        event.preventDefault();
        id = $(this).data("id");

        $(".img-carousel").parent().removeClass("active");
        $("#imgCarThird_" + id + "").addClass("active");
    });

    $(document).on("click", "#tabDocumentos", function (event) {
        event.preventDefault();
        $("#txtTabDrop").val("Documentos");
        $("#tabActive").html("Documentos");

        if (tabMobil == true) {
            $("#liActive").addClass("active");
            $("#tabActive").addClass("active");
            $("#liActive").removeClass("hidden");
            $(this).parent().removeClass("active");
            $(".responsive-tabs").toggleClass("open");
        } else if (tabMobil == false) {
            $("#liActive").removeClass("active");
            $("#tabActive").removeClass("active");
            $("#liActive").addClass("hidden");
            $(this).parent().addClass("active");
            $(".responsive-tabs").removeClass("open");
        }

        $(this).addClass("active");
        $("#tabProductos").removeClass("active");
        $("#tabProductos").parent().removeClass("active");
        $("#tabCotizacion").removeClass("active");
        $("#tabCotizacion").parent().removeClass("active");
        $("#tabChecklist").removeClass("active");
        $("#tabChecklist").parent().removeClass("active");
    });

    $(document).on("click", "#tabCotizacion", function (event) {
        event.preventDefault();
        $("#txtTabDrop").val("Cotizacion");
        $("#tabActive").html("Cotizacion");

        if (tabMobil == true) {
            $("#liActive").addClass("active");
            $("#tabActive").addClass("active");
            $("#liActive").removeClass("hidden");
            $(this).parent().removeClass("active");
            $(".responsive-tabs").toggleClass("open");
        } else if (tabMobil == false) {
            $("#liActive").removeClass("active");
            $("#tabActive").removeClass("active");
            $("#liActive").addClass("hidden");
            $(this).parent().addClass("active");
            $(".responsive-tabs").removeClass("open");
        }

        $(this).addClass("active");
        $("#tabProductos").removeClass("active");
        $("#tabProductos").parent().removeClass("active");
        $("#tabDocumentos").removeClass("active");
        $("#tabDocumentos").parent().removeClass("active");
        $("#tabChecklist").removeClass("active");
        $("#tabChecklist").parent().removeClass("active");
    });

    $(document).on("click", "#tabChecklist", function (event) {
        event.preventDefault();
        $("#txtTabDrop").val("Checklist");
        $("#tabActive").html("Checklist");

        if (tabMobil == true) {
            $("#liActive").addClass("active");
            $("#tabActive").addClass("active");
            $("#liActive").removeClass("hidden");
            $(this).parent().removeClass("active");
            $(".responsive-tabs").toggleClass("open");
        } else if (tabMobil == false) {
            $("#liActive").removeClass("active");
            $("#tabActive").removeClass("active");
            $("#liActive").addClass("hidden");
            $(this).parent().addClass("active");
            $(".responsive-tabs").removeClass("open");
        }

        $(this).addClass("active");
        $("#tabProductos").removeClass("active");
        $("#tabProductos").parent().removeClass("active");
        $("#tabDocumentos").removeClass("active");
        $("#tabDocumentos").parent().removeClass("active");
        $("#tabCotizacion").removeClass("active");
        $("#tabCotizacion").parent().removeClass("active");
    });

    // $(document).on("click", "#reload", function (event) {
    //     event.preventDefault();
    //     $(".tabsMenu li a").each(function (index) {
    //         var cl = $(this).attr("id");
    //         var a = $("#"+cl+"").attr("href");
    //         var b = a.split("#").pop();
    //     });
    // });
});
