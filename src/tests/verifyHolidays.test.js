const {verify} = require('../functions/verifyHolidays');
describe("functions tests", () =>{
    it("Should return year not found to isMoveable", ()=>{
        let date = {
            day: '01',
            month: '01',
            year: '2024'
        }
        let result = verify.isMoveable(date);
        expect(result).toEqual({
            holiday: false,
            description: false,
            date            
        });
    });

    it("Should return isn't to isMoveable", ()=>{
        let date = {
            day: '01',
            month: '01',
            year: '2023'
        }
        let result = verify.isMoveable(date);
        expect(result).toEqual({
            holiday: false,
            description: false,
            date            
        });
    });

    it("Should return holiday to isMoveable", ()=>{
        let date = {
            day: '12',
            month: '02',
            year: '2024'
        }
        let result = verify.isMoveable(date);
        expect(result).toEqual({
            holiday: true,
            description: 'Carnaval',
            date            
        });
    });


    it("Should return holiday to isState", ()=>{
        let date = {
            day: '20',
            month: '01',
            year: '2023'
        }
        let result = verify.isState(date, 'AC');
        expect(result).toEqual({
            holiday: true,
            description: 'Dia do Católico',
            date            
        });
    });

    it("Should return isn't holiday to isState", ()=>{
        let date = {
            day: '20',
            month: '01',
            year: '2023'
        }
        let result = verify.isState(date, 'MG');
        expect(result).toEqual({
            holiday: false,
            description: false,
            date            
        });
    });

    it("Should return holiday to isNational", ()=>{
        let date = {
            day: '01',
            month: '01',
            year: '2023'
        }
        let result = verify.isNational(date);
        expect(result).toEqual({
            holiday: true,
            description: 'Confraternização Universal',
            date            
        });
    });

    it("Should return isn't holiday to isNational", async()=>{
        let date = {
            day: '02',
            month: '01',
            year: '2023'
        }
        let result = verify.isNational(date);
        expect(result).toEqual({
            holiday: false,
            description: false,
            date            
        });
    });

    it("Should return holiday to isHolidayCreated", async()=>{
        let date = {
            day: '15',
            month: '05',
            year: '2023'
        }
        let createdHolidays = [
            {
                date: '15/05',
                year: '2023',
                city: 'Passos',
                description: 'Aniversário de Passos',
                moveable: false
            }
        ]
        let result = verify.isCreatedHolidays(createdHolidays, date);
        
        expect(result).toEqual({
            holiday: true,
            description: 'Aniversário de Passos',
            date            
        });
    });
    it("Should return holiday to isHolidayCreated", async()=>{
        let date = {
            day: '15',
            month: '05',
            year: '2024'
        }
        let createdHolidays = [
            {
                date: '15/05',
                year: '2023',
                city: 'Passos',
                description: 'Aniversário de Passos',
                moveable: true
            }
        ]
        let result = verify.isCreatedHolidays(createdHolidays, date);
        
        expect(result).toEqual({
            holiday: false,
            description: false,
            date            
        });
    });

});