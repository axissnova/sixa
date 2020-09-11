const { RichEmbed } = require("discord.js");

module.exports = {
    name: "say",
    aliases: ["bc", "broadcast"],
    description: "Says your input via the bot",
    usage: "<input>",
    run: (client, message, args) => {
        message.delete();

        message.channel.send(args.join(" "));

        if (!message.member.hasPermission("ADMINISTRATOR"))
            return message.reply("You don't have the required permissions to use this command.").then(m => m.delete(5000));

        else {
            message.channel.send(args.join(" "));
         }
    }
}