const {LogStats} = require("./LogStats");

var start = new Date()
var hrstart = process.hrtime()
var simulateTime = 5


LogStats.commandStats("logs/radio_command_usage.txt").then(d=>{
    var end = new Date() - start;
    hrend= process.hrtime(hrstart);
    console.info('Execution time: %dms', end)
    console.info('Execution time (hr): %ds %dms', hrend[0], hrend[1] / 1000000)
    
    console.log(d);
}).catch(err=>{
    console.log(err)
})
