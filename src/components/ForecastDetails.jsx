import Detail from "./Detail";

function ForecastDetails({ data }) {
    const today = data.days[0];
    const details = [
        ['windspeed', today.windspeed],
        ['humidity', today.humidity.toFixed(0)],
        ['pressure', today.pressure.toFixed(0)],
        ['visibility', today.visibility.toFixed(0)],
        ['tempmin', today.tempmin],
        ['tempmax', today.tempmax],
        ['sunrise', today.sunrise.slice(0, 5)],
        ['sunset', today.sunset.slice(0, 5)],
    ]

    return (
        <div className='w-full h-2/5 flex justify-center flex-wrap content-center gap-5'>
            {details.map((detail, i) => (
                <Detail
                    key={i}
                    data={detail}
                />
            ))}
        </div>
    )
}

export default ForecastDetails;