const EventDate = new Date("2023-11-15")

// current date is 2023-11-11
function countDays(EventDate){
    const todayDate = new Date();
    const days = todayDate.getDate();
    const days2 = EventDate.getDate();
    return days2-days;
}

console.log(`remaining days are : ${countDays(EventDate)}`);