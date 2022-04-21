const days = [ "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
const months = ["Jan","Feb","Mar","Apr"];

const getDays = () => days;
const getMonths = () => months;
const getDay = (dayNumber) => {
    const d = (Number.isInteger(dayNumber) && dayNumber <= days.length -1) ?
        days[dayNumber] : "";
    return d;
};


module.exports = {
    getDays,
    getMonths,
    getDay
};