const { clear } = require('console');
const Discord = require('discord.js');

require("dotenv").config();

const client = new Discord.Client();

const prefix = "execute ";

const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith(',js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

client.once('ready', () => {
    console.log("Stevano's bot is now online");
});

client.on('message', message =>{
if (!message.content.startsWith(prefix) || message.author.bot) return;
const args = message.content.slice(prefix.length).split(/ +/);
const command = args.shift().toLowerCase();

//memes

var memecount = 60;

const memefiles = ["./memeimgs/dmeme" + Math.floor(Math.random() * memecount) + ".jpg"]

var funnycount = 10;

const funnyfiles = ["./memeimgs/dfunny" + Math.floor(Math.random() * memecount) + ".jpg"]

//yt commands
if (command === 'ytchannel'){
    message.channel.send('visit our channel at https://www.youtube.com/channel/UCVERAawj2plnbbtV56fhXnQ/videos!');
}
//numgen commands
else if (command === 'num.1-10'){
    message.channel.send(Math.floor(Math.random() * 10));
} else if (command === 'num.1-10.'){
    message.channel.send(Math.random() * 10);
} else if (command === 'num.1-100'){
    message.channel.send(Math.floor(Math.random() * 100));
} else if (command === 'num.1-100.'){
    message.channel.send(Math.random() * 100);
} else if (command === 'num.1-1000'){
    message.channel.send(Math.floor(Math.random() * 1000));
} else if (command === 'num.1-1000.'){
    message.channel.send(Math.random() * 1000);
} else if (command === 'num.1-10000'){
    message.channel.send(Math.floor(Math.random() * 10000));
} else if (command === 'num.1-10000.'){
    message.channel.send(Math.random() * 10000);
} 
//meme commands
else if (command === "meme"){
    message.channel.send({ memefiles });
} else if (command === "funny"){
    message.channel.send({ funnyfiles });
}
//chat back
else if (command === "emergency"){
    message.channel.send("Oh no! What's going on?")
} else if (command === "ur.dumb"){
    message.channel.send("No u")
} else if (command === "daddy"){
    message.channel.send("Son?")
} else if (command === "test"){
    message.channel.send("What are you trying to test?")
} else if (command === "bruh"){
    message.channel.send("What?")
} else if (command === "steven"){
    message.channel.send("That's my dad!")
} else if (command === "clear.interval"){
    clearInterval();
    message.channel.send("Interval was cleared")
}
//else
else {
    message.channel.send(command);
}
});
clearInterval();

//commit placeholder

client.login(process.env.token);