import inquirer from "inquirer";

//create a asynchronous function and export it to make usable in other files
export async function startCountDownHours(){
    let { hours } = await inquirer.prompt({
        type: "input",
        name: "hours",
        message: "Enter the countdown time in hours",
        validate: (input : string)=>{
            const hours = parseInt(input)
            return !isNaN(hours) && hours > 0
        }
    })
    
    //Multiplying user value with 3600, in one hour have 3600 seconds so i multiply it
    let totalSeconds = parseInt(hours)*3600
    console.log(`Count Down start for ${hours} hours (${totalSeconds} seconds)!`)
    
    //create setinterval function that schedules repeated execution of callback every delay milliseconds.
    let countDownInterval = setInterval(()=>{
        //this line calculates remaining seconds in current minutes
        let remainingSeconds = totalSeconds % 60
        //this line calculates remaining seconds in current minutes
        let remainingMinutes = Math.floor(totalSeconds / 60) %60
        //this line calculates remaining hours
        let remaininghours = Math.floor(totalSeconds / 3600)
    
        //Here i formate my timer in two digits like 01:04:09
        let formatedHours = String(remaininghours).padStart(2, '0')
        let formattedMinutes = String(remainingMinutes).padStart(2, '0')
        let formattedSeconds = String(remainingSeconds).padStart(2, '0')
    
        console.log(`Time Left: ${formatedHours}:${formattedMinutes}:${formattedSeconds}`)
    //if condition checks when time become zero count down finished other wise count down works untill 0 second
        if(totalSeconds <= 0){
            clearInterval(countDownInterval)
            console.log("Countdown Finished")
        }else{
            totalSeconds--
        }
    },1000)
}

