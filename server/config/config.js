require('dotenv').config();

module.exports = {
  port: process.env.PORT || 5000,
  dbUri: process.env.DB_URI || 'mongodb://localhost:27017/speakeasy',
  jwtSecret: process.env.JWT_SECRET || 'your_jwt_secret',
  
  // Google Cloud API bilgileri
  googleCloud: {
    projectId: process.env.GCLOUD_PROJECT_ID,
    clientEmail: process.env.GCLOUD_CLIENT_EMAIL,
    privateKey: process.env.GCLOUD_PRIVATE_KEY.replace(/\\n/g, '\n'),
  },

  // Zoom API bilgileri
  zoom: {
    apiKey: process.env.ZOOM_API_KEY,
    apiSecret: process.env.ZOOM_API_SECRET,
  },

  // Microsoft Teams API bilgileri
  teams: {
    apiKey: process.env.TEAMS_API_KEY,
  }
};