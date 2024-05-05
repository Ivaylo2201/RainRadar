export function getDate(timestamp) {
    const date = new Date(timestamp * 1000);
    const days = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
    ];
    const months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
    ];

    return {
        weekday: days[date.getDay()],
        day: date.getDate(),
        month: months[date.getMonth()],
    }
}
