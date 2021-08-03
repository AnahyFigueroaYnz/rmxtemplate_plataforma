$(document).ready(function () {
    jQuery.noConflict();
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
            confirmButton: "btn btn-success",
            cancelButton: "btn btn-danger",
        },
        buttonsStyling: false,
    });

    


    $(document).on("click", ".eliminar_proyecto", function (event) {
        event.preventDefault()

        // var table1 = $('#example').DataTable();
        // var id = $(this).data("id");
        // var row = 'tr_'+ id +'';

        swalWithBootstrapButtons
            .fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonText: "Yes, delete it!",
                cancelButtonText: "No, cancel!",
                reverseButtons: true,
            })
            .then((result) => {
                if (result.isConfirmed) {
                    swalWithBootstrapButtons.fire("Deleted!", "Your file has been deleted.", "success")
                    // row.remove();
                    // var r = table1.row(row);
                    // table.row($('#' + row + '')).remove().draw( false );
                    // table.row(row).remove().draw();
                } else if (
                    result.dismiss === Swal.DismissReason.cancel
                ) {
                    Swal.DismissReason.cancel;
                }
            })
    });

    // var table = $('#example').DataTable({
    //     "data": testdata.data,
    //     select: "single",
    //     "columns": [{
    //             "className": 'details-control',
    //             "orderable": false,
    //             "data": null,
    //             "defaultContent": '',
    //             "render": function () {
    //                 return '<i class="fa fa-plus-square"></i>';
    //             },
    //             width: "80%"
    //         },
    //         {
    //             "data": "name"
    //         },
    //         {
    //             "data": "position"
    //         },
    //         {
    //             "data": "office"
    //         },
    //         {
    //             "data": "salary"
    //         }
    //     ],
    //     "order": [
    //         [1, 'asc']
    //     ]
    // });

//     // Add event listener for opening and closing details
//     $('#example tbody').on('click', 'td.details-control', function () {
//         var tr = $('.details-control').closest('tr');
//         var tdi = tr.find("i.fa");
//         var row = table.row(tr);

//         if (row.child.isShown()) {
//             // This row is already open - close it
//             row.child.hide();
//             tr.removeClass('shown');
//             tdi.first().removeClass('fa-minus-square');
//             tdi.first().addClass('fa-plus-square');
//         } else {
//             // Open this row
//             row.child(format(row.data())).show();
//             tr.addClass('shown');
//             tdi.first().removeClass('fa-plus-square');
//             tdi.first().addClass('fa-minus-square');
//         }
//     });

//     table.on("user-select", function (e, dt, type, cell, originalEvent) {
//         if ($(cell.node()).hasClass("details-control")) {
//             e.preventDefault();
//         }
//     });




//     function format ( d ) {
//         return 'Full name: '+d.first_name+' '+d.last_name+'<br>'+
//             'Salary: '+d.salary+'<br>'+
//             'The child row can contain any data you wish, including links, images, inner tables etc.';
//     }
     
//     $(document).ready(function() {
//         var dt = $('#example').DataTable( {
//             "processing": true,
//             "serverSide": true,
//             "ajax": "scripts/ids-objects.php",
//             "columns": [
//                 {
//                     "class":          "details-control",
//                     "orderable":      false,
//                     "data":           null,
//                     "defaultContent": ""
//                 },
//                 { "data": "first_name" },
//                 { "data": "last_name" },
//                 { "data": "position" },
//                 { "data": "office" }
//             ],
//             "order": [[1, 'asc']]
//         } );
     
//         // Array to track the ids of the details displayed rows
//         var detailRows = [];
     
//         $('#example tbody').on( 'click', 'tr td.details-control', function () {
//             var tr = $(this).closest('tr');
//             var row = dt.row( tr );
//             var idx = $.inArray( tr.attr('id'), detailRows );
     
//             if ( row.child.isShown() ) {
//                 tr.removeClass( 'details' );
//                 row.child.hide();
     
//                 // Remove from the 'open' array
//                 detailRows.splice( idx, 1 );
//             }
//             else {
//                 tr.addClass( 'details' );
//                 row.child( format( row.data() ) ).show();
     
//                 // Add to the 'open' array
//                 if ( idx === -1 ) {
//                     detailRows.push( tr.attr('id') );
//                 }
//             }
//         } );
     
//         // On each draw, loop over the `detailRows` array and show any child rows
//         dt.on( 'draw', function () {
//             $.each( detailRows, function ( i, id ) {
//                 $('#'+id+' td.details-control').trigger( 'click' );
//             } );
//         } );
//     } );
});

// function format(d) {

//     // `d` is the original data object for the row
//     return '<table cellpadding="5" cellspacing="0" border="0" style="padding-left:50px;">' +
//         '<tr>' +
//         '<td>Full name:</td>' +
//         '<td>' + d.name + '</td>' +
//         '</tr>' +
//         '<tr>' +
//         '<td>Extension number:</td>' +
//         '<td>' + d.extn + '</td>' +
//         '</tr>' +
//         '<tr>' +
//         '<td>Extra info:</td>' +
//         '<td>And any further details here (images etc)...</td>' +
//         '</tr>' +
//         '</table>';
// }

// var testdata = {
//     "data": [{
//             "name": "Tiger Nixon",
//             "position": "System Architect",
//             "salary": "$320,800",
//             "start_date": "2011/04/25",
//             "office": "Edinburgh",
//             "extn": "5421"
//         },
//         {
//             "name": "Garrett Winters",
//             "position": "Accountant",
//             "salary": "$170,750",
//             "start_date": "2011/07/25",
//             "office": "Tokyo",
//             "extn": "8422"
//         },
//         {
//             "name": "Ashton Cox",
//             "position": "Junior Technical Author",
//             "salary": "$86,000",
//             "start_date": "2009/01/12",
//             "office": "San Francisco",
//             "extn": "1562"
//         },
//         {
//             "name": "Cedric Kelly",
//             "position": "Senior Javascript Developer",
//             "salary": "$433,060",
//             "start_date": "2012/03/29",
//             "office": "Edinburgh",
//             "extn": "6224"
//         },
//         {
//             "name": "Airi Satou",
//             "position": "Accountant",
//             "salary": "$162,700",
//             "start_date": "2008/11/28",
//             "office": "Tokyo",
//             "extn": "5407"
//         },
//         {
//             "name": "Brielle Williamson",
//             "position": "Integration Specialist",
//             "salary": "$372,000",
//             "start_date": "2012/12/02",
//             "office": "New York",
//             "extn": "4804"
//         }
//     ]
// };