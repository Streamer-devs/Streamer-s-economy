exports.execute = async (client, message, args) => {
    let amount = Math.floor(Math.random() * 1000) + 500;
    let addMoney = client.eco.weekly(client.ecoAddUser, amount);
    if (addMoney.onCooldown) return message.reply(`You have already claimed your weekly credit. Come back after ${addMoney.time.days} days, ${addMoney.time.hours} hours, ${addMoney.time.minutes} minutes & ${addMoney.time.seconds} seconds to claim it again.`);
    else return message.reply(`You have claimed **${addMoney.amount}** <:mony:950081940218843146> as your weekly credit & now you have **${addMoney.after}** <:mony:950081940218843146>`);
};

exports.help = {
    name: "weekly",
    aliases: [],
    usage: "weekly"
}
