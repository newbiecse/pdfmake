$(function () {

    $('#btn-print').click(function () {

        var tbl = {
            headerRows: 1,
            widths: [ '30%', '20%', '20%', '30%'],

            body: [
              [ 
                { colSpan: 1, text: 'Inspection Date(s):' }, 
                { colSpan: 3, text: 'April 7, 2016' },
                '',
                ''
              ],
              [
                { colSpan: 1, text: 'Media:' },
                { colSpan: 3, text: 'CWA 311 SPCC' },
                '',
                ''
              ],
              [ 
                { colSpan: 1, text: 'Regulatory Program(s)' },
                { colSpan: 3, text: 'Underground Injection Control ­ Brine' },
                '',
                ''
              ],
              [ 
                { colSpan: 1, text: 'Company Name:' },
                { colSpan: 3, text: 'Calgary Energy LLC' },
                '',
                ''
              ],
              [
                { colSpan: 1, text: 'Facility Name:' },
                { colSpan: 3, text: 'House Lease' },
                '',
                ''
              ],
              [ 
                { colSpan: 1, text: 'Facility Physical Location:' },
                { colSpan: 3, text: 'SW/4 Section 19­T29N­R9E' },
                '',
                ''
              ],
              [ 
                { colSpan: 1, text: '(city, state, zip code)' }, 
                { colSpan: 3, text: 'Chautauqua, KS' },
                '',
                ''
              ],
              [ 
                { colSpan: 1, text: 'Mailing Address:' },
                { colSpan: 3, text: 'P.O. Box 737' },
                '',
                ''
              ],
              [ 
                { colSpan: 1, text: '(city, state, zip code)' }, 
                { colSpan: 3, text: 'Collinsville, OK 74021' },
                '',
                ''
              ],           
              [
                { colSpan: 1, text: 'County/Parish:' },
                { colSpan: 3, text: 'Osage County' },
                '',
                ''
              ],
              [ 
                { colSpan: 1, rowSpan: 2, text: 'Facility Contact' },
                { colSpan: 1, text: 'N/A' },
                { colSpan: 2, text: 'N/A' },
                ''
              ],
              [ 
                '',
                { colSpan: 3, text: 'N/A' },
                '',
                ''
              ],
              [ 
                { text: 'Facility Representatives:', rowSpan: 4 },
                { text: 'N/A' },
                { text: 'N/A' },
                { text: 'N/A' }              
              ],
              [ 
                '',
                { text: 'N/A' },
                { text: 'N/A' },
                { text: 'N/A' }              
              ],
              [ 
                '',
                { text: 'N/A' },
                { text: 'N/A' },
                { text: 'N/A' }              
              ],
              [ 
                '',
                { text: 'N/A' },
                { text: 'N/A' },
                { text: 'N/A' }              
              ],
              [ 
                { text: 'EPA Inspectors:', rowSpan: 3 },
                { text: 'Kent Sanborn' },
                { text: '6EN-WR' },
                { text: '918-557-1615' }              
              ],
              [ 
                '',
                { text: 'N/A' },
                { text: 'N/A' },
                { text: 'N/A' }              
              ],
              [ 
                '',
                { text: 'N/A' },
                { text: 'N/A' },
                { text: 'N/A' }              
              ],
              [ 
                { text: 'State Inspector(s):', rowSpan: 2 },
                { text: 'N/A' },
                { text: 'N/A' },
                { text: 'N/A' }              
              ],
              [ 
                '',
                { text: 'N/A' },
                { text: 'N/A' },
                { text: 'N/A' }              
              ],
              [ 
                { text: 'Other Inspector(s):', rowSpan: 2 },
                { text: 'N/A' },
                { text: 'N/A' },
                { text: 'N/A' }              
              ],
              [ 
                '',
                { text: 'N/A' },
                { text: 'N/A' },
                { text: 'N/A' }              
              ]              
            ]
        }

        var docDefinition = {
          header: [
            { text: 'Region 6 Compliance Assurance and Enforcement Division', fontSize: 8, bold: true,  alignment: 'center' },
            { text: 'INSPECTION REPORT', fontSize: 15, bold: true, alignment: 'center', margin: [ 0, 10, 0, 20 ] }
          ],

          footer: {
            columns: [
              'Left part',
              { text: 'Right part', alignment: 'right' }
            ]
          },

          content: [
            { table: tbl, margin: [ 0, 30, 0, 20 ], fontSize: 8 }
          ]

        };

        pdfMake.createPdf(docDefinition).download('Public Inspection Report_Access.pdf');

    })

})