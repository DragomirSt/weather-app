
export default function extractTime(data) {
    let time = data.slice(0, -6).split('T');
    let timeInfo = time[1];
    return timeInfo;
};