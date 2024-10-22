// Verilen süreyi milisaniyeye çeviren yardımcı fonksiyon
const convertToMilliseconds = (hours, minutes, seconds) => {
    return ((hours * 60 * 60) + (minutes * 60) + seconds) * 1000;
  };
  
  // Rastgele benzersiz bir ID oluşturan fonksiyon
  const generateUniqueId = () => {
    return Math.random().toString(36).substr(2, 9);
  };
  
  // Zamanı güzel bir biçimde biçimlendiren fonksiyon
  const formatTimestamp = (timestamp) => {
    const date = new Date(timestamp);
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`;
  };
  
  module.exports = { convertToMilliseconds, generateUniqueId, formatTimestamp };