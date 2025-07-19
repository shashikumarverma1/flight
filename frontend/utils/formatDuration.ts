import moment from "moment"

export const minToHour=(totalMinutes:any)=>{
    const duration = moment.duration(totalMinutes, 'minutes');
    const hours = duration.hours();
const minutes = duration.minutes();

return`${hours}h : ${minutes}m`; // Output: "6h 40m"
     
}