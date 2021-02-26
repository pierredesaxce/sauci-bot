const express = require("express");
const app = express();


app.use(express.static("public"));

app.get("/", (request, response) => {
  response.send("DISCORD YT NOTIFIER");
});



// listen for requests :)
const listener = app.listen(process.env.PORT, () => {
  console.log("Your app is listening on port " + listener.address().port);
});

const discord = require("discord.js");
const client = new discord.Client();
const { TOKEN, Channel_ID} = require("./config.json")
const YoutubeNotifier = require("youtube-notification");


client.on("ready", () =>{
  console.log("w")
})


const notifier = new YouTubeNotifier({
  hubCallback: 'https://fearless-turquoise-devourer.glitch.me/',
  secret: 'Saucisson_Will_Prevail',
});

notifier.on('notified', data => {
  console.log('New Video');
  console.log(
    `${data.channel.name} just uploaded a new video titled: ${data.video.title}`
  );
});
 
notifier.subscribe('channel_1');

app.use("/yt", notifier.listener());

client.login()