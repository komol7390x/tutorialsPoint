import path from 'path';
import { fileURLToPath } from 'url';

import { allTotalDay, dayMonth, createFolder, writeToFile,getWeatherInfo } from '../helper/weather.help.js'

// ---------------------------------------------------------------------
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

let startDate = new Date('2024-07-01');
const uploadsFolder = path.join(__dirname, '../', 'uploads')
// -----------------------------------------------------------------------
export const getWeather = async() => {
    const finish = allTotalDay(startDate)
    await createFolder(uploadsFolder)

    for (let i = 0; i < finish; i++) {
        startDate.setDate(startDate.getDate() + 1);
        const { day, month, year } = dayMonth(startDate)
        const yearPath = path.join(uploadsFolder, `${year}`);
        await createFolder(yearPath)

        const monthPath = path.join(yearPath, `${year}-${month}`)
        await createFolder(monthPath)

        const dayPath = path.join(monthPath, `${year}-${month}-${day}.txt`)
        const resultDay=startDate.toISOString().split('T')[0]
        // const info=await getWeather(resultDay)
        // console.log(info);
        await writeToFile(dayPath, 'salom')
    }
}


