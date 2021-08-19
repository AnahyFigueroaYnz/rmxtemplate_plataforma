const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
        cancelButton: "btn btn-outline-danger btn-nuevo padding-buttons",
        confirmButton: "btn btn-outline-success btn-nuevo margin-buttons",
    },
    buttonsStyling: false,
});

var Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 2000,
});