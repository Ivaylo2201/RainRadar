import { getIcon } from '../helpers/icons.js';
import { getDate } from '../helpers/date.js';

function UpcomingCard({ timestamp, icon, weather, temperature }) {

    const Icon = getIcon(icon);

    return (
        <div className="flex flex-col justify-center items-center w-36 h-full">
            <div className="text-blue-100 font-bold font-montserrat">{getDate(timestamp).weekday.slice(0, 3)}</div>
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