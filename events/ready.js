module.exports = {
    name: 'ready',
    once: true,
    execute(bot) {
        //  Bot'un kullanıcı adı ve bulunduğu sunucu sayısını konsola yazdır
        console.log(`🚀 ${bot.user.username} şu anda ${bot.guilds.cache.size} sunucuda çevrimiçi! 🎉`);

        // 🎮 Bot kullanıcı durumunu 'Realnqa' olarak güncelle
        bot.user.setPresence({
            activities: [{
                name: 'Realnqa',
                type: 'PLAYING'  // Oyun modu olarak ayarlanabilir
            }],
            status: 'online'  // Çevrimiçi statüsü
        });

        // Bot'un hazır olduğu bilgisini konsola yazdır
        console.log(`Bot, başarıyla başlatıldı ve çalışmaya başladı! ✅`);
    }
}
