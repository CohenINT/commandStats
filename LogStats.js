const fs = require("fs");
const readline = require("readline");


class LogStats{


    constructor(){}



  async commandStats(file = "logs/radio_command_usage.txt") {
  
        //const reg = "/:[\s+(a-z)](.|!)+\b/gi";
        const reg=  new RegExp("\: *","gi");
        var data_stats ={};//this is our data index
        const fileStream = fs.createReadStream("./"+file);
      
        const rl = readline.createInterface({
          input: fileStream,
          crlfDelay: Infinity
        });
        // Note: we use the crlfDelay option to recognize all instances of CR LF
        // ('\r\n') in input.txt as a single line break.
        let splitted="empty";
        let clean_command;
        for await (const line of rl) {
                        
                
              if(line.search(/session/gi)== -1) 
              {//eliminating unneeeded lines

                 

                if(line.search(/ /gi)!=-1)
                {
                 clean_command= splitted = line.substring(line.search(/ /gi)+2);

                 if(data_stats[clean_command]!=undefined)
                 {
                  data_stats[clean_command]++;
                 }
                 else{
                   
                    data_stats[clean_command]=1;
                 }



                }

                  
              

              }
            
              
        

        }
        return data_stats;
      }



 
}

module.exports.LogStats= new LogStats();