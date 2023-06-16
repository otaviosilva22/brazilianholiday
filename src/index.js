const {moveable, national, state} = require('./holidays.json')

function UserException(message){
    this.message = message,
    this.name = "UserException"
}

function validate({day, month, year}){

    if(day.length != 2 || month.length != 2 || year.length != 4){
        return false;
    }

    return true;
}

function formatDate(date){
    
    let splitDate = date.split('/');

    let dateFormated = new Date(`${splitDate[2]}-${splitDate[1]}-${splitDate[0]}T03:00:00`);
    
    let dayNumber = dateFormated.getDate();
    let monthNumber = dateFormated.getMonth() + 1;

    let day = dayNumber < 10 ? `0${dayNumber}` : dayNumber.toString();
    let month = monthNumber < 10 ? `0${monthNumber}` : monthNumber.toString();

    let formatValid = validate({day, month, year: splitDate.pop().toString()})
    
    if (!formatValid || dayNumber > 31 || monthNumber > 12){
        throw new UserException('Invalid format, please use DD/MM/YYYY format');
    }

    return {
        dayMonth: `${day}/${month}`,
        year: splitDate.pop()
    };    
}

function isNational(date){
    let holiday = national.find(element => element.date == date.dayMonth);
    let yearFinded = moveable.find(element => element.year == date.year);
    
    if (!holiday && yearFinded){
        holiday = yearFinded.holidays.find(element => element.date == date.dayMonth);
    }

    return {
        holiday: holiday ? true : false,
        date,
        description: holiday ? holiday.description : false
    }
}

function isState(date, uf){

    let ufFinded = state.find(element=> element.uf == uf);

    if (!ufFinded){
        throw new UserException('Invalid UF');
    }

    let holiday = null;
    if (ufFinded && ufFinded.holidays.length > 0){
        holiday = ufFinded.holidays.find(element => element.date == date.dayMonth);      
    }

    return {
        holiday: holiday ? true : false,
        date,
        description: holiday ? holiday.description : false
    }

}

function isHoliday(date, uf = null){
    
    try{
        let dateFormated = formatDate(date);
        let responseNational = isNational(dateFormated);
        let responseState = uf == null ? false : isState(dateFormated, uf);

        return {
            holiday: responseNational.holiday || (responseState && responseState.holiday) ? true : false,
            date,
            description: responseNational.holiday ? responseNational.description : (responseState.holiday ? responseState.description : false),
            state: responseNational.holiday ? false : (responseState.holiday ? true : false)
        }
    }catch(e){
        return {
            error: e.message
        }
    }
    
}

module.exports = {
    brazilianHoliday: {
        isHoliday
    }
}