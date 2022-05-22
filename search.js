exports.execute = async (client, message, args) => {
    let users = [
        "Pocket",
        "T-Shirt",
        "BCI",
        "Street",
        "Air"
    ];
    let amount = Math.floor(Math.random() * 200) + 50;
    let beg = await client.eco.beg(client.ecoAddUser, amount, { canLose: true, cooldown: 200000, customName: "search" });
    if (beg.onCooldown) return message.reply(`Come back after ${beg.time.minutes} minutes & ${beg.time.seconds} seconds.`);
    if (beg.lost) return message.channel.send(`**${users[Math.floor(Math.random() * users.length)]}:** You were caught! You couldn't get money kiddo.`);
    else return message.reply(`**${users[Math.floor(Math.random() * users.length)]}** was somewhat profitable, you found **${beg.amount}** <:mony:950081940218843146>. Now you have **${beg.after}** <:mony:950081940218843146>.`);
};

exports.help = {
    name: "esearch",
    aliases: [],
    usage: "esearch"
}
