const { MessageEmbed } = require("discord.js");

exports.execute = async (client, message, args) => {
   
    let leaderboard = client.eco.leaderboard({ limit: 15, raw: false });
    if (!leaderboard || leaderboard.length < 1) return message.channel.send("❌ | Empty Leaderboard!");
    const embed = new MessageEmbed()
        .setAuthor(`Global leaderboard!`, message.guild.iconURL)
        .setColor("RANDOM")
        .setThumbnail( "https://cdn.discordapp.com/attachments/939930868695322674/950086982015533106/scenic-view-of-snowcapped-mountains-against-blue-sky-740670351-598783ea03f402001065a1522.jpg")
        .setTimestamp();
    leaderboard.forEach(u => {
        embed.addField(`${u.position}. ${client.users.cache.get(u.id) ? client.users.cache.get(u.id).tag : "User In different server"}`, `${u.money} <:mony:950081940218843146>`);
    });
    return message.channel.send(embed);
}

exports.help = {
    name: "lb",
    aliases: ["leaderboard"],
    usage: `lb`
}
