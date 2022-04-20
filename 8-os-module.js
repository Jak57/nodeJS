const os = require('os')

// info about current user
const user = os.userInfo();
console.log(user);

// method returns the system uptime in seconds
console.log(`system uptime is ${os.uptime()} seconds`)

// operating system information
const currentOS = {
    name: os.type(),
    release: os.release(),
    usedMem: os.totalmem(),
    freeMem: os.freemem()
};

console.log(currentOS);