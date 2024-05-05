import Timestamp from './Timestamp';

function Timeline({ data }) {
    const LIMIT = 6;
    const now = new Date().getHours();
    const todayHours = data.days[0].hours;
    let hours = todayHours.slice(now);

    if (hours.length < LIMIT) {
        const futureHours = data.days[1].hours;
        hours.push(...futureHours.slice(0, LIMIT - hours.length))
    }

    return (
        <div className='w-full h-2/5 flex justify-around items-center'>
            {hours.map((hour, i) => (
                <Timestamp
                    key={i}
                    data={hour}
                />
            ))}
        </div>
    )
}

export default Timeline;