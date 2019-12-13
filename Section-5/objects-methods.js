let restaurant = {
    name: 'restaurant',
    guestCapacity: 75,
    guestCount: 0,
    checkAvailability: function (partySize) {
        let seatsLeft = this.guestCapacity - this.guestCount
        return partySize <= seatsLeft
    }
}

let status = restaurant.checkAvailability(1)

console.log(status)

// a method are a object property whose value is a function