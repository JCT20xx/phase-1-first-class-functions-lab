const returnFirstTwoDrivers = function (drivers) {
    return drivers.slice(0,2);
};

const returnLastTwoDrivers = function (drivers) {
    return drivers.slice(-2);
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = num1 => {
    return num2 => {
        return num1 *num2;
    }
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = (arrayOfDrivers, func) => func(arrayOfDrivers)