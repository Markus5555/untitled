function myDay(clockAlarm) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("8:00 o'clock - time to wake up")
            if (clockAlarm != 'awake') {
                reject('Back to sleep')
            } else {
                resolve('Brush my teeth')
            }
        }, 1000)
    })
}

function breakfast() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // console.log("8:15 o'clock - breakfast time")
            resolve("8:15 o'clock - breakfast time")
        }, 500)
    })
}

function gymVisit() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // console.log("8:45 o'clock - drive to the gym")
            resolve("8:45 o'clock - drive to the gym")
        }, 2000)
    })
}

function shower() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // console.log("9:30 o'clock - taking shower")
            resolve("9:30 o'clock - taking shower")
        }, 500)
    })
}

function getOffice() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            //
            resolve("10:00 o'clock - get to the office")
        }, 1000)
    })
}

function dinner() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // console.log("13:15 o'clock - dinner time")
            resolve("13:15 o'clock - dinner time")
        }, 500)
    })
}

function backHome() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // console.log("19:45 o'clock - back home")
            resolve("19:45 o'clock - back home")
        }, 1500)
    })
}

function supper() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // console.log("20:15 o'clock - drink vine and relax")
            resolve("20:15 o'clock - drink vine and relax")
        }, 2000)
    })
}


async function workPrepare() {
    try {
        const work = await myDay('awake')
        console.log(work)
        const a = await breakfast()
        console.log(a);
        const b = await gymVisit()
        console.log(b);
        const c = await shower()
        console.log(c);
        const d = await getOffice()
        console.log(d);
        const e = await dinner()
        console.log(e);
        const f = await backHome()
        console.log(f);
        const g = await supper()
        console.log(g);
    } catch (reason){
        console.warn('feel seek - stay home')
        console.warn(reason)
    }
}

workPrepare();
