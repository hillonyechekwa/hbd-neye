
const timeLeft = document.getElementById("timeleft")
const webpage = document.getElementById('webpage')

const birthday = new Date('09/29/2023')

console.log('birthday', birthday)
const second = 1000
const minute = second * 60
const hour = minute * 60
const day = hour * 24
let timerId

function countDown() {
  const today = new Date()
  const timeSpan = birthday - today
  //milliseconds
//   console.log('timespan',timeSpan)

//   if (timeSpan <= day) {
//     timeLeft.classList.add("hidden")
//     webpage.classList.remove("hidden")
//     clearInterval(timerId)
//     return
//   }

  if (timeSpan <= 0) {
    timeLeft.classList.add("hidden")
    webpage.classList.remove("hidden")
    clearInterval(timerId)
    return
  }


  const days = Math.floor(timeSpan / day)
  const hours = Math.floor((timeSpan % day) / hour)       
  const minutes = Math.floor((timeSpan % hour) / minute)  
  const seconds = Math.floor((timeSpan % minute) / second)


  timeLeft.innerHTML =
    days + 'days ' + hours + 'hrs ' + minutes + 'mins ' + seconds + 'secs'
}

timerId = setInterval(countDown, second)