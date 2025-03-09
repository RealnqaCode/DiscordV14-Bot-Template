module.exports = {
    name: 'guildMemberAdd',
    execute(member, bot) {
        //  Yeni katılan üyeyi konsola yazdır
        console.log(`🎉 ${member.user.tag} sunucuya katıldı! Hoş geldin!`);

        //  "welcome" adında bir kanal bul ve hoş geldin mesajını gönder
        const welcomeChannel = member.guild.channels.cache.find(c => c.name === "welcome");
        
        if (welcomeChannel) {
            // Kanal bulunduysa, hoş geldin mesajını gönder
            welcomeChannel.send(`👋 Hoş geldin ${member.user.username}! 🎉`);
        } else {
            // Kanal bulunamazsa uyarı ver
            console.log("📢 'welcome' kanalı bulunamadı!");
        }
    }
}
