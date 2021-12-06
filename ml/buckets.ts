



const makeGTSBucket = () => {
    let arr = new Array<number>(48);
    for(let i = 0; i < arr.length; ++i){
        arr[i] = 0;
    }
    return arr;
}

const makeWakeBucket = () => {
    let arr = new Array<number>(48);
    for(let i = 0; i < arr.length; ++i){
        arr[i] = 0;
    }
    return arr;
}

const makeDurationBucket = () => {
    let arr = new Array<number>(24 * 12);
    for(let i = 0; i < arr.length; ++i){
        arr[i] = 0;
    }
    return arr;
}

const clearBuckets = () => {
    
}

const addToGTSBucket = (time: number) => {

}
