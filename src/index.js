const {moveable, national, state} = require('./holidays.json')

function UserException(message){
    this.message = message,
    this.name = "UserException"
}

function validate(date){

    let regex = /^(\d{2})\/(\d{2})\/(\d{4})$/.test(date);

    if (!regex)
        return false;

    return true;
}

function formatDate(date){

    const resultValidate = validate(date);
    
    if (!resultValidate){
        throw new UserException('Invalid format, please use DD/MM/YYYY');
    }
    
    let dateSplited = date.split('/'); 
    let dateFormated = new Date(`${dateSplited[2]}-${dateSplited[1]}-${dateSplited[0]}T03:00:00`)
    
    let day = dateFormated.getDate();
    let month = dateFormated.getMonth() + 1;
    let year = dateFormated.getFullYear();
   
    return {
        day: day < 10 ? `0${day}` : day.toString(),
        month: month < 10 ? `0${month}` : month.toString(),
        year: year.toString()
    }
}

function formatResponse({responseNational, responseState, responseMoveable}, date){

    let holiday = false, description = false;
    if (responseNational.holiday){
        holiday = true,
        description = responseNational.description;
    }else if(responseMoveable.holiday){
        holiday = true,
        description = responseMoveable.description;
    }else if(responseState.holiday){
        holiday = true,
        description = responseState.description;
    }

    return {
        holiday,
        description,
        date
    }
}

function isMoveable(date){
    let dayMonth = `${date.day}/${date.month}`;

    let yearFinded = moveable.find(element => element.year == date.year);

    if (!yearFinded){
        return {
            holiday: false,
            description: false,
            date            
        }
    }

    let holiday = yearFinded.holidays.find(element => element.date == dayMonth);

    return {
        holiday: holiday ? true : false,
        description: holiday ? holiday.description : false,
        date
    }
}

function isNational(date){

    let dayMonth = `${date.day}/${date.month}`;
    
    let holiday = national.find(element => element.date == dayMonth);

    return {
        holiday: holiday ? true : false,
        description: holiday ? holiday.description : false,
        date
    }
}

function isState(date, uf){

    if (uf == null){
        return {
            holiday: false,
            description: false,
            date
        }
    }

    let ufFinded = state.find(element=> element.uf == uf);

    let holiday = null;

    if (ufFinded && ufFinded.holidays.length > 0){
        let dayMonth = `${date.day}/${date.month}`;
        holiday = ufFinded.holidays.find(element => element.date == dayMonth);      
    }

    return {
        holiday: holiday ? true : false,
        description: holiday ? holiday.description : false,
        date        
    }
}

function isHoliday(date, uf = null){
    
    try{
        let dateFormated = formatDate(date);
        
        let responseNational = isNational(dateFormated);
        let responseState = isState(dateFormated, uf);
        let responseMoveable = isMoveable(dateFormated);

        const response = formatResponse({responseNational, responseState, responseMoveable}, date);
        
        return response;
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