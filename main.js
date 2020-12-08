const { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } = require('constants');
const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = "slurp ";

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
//yt commands
if (command === 'ytchannel'){
    message.channel.send('visit our channel at https://www.youtube.com/channel/UCVERAawj2plnbbtV56fhXnQ/videos!');
} else if (command === 'holiday'){
    message.channel.send('https://www.youtube.com/watch?v=9vMLTcftlyI')
} 
//numgen commands
else if (command === 'num.1-10'){
    message.channel.send(Math.floor(Math.random() * 10));
} 
//meme commands
else if (command === "meme"){
    client.commands.get('memes').execute(message, args);
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
}
//else
else {
    message.channel.send(command);
}
});







client.login(process.env.token);