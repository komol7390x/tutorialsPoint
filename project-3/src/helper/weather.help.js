import path from 'path';
import { fileURLToPath } from 'url';
import { existsSync, mkdirSync, writeFileSync } from 'fs'
// --------------------------------------------------
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const API_KEY = "77376e9686044a2e8d0113130252606";
const LOCATION = "Tashkent";
// --------------------------------------------------
const allTotalDay = (item) => {
    const nowDay = new Date('2025-07-01');
    const res = nowDay - item;
    return (res / (1000 * 60 * 60 * 24))
}
const dayMonth = (item) => {
    const day = item.getDate()
    const month = item.getMonth() + 1
    const year = item.getFullYear()
    return { day, month, year }
}
const createFolder = async (item) => {
    if (!existsSync(item)) {
        mkdirSync(item, { recursive: true })
    }
}
const writeToFile =async (path, data) => {
    writeFileSync(path, data)
}

const getWeatherInfo = async (dateString) => {
    const url = `http://api.weatherapi.com/v1/history.json?key=${API_KEY}&q=${LOCATION}&dt=${dateString}`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        if (!data.forecast) {
            return (`Xatolik: forecast yo'q ${dateString}:`, data);
        }
        const dayData = data.forecast.forecastday[0].day;
        return `
        Date:  ${dateString}
        Avg Temp: ${dayData.avgtemp_c} °C
        Max Temp: ${dayData.maxtemp_c} °C
        Min Temp: ${dayData.mintemp_c} °C
        Condition: ${dayData.condition.text}
        `
    } catch (error) {
        console.error(`Xatolik ${dateString}:`, error);
    }
}

export {
    allTotalDay,
    dayMonth,
    createFolder,
    writeToFile,
    getWeatherInfo
}
// const res=await getWeatherInfo('2024-12-03');
// console.log(res);
