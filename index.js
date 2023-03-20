// Code your solution in this file!
// selectDifferentDrivers() — This function takes two arguments, an array of the names of Scuber's drivers and either the returnFirstTwoDrivers() or returnLastTwoDrivers() function. Based on these two arguments, selectDifferentDrivers() will return either the first two drivers or the last two drivers.

const returnFirstTwoDrivers = drivers => drivers.slice(0, 2);

const returnLastTwoDrivers = drivers => drivers.slice(-2);

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = integerToMultiply => {
    return function(fare) {
        return fare * integerToMultiply;
    }
}

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = function(drivers, driverSelection) {
    return driverSelection(drivers)    
};