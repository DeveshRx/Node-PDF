# Node-PDF 
## Create PDF file from HTML
[![Node version](https://img.shields.io/badge/Version-1.0-blue)](https://www.npmjs.com/package/@deveshrx/node-pdf)
[![Node version](https://img.shields.io/badge/NodeJS%20Version-14+-green)](https://www.npmjs.com/package/@deveshrx/node-pdf)
[![Node version](https://img.shields.io/badge/Developed%20by-Devesh%20Chaudhari-blueviolet)](https://github.com/DeveshRx)

Node-PDF can convert html code into pdf file. Node-PDF is based on puppeteer to render html code and create pdf file.

### Install
```javascript
npm i @deveshrx/node-pdf
```

### Usage

` nodepdf.CreatePDF(<HTML> , <FileName.pdf>, <FolderName>); `

### Example
```javascript
var nodepdf = require("@deveshrx/node-pdf");

async function createPDF(){

    await nodepdf.CreatePDF("<html><body>Hello PDF !!</body></html>", "file.pdf", "my-folder");

}
```
