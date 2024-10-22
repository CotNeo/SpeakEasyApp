# SpeakEasy App

## Proje Açıklaması
SpeakEasy App, çok dilli çeviri ve sesli iletişim sağlayan bir uygulamadır. Zoom, Microsoft Teams ve mobil cihazlarda anlık çeviri hizmeti sunar. ChatGPT ve Google Cloud AI araçlarını kullanarak metin çevirisi, konuşma sentezi ve sesli geri bildirim sağlar.

## Özellikler
- Anlık dil çevirisi (tüm diller arasında)
- Metinden sese dönüştürme (Google Cloud Text-to-Speech)
- Toplantı odaları oluşturma ve katılma
- Zoom ve Microsoft Teams entegrasyonu
- Kişiselleştirilmiş ses ayarları (Google Custom Voices)
- Kullanıcı kimlik doğrulama ve iki faktörlü doğrulama (2FA)

## Kurulum Adımları
1. Depoyu klonlayın:
    ```bash
    git clone https://github.com/username/SpeakEasyApp.git
    ```

2. Sunucu bağımlılıklarını yükleyin:
    ```bash
    cd server
    npm install
    ```

3. İstemci bağımlılıklarını yükleyin:
    ```bash
    cd client
    npm install
    ```

4. `.env` dosyasını oluşturun ve gerekli ortam değişkenlerini ayarlayın:
    ```bash
    touch server/.env
    ```

5. Sunucuyu başlatın:
    ```bash
    cd server
    npm start
    ```

6. Mobil uygulamayı çalıştırın:
    ```bash
    cd client
    npm run start
    ```

## Kullanım
- Uygulama çalıştırıldıktan sonra kullanıcı giriş ekranı ile başlayın.
- Dil seçimini yaptıktan sonra bireysel veya grup sohbetlerine katılabilirsiniz.
- Toplantı odalarına katılmak için Zoom veya Teams entegrasyonu kullanabilirsiniz.

## Katkıda Bulunma
- Katkıda bulunmak isterseniz, lütfen bir fork oluşturun ve değişikliklerinizi pull request olarak gönderin.