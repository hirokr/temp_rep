const os = require('os')

const user = os.userInfo()

// console.log(user )


// System uptime 
// console.log(`The system uptime ${os.uptime()}` )

const currentOS = {
    name : os.type(),
    release : os.release(),
    totalMem : os.totalmem(),
    freemem : os.freemem(),
}

console.log(currentOS)
