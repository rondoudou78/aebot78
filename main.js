const Discord = require('discord.js');
const client = new Discord.Client();


//Toutes les actions à faire quand le bot se connecte
client.on("ready", function () {
    console.log("Mon BOT est Connecté");
})

// Répondre à un message
client.on("message", function (message) {
    if (message.content === "pute") { // Lorsque "Salut" est envoyé
        message.channel.send("toi même et <@&835877915559723078> le goulag a un nouvelle arivant")
    }
})
client.on("message", function (message) {
    if (message.content === "tg") { // Lorsque "Salut" est envoyé
        message.channel.send("toi même et <@&835877915559723078> on a besoins d'un warn svp")
    }
})
client.on("message", function (message) {
    if (message.content === "bonjour") { // Lorsque "Salut" est envoyé
        message.channel.send("aurevoir 👋")
    }
})
client.on("message", function (message) {
    if (message.content === "fdp") { // Lorsque "Salut" est envoyé
        message.channel.send("toi même et <@&835877915559723078> allez le démarrer")
    }
})
client.on("message", function (message) {
    if (message.content === "mblague1") { // Lorsque "Salut" est envoyé
        message.channel.send("qu'est ce qui est arrivé a la garre... un train")
    }
})
client.on("message", function (message) {
    if (message.content === "mblague2") { // Lorsque "Salut" est envoyé
        message.channel.send("qu'est ce qui n'est pas un steak... une pastèque")
    }
})
client.on("message", function (message) {
    if (message.content === "mblague3") { // Lorsque "Salut" est envoyé
        message.channel.send("qu'est ce qui est jaune et qui attends... johantan")
    }
})
client.on("message", function (message) {
    if (message.content === "mblague4") { // Lorsque "Salut" est envoyé
        message.channel.send("pourquoi un daltonien ne bois pas d'eau ? parce-qu'il ne voit pas le vers")
    }
})
client.on("message", function (message) {
    if (message.content === "ntm") { // Lorsque "Salut" est envoyé
        message.channel.send("toi même et allez le démarrer <@&835877915559723078>")
    }
})
client.on("message", function (message) {
    if (message.content === "salut") { // Lorsque "Salut" est envoyé
        message.channel.send("aurevoir ma canne a pêche 👋")
    }
})
client.login(process.env.TOKEN);
