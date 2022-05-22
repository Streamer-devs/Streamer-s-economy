module.exports.execute = async (client, message, args) => {
    let amount = Math.floor(Math.random() * 1500) + 1000;
    let work = client.eco.work(client.ecoAddUser, amount);
    if (work.onCooldown) return message.reply(`You are tired Right now. Come back after ${work.time.minutes} minutes & ${work.time.seconds} seconds to work again.`);
    else return message.reply(`You worked as **${work.workedAs}** and earned **${work.amount}** <:mony:950081940218843146>. Now you have **${work.after}** <:mony:950081940218843146>.`);
};

module.exports.help = {
    name: "work",
    aliases: ["job"],
    usage: "work"
}
