const {moveable, national, state} = require('../common/holidays.json')

const verify = {
    
    isMoveable(date){
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
    },

    isNational(date){

        let dayMonth = `${date.day}/${date.month}`;
        
        let holiday = national.find(element => element.date == dayMonth);

        return {
            holiday: holiday ? true : false,
            description: holiday ? holiday.description : false,
            date
        }
    },

    isState(date, uf){

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
}

module.exports = {
    verify
}