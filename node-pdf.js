/**
 * Author: Devesh Chaudhari
 *  
 */

'use strict';

const puppeteer = require('puppeteer')
var fs = require('fs');

/***
 *  html = insert HTML code
 *  filename = add a name to newely generated pdf file Example: document.pdf 
 *  folder= name of folder in which you want to save pdf file
 */

exports.CreatePDF = async function (html, filename, folder) {

  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  if (!fs.existsSync(folder)) {
    await fs.mkdirSync(folder);
  }

  var filepath;
  if (folder != null) {
    filepath = folder + "/" + filename;
  } else {
    filepath = filename;
  }


  //await page.goto('views/email.html', { waitUntil: 'networkidle0' });
  //var contentHtml = fs.readFileSync('views/email.html', 'utf8');
  //await page.setContent(contentHtml, { waitUntil: 'networkidle0' });
  await page.goto(`data:text/html,${html}`, { waitUntil: 'networkidle0' });
  const pdf = await page.pdf({ format: 'A4' });
  await browser.close();

  fs.writeFile(filepath, pdf, function (err) {
    if (err) return console.log(err);
    console.log('PDF Generated');
  });

}
