# Node-PDF 
## Create PDF file from HTML
[![Node version](https://img.shields.io/badge/Version-1.0-blue)](https://www.npmjs.com/package/@deveshrx/node-pdf)
[![Node version](https://img.shields.io/badge/NodeJS%20Version-14+-green)](https://www.npmjs.com/package/@deveshrx/node-pdf)
[![Node version](https://img.shields.io/badge/Developed%20by-Devesh%20Chaudhari-blueviolet)](https://github.com/DeveshRx)

Node-PDF can convert html code into pdf file. Node-PDF is based on puppeteer to render html code and create pdf file.

### Install
NodeJS Version 14 & above is supported.
1) Install [NodeJS from Official Website ](https://nodejs.org/en/)

2) Install `node-pdf` using npm package manager:
```javascript
npm i @deveshrx/node-pdf
```

### Usage

` nodepdf.CreatePDF(<HTML> , <FileName.pdf>, <FolderName>); `<br><br>
`<HTML>` place your html code into string variable. static html page is recommended for best performance. <br>
`<FolderName>` can be `null` if you wish to save pdf file in parent directory.

### Example
```javascript
var nodepdf = require("@deveshrx/node-pdf");

async function createPDF(){

    var html="<html><body>Hello PDF !!</body></html>";
    var pdf_file_name="document.pdf";
    var folder="my_docs"; // or var folder=null;

    await nodepdf.CreatePDF(html, pdf_file_name, folder);

}
```
