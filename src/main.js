import express from 'express';
import client from 'prom-client';

const app = express();
const register = new client.Registry();

// Default metrics (CPU, RAM, va boshqalar)
client.collectDefaultMetrics({ register });

// Custom metric — random qiymat
const randomGauge = new client.Gauge({
  name: 'custom_random_number',
  help: 'Random qiymat test metrigi'
});
register.registerMetric(randomGauge);
let c=0
// Har 5 soniyada yangilash
setInterval(() => {

  const value = Math.floor(Math.random() * 100);
  randomGauge.set(value);
  console.log(`Random metric updated: ${c++}`);
}, 60000);

// Metrics endpoint
app.get('/metrics', async (req, res) => {
  res.set('Content-Type', register.contentType);
  res.end(await register.metrics());
});

app.listen(3000, () => {
  console.log('Metrics server: http://localhost:3000/metrics');
});
