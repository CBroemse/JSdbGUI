               var kaba = new Object(obJ0); 
	       var akab = ((kaba.flist1).split(","));
	       var out1 =  (akab[1]).toString();
               var data = [
    
    ['Example #1 (looking for particular words in a sentence)', '', '', '', '', '', ''],
    ['Text', 'green', 'red', 'blue', 'green', 'pink', 'gray'],
    ['Yellow dog on green grass', "=IF(ISNUMBER(SEARCH(B2, A3)), B2, '')", "=IF(ISNUMBER(SEARCH(C2, A3)), C2, '')", "=IF(ISNUMBER(SEARCH(D2, A3)), D2, '')", "=IF(ISNUMBER(SEARCH(E2, A3)), E2, '')", "=IF(ISNUMBER(SEARCH(F2, A3)), F2, '')", "=IF(ISNUMBER(SEARCH(G2, A3)), G2, '')"],
    ['Gray sweater with blue stripes', "=IF(ISNUMBER(SEARCH(B2, A4)), B2, '')", "=IF(ISNUMBER(SEARCH(C2, A4)), C2, '')", "=IF(ISNUMBER(SEARCH(D2, A4)), D2, '')", "=IF(ISNUMBER(SEARCH(E2, A4)), E2, '')", "=IF(ISNUMBER(SEARCH(F2, A4)), F2, '')", "=IF(ISNUMBER(SEARCH(G2, A4)), G2, '')"],
    ['A red sun on a pink horizon', "=IF(ISNUMBER(SEARCH(B2, A5)), B2, '')", "=IF(ISNUMBER(SEARCH(C2, A5)), C2, '')", "=IF(ISNUMBER(SEARCH(D2, A5)), D2, '')", "=IF(ISNUMBER(SEARCH(E2, A5)), E2, '')", "=IF(ISNUMBER(SEARCH(F2, A5)), F2, '')", "=IF(ISNUMBER(SEARCH(G2, A5)), G2, '')"],
    ['Blue neon signs everywhere', "=IF(ISNUMBER(SEARCH(B2, A6)), B2, '')", "=IF(ISNUMBER(SEARCH(C2, A6)), C2, '')", "=IF(ISNUMBER(SEARCH(D2, A6)), D2, '')", "=IF(ISNUMBER(SEARCH(E2, A6)), E2, '')", "=IF(ISNUMBER(SEARCH(F2, A6)), F2, '')", "=IF(ISNUMBER(SEARCH(G2, A6)), G2, '')"],
    ['Waves of blue and green', "=IF(ISNUMBER(SEARCH(B2, A7)), B2, '')", "=IF(ISNUMBER(SEARCH(C2, A7)), C2, '')", "=IF(ISNUMBER(SEARCH(D2, A7)), D2, '')", "=IF(ISNUMBER(SEARCH(E2, A7)), E2, '')", "=IF(ISNUMBER(SEARCH(F2, A7)), F2, '')", "=IF(ISNUMBER(SEARCH(G2, A7)), G2, '')"],
    ['Hot pink socks and gray socks', "=IF(ISNUMBER(SEARCH(B2, A8)), B2, '')", "=IF(ISNUMBER(SEARCH(C2, A8)), C2, '')", "=IF(ISNUMBER(SEARCH(D2, A8)), D2, '')", "=IF(ISNUMBER(SEARCH(E2, A8)), E2, '')", "=IF(ISNUMBER(SEARCH(F2, A8)), F2, '')", "=IF(ISNUMBER(SEARCH(G2, A8)), G2, '')"],
    ['Deep blue eyes', "=IF(ISNUMBER(SEARCH(B2, A9)), B2, '')", "=IF(ISNUMBER(SEARCH(C2, A9)), C2, '')", "=IF(ISNUMBER(SEARCH(D2, A9)), D2, '')", "=IF(ISNUMBER(SEARCH(E2, A9)), E2, '')", "=IF(ISNUMBER(SEARCH(F2, A9)), F2, '')", "=IF(ISNUMBER(SEARCH(G2, A9)), G2, '')"],
    ['Count of colors', '=COUNTIF(B3:B9, B2)', '=COUNTIF(C3:C9, C2)', '=COUNTIF(D3:D9, D2)', '=COUNTIF(E3:E9, E2)', '=COUNTIF(F3:F9, F2)', '=COUNTIF(G3:G9, G2)', '="SUM: "&SUM(B10:G10)'],
    ['', '', '', '', '', '', ''],
    ['Example #2 (extracting domains from emails)', '', '', '', '', '', ''],
    ['Name', 'Email', 'Email domain', '', '', ''],
    ['Ann Chang', 'achang@gmailtr.com', '=RIGHT(B14, LEN(B14) - FIND(EMAIL_SPLITTER, B14))', '', '', '', ''],
    ['Jan Siuk', 'jan@yahootr.com', '=RIGHT(B15, LEN(B15) - FIND(EMAIL_SPLITTER, B15))', '', '', '', ''],
    ['Ken Siuk', 'ken@gmailtr.com', '=RIGHT(B16, LEN(B16) - FIND(EMAIL_SPLITTER, B16))', '', '', '', ''],
    ['Marcin Kowalski', 'ken@gmailtr.pl', '=RIGHT(B17, LEN(B17) - FIND(EMAIL_SPLITTER, B17))', '', '', '', ''],
  ];
  var example4 = document.getElementById('example4');
  
  var hot4 = new Handsontable(example4, {
    data: data,
    colHeaders: true,
    rowHeaders: true,
    contextMenu: true,
    formulas: {
      variables: {
        EMAIL_SPLITTER: '@',
      }
    },
    mergeCells: [
      {row: 0, col: 0, rowspan: 1, colspan: 8},
      {row: 11, col: 0, rowspan: 1, colspan: 8},
    ],
  });

