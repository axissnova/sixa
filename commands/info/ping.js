module.exports = {
    name: "ping",
    description: "Returns latency and API ping",
    category: "info",
    run: async (client, message, args) => {
        const msg = await message.channel.send(`🏓 Pinging....`);

        msg.edit(`🏓 Pong! \n Latency is ${Math.floor(msg.createdAt - message.createdAt)}ms`);
    }
}