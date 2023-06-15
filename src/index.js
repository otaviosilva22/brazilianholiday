const {national, state} = require('./holidays.json')

function formatDate(date){

    let dateFormated = new Date(date);
    
    let dayNumber = dateFormated.getDate();
    let monthNumber = dateFormated.getMonth()+1;
    
    let day = dayNumber < 10 ? `0${dayNumber}` : dayNumber;
    let month = monthNumber < 10 ? `0${monthNumber}` : monthNumber;

    return `${day}/${month}`;
}

function isNational(date){
    let holiday = national.find(element => element.date == formatDate(date));

    return {
        holiday: holiday ? true : false,
        date,
        description: holiday ? holiday.description : false
    }
}

module.exports = {
    brazilianHoliday: {
        isNational
    }
}