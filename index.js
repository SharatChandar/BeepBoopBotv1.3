const Discord = require('discord.js');
const bot = new Discord.Client();
const token ='Njk2MzE0ODg1Njk2NTIwMTkz.Xom-5w.ShF928AEbDTsaLMNMcGQO5y7S9I';
const PREFIX=   '!';
bot.on('ready', ()=>{
    console.log("Bot is running");
})
const proctor = '702863347934298163';
const team1= '702861332046676068';
const team2= '702861416465694822';
const team3= '702861429794930688';
const team4= '702861445112660040'
const team5= '702861459427950623'
const archives= '696316299004870657'
const scores= '696314429649846272';


bot.on('message',message=>{

    if (message.channel.id  === proctor){
        let args = message.content;
        if(message.attachments.array()[0])
        {
            attachment=message.attachments.array()[0];
        }
        else
        {
            attachment=':'
        }
                bot.channels.cache.get(team1).send(`${message.channel}: ${args}`,attachment);
                bot.channels.cache.get(team2).send(`${message.channel}: ${args}`,attachment);
                bot.channels.cache.get(team3).send(`${message.channel}: ${args}`,attachment);
                bot.channels.cache.get(team4).send(`${message.channel}: ${args}`,attachment);
                bot.channels.cache.get(team5).send(`${message.channel}: ${args}`,attachment);
                bot.channels.cache.get(archives).send(`${message.channel}: ${args}`,attachment);

    }

    // switch(args[0]){
    // // case 'bounce':
    // //     if (!args[1]) return message.reply("Error!!! Specify the Answer")
    // //     bot.channels.cache.get("696038235339751464").send(`Bounce from ${message.channel}: ${args[1]}`);
    // //     break;
    // // case 'pounce':
    // //     if (!args[1]) return message.reply("Error!!! Specify the Answer")
    // //     bot.channels.cache.get("695986147465232434").send(`Pounce from ${message.channel}: ${args[1]}`);
    // //     break;
    // case 'help':
    //     message.channel.send('Proctor:\nFor Normal question use the cmd \"!question_<qn_no>_<question>\"\nFor Image/media questions use the cmd \"!questionmedia_<qn_no>\"\nFor Normal answer use the cmd \"!answer_<ans_no>_<answer>\"\nFor Image/media answer use the cmd \"!answermedia_<ans_no>\"\n\nPeeps:\nUse your team chat only\nBounce on Voice Chat General \nPounce on your team chat and inform the proctor \n');
    //     break;
    // case 'clear' :
    //     if (!args[1]) return message.reply("Error!!! Specify the number of lines")
    //     message.channel.bulkDelete(args [1]);
    //     break;
    // case 'questionmedia':
    //     if (message.channel.id  === proctor){
    //         if(message.attachments.array()[0])
    //         {
    //             attachment=message.attachments.array()[0];
    //         }
    //         bot.channels.cache.get(team1).send(`Question ${args[1]} from ${message.channel}: `,attachment);
    //         bot.channels.cache.get(team2).send(`Question ${args[1]} from ${message.channel}: `,attachment);
    //         bot.channels.cache.get(team3).send(`Question ${args[1]} from ${message.channel}: `,attachment);
    //         bot.channels.cache.get(team4).send(`Question ${args[1]} from ${message.channel}: `,attachment);
    //         bot.channels.cache.get(team5).send(`Question ${args[1]} from ${message.channel}: `,attachment);
    //         bot.channels.cache.get(archives).send(`Question ${args[1]} from ${message.channel}: `,attachment);
    //     } 
    //     else
    //     return message.reply("Error!!! you dont have access");
    //     break;
    
    // case 'question':
    //     if (message.channel.id  === proctor){
    //         bot.channels.cache.get(team1).send(`Question ${args[1]} from ${message.channel}: ${args[2]}`);
    //         bot.channels.cache.get(team2).send(`Question ${args[1]} from ${message.channel}: ${args[2]}`);
    //         bot.channels.cache.get(team3).send(`Question ${args[1]} from ${message.channel}: ${args[2]}`);
    //         bot.channels.cache.get(team4).send(`Question ${args[1]} from ${message.channel}: ${args[2]}`);
    //         bot.channels.cache.get(team5).send(`Question ${args[1]} from ${message.channel}: ${args[2]}`);
    //         bot.channels.cache.get(archives).send(`Question ${args[1]} from ${message.channel}: ${args[2]}`);
    //     }
    //     else
    //     return message.reply("Error!!! you dont have access");
    //     break;
    // case 'answer':
    //    if (message.channel.id  === proctor){
    //         bot.channels.cache.get(team1).send(`Answer ${args[1]} from ${message.channel}: ${args[2]}`);
    //         bot.channels.cache.get(team2).send(`Answer ${args[1]} from ${message.channel}: ${args[2]}`);
    //         bot.channels.cache.get(team3).send(`Answer ${args[1]} from ${message.channel}: ${args[2]}`);
    //         bot.channels.cache.get(team4).send(`Answer ${args[1]} from ${message.channel}: ${args[2]}`);
    //         bot.channels.cache.get(team5).send(`Answer ${args[1]} from ${message.channel}: ${args[2]}`);
    //         bot.channels.cache.get(archives).send(`Answer ${args[1]} from ${message.channel}: ${args[2]}`);
    //         }
    //         else
    //         return message.reply("Error!!! you dont have access");
    //         break;

    //  case 'answermedia':
    //     if (message.channel.id  === proctor){
    //         if(message.attachments.array()[0])
    //         {
    //            attachment=message.attachments.array()[0];
    //         }
    //         bot.channels.cache.get(team1).send(`Answer ${args[1]} from ${message.channel}: `,attachment);
    //         bot.channels.cache.get(team2).send(`Answer ${args[1]} from ${message.channel}: `,attachment);
    //         bot.channels.cache.get(team3).send(`Answer ${args[1]} from ${message.channel}: `,attachment);
    //         bot.channels.cache.get(team4).send(`Answer ${args[1]} from ${message.channel}: `,attachment);
    //         bot.channels.cache.get(team5).send(`Answer ${args[1]} from ${message.channel}: `,attachment);
    //         bot.channels.cache.get(archives).send(`Answer ${args[1]} from ${message.channel}: `,attachment);
    //         }
    //         else
    //         return message.reply("Error!!! you dont have access");
    //         break;        
    // }
})
bot.login(token);
