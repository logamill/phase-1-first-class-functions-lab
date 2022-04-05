const arrayOfDrivers = []

const returnFirstTwoDrivers = function (arrayOfDrivers) {
    return arrayOfDrivers.slice(0, 2);
} 

const returnLastTwoDrivers = function(arrayOfDrivers) {
    return arrayOfDrivers.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

selectingDrivers;

const createFareMultiplier = function(param1) {
    return function param1(fareNumber) {
        return fareNumber * fareNumber;
    }
};

const fareDoubler = function(param1) {
    return param1 * 2;
}

const fareTripler = function(param1) {
    return param1 * 3;
}

const selectDifferentDrivers = function(arrayOfDrivers, variableFunction) {
    if (variableFunction == returnFirstTwoDrivers) {
        return returnFirstTwoDrivers(arrayOfDrivers);
    }
    else if (variableFunction == returnLastTwoDrivers) {
        return returnLastTwoDrivers(arrayOfDrivers);
    }
}