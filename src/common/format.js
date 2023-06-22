const {validator} = require('./validator');
const {exception} = require('./exception');

const format = {

    formatParams(date, uf){

        const resultValidate = validator.validate(date, uf);
        
        if (!resultValidate){
            exception.UserException('Invalid params');
            throw exception
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
    },

    formatResponse({responseNational, responseState, responseMoveable}, date){

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
}

module.exports = {
    format
}