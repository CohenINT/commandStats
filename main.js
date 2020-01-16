const {LogStats} = require("./LogStats");

LogStats.commandStats("logs/radio_command_usage.txt").then(d=>{
    console.log(d);
}).catch(err=>{
    console.log(err)
})
