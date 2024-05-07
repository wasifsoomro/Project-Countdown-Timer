
import inquirer from "inquirer";

export async function startCountDownSeconds(){
    let { seconds } = await inquirer.prompt({
        type: "input",
        name: "seconds",
        message: "Enetr a Time in second",
        validate: ( input: string)=>{
            const seconds = parseInt(input)
            return !isNaN(seconds) && seconds > 0;
        }    
    })
    

    let secondsLeft = parseInt(seconds)
     console.log("Count Down Start")
     
     const countdownInterval = setInterval(() => {
        let formattedSeconds = String(secondsLeft).padStart(2, '0')
        console.log(`Time left:  ${formattedSeconds} seconds`);
    
        if(secondsLeft <=0){
            clearInterval(countdownInterval)
            console.log("Count Down Finished")
        }else{
            secondsLeft--
        }
    },1000)
}


