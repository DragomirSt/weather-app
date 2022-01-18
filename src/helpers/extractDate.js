
export default function extractDate(data) {

    let date = new Date(data);
    let month = date.getMonth();
    let day = date.getDate();

    let year = date.getFullYear();

    let months = ['January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'];

    return `${months[month]} / ${day} / ${year}`;

};