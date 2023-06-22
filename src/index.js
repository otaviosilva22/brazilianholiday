const {moveable, national, state} = require('./common/holidays.json')
const {format} = require('./common/format');
const {verify} = require('./functions/verifyHolidays');
const {exception} = require('./common/exception');
const createdHolidays = [];

function isHoliday(date, uf = null){
    
    try{
        let dateFormated = format.formatParams(date, uf);

        let responseNational = verify.isNational(dateFormated);
        let responseState = verify.isState(dateFormated, uf);
        let responseMoveable = verify.isMoveable(dateFormated);
        let responseCreatedHolidays = verify.isCreatedHolidays(createdHolidays, dateFormated);

        const response = format.formatResponse({responseNational, responseState, responseMoveable, responseCreatedHolidays}, date);
        
        return response;
    }catch(e){
        throw {
            error: e.message
        }
    }
}

function all(){
    return {
        moveable,
        national,
        state,
        createdHolidays
    }
}

function createHoliday(params){    
    try{
        if (!Array.isArray(params)){
            exception.UserException('Invalid params');
            throw exception
        }
        params.forEach((item)=> {
            let resultFormat = format.formatParamsCreated(item);
            createdHolidays.push(resultFormat);
        });
        return createdHolidays;
    }catch(e){
        throw {
            error: e.message
        }
    }
}

module.exports = {
    brazilianHoliday: {
        isHoliday,
        all,
        createHoliday
    },
    variables: {
        createdHolidays
    }
}