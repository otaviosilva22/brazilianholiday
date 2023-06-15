const {national, state} = require('./holidays.json')

function formatDate(date){
    
    let splitDate = date.split('/');

    let dateFormated = new Date(`${splitDate[2]}-${splitDate[1]}-${splitDate[0]}T03:00:00`);
    
    let dayNumber = dateFormated.getDate();
    let monthNumber = dateFormated.getMonth() + 1;
    
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

function isState(date, uf){

    let ufFinded = state.find(element=> element.uf == uf);
    let holiday = null;
    if (ufFinded && ufFinded.holidays.length > 0){
        holiday = ufFinded.holidays.find(element => element.date == formatDate(date));      
    }

    return {
        holiday: holiday ? true : false,
        date,
        description: holiday ? holiday.description : false
    }

}

module.exports = {
    brazilianHoliday: {
        isNational,
        isState
    }
}