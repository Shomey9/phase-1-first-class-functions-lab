
const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];
const returnFirstTwoDrivers = function(drivers) {
    const myFirstTwoArray = [];
    for (let i = 0; i < 2; i++) {
        myFirstTwoArray[i] = drivers[i];
    };
    return myFirstTwoArray;
};

// console.log(returnFirstTwoDrivers(array));

const returnLastTwoDrivers = function(drivers) {
    const myLastTwoArray = [];
    for (let i = drivers.length - 2; i < drivers.length; i++) {
        myLastTwoArray[i + 2 - drivers.length] = drivers[i];
    }
    return myLastTwoArray;
};

// console.log(returnLastTwoDrivers(array));

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

// console.log(selectingDrivers);

// THIS IS SO HARD


const createFareMultiplier = (multiplier) => {
   
    return (fare) => multiplier * fare;

}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = function(arrayOfDrivers, whichFunction) {
    return whichFunction(arrayOfDrivers);
}
