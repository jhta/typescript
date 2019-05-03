var tuple;
// Initialize it
tuple = ["hello", 10]; // OK
// Initialize it incorrectly
// tuple = [10, "hello"]; // Error
var WeekendDays;
(function (WeekendDays) {
    WeekendDays[WeekendDays["friday"] = 0] = "friday";
    WeekendDays[WeekendDays["saturday"] = 1] = "saturday";
    WeekendDays[WeekendDays["sunday"] = 2] = "sunday";
})(WeekendDays || (WeekendDays = {}));
console.log(WeekendDays);
console.log(WeekendDays.friday);
console.log(WeekendDays[0]);
