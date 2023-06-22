const {brazilianHoliday} = require('../index');
const {national, state, moveable} = require('../common/holidays.json');
const {format} = require('../common/format');

beforeAll(() => {
    console.log('Initializing tests!');
});

describe("Index tests", () =>{
    it("Should return json holidays", ()=>{
        let result = brazilianHoliday.all();
        expect(result).toEqual({moveable, national, state});
    });

    it("Should return a catch exception", ()=>{
        let result = brazilianHoliday.isHoliday('01/01/202'); 
        expect(result).toEqual({error: 'Invalid params'});
    });

    it ("Should return isHoliday response", ()=> {
        let date = '01/01/2023';        
        
        jest.spyOn(format, 'formatParams').mockImplementation(()=> {
            return {
                day: '01', month: '01', year: '2023'
            }
        })
        
        jest.spyOn(format, 'formatResponse').mockImplementation(()=>{
            return {
                holiday: true,
                description: 'Confraternização Universal',
                date
            }
        })
        let result = brazilianHoliday.isHoliday(date);
        expect(result).toEqual({  
            holiday: true,
            description: 'Confraternização Universal',
            date
        });
    });    
});