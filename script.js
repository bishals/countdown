const newYear = '1 Jan 2023'
const d = document.querySelector('#day')
const h = document.querySelector('#hour')
const m = document.querySelector('#min')
const s = document.querySelector('#sec')

const doubleDigit = (num) => {
    return num < 10 ? `0${num}`:num;
}
let countDown = function() {
    const newYearDate = new Date(newYear)
    const currentDate = new Date();
    const totalTimeLeft = newYearDate - currentDate

    const tSeconds = Math.floor(totalTimeLeft / 1000)
    //convert seconds to days
    const days = Math.floor(tSeconds/(24*60*60))
    //convert seconds to hours (first converting seconds to total hours then modulus of 24 will be hours left because greater than 24 will equal to day)
    const hours = Math.floor(tSeconds / (60 * 60) % 24)
    // first convert seconds to minutes then modulus of 60 will be minutes left because greater than 60 will equal to hour
    const minutes = Math.floor((tSeconds / 60) % 60)
    //modulus of 60 will be seconds left because greater than 60 will be equal to minute
    const seconds = Math.floor(tSeconds % 60)
    
    d.textContent = doubleDigit(days);
    h.textContent = doubleDigit(hours);
    m.textContent = doubleDigit(minutes);
    s.textContent = doubleDigit(seconds);

    // console.log(days, hours, minutes, seconds)
}

countDown()
setInterval(countDown, 1000)

