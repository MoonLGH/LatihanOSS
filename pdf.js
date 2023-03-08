const fs = require('fs');
const { path } = require('pdfkit');
const PDFDocument = require('pdfkit');



const paths = [
];

for (let i = 1; i < 41; i++) {
  paths.push(`./TryOut/Soal${i}..png`)
  console.log(paths)  
}

const doc = new PDFDocument();
const PAGE_WIDTH = doc.page.width;
const PAGE_HEIGHT = doc.page.height;
const IMAGE_WIDTH = PAGE_WIDTH;
const IMAGE_HEIGHT = PAGE_HEIGHT / 3;
const IMAGE_PADDING = 20;

// Keep track of the current image position on the page
let x = 0;
let y = 0;

// Loop through each image path and add it to the PDF document
for (let path of paths) {
  // Load the image from file
  const image = doc.openImage(path);

  // Add the image to the current page at the current position
  doc.image(image, x, y, { width: IMAGE_WIDTH, height: IMAGE_HEIGHT });

  // Move to the next position
  x += IMAGE_WIDTH + IMAGE_PADDING;

  // If we've reached the end of the page, start a new row
  if (x > PAGE_WIDTH - IMAGE_WIDTH) {
    x = 0;
    y += IMAGE_HEIGHT + IMAGE_PADDING;
  }

  // If we've reached the end of the page, start a new page
  if (y > PAGE_HEIGHT - IMAGE_HEIGHT) {
    doc.addPage();
    x = 0;
    y = 0;
  }
}

// Save the PDF document to file
doc.pipe(fs.createWriteStream('output.pdf'));
doc.end();
