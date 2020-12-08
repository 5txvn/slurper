const Discord = require('discord.js');
const client = new Discord.Client();
require("dotenv").config()

const prefix = "execute";

client.once('ready', () => {
    console.log("Stevano's bot is now online");
});

client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;
    const args = message.content.slice(prefix.length).split(" ");
    const command = args[0].toLowerCase();

    let res = ""
    switch (command) {
        case "num":
            const usage_info = "Usage: " + prefix + "num min-max"

            if (!args[1]) return message.channel.send(usage_info)

            const nums = args[1].split("-");
            // Makes sure 2 - seperated values were given
            if (nums.length != 2) return message.channel.send(usage_info)

            const min = parseInt(nums[0]);
            const max = parseInt(nums[1]);

            // Makes sure both where numbers
            if (isNaN(min) || isNaN(max)) return message.channel.send(usage_info)
            // Makes sure min isnt more than max
            if (min >= max) return message.channel.send(usage_info)

            // Generates random value in range min-max, found from example in https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
            res = Math.floor(Math.random() * (max - min) + min);
            break;

        case "meme":
            const MEME_COUNT = 60;
            const files = ["./memeimgs/dmeme" + Math.floor(Math.random() * MEME_COUNT) + ".jpg"]
            res = { files };
            break;
        case "emergency":
            res = "Oh no! What's going on?";
            break;
        case "urdumb":
            res = "No u";
            break;
        case "daddy":
            res = "Son?";
            break;
        case "test":
            res = "What are you trying to test?";
            break;
        case "bruh":
            res = "What?";
            break;
        case "steven":
            res = "That's my dad!";
            break;
        case "beg":
            setInterval(function () { message.channel.send("pls beg") }, 60000);
            break;
        default:
            res = command;
    }
    message.channel.send(res);
});

//commit placehold
client.login(process.env.TOKEN);