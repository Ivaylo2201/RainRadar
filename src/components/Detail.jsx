import { getIcon } from '../helpers/icons.js';

function Detail({ data }) {
    const units = {
        'windspeed': ' m/s',
        'cloudcover': '%',
        'pressure': ' hPa',
        'humidity': '%',
        'sunrise': '',
        'sunset': '',
        'tempmin': '°',
        'tempmax': '°',
        'visibility': ' km',
    }

    const Icon = getIcon(data[0]);
    const unit = units[data[0]];

    return (
        <div className='h-16 w-44 bg-lightblue-100 flex justify-center items-center rounded-full'>
            <Icon size={30} color='#032242' className="mr-4" />
            <div className='text-xl text-blue-400 font-bold font-montserrat'>{data[1]}{unit}</div>
        </div>
    )
}

export default Detail;