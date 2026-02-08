function calculateSimpleInterest(
    principal,
    dailyInterest,
    startingDate,
    endingDate
) {

    try {
        var day = new Date(endingDate) - new Date(startingDate) / (1000 * 60 * 60 * 24);
        var inetest=principal*dailyInterest*day/100;
        var t=isNaN(inetest)?8:5;
        console.log(inetest)

        return day * principal * dailyInterest / 100;

    } catch (error) {
        return -1;
    }

}

console.log(calculateSimpleInterest(20000,
    's',
    30,
    "2021-08-27"));