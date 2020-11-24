const showTime = ()=>{
    const date = new Date();
    return date.getHours()+"Hrs: "+date.getMinutes()+"Min: "+date.getSeconds()+"Sec: "
}
const showSessionExpire = ()=>{
    console.log("Activity B: Your session has expired at: "+showTime())
}
console.log("Activity A: Triggering Activity-B at: "+showTime());
setTimeout(showSessionExpire,3000);
console.log("Activity A: Triggering Activity-B at: "+showTime()+" will execute after 3 seconds!")