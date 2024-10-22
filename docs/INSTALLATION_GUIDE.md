# Kurulum Rehberi

## Gereksinimler
- Node.js (v14 ve üzeri)
- MongoDB (yerel veya bulut tabanlı)
- Google Cloud API anahtarları (Text-to-Speech, Speech-to-Text, Translate)
- Zoom ve Teams API anahtarları

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

4. MongoDB'yi başlatın veya bağlantınızı kurun. `.env` dosyasına MongoDB URI'sini ekleyin.

5. Google Cloud ve Zoom/Teams API anahtarlarını **.env** dosyasına ekleyin:
    ```bash
    touch server/.env
    ```

6. Sunucuyu başlatın:
    ```bash
    cd server
    npm start
    ```

7. Mobil uygulamayı başlatın:
    ```bash
    cd client
    npm run start
    ```

## Ortam Değişkenleri
Aşağıdaki değişkenler **.env** dosyasına eklenmelidir:
```env
PORT=5000
JWT_SECRET=your_jwt_secret
DB_URI=mongodb://localhost:27017/speakeasy
GCLOUD_PROJECT_ID=your-google-cloud-project-id
GCLOUD_CLIENT_EMAIL=your-google-cloud-client-email
GCLOUD_PRIVATE_KEY=your-google-cloud-private-key
ZOOM_API_KEY=your_zoom_api_key
ZOOM_API_SECRET=your_zoom_api_secret
TEAMS_API_KEY=your_teams_api_key