const {brazilianHoliday} = require('../index');
const {national, state, moveable} = require('../common/holidays.json');
const {format} = require('../common/format');

describe("Index tests", () =>{
    it("Should return json holidays", ()=>{
        let result = brazilianHoliday.all();
        expect(result).toEqual({moveable, national, state, createdHolidays: []});
    });

    it("Should return a catch exception to isHoliday", ()=>{
        try{
            let result = brazilianHoliday.isHoliday('01/01/202'); 
        }catch(e){
            expect(e).toEqual({error: 'Invalid params'});
        }        
    });

    it("Should return a catch exception to createHoliday", ()=>{
        try{
            let result = brazilianHoliday.createHoliday({}); 
        }catch(e){
            expect(e).toEqual({error: 'Invalid params'});
        }
    });
    it("Should return success to createHoliday with differents and equals holidays", ()=>{
        let params = [{
            date: '15/05/2023',
            description: 'Aniversário de Passos',
            city: 'Passos',
            uf: 'MG',
            moveable: false
        },
        {
            date: '15/05/2023',
            description: 'Aniversário de Passos',
            city: 'Passos',
            uf: 'MG',
            moveable: false
        },
        {
            date: '06/08/2023',
            description: 'Dia de Bom Jesus dos Passos',
            city: 'Passos',
            uf: 'MG',
            moveable: true
        },
        {
            date: '06/08/2024',
            description: 'Dia de Bom Jesus dos Passos',
            city: 'Passos',
            uf: 'MG',
            moveable: true
        }]
        let result = brazilianHoliday.createHoliday(params);
        
        expect(result).toEqual([{
            date: '15/05',
            year: '2023',
            city: 'Passos',
            uf: 'MG',
            description: 'Aniversário de Passos',
            moveable: false
        },
        {
            date: '06/08',
            year: '2023',
            city: 'Passos',
            uf: 'MG',
            description: 'Dia de Bom Jesus dos Passos',
            moveable: true
        },
        {
            date: '06/08',
            year: '2024',
            description: 'Dia de Bom Jesus dos Passos',
            city: 'Passos',
            uf: 'MG',
            moveable: true
        }])
    });
    
    it("Should return error to createHoliday", ()=>{
        try{
            let params = [{
                date: '15/05/202',
                description: 'Aniversário de Passos',
                city: 'Passos',
                uf: 'MG',
                moveable: false
            }]
            let result = brazilianHoliday.createHoliday(params);
            
        }catch(e){
            expect(e).toEqual({error: 'Invalid params'});
        }
        
    })

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