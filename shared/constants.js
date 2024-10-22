const SUPPORTED_LANGUAGES = ['en', 'fr', 'de', 'tr', 'ru', 'ja', 'it'];

const DEFAULT_LANGUAGE = 'en';

const API_RATE_LIMIT = 100; // Belirli bir süre içinde yapılacak maksimum istek sayısı

const MEETING_TIMEOUT = 60 * 60 * 1000; // 1 saatlik toplantı süresi

module.exports = { SUPPORTED_LANGUAGES, DEFAULT_LANGUAGE, API_RATE_LIMIT, MEETING_TIMEOUT };