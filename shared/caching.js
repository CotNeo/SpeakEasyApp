const NodeCache = require('node-cache');
const cache = new NodeCache({ stdTTL: 100, checkperiod: 120 });

// Veriyi önbelleğe kaydeden fonksiyon
const cacheData = (key, value) => {
  cache.set(key, value);
};

// Önbellekten veriyi alan fonksiyon
const getCachedData = (key) => {
  return cache.get(key);
};

// Önbellekteki veriyi temizleyen fonksiyon
const clearCache = (key) => {
  cache.del(key);
};

module.exports = { cacheData, getCachedData, clearCache };