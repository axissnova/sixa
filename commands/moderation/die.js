module.exports = {
    name: "die",
    description: "Kills the bot kinda",
    category: "info",
    run: async (client, message, args) => {
        message.channel.send("Ok bye :(")
    }
}