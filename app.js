$(function () {

    $('#btn-print').click(function () {

        var tbl = {
            margin: [ 0, 10, 0, 20 ],
            headerRows: 1,
            widths: [ '30%', '20%', '*', '20%'],

            body: [
              [ 
                { colSpan: 2, text: 'Inspection Date(s):' }, 
                '',
                { colSpan: 2, text: 'April 7, 2016' },
                ''
              ],
              [
                { colSpan: 2, text: 'Media:' },
                '',
                { colSpan: 2, text: 'CWA 311 SPCC' },
                ''
              ],
              [ 
                { colSpan: 2, text: 'Regulatory Program(s)' },
                '',
                { colSpan: 2, text: 'Underground Injection Control ­ Brine' },
                ''
              ],
              [ 
                { colSpan: 2, text: 'Company Name:' },
                '',
                { colSpan: 2, text: 'Calgary Energy LLC' },
                ''
              ],
              [
                { colSpan: 2, text: 'Facility Name:' },
                '',
                { colSpan: 2, text: 'House Lease' },
                ''
              ],
              [ 
                { colSpan: 2, text: 'Facility Physical Location:' },
                '',
                { colSpan: 2, text: 'SW/4 Section 19­T29N­R9E' },
                ''
              ],
              [ 
                { colSpan: 2, text: '(city, state, zip code)' }, 
                '',
                { colSpan: 2, text: 'Chautauqua, KS' },
                ''
              ],
              [ 
                { colSpan: 2, text: 'Mailing Address:' },
                '',
                { colSpan: 2, text: 'P.O. Box 737' },
                ''
              ],
              [ 
                { colSpan: 2, text: '(city, state, zip code)' }, 
                '',
                { colSpan: 2, text: 'Collinsville, OK 74021' },
                ''
              ],           
              [
                { colSpan: 2, text: 'County/Parish:' },
                '', 
                { colSpan: 2, text: 'Osage County' },
                ''
              ],
              [ 
                { colSpan: 2, rowSpan: 2, text: 'Facility Contact' },
                '',
                { colSpan: 2, text: 'Gary Lewis II (918)798­4511' },
                '',
              ],
              [ 
                { colSpan: 2, text: '' }, 
                '',
                { colSpan: 2, text: 'N/A' },
                ''
              ],
              [ 
                { colSpan: 2, text: 'FRS Number:' },
                '', 
                { colSpan: 2, text: 'N/A' },
                ''
              ],
              [ 
                { colSpan: 2, text: 'Identification/Permit Number:' }, 
                '',
                { colSpan: 2, text: 'N/A' },
                ''
              ],
              [ 
                { colSpan: 2, text: 'Media Number:' }, 
                '',
                { colSpan: 2, text: 'N/A' },
                ''
              ],
              [ 
                { colSpan: 2, text: 'NAICS:' }, 
                '',
                { colSpan: 2, text: '21111' },
                ''
              ],
              [ 
                { colSpan: 2, text: 'SIC:' }, 
                '',
                { colSpan: 2, text: '1311' },
                ''
              ],
              [ 
                { colSpan: 4, rowSpan: 1, text: 'Personnel participating in the inspection:'},
                '',
                '',
                '' 
              ],
              [ 'Kent Sanborn', '6EN­WR', 'EPA Inspector', '918­557­1615' ],
              [ 'N/A', 'N/A', 'N/A', '9187984511' ],
              [ 'N/A', 'N/A', 'N/A', 'N/A' ],
              [ 'N/A', 'N/A', 'N/A', 'N/A' ],
              [ 'N/A', 'N/A', 'N/A', 'N/A' ],
              [ 'N/A', 'N/A', 'N/A', 'N/A' ],
              [ 'N/A', 'N/A', 'N/A', 'N/A' ],
              [ 'N/A', 'N/A', 'N/A', 'N/A' ],
              [ 'N/A', 'N/A', 'N/A', 'N/A' ],
              [ 'N/A', 'N/A', 'N/A', 'N/A' ],
              [ 'N/A', 'N/A', 'N/A', 'N/A' ],
              [ 'N/A', 'N/A', 'N/A', 'N/A' ]
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