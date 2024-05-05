import {
    Wind, CloudRainWind, Snowflake, CloudFog,
    Cloud, CloudMoon, CloudSun, Sun, Moon,
    CloudLightning, CloudSunRain, CloudMoonRain
} from "lucide-react"

function UpcomingCard({ timestamp, icon, weather, temperature }) {
    const getDay = (timestamp) => {
        const date = new Date(timestamp * 1000);
        const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        return days[date.getDay()];
    }

    const icons = {
        'snow': Snowflake,
        'snow-showers-day': Snowflake,
        'snow-showers-night': Snowflake,
        'wind': Wind,
        'rain': CloudRainWind,
        'fog': CloudFog,
        'cloudy': Cloud,
        'partly-cloudy-day': CloudSun,
        'partly-cloudy-night': CloudMoon,
        'clear-day': Sun,
        'clear-night': Moon,
        'thunder-rain': CloudLightning,
        'thunder-showers-day': CloudLightning,
        'thunder-showers-night': CloudLightning,
        'showers-day': CloudSunRain,
        'showers-night': CloudMoonRain
    }

    const Icon = icons[icon];

    return (
        <div className="flex flex-col justify-center items-center w-36 h-full">
            <div className="text-blue-100 font-bold font-montserrat">{getDay(timestamp)}</div>
            <div className="w-3/4 h-2/4 mt-1 mb-1 flex justify-center items-center">
                <Icon size={82} color="#bbdefb" />
            </div>
            <div className="text-blue-200 font-bold mb-2">{weather.split(",")[0]}</div>
            <div className="w-3/5 flex justify-evenly">
                <div className="text-lg font-bold font-comfortaa text-lightblue-100">
                    {temperature.min.toFixed(0)}°
                </div>
                <div className="text-lightblue-100">/</div>
                <div className="text-lg font-bold font-comfortaa text-lightblue-100">
                    {temperature.max.toFixed(0)}°
                </div>
            </div>
        </div>
    )
}

export default UpcomingCard;