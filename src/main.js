function getCheapestHotel(input) { //DO NOT change the function's name.
    const lakewoodRates = {
        weekRegularRate: 110,
        weekRewardRate: 80,
        weekendRegularRate: 90,
        weekendRewardRate: 80
    }

    const bridgewoodRates = {
        weekRegularRate: 160,
        weekRewardRate: 110,
        weekendRegularRate: 60,
        weekendRewardRate: 50
    }

    const ridgewoodRates = {
        weekRegularRate: 220,
        weekRewardRate: 100,
        weekendRegularRate: 150,
        weekendRewardRate: 40
    }

    const weekDays = [1,2,3,4,5];

    const splitClient = input.split(":");
    const clientType = splitClient[0];

    const splitDate = splitClient[1].split(",");
    const firstDate = splitDate[0];
    const secondDate = splitDate[1];
    const thirdDate = splitDate[2];

    const datesOfTheWeek = {
        firstDate: new Date(firstDate).getDay(),
        secondDate: new Date(secondDate).getDay(),
        thirdDate: new Date(thirdDate).getDay()
    }

    let totalLakewood = 0;
    let totalBridgewood = 0;
    let totalRidgewood = 0;

    for (const keyDay in datesOfTheWeek) {
        if (weekDays.includes(datesOfTheWeek[keyDay])) {
            totalLakewood += clientType === 'Regular' ? lakewoodRates.weekRegularRate : lakewoodRates.weekRewardRate;
            totalBridgewood += clientType === 'Regular' ? bridgewoodRates.weekRegularRate : bridgewoodRates.weekRewardRate;
            totalRidgewood += clientType === 'Regular' ? ridgewoodRates.weekRegularRate : ridgewoodRates.weekRewardRate;
        } else {
            totalLakewood += clientType === 'Regular' ? lakewoodRates.weekendRegularRate : lakewoodRates.weekendRewardRate;
            totalBridgewood += clientType === 'Regular' ? bridgewoodRates.weekendRegularRate : bridgewoodRates.weekendRewardRate;
            totalRidgewood += clientType === 'Regular' ? ridgewoodRates.weekendRegularRate : ridgewoodRates.weekendRewardRate;
        }
    }

    const hotelNameByValue = [
        {
            name: 'Lakewood',
            value: totalLakewood,
            rating: 3
        },
        {
            name: 'Bridgewood',
            value: totalBridgewood,
            rating: 4
        },
        {
            name: 'Ridgewood',
            value: totalRidgewood,
            rating: 5
        },
    ];
    
    const cheapestHotelValue = Math.min(...[totalBridgewood, totalLakewood, totalRidgewood]);
    let cheapestHotel;

    hotelNameByValue.forEach(hotel => {
        if (hotel.value === cheapestHotelValue && cheapestHotel === undefined) {
            cheapestHotel = hotel
        } else if (hotel.value === cheapestHotelValue && cheapestHotel !== undefined) {
            if (hotel.rating > cheapestHotel.rating) {
                cheapestHotel = hotel;
            } 
        }
    });

    return cheapestHotel.name;
}

getCheapestHotel("Reward: 16Mar2009(mon), 17Mar2009(tues), 18Mar2009(wed)")

exports.getCheapestHotel = getCheapestHotel
