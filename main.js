const { clear } = require('console');
const Discord = require('discord.js');
const got = require('got');

require('dotenv').config()
module.exports = {
    username:process.env.DB_USER,
    password:process.env.DB_PASS,
    database:process.env.DB_NAME,
    host:process.env.DB_HOST,
    dialect:"mysql"
}

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
    console.log("Slurper is now online!");
});

client.on('message', message =>{
if (!message.content.startsWith(prefix) || message.author.bot) return;
const args = message.content.slice(prefix.length).split(/ +/);
const command = args.shift().toLowerCase();

//level

var level = 0;



//memes

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
} else if (command === "1up"){
    level++;
} else if (command === "level"){
    message.channel.send(level);
}
//reddit meme commands
else if (command === "meme") {
    client.commands.get('meme').execute(message, args);
} else if (command === "funny") {
    client.commands.get('funny').execute(message, args);
} else if (command === "murica") {
    const embed = new Discord.MessageEmbed()
    got('https://www.reddit.com/r/MURICA/random/.json').then(response => {
        let muricacontent = JSON.parse(response.body);
        let muricapermalink = content[0].data.children[0].data.permalink;
        let muricamemeUrl = `https://reddit.com${permalink}`;
        let muricamemeImage = content[0].data.children[0].data.url;
        let muricamemeTitle = content[0].data.children[0].data.title;
        let muricamemeUpvotes = content[0].data.children[0].data.ups;
        let muricamemeDownvotes = content[0].data.children[0].data.downs;
        let muricamemeNumComments = content[0].data.children[0].data.num_comments;
        embed.setTitle(`${muricamemeTitle}`)
        embed.setURL(`${muricamemeUrl}`)
        embed.setImage(muricamemeImage)
        embed.setColor('RANDOM')
        embed.setFooter(`👍 ${muricamemeUpvotes} 👎 ${muricamemeDownvotes} 💬 ${muricamemeNumComments}`)
        message.channel.send(embed);
    })
} 
//else
else {
    message.channel.send(command);
}
});
clearInterval();

//commit placeholder

client.login(process.env.token);