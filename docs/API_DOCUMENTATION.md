# API Dökümantasyonu

## Kimlik Doğrulama

### POST `/auth/register`
- Açıklama: Yeni bir kullanıcı kaydı yapar.
- Gerekli Parametreler:
    - `email`: Kullanıcı e-posta adresi
    - `password`: Kullanıcı şifresi
- Yanıt:
    - 201: Başarılı
    - 500: Kayıt hatası

### POST `/auth/login`
- Açıklama: Var olan bir kullanıcıyı giriş yapar.
- Gerekli Parametreler:
    - `email`: Kullanıcı e-posta adresi
    - `password`: Kullanıcı şifresi
- Yanıt:
    - 200: JWT token döner
    - 401: Hatalı şifre

## Çeviri İşlemleri

### POST `/translate`
- Açıklama: Metni istenilen dile çevirir.
- Gerekli Parametreler:
    - `text`: Çevrilecek metin
    - `targetLanguage`: Hedef dil kodu (örn. 'fr', 'de')
- Yanıt:
    - 200: Çeviri başarılı, çevirilen metni döner
    - 500: Çeviri hatası

## Ses İşlemleri

### POST `/voice/synthesize`
- Açıklama: Metni sese dönüştürür.
- Gerekli Parametreler:
    - `text`: Sesli olarak okunacak metin
    - `voiceOptions`: Ses kişiselleştirme ayarları (dil kodu, ses türü, hız vb.)
- Yanıt:
    - 200: Ses dosyası MP3 formatında döner
    - 500: Ses sentezleme hatası

## Toplantı Odası Yönetimi

### POST `/room/create`
- Açıklama: Yeni bir toplantı odası oluşturur.
- Gerekli Parametreler:
    - `name`: Oda ismi
- Yanıt:
    - 201: Oda başarıyla oluşturuldu
    - 500: Oda oluşturma hatası

### GET `/room/join/:roomId`
- Açıklama: Belirtilen toplantı odasına katılmayı sağlar.
- Gerekli Parametreler:
    - `roomId`: Oda ID'si
- Yanıt:
    - 200: Odaya katılım başarılı
    - 404: Oda bulunamadı