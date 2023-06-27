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
    },

    isCreatedHolidays(createdHolidays, date){
        let filter_holiday = createdHolidays.filter(element => element.date == `${date.day}/${date.month}`);
        let isHoliday = {
            holiday: false,
            description: false
        }
        for(let i=0;i<filter_holiday.length;i++){
            if (filter_holiday[i].moveable) {
                if (filter_holiday[i].year == date.year){
                    isHoliday = {
                        holiday: true,
                        description: filter_holiday[i].description
                    }
                    break;
                }                
            }else{
                isHoliday = {
                    holiday: true,
                    description: filter_holiday[i].description
                }
                break;
            }
        }

        return {
            holiday: isHoliday.holiday,
            description: isHoliday.description,
            date
        }
    }
}

module.exports = {
    verify
}