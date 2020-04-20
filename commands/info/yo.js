module.exports = {
    name: "yo",
    description: "yo",
    category: "info",
    run: async (client, message, args) => {
        message.channel.send('yo')
    }
}