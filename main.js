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

//memes

var m = 60;

var memeimg = [{files: ["./memeimgs/testmeme.jpg"]}, {files: ["./memeimgs/dmeme1.jpg"]}, {files: ["./memeimgs/dmeme2.jpg"]}, {files: ["./memeimgs/dmeme3.jpg"]}, {files: ["./memeimgs/dmeme4.jpg"]},
{files: ["./memeimgs/dmeme5.jpg"]}, {files: ["./memeimgs/dmeme6.jpg"]}, {files: ["./memeimgs/dmeme7.jpg"]}, {files: ["./memeimgs/dmeme8.jpg"]}, {files: ["./memeimgs/dmeme9.jpg"]}, {files: ["./memeimgs/dmeme10.jpg"]}, 
{files: ["./memeimgs/dmeme11.jpg"]}, {files: ["./memeimgs/dmeme12.jpg"]}, {files: ["./memeimgs/dmeme13.jpg"]}, {files: ["./memeimgs/dmeme14.jpg"]}, {files: ["./memeimgs/dmeme15.jpg"]}, 
{files: ["./memeimgs/dmeme16.jpg"]}, {files: ["./memeimgs/dmeme17.jpg"]}, {files: ["./memeimgs/dmeme18.jpg"]}, {files: ["./memeimgs/dmeme19.jpg"]}, {files: ["./memeimgs/dmeme20.jpg"]}, 
{files: ["./memeimgs/dmeme21.jpg"]}, {files: ["./memeimgs/dmeme22.jpg"]}, {files: ["./memeimgs/dmeme23.jpg"]}, {files: ["./memeimgs/dmeme24.jpg"]}, {files: ["./memeimgs/dmeme25.jpg"]}, 
{files: ["./memeimgs/dmeme26.jpg"]}, {files: ["./memeimgs/dmeme27.jpg"]}, {files: ["./memeimgs/dmeme28.jpg"]}, {files: ["./memeimgs/dmeme29.jpg"]}, {files: ["./memeimgs/dmeme30.jpg"]}];

var nums = [];

for(let i = 0; i < 61; i++){
    nums.push(Math.floor(Math.random()*m));
}

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
    message.channel.send(memeimg[nums[Math.floor(Math.random() * 30)]]);
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
}
//else
else {
    message.channel.send(command);
}
});

//commit placeholder

client.login(process.env.token);