import { arrayExpression } from "@babel/types";
import { SleepEntry } from "../types";


const TIME_STRS = [
    "12:00 AM",
    "12:30 AM",
    "1:00 AM",
    "1:30 AM",
    "2:00 AM",
    "2:30 AM",
    "3:00 AM",
    "3:30 AM",
    "4:00 AM",
    "4:30 AM",
    "5:00 AM",
    "5:30 AM",
    "6:00 AM",
    "6:30 AM",
    "7:00 AM",
    "7:30 AM",
    "8:00 AM",
    "8:30 AM",
    "9:00 AM",
    "9:30 AM",
    "10:00 AM",
    "10:30 AM",
    "11:00 AM",
    "11:30 AM",
    "12:00 PM",
    "12:30 PM",
    "1:00 PM",
    "1:30 PM",
    "2:00 PM",
    "2:30 PM",
    "3:00 PM",
    "3:30 PM",
    "4:00 PM",
    "4:30 PM",
    "5:00 PM",
    "5:30 PM",
    "6:00 PM",
    "6:30 PM",
    "7:00 PM",
    "7:30 PM",
    "8:00 PM",
    "8:30 PM",
    "9:00 PM",
    "9:30 PM",
    "10:00 PM",
    "10:30 PM",
    "11:00 PM",
    "11:30 PM",
]

export const getBestDuration = (sleepEntries: Array<SleepEntry>) => {
    const vals = Array<number>(12);
    for (let i = 0; i < vals.length; ++i) {
        vals[i] = 0;
    }
    for (let i = 0; i < sleepEntries.length; ++i) {
        const sleepHour = sleepEntries[i].sleepTime.getHours();
        const wakeHour = sleepEntries[i].wakeTime.getHours();
        const hours = computeDuration(sleepHour, wakeHour);
        vals[hours % 12] += sleepEntries[i].quality;
    }
    const max = Math.max.apply(null, vals);
    return vals.indexOf(max);
}

export const getBestBedtime = (sleepEntries: Array<SleepEntry>) => {
    const vals = Array<number>(TIME_STRS.length);
    for (let i = 0; i < vals.length; ++i) {
        vals[i] = 0;
    }
    for (let i = 0; i < sleepEntries.length; ++i) {
        const sleepHour = sleepEntries[i].sleepTime.getHours();
        const sleepMin = sleepEntries[i].sleepTime.getMinutes();
        let idx = sleepHour * 2;
        idx = sleepMin < 30 ? idx : idx + 1;
        vals[idx] += sleepEntries[i].quality;
    }
    const max = Math.max.apply(null, vals);
    const argMax = vals.indexOf(max);
    return vals.every(item => item === 0) ? null : TIME_STRS[argMax];
}

export const getBestWaketime = (sleepEntries: Array<SleepEntry>) => {
    const vals = Array<number>(TIME_STRS.length);
    for (let i = 0; i < vals.length; ++i) {
        vals[i] = 0;
    }
    for (let i = 0; i < sleepEntries.length; ++i) {
        const wakeHour = sleepEntries[i].wakeTime.getHours();
        const wakeMin = sleepEntries[i].wakeTime.getMinutes();
        let idx = wakeHour * 2;
        idx = wakeMin < 30 ? idx : idx + 1;
        vals[idx] += sleepEntries[i].quality;
    }
    const max = Math.max.apply(null, vals);
    const argMax = vals.indexOf(max);
    return vals.every(item => item === 0) ? null : TIME_STRS[argMax];
}

const computeDuration = (sleepHour: number, wakeHour: number) => {
    const hours1 = Math.abs(wakeHour - sleepHour);
    const hours2 = Math.abs(sleepHour - wakeHour);
    const hours = Math.min(hours1, hours2);
    return hours;
}

const mapAgeToSleepDuration = (age:number) => {
    if(age < 1){
        return 14;
    } else if(age < 3){
        return 13;
    } else if(age < 6){
        return 12;
    } else if(age < 14){
        return 10;
    } else if(age < 18){
        return 9;
    } else {
        return 8;
    }
}

export const getAccumulatedSleepDebt = (sleepEntries: Array<SleepEntry>, age: number) => {
    const recommendedSleep = mapAgeToSleepDuration(age);
    return sleepEntries.map((entry)=> computeDuration(entry.sleepTime.getHours(),entry.wakeTime.getHours())).reduce((acc, n) => acc + recommendedSleep - n, 0)
}