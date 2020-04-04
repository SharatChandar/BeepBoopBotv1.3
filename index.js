const Discord = require('discord.js');
const bot = new Discord.Client();
const token ='Njk2MDEyODgxMTQ5NTU4ODE0.XoisSA.widmEzIhiHZfYzUNdSIKm8l1UNk';
const PREFIX=   '!';
bot.on('ready', ()=>{
    console.log("Bot is running");
})


bot.on('message',message=>{
    let args = message.content.substring(PREFIX.length).split("_");
    
  
  
    switch(args[0]){
    case 'bounce':
        if (!args[1]) return message.reply("Error!!! Specify the Answer")
        bot.channels.cache.get("696038235339751464").send(`Bounce from ${message.channel}: ${args[1]}`);
        break;
    case 'pounce':
        if (!args[1]) return message.reply("Error!!! Specify the Answer")
        bot.channels.cache.get("695986147465232434").send(`Pounce from ${message.channel}: ${args[1]}`);
        break;
    case 'help':
        message.channel.send('Proctor:\nFor Normal question use the cmd \"!question_<qn_no>_<question>\"\nFor Image/media questions use the cmd \"!questionmedia_<qn_no>\"\nFor Normal answer use the cmd \"!answer_<ans_no>_<answer>\"\nFor Image/media answer use the cmd \"!answermedia_<ans_no>\"\n\nPeeps:\nBounce using the cmd \"!bounce_<answer>\"\nPounce using the cmd \"!pounce_<answer>\"\n');
        break;
    case 'clear' :
        if (!args[1]) return message.reply("Error!!! Specify the number of lines")
        message.channel.bulkDelete(args [1]);
        break;
    case 'questionmedia':
        if (message.channel.id  === "695968781226213427"){
            if(message.attachments.array()[0])
            {
                attachment=message.attachments.array()[0];
            }
            bot.channels.cache.get("696038235339751464").send(`Question ${args[1]} from ${message.channel}: `,attachment);
            bot.channels.cache.get("695986147465232434").send(`Question ${args[1]} from ${message.channel}: `,attachment);
            bot.channels.cache.get("695970583594270760").send(`Question ${args[1]} from ${message.channel}: `,attachment);
            bot.channels.cache.get("695970728511537202").send(`Question ${args[1]} from ${message.channel}: `,attachment);
            bot.channels.cache.get("695970768059760732").send(`Question ${args[1]} from ${message.channel}: `,attachment);
            bot.channels.cache.get("695970825412804666").send(`Question ${args[1]} from ${message.channel}: `,attachment);
            bot.channels.cache.get("695970859709497444").send(`Question ${args[1]} from ${message.channel}: `,attachment);
        } 
        else
        return message.reply("Error!!! you dont have access");
        break;
    
    case 'question':
        if (message.channel.id  === "695968781226213427"){
            bot.channels.cache.get("696038235339751464").send(`Question ${args[1]} from ${message.channel}: ${args[2]}`);
            bot.channels.cache.get("695986147465232434").send(`Question ${args[1]} from ${message.channel}: ${args[2]}`);
            bot.channels.cache.get("695970583594270760").send(`Question ${args[1]} from ${message.channel}: ${args[2]}`);
            bot.channels.cache.get("695970728511537202").send(`Question ${args[1]} from ${message.channel}: ${args[2]}`);
            bot.channels.cache.get("695970768059760732").send(`Question ${args[1]} from ${message.channel}: ${args[2]}`);
            bot.channels.cache.get("695970825412804666").send(`Question ${args[1]} from ${message.channel}: ${args[2]}`);
            bot.channels.cache.get("695970859709497444").send(`Question ${args[1]} from ${message.channel}: ${args[2]}`);
        }
        else
        return message.reply("Error!!! you dont have access");
        break;
    case 'answer':
       if (message.channel.id  === "695968781226213427"){
            bot.channels.cache.get("696038235339751464").send(`Answer ${args[1]} from ${message.channel}: ${args[2]}`);
            bot.channels.cache.get("695986147465232434").send(`Answer ${args[1]} from ${message.channel}: ${args[2]}`);
            bot.channels.cache.get("695970583594270760").send(`Answer ${args[1]} from ${message.channel}: ${args[2]}`);
            bot.channels.cache.get("695970728511537202").send(`Answer ${args[1]} from ${message.channel}: ${args[2]}`);
            bot.channels.cache.get("695970768059760732").send(`Answer ${args[1]} from ${message.channel}: ${args[2]}`);
            bot.channels.cache.get("695970825412804666").send(`Answer ${args[1]} from ${message.channel}: ${args[2]}`);
            bot.channels.cache.get("695970859709497444").send(`Answer ${args[1]} from ${message.channel}: ${args[2]}`);
            }
            else
            return message.reply("Error!!! you dont have access");
            break;

     case 'answernmedia':
        if (message.channel.id  === "695968781226213427"){
            if(message.attachments.array()[0])
            {
               attachment=message.attachments.array()[0];
            }
            bot.channels.cache.get("696038235339751464").send(`Answer ${args[1]} from ${message.channel}: `,attachment);
            bot.channels.cache.get("695986147465232434").send(`Answer ${args[1]} from ${message.channel}: `,attachment);
            bot.channels.cache.get("695970583594270760").send(`Answer ${args[1]} from ${message.channel}: `,attachment);
            bot.channels.cache.get("695970728511537202").send(`Answer ${args[1]} from ${message.channel}: `,attachment);
            bot.channels.cache.get("695970768059760732").send(`Answer ${args[1]} from ${message.channel}: `,attachment);
            bot.channels.cache.get("695970825412804666").send(`Answer ${args[1]} from ${message.channel}: `,attachment);
            bot.channels.cache.get("695970859709497444").send(`Answer ${args[1]} from ${message.channel}: `,attachment);
            }
            else
            return message.reply("Error!!! you dont have access");
            break;        
    }
})







bot.login(token);
