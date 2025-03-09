# Discord.js Bot Template

**Bu şablon, discord.js v14'ü destekliyor ve slash komutlarını kullanacak şekilde yapılandırılmıştır.**

## 🛠️ Gereksinimler

Botu çalıştırabilmek için gerekli olan yazılımlar ve nasıl yükleneceği:

- **Node.js**

### 📥 Yükleme Adımları:

Botu çalıştırmak için izlenecek adımlar:

#### 1. **Node.js Yükleme:**

1. [Node.js](https://nodejs.org/en/) sitesine gidin.
2. İhtiyacınıza göre LTS veya Current sürümünü seçin ve işletim sisteminize uygun olan yükleyiciyi indirin.
   
#### 2. **discord.js Yükleme ve Bot Klasörü Oluşturma:**

Node.js'i yükledikten sonra:

1. Bilgisayarınızda yeni bir klasör oluşturun.
2. Windows'ta komut istemcisini (CMD) açın ve dosya gezgininden klasörün yolunu kopyalayın.
3. CMD'de `cd "KlasörYolu"` komutunu girip Enter'a basın.
4. CMD penceresinde `npm i discord.js` komutunu girerek discord.js'i yükleyin.
   
   Not: Bu komutu çalıştırmadan önce doğru klasörde olduğunuzdan emin olun.

#### 3. **Botu Başlatma:**

1. Bu projeyi zip dosyası olarak indirin ve oluşturduğunuz klasöre taşıyın.
2. Zip dosyasını açın ve `config.json` dosyasına botunuzun token'ını ekleyin. Token almak için [Discord Developer Site](https://discordapp.com/developers/applications/) adresini ziyaret edebilirsiniz.
3. `config.json` dosyasına token'ı ekledikten ve discord.js'i yükledikten sonra, botu başlatmak için `node app.js` komutunu kullanın.

#### 4. **Geliştirici İçin Ekstra:**

- Bot dosyasını her değiştirdiğinizde botun otomatik olarak yeniden başlamasını sağlamak için nodemon yükleyebilirsiniz:
  
  Nodemon'ı global olarak yüklemek için `npm i -g nodemon` komutunu girin.

---

## 🛠️ Yapılandırma

- **Token ve prefix:** `config.json` dosyasına token'ı ve prefix'i ekleyin.
- **Komutlar:** Komutları `commands` klasöründe oluşturabilirsiniz.
- **Varsayılan Prefix:** Botun varsayılan prefix'i `!`'dir. Bunu `config.json` dosyasından değiştirebilirsiniz.

---

## 📜 Komutlar

- **ping:** `commands` klasöründe bulunan örnek bir komuttur.
