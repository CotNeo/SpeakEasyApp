# Proje Mimarisi

## Genel Yapı
SpeakEasy, hem mobil hem de web tabanlı bir uygulama olarak çalışır. Uygulama, çok dilli çeviri ve sesli iletişim sağlar. Hem Zoom ve Microsoft Teams gibi platformlarla entegrasyon sağlar, hem de kendi başına kullanılabilir.

## Kullanılan Teknolojiler
- **Frontend**: React Native ile mobil uygulama geliştirme
- **Backend**: Node.js ve Express.js ile REST API'ler
- **Veritabanı**: MongoDB
- **Gerçek Zamanlı İletişim**: WebSocket ile gerçek zamanlı sohbet
- **API Entegrasyonları**:
    - Google Cloud Text-to-Speech
    - Google Cloud Speech-to-Text
    - Google Cloud Translate
    - Zoom ve Microsoft Teams API'leri

## Katmanlı Mimari
- **İstemci Katmanı (Client)**: Mobil cihazlarda kullanıcı arayüzünü sağlar.
- **Sunucu Katmanı (Server)**: API uç noktalarını sağlar, kimlik doğrulama, çeviri ve ses sentezleme gibi işlemleri gerçekleştirir.
- **Veritabanı Katmanı**: Kullanıcı verilerini, mesajları ve toplantı odalarını depolar.

## Veri Akışı
1. Kullanıcı mobil uygulamada oturum açar.
2. Uygulama, sunucu ile kimlik doğrulama işlemlerini yapar.
3. Kullanıcı çeviri işlemi başlattığında, sunucu çeviri hizmetine istekte bulunur.
4. İletişim sırasında, sesli veya yazılı çeviriler gerçek zamanlı olarak kullanıcılara iletilir.