const {moveable, national, state} = require('./common/holidays.json')
const {format} = require('./common/format');
const {verify} = require('./functions/verifyHolidays');

function isHoliday(date, uf = null){
    
    try{
        let dateFormated = format.formatParams(date, uf);

        let responseNational = verify.isNational(dateFormated);
        let responseState = verify.isState(dateFormated, uf);
        let responseMoveable = verify.isMoveable(dateFormated);

        const response = format.formatResponse({responseNational, responseState, responseMoveable}, date);
        
        return response;
    }catch(e){
        return {
            error: e.message
        }
    }
}

function all(){
    return {
        moveable,
        national,
        state
    }
}

module.exports = {
    brazilianHoliday: {
        isHoliday,
        all
    }
}