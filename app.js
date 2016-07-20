$(function () {

    $('#btn-print').click(function () {

        var tbl = {
            margin: [ 0, 10, 0, 20 ],
            headerRows: 1,
            widths: [ '50%', '50%'],

            body: [
              [ 'Inspection Date(s):', 'April 7, 2016' ],
              [ 'Media:', 'CWA 311 SPCC' ],
              [ 'Regulatory Program(s)', 'Underground Injection Control ­ Brine' ],
              [ 'Company Name:', 'Calgary Energy LLC' ],
              [ 'Facility Name:', 'House Lease' ],
              [ 'Facility Physical Location:', 'SW/4 Section 19­T29N­R9E' ],
              [ '(city, state, zip code)', 'Chautauqua, KS' ],
              [ 'Mailing Address:', 'P.O. Box 737' ],
              [ '(city, state, zip code)', 'Collinsville, OK 74021' ],           
              [ 'County/Parish:', 'Osage County' ],
              [ { colSpan: 1, rowSpan: 2, text: 'Facility Contact' }, 'Gary Lewis II (918)798­4511' ],
              [ '', 'N/A' ],
              [ 'FRS Number:', 'N/A' ],
              [ 'Identification/Permit Number:', 'N/A' ],
              [ 'Media Number:', 'N/A' ],
              [ 'NAICS:', '21111' ],
              [ 'SIC:', '1311' ],
              [ { colSpan: 2, rowSpan: 1, text: 'Personnel participating in the inspection:'}, '' ]
            ]
        }

        var docDefinition = {
          header: [
            { text: 'Region 6 Compliance Assurance and Enforcement Division', fontSize: 8, bold: true,  alignment: 'center' },
            { text: 'INSPECTION REPORT', fontSize: 15, bold: true, alignment: 'center', margin: [ 0, 10, 0, 20 ] },
          ],

          footer: {
            columns: [
              'Left part',
              { text: 'Right part', alignment: 'right' }
            ]
          },

          content: [{
            table: tbl
          }]

        };

        pdfMake.createPdf(docDefinition).download();

    })

})

function htmlToPdfMake(elementID) {
    var fullText = "";
    //var x = document.getElementById('htmlContent').elements;
    //var x = $("a").parent(elementID)
    var x = $(elementID).children();
    $.each(x, function(index, value) {
       //console.log(value);
        fullText+=$(this).context.innerText + ",";
        console.log($(this).context.innerText);
    });
    
    var dd = {
	content: [
		fullText
	]
    };
        pdfMake.createPdf(dd).download('optionalName.pdf');
        console.log(dd.content);
    
    //console.log(x);
    
    //var html = $(elementID).html();
    
    //$("#result").text(html);
    
    //var p = $(elementID).html();
    
    //$("#resultPDF").text(p);
}