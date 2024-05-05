import {
    Wind, CloudRainWind, Snowflake, CloudFog,
    Cloudy, Cloud, CloudMoon, CloudSun, Sun, Moon,
    CloudLightning, CloudSunRain, CloudMoonRain,
    Gauge, Droplets, Sunrise, Sunset, ThermometerSnowflake,
    ThermometerSun, Eye
} from "lucide-react"

export function getIcon(conditions) {
    const icons = {
        'snow': Snowflake,
        'snow-showers-day': Snowflake,
        'snow-showers-night': Snowflake,
        'wind': Wind,
        'rain': CloudRainWind,
        'fog': CloudFog,
        'cloudy': Cloudy,
        'partly-cloudy-day': CloudSun,
        'partly-cloudy-night': CloudMoon,
        'clear-day': Sun,
        'clear-night': Moon,
        'thunder-rain': CloudLightning,
        'thunder-showers-day': CloudLightning,
        'thunder-showers-night': CloudLightning,
        'showers-day': CloudSunRain,
        'showers-night': CloudMoonRain,
        'windspeed': Wind,
        'cloudcover': Cloud,
        'pressure': Gauge,
        'humidity': Droplets,
        'sunrise': Sunrise,
        'sunset': Sunset,
        'tempmin': ThermometerSnowflake,
        'tempmax': ThermometerSun,
        'visibility': Eye,
        'snow': Snowflake
    }

    return icons[conditions];
}