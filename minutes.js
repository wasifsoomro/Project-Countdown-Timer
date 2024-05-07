import inquirer from 'inquirer';
export async function startCountDownMinutes() {
    const { minutes } = await inquirer.prompt([
        {
            type: 'input',
            name: 'minutes',
            message: 'Enter the countdown time in minutes:',
            validate: (input) => {
                const minutes = parseInt(input);
                return !isNaN(minutes) && minutes > 0;
            },
        },
    ]);
    let totalSeconds = parseInt(minutes) * 60;
    console.log(`Countdown started for ${minutes} minutes (${totalSeconds} seconds)!`);
    const countdownInterval = setInterval(() => {
        const remainingMinutes = Math.floor(totalSeconds / 60);
        const remainingSeconds = totalSeconds % 60;
        const formattedMinutes = String(remainingMinutes).padStart(2, '0');
        const formattedSeconds = String(remainingSeconds).padStart(2, '0');
        console.log(`Time left: ${formattedMinutes}:${formattedSeconds}`);
        if (totalSeconds <= 0) {
            clearInterval(countdownInterval);
            console.log('Countdown finished!');
        }
        else {
            totalSeconds--;
        }
    }, 1000);
}
