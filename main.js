const Discord = require('discord.js');
const client = new Discord.Client();


//Toutes les actions à faire quand le bot se connecte
client.on("ready", function () {
    console.log("Mon BOT est Connecté");
})

// Répondre à un message
client.on("message", function (message) {
    if (message.content === "pute") { // Lorsque "Salut" est envoyé
        message.channel.send("@[NRGS]⚜Rondoudou_78⚜ est mega bg")
    }
})

client.login(process.env.TOKEN);
