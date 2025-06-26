import { url } from "inspector";

const getWeather=async()=>{
    url=await fetch('https://archive-api.open-meteo.com/v1/archive?latitude=41.3111&longitude=69.2797&start_date=1979-01-01&end_date=2025-01-01&daily=temperature_2m_max,temperature_2m_min,precipitation_sum&timezone=Asia/Tashkent')
    .then(res=>res.json())
    console.log(url);
    
}
async function salom(){
    await getWeather()
}
salom()

