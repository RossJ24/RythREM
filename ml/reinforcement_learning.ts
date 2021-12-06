
/**
 * Allocates and zeros out buckets for Q-Learning.
 */
const makeSuperbuckets = () => {
    // Duration of sleep
    let superbucket =  new Array(12 * 24);
    for(let i = 0; i < superbucket.length; ++i){
        // Sleep times
        superbucket[i] = new Array(2 * 24);
        for(let j = 0; j < superbucket[i].length; ++j){
            // Wake Times
            superbucket[i][j] = new Array(2 * 24);
            for(let k = 0; k < superbucket[i][j].length; ++k){
                superbucket[i][j][k] = 0;
            }
        }
    }
}


const addToSuperBucket = (sleep: {sleep_time: Date, wake_time: Date, sleep_duration: Date}) => {

}

const getRecommendedSleep = (last_sleep: {sleep_time: Date, wake_time: Date, sleep_duration: Date}) => {

}