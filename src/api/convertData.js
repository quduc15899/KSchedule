
import getData from './getData';

var obj = {};
var getDaysInMonth = (month) => {
    return new Date(2019, month, 0).getDate();
};
var getAllDay = () => {

    for (let month = 1; month <= 12; month++) {
        for (let day = 1; day <= getDaysInMonth(month); month++) {
            if (day < 10) { day = '0' + day }
            if (month < 10) { month = '0' + month }
            console.log("2019-" + month + "-" + day);
        }

    }
}
var convertDate = (day) => {
    var today = new Date(day);
    var month = today.getMonth() + 1;

    var day = today.getDate();
    if (day < 10) { day = '0' + day }
    if (month < 10) { month = '0' + month }
    var year = today.getFullYear();

    return year + "-" + month + "-" + day;
};
const convertData = () => {
    getData()
    .then(resJSON => {
        if(resJSON.success==false) {return false}
        else {
            resJSON.data.schedule.map(e=>{
               var addItem = {[convertDate(e.date)]:e.lesson_list};
               obj=Object.assign(addItem,obj);
            })
            return JSON.stringify(obj)  ;
        };
    })
    
}
export default convertData;