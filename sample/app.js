var nodepdf = require("@deveshrx/node-pdf");
var fs = require('fs');

async function createPDF(){

    var html="<html><body>Hello PDF !!</body></html>";
    var pdf_file_name="document.pdf";
    var folder="my_docs"; // or var folder=null;

    await nodepdf.CreatePDF(html, pdf_file_name, folder);

}


async function generatePDF(){

    var html="<html><body>Hello PDF Generated !!</body></html>";
    var pdf_file_name="document.pdf";

    var pdf;
    pdf= await nodepdf.GeneratePDF(html);

    fs.writeFile(pdf_file_name, pdf, function (err) {
        if (err) return console.log(err);
        console.log('PDF Generated');
      });

}

generatePDF();
createPDF();