const Discord = require('discord.js');
const bot = new Discord.Client();
const token ='#BotToken';
const PREFIX=   '!';
bot.on('ready', ()=>{
    console.log("Bot is running");
})
const proctor = 'Channel_id';
const team1= 'Channel_id';
const team2= 'Channel_id';
const team3= 'Channel_id';
const team4= 'Channel_id'
const team5= 'Channel_id'
const archives= 'Channel_id'
const scores= 'Channel_id';


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
    // //     bot.channels.cache.get("Channel_id").send(`Bounce from ${message.channel}: ${args[1]}`);
    // //     break;
    // // case 'pounce':
    // //     if (!args[1]) return message.reply("Error!!! Specify the Answer")
    // //     bot.channels.cache.get("Channel_id").send(`Pounce from ${message.channel}: ${args[1]}`);
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
