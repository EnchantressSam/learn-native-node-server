const os = require("os");

console.log("os: ", os.platform());
console.log("processor architecture: ", os.arch());
console.log("processor info: ", os.cpus());
console.log("free memory : ", os.freemem());
console.log("total memory : ", os.totalmem());
console.log("home dir : ", os.homedir());
console.log("up time : ", os.uptime());
