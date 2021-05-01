const Discord = require('discord.js');
const client = new Discord.Client();


//Toutes les actions à faire quand le bot se connecte
client.on("ready", function () {
    console.log("Mon BOT est Connecté");
})

// Répondre à un message
client.on("message", function (message) {
    if (message.content === "pute") { // Lorsque "Salut" est envoyé
        message.channel.send("@fonda de la team le goulag a un nouvelle arivant")
    }
})
client.on("message", function (message) {
    if (message.content === "tg") { // Lorsque "Salut" est envoyé
        message.channel.send("@fonda de la team on a besoins d'un warn svp")
    }
})
client.on("message", function (message) {
    if (message.content === "bonjour") { // Lorsque "Salut" est envoyé
        message.channel.send("aurevoir 👋")
    }
})
client.on("message", function (message) {
    if (message.content === "fdp") { // Lorsque "Salut" est envoyé
        message.channel.send("@fonda de la team le goulag a un nouvelle arivant")
    }
})
client.login(process.env.TOKEN);
