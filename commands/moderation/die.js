module.exports = {
    name: "die",
    description: "Kills the bot kinda",
    category: "info",
    run: async (client, message, args) => {

        if (!message.member.hasPermission("ADMINISTRATOR"))
        return message.reply("You don't have the required permissions to use this command.").then(m => m.delete(5000));

        else {
        message.channel.send("trolled");
    }
    }
}