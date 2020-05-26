const fs = require("fs");
const path = require("path");

/* fs.mkdir(path.join(__dirname, "test"), (err) => {
   if (err) {
     throw err;
   }
   console.log("folder created");
 });*/
const filePath = path.join(__dirname, "test", "text.txt");
/*fs.writeFile(filePath, "hello node", (err) => {
  if (err) {
    throw err;
  }
  console.log("file created");
});
fs.appendFile(filePath, "\n hello again", (err) => {
  if (err) {
    throw err;
  }
  console.log("file created");
});*/
fs.readFile(filePath, "utf-8", (err, content) => {
  if (err) {
    throw err;
  }
  console.log(content);
  //   const data = Buffer.from(content);
  //   console.log("Content: ", data.toString());
});
