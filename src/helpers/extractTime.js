
export default function extractTime(data) {
    let time = data.slice(0, -9).split('T');
    let timeInfo = time[1];
    return timeInfo;
};