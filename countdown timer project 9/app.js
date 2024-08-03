#!/usr/bin/env node
import * as readline from 'readline';
class CountdownTimer {
    duration;
    intervalId = null;
    constructor(duration) {
        this.duration = duration;
    }
    start() {
        this.intervalId = setInterval(() => {
            if (this.duration > 0) {
                console.log(`Time left: ${this.formatTime(this.duration)}`);
                this.duration--;
            }
            else {
                console.log('Time\'s up!');
                this.stop();
            }
        }, 1000);
    }
    stop() {
        if (this.intervalId) {
            clearInterval(this.intervalId);
        }
    }
    formatTime(seconds) {
        const minutes = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
    }
}
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question('Enter countdown time in seconds: ', (answer) => {
    const duration = parseInt(answer);
    if (isNaN(duration) || duration <= 0) {
        console.log('Please enter a valid positive number.');
    }
    else {
        const timer = new CountdownTimer(duration);
        timer.start();
    }
    rl.close();
});
