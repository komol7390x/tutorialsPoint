import fs from "fs";
import { setTimeout as sleep } from "node:timers/promises";

const API_KEY = "77376e9686044a2e8d0113130252606";
const LOCATION = "Tashkent";

const year = process.argv[2];
const month = process.argv[3];

if (!year || !month) {
  console.error("Yil va oy parametrini bering!");
  process.exit(1);
}

const folder = `data/${year}-${month}`;
if (!fs.existsSync(folder)) {
  fs.mkdirSync(folder, { recursive: true });
}

const startDate = new Date(`${year}-${month}-01`);
const nextMonth = new Date(startDate);
nextMonth.setMonth(nextMonth.getMonth() + 1);

const today = new Date();

for (
  let date = new Date(startDate);
  date < nextMonth && date <= today;
  date.setDate(date.getDate() + 1)
) {
  const dateStr = date.toISOString().split("T")[0];
  const url = `http://api.weatherapi.com/v1/history.json?key=${API_KEY}&q=${LOCATION}&dt=${dateStr}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (!data.forecast) {
      console.error(`Xatolik: forecast yo'q ${dateStr}:`, data);
      continue;
    }

    const dayData = data.forecast.forecastday[0].day;

    const content = `
Date: ${dateStr}
Avg Temp: ${dayData.avgtemp_c} °C
Max Temp: ${dayData.maxtemp_c} °C
Min Temp: ${dayData.mintemp_c} °C
Condition: ${dayData.condition.text}
`;

    const filePath = `${folder}/${dateStr}.txt`;
    fs.writeFileSync(filePath, content.trim());
    console.log(`Yozildi: ${filePath}`);

  } catch (error) {
    console.error(`Xatolik ${dateStr}:`, error);
  }
}
