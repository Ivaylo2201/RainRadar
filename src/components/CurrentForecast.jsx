import { getIcon } from '../helpers/icons.js'
import { getDate } from '../helpers/date.js';

function CurrentForecast({ data }) {
    const today = data.days[0];
    const Icon = getIcon(today.icon);
    const date = getDate(today.datetimeEpoch);
    
    return (
        <div className="w-full h-full flex flex-col justify-center items-center rounded-lg">
            <div className='font-montserrat text-blue-100 text-2xl font-bold'>
                {data.address}
            </div>
            <Icon size={160} color="#bbdefb" className="mb-6 mt-6" />
            <div className='font-montserrat text-xl text-blue-200 font-bold mb-4'>
                {date.weekday}, {date.day} {date.month}
                </div>
            <div className='text-2xl font-bold font-comfortaa text-lightblue-100'>
                {today.temp}°
            </div>
        </div>
    )
}

export default CurrentForecast;