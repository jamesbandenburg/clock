const secondHand = document.querySelector('.second-hand')
const minuteHand = document.querySelector('.minute-hand')
const hourHand = document.querySelector('.hour-hand')

function setTime() {
    let date = new Date();

    //Logic to control LCD readout - can this be tidied up?

    function setDisplay(digit, number) {
        switch(number) {

            case '0' :
            document.getElementById(`${digit}-top`).style.opacity = 1
            document.getElementById(`${digit}-top-left`).style.opacity = 1
            document.getElementById(`${digit}-top-right`).style.opacity = 1
            document.getElementById(`${digit}-middle`).style.opacity = 0
            document.getElementById(`${digit}-bottom-left`).style.opacity = 1
            document.getElementById(`${digit}-bottom-right`).style.opacity = 1
            document.getElementById(`${digit}-bottom`).style.opacity = 1
            break;

            case '1' :
            document.getElementById(`${digit}-top`).style.opacity = 0
            document.getElementById(`${digit}-top-left`).style.opacity = 0
            document.getElementById(`${digit}-top-right`).style.opacity = 1
            document.getElementById(`${digit}-middle`).style.opacity = 0
            document.getElementById(`${digit}-bottom-left`).style.opacity = 0
            document.getElementById(`${digit}-bottom-right`).style.opacity = 1
            document.getElementById(`${digit}-bottom`).style.opacity = 0
            break;

            case '2' :
            document.getElementById(`${digit}-top`).style.opacity = 1
            document.getElementById(`${digit}-top-left`).style.opacity = 0
            document.getElementById(`${digit}-top-right`).style.opacity = 1
            document.getElementById(`${digit}-middle`).style.opacity = 1
            document.getElementById(`${digit}-bottom-left`).style.opacity = 1
            document.getElementById(`${digit}-bottom-right`).style.opacity = 0
            document.getElementById(`${digit}-bottom`).style.opacity = 1
            break;

            case '3' :
            document.getElementById(`${digit}-top`).style.opacity = 1
            document.getElementById(`${digit}-top-left`).style.opacity = 0
            document.getElementById(`${digit}-top-right`).style.opacity = 1
            document.getElementById(`${digit}-middle`).style.opacity = 1
            document.getElementById(`${digit}-bottom-left`).style.opacity = 0
            document.getElementById(`${digit}-bottom-right`).style.opacity = 1
            document.getElementById(`${digit}-bottom`).style.opacity = 1
            break;

            case '4' :
            document.getElementById(`${digit}-top`).style.opacity = 0
            document.getElementById(`${digit}-top-left`).style.opacity = 1
            document.getElementById(`${digit}-top-right`).style.opacity = 1
            document.getElementById(`${digit}-middle`).style.opacity = 1
            document.getElementById(`${digit}-bottom-left`).style.opacity = 0
            document.getElementById(`${digit}-bottom-right`).style.opacity = 1
            document.getElementById(`${digit}-bottom`).style.opacity = 0
            break;

            case '5' :
            document.getElementById(`${digit}-top`).style.opacity = 1
            document.getElementById(`${digit}-top-left`).style.opacity = 1
            document.getElementById(`${digit}-top-right`).style.opacity = 0
            document.getElementById(`${digit}-middle`).style.opacity = 1
            document.getElementById(`${digit}-bottom-left`).style.opacity = 0
            document.getElementById(`${digit}-bottom-right`).style.opacity = 1
            document.getElementById(`${digit}-bottom`).style.opacity = 1
            break;

            case '6' :
            document.getElementById(`${digit}-top`).style.opacity = 1
            document.getElementById(`${digit}-top-left`).style.opacity = 1
            document.getElementById(`${digit}-top-right`).style.opacity = 0
            document.getElementById(`${digit}-middle`).style.opacity = 1
            document.getElementById(`${digit}-bottom-left`).style.opacity = 1
            document.getElementById(`${digit}-bottom-right`).style.opacity = 1
            document.getElementById(`${digit}-bottom`).style.opacity = 1
            break;

            case '7' :
            document.getElementById(`${digit}-top`).style.opacity = 1
            document.getElementById(`${digit}-top-left`).style.opacity = 0
            document.getElementById(`${digit}-top-right`).style.opacity = 1
            document.getElementById(`${digit}-middle`).style.opacity = 0
            document.getElementById(`${digit}-bottom-left`).style.opacity = 0
            document.getElementById(`${digit}-bottom-right`).style.opacity = 1
            document.getElementById(`${digit}-bottom`).style.opacity = 0
            break;

            case '8' :
            document.getElementById(`${digit}-top`).style.opacity = 1
            document.getElementById(`${digit}-top-left`).style.opacity = 1
            document.getElementById(`${digit}-top-right`).style.opacity = 1
            document.getElementById(`${digit}-middle`).style.opacity = 1
            document.getElementById(`${digit}-bottom-left`).style.opacity = 1
            document.getElementById(`${digit}-bottom-right`).style.opacity = 1
            document.getElementById(`${digit}-bottom`).style.opacity = 1
            break;

            case '9' :
            document.getElementById(`${digit}-top`).style.opacity = 1
            document.getElementById(`${digit}-top-left`).style.opacity = 1
            document.getElementById(`${digit}-top-right`).style.opacity = 1
            document.getElementById(`${digit}-middle`).style.opacity = 1
            document.getElementById(`${digit}-bottom-left`).style.opacity = 0
            document.getElementById(`${digit}-bottom-right`).style.opacity = 1
            document.getElementById(`${digit}-bottom`).style.opacity = 1
            break;
        }

        
    } 

    //Second hand

    let seconds = date.getSeconds()
    let secondsDegrees = (seconds * 6) + 90
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`
    if (seconds < 10) {
        let firstSecond = '0'
        let secondSecond = seconds.toString()[0]
        setDisplay('second1', firstSecond)
        setDisplay('second2', secondSecond);
    } else {
        let firstSecond = seconds.toString()[0]
        let secondSecond = seconds.toString()[1]
        setDisplay('second1', firstSecond)
        setDisplay('second2', secondSecond);
    }
    
    //Minute hand

    let minutes = date.getMinutes()
    let minutesDegrees = (minutes * 6) + 90
    minuteHand.style.transform = `rotate(${minutesDegrees}deg)`
    let firstMinute = minutes.toString()[0]
    setDisplay('minute1', firstMinute)
    let secondMinute = minutes.toString()[1]
    setDisplay('minute2', secondMinute);

    // Hour hand & logic for AM/PM readout

    let hours = date.getHours()
    if (hours >= 12) {
        let hoursDegrees = ((hours - 12) * 30) + 90
        hourHand.style.transform = `rotate(${hoursDegrees}deg)`
        if ((hours - 12 < 10)) {
            let firstHour = '0'
            setDisplay('hour1', firstHour)
        } else {
            let firstHour = '1'
        setDisplay('hour1', firstHour)
        }
        let secondHour = (hours - 12).toString()[0]
        setDisplay('hour2', secondHour)
        document.getElementById('partofday').innerHTML = 'pm'
    } else {
        let hoursDegrees = (hours * 30) + 90
        hourHand.style.transform = `rotate(${hoursDegrees}deg)`
        let firstHour = hours.toString()[0]
        setDisplay('hour1', firstHour)
        let secondHour = hours.toString()[1]
        setDisplay('hour2', secondHour)
        document.getElementById('partofday').innerHTML = 'am'
    }
    
}

setInterval(setTime, 1000)