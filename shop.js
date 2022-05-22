const { MessageEmbed } = require("discord.js");

exports.execute = async (client, message, args) => {
  let items = Object.keys(client.shop);
  let content = "";
  
  for (var i in items) {
    content += `${items[i]} - <:mony:950081940218843146> ${client.shop[items[i]].cost}\n`
  }
  
  let embed = new MessageEmbed()
  .setTitle("Store")
  .setDescription(content)
  .setColor("BLURPLE")
  .setFooter("The servers prefix buy <item> to purchase the item.")
  return message.channel.send(embed);
};

exports.help = {
  name: "shop",
  aliases: [],
  usage: `shop`
};
