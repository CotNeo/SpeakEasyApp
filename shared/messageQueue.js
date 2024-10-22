const Queue = require('bull');

// Redis tabanlı bir kuyruğu başlatma
const messageQueue = new Queue('messageQueue', {
  redis: { port: 6379, host: '127.0.0.1' },
});

// Kuyruğa yeni iş ekleyen fonksiyon
const addJobToQueue = async (data) => {
  await messageQueue.add(data);
};

// Kuyruktan gelen işleri işleyen fonksiyon
messageQueue.process(async (job) => {
  const { message } = job.data;
  console.log('Processing message:', message);
  // Mesajın işlenmesi işlemleri
});

module.exports = { addJobToQueue, messageQueue };