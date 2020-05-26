const path = require("path");
console.log("filename: ", path.basename(__filename));
console.log("dirname: ", path.dirname(__filename));
console.log("extname: ", path.extname(__filename));
console.log("Parse: ", path.parse(__filename));
console.log(path.join(__dirname, "server", "index.html"));
