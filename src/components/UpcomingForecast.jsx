import UpcomingCard from "./UpcomingCard";

function UpcomingForecast({ data }) {
    const days = data.days.slice(1, 8).map((day) => ({
        timestamp: day.datetimeEpoch,
        icon: day.icon,
        weather: day.conditions,
        temperature: { min: day.tempmin, max: day.tempmax },
    }))

    return (
        <div className="w-full h-64 flex justify-evenly items-center rounded-xl">
            {days.map((day, i) => (
                <UpcomingCard key={i}
                    timestamp={day.timestamp}
                    icon={day.icon}
                    weather={day.weather}
                    temperature={{ min: day.temperature.min, max: day.temperature.max }}
                />
            ))}
        </div>
    )
}

export default UpcomingForecast;