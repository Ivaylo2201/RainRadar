import { getIcon } from '../helpers/icons.js';

function Timestamp({ data }) {
    const Icon = getIcon(data.icon);

    return (
        <div className="w-24 h-full flex flex-col justify-evenly rounded-xl">
            <div className='w-full h-1/2 flex justify-center items-center'>
                <Icon size={48} color="#bbdefb" />
            </div>
            <h1 className='font-comfortaa font-bold text-blue-200'>
                {data.datetime.slice(0, 5)}
            </h1>
        </div>
    )
}

export default Timestamp;