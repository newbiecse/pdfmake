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
                { colSpan: 2, text: 'N/A' },
                '',
                { colSpan: 1, text: 'N/A' }
              ],
              [ 
                '',
                { colSpan: 3, text: 'N/A' },
                '',
                ''
              ],
              [
                { colSpan: 1, text: 'FRS Number:' },
                { colSpan: 3, text: 'N/A' },
                '',
                ''
              ],
              [
                { colSpan: 1, text: 'Identification/Permit Number:' },
                { colSpan: 3, text: 'N/A' },
                '',
                ''
              ],
              [
                { colSpan: 1, text: 'Media Number:' },
                { colSpan: 3, text: 'N/A' },
                '',
                ''
              ],
              [
                { colSpan: 1, text: 'NAICS:' },
                { colSpan: 3, text: '21111' },
                '',
                ''
              ],
              [
                { colSpan: 1, text: 'SIC:' },
                { colSpan: 3, text: '1311' },
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
              ],
              [ 
                { colSpan: 1, text: 'Title:' },
                { colSpan: 3, text: 'Jet-Star Co. Karl Mertang A lease Wichita Falls Wichita Texas' },
                '',
                ''
              ],
              [ 
                { colSpan: 1, text: 'Author:' },
                { colSpan: 3, text: 'US EPA Region 6 Compliance Assurance and Enforcement Division Dallas TX' },
                '',
                ''
              ],
              [ 
                { colSpan: 1, text: 'Subject:' },
                { colSpan: 3, text: 'Safe Drinking Water Act SDWA' },
                '',
                ''
              ],
              [ 
                { colSpan: 1, text: 'Keywords:' },
                { colSpan: 3, text: 'Underground Injection Control Groundwater Brine Injection Well Oil Gas' },
                '',
                ''
              ],
              [ 
                { colSpan: 1, rowSpan: 2, text: 'EPA Lead Inspector \nSignature/Date' },
                { colSpan: 2, text: ' ' },
                { colSpan: 1, text: ' ' },
                ''
              ],
              [ 
                '',
                { colSpan: 2, text: 'Kent Sanborn' },
                '',
                { colSpan: 1, text: 'Date' }
              ],
              [ 
                { colSpan: 1, rowSpan: 2, text: 'Supervisor \nSignature/Date' },
                { colSpan: 2, text: ' ' },
                { colSpan: 1, text: ' ' },
                ''
              ],
              [ 
                '',
                { colSpan: 2, text: 'Willie Lane Jr., Chief, Water Resources Section(6EN-WR)' },
                '',
                { colSpan: 1, text: 'Date' }
              ]
            ]
        }

        var docDefinition = {
          header: [
            { text: 'Region 6 Compliance Assurance and Enforcement Division', fontSize: 8, bold: true, alignment: 'center', margin: [ 0, 30, 0, 10 ] }            
          ],

          footer: {
            columns: [
              'Left part',
              { text: 'Right part', alignment: 'right' }
            ]
          },

          content: [
            { text: 'INSPECTION REPORT', fontSize: 15, bold: true, alignment: 'center', margin: [ 0, 10, 0, 10 ] },
            { table: tbl, margin: [ 0, 20, 0, 20 ], fontSize: 8 }
          ]

        };

        pdfMake.createPdf(docDefinition).download('Public Inspection Report_Access.pdf');

    })

})