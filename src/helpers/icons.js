import {
    Wind, CloudRainWind, Snowflake, CloudFog,
    Cloud, CloudMoon, CloudSun, Sun, Moon,
    CloudLightning, CloudSunRain, CloudMoonRain
} from "lucide-react"

export function getIcon(conditions) {
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

    return icons[conditions];
}