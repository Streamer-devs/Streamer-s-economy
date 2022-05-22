const express = require('express')
const app = express();
const port = 3000

app.get('/', (req, res) => res.send('Streamer✨!!!!'))

app.listen(port, () =>
console.log(`Your app is listening a http://localhost:${port}`)
);


const Discord = require("discord.js");
 const client = new Discord.Client({ disableMentions: 'everyone' });
const Eco = require("quick.eco");
client.eco = new Eco.Manager(); // quick.eco
client.db = Eco.db; // quick.db
client.config = require("./botConfig");
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
client.shop = {
  shirt: {
    cost: 20
  },
  pants: {
    cost: 20
  },
  undies: {
    cost: 10
  },
  socks: {
    cost: 30
  },
  shoes: {
    cost: 60
  },
  coffee: {
    cost: 30
  },
  tea: {
    cost: 20
  },
  pizza: {
    cost: 40
  },
  chicken: {
    cost: 60
  },
  apples: {
    cost: 10
  },
  banana: {
    cost: 10
  },
  lettuce: {
    cost: 70
  },
  tomato: {
    cost: 40
  },
  ranch_dressing: {
    cost: 50
  },
  house: {
    cost: 7000
  },
  furniture: {
    cost: 8000
  },
  appliances: {
    cost: 10000
  },
  car: {
    cost: 990000
    },
};
const fs = require("fs");

fs.readdir("./events/", (err, files) => {
    if (err) return console.error(err);
    files.forEach(f => {
        if (!f.endsWith(".js")) return;
        const event = require(`./events/${f}`);
        let eventName = f.split(".")[0];
        client.on(eventName, event.bind(null, client));
    });
});

fs.readdir("./commands/", (err, files) => {
    if (err) return console.error(err);
    files.forEach(f => {
        if (!f.endsWith(".js")) return;
        let command = require(`./commands/${f}`);
        client.commands.set(command.help.name, command);
        command.help.aliases.forEach(alias => {
            client.aliases.set(alias, command.help.name);
        });
    });
});


client.login(client.config.token);
