const { prefix, token } = require("./config.json");
const fs = require("fs");
const { Client, Collection, GatewayIntentsString, Partials } = require('discord.js');
const bot = new Client({
    intents: [
        GatewayIntentsString.Guilds,
        GatewayIntentsString.GuildMembers,
        GatewayIntentsString.GuildMessages,
        GatewayIntentsString.MessageContent,
    ],
    partials: [
        Partials.Channel,
        Partials.Message,
        Partials.User
    ]
});

// Bot objesi içinde komutları depolamak için bir koleksiyon oluşturuluyor
bot.commands = new Collection();

// Komut dosyalarını 'commands' klasöründen yükle
const commandFiles = fs.readdirSync('./commands/').filter(f => f.endsWith('.js'))
for (const file of commandFiles) {
    const props = require(`./commands/${file}`)
    console.log(`${file} yüklendi`)
    bot.commands.set(props.config.name, props)
}

// 'commands' klasörü içindeki alt klasörleri al
const commandSubFolders = fs.readdirSync('./commands/').filter(f => !f.endsWith('.js'))
// Alt klasörlerden komut dosyalarını yükle
commandSubFolders.forEach(folder => {
    const commandFiles = fs.readdirSync(`./commands/${folder}/`).filter(f => f.endsWith('.js'))
    for (const file of commandFiles) {
        const props = require(`./commands/${folder}/${file}`)
        console.log(`${file} ${folder} klasöründen yüklendi`)
        bot.commands.set(props.config.name, props)
    }
});

// 'events' klasöründen event dosyalarını yükle
const eventFiles = fs.readdirSync('./events/').filter(f => f.endsWith('.js'))
for (const file of eventFiles) {
    const event = require(`./events/${file}`)
    if(event.once) {
        bot.once(event.name, (...args) => event.execute(...args, bot))
    } else {
        bot.on(event.name, (...args) => event.execute(...args, bot))
    }
}

// Bot 'messageCreate' eventi aldığında çalışacak ve mesajın bir komut olup olmadığını kontrol edecek
bot.on("messageCreate", async message => {
    // Yazar bir bot ise veya mesaj DM'den geldiyse işlem yapma
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;

    // Config'den prefix'i al ve mesajı doğru şekilde komuta yönlendir
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);

    // Mesajın prefix ile başladığını kontrol et ve başlamıyorsa geri dön
    if(!cmd.startsWith(prefix)) return;

    // Komut koleksiyonundan komutu al ve çalıştır
    let commandfile = bot.commands.get(cmd.slice(prefix.length));
    if(commandfile) commandfile.run(bot, message, args);

});

// Token config.json'da belirtilmeli
bot.login(token);
