module.exports = {
    name: 'memes',
    description: "picks a random meme and sends it once summoned to",
    execute(message, args){
        var memeimg = [{files: ["./memeimgs/testmeme.jpg"]}, {files: ["./memeimgs/dmeme1.jpg"]}, {files: ["./memeimgs/dmeme2.jpg"]}, {files: ["./memeimgs/dmeme3.jpg"]}, {files: ["./memeimgs/dmeme4.jpg"]},
{files: ["./memeimgs/dmeme5.jpg"]}, {files: ["./memeimgs/dmeme6.jpg"]}, {files: ["./memeimgs/dmeme7.jpg"]}, {files: ["./memeimgs/dmeme8.jpg"]}, {files: ["./memeimgs/dmeme9.jpg"]}, {files: ["./memeimgs/dmeme10.jpg"]}, 
{files: ["./memeimgs/dmeme11.jpg"]}, {files: ["./memeimgs/dmeme12.jpg"]}, {files: ["./memeimgs/dmeme13.jpg"]}, {files: ["./memeimgs/dmeme14.jpg"]}, {files: ["./memeimgs/dmeme15.jpg"]}, 
{files: ["./memeimgs/dmeme16.jpg"]}, {files: ["./memeimgs/dmeme17.jpg"]}, {files: ["./memeimgs/dmeme18.jpg"]}, {files: ["./memeimgs/dmeme19.jpg"]}, {files: ["./memeimgs/dmeme20.jpg"]}, 
{files: ["./memeimgs/dmeme21.jpg"]}, {files: ["./memeimgs/dmeme22.jpg"]}, {files: ["./memeimgs/dmeme23.jpg"]}, {files: ["./memeimgs/dmeme24.jpg"]}, {files: ["./memeimgs/dmeme25.jpg"]}, 
{files: ["./memeimgs/dmeme26.jpg"]}, {files: ["./memeimgs/dmeme27.jpg"]}, {files: ["./memeimgs/dmeme28.jpg"]}, {files: ["./memeimgs/dmeme29.jpg"]}, {files: ["./memeimgs/dmeme30.jpg"]}];
        message.channel.send(memeimg[Math.floor(Math.random() * 30)]);
    }
}