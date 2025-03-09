module.exports = {
    config: {
        name: 'ping',
        description: 'Botun ping değerini alır',
        usage: `!ping`,
    },
    async run(bot, message, args) {
        //  Botun ping değerini al ve komutun çalıştığı kanala mesaj gönder
        const ping = bot.ws.ping;
        message.channel.send(`📶 Benim ping değerim \`${ping} ms\`!`);
    }
}
