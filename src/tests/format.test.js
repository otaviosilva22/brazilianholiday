const {validator} = require('../common/validator');
const {exception} = require('../common/exception');
const {format} = require('../common/format')

describe('Exception error', ()=> {
    it("Should return success to formatParams", ()=>{
        jest.spyOn(validator, 'validate').mockImplementation(()=> {
            return true
        })
        let result = format.formatParams('01/01/2023');
        expect(result).toEqual({
            day: '01',
            month: '01',
            year: '2023'
        })
    });

    it("Should return success to formatParams whit date > 09", ()=>{
        jest.spyOn(validator, 'validate').mockImplementation(()=> {
            return true
        })
        let result = format.formatParams('10/10/2023');
        expect(result).toEqual({
            day: '10',
            month: '10',
            year: '2023'
        })
    });

    test("Should return error to format", ()=>{
        try{
            jest.spyOn(validator, 'validate').mockImplementation(()=> {
                return false
            })
            let result = format.formatParams('01/01/203')
        }catch(e){
            expect(e.message).toEqual('Invalid params');
        } 
    });

    it("Should return succes to formatResponse isNational", ()=>{
        jest.spyOn(validator, 'validate').mockImplementation(()=> {
            return true
        })

        let responseNational = {
            holiday: true,
            description: 'Confraternização Universal',
            date: '01/01/2023'
        }   
        let responseState = {
            holiday: false,
            description: false,
            date: '01/01/2023'
        }
        let responseMoveable = {
            holiday: false,
            description: false,
            date: '01/01/2023'
        }

        let result = format.formatResponse({responseMoveable, responseNational, responseState}, '01/01/2023');
        expect(result).toEqual({
            holiday: true,
            description: 'Confraternização Universal',
            date: '01/01/2023'
        });
    });

    it("Should return succes to formatResponse isState", ()=>{
        jest.spyOn(validator, 'validate').mockImplementation(()=> {
            return true
        })

        let responseNational = {
            holiday: false,
            description: false,
            date: '20/01/2023'
        }   
        let responseState = {
            holiday: true,
            description: 'Dia do Católico',
            date: '20/01/2023'
        }
        let responseMoveable = {
            holiday: false,
            description: false,
            date: '20/01/2023'
        }

        let result = format.formatResponse({responseMoveable, responseNational, responseState}, '20/01/2023');
        expect(result).toEqual({
            holiday: true,
            description: 'Dia do Católico',
            date: '20/01/2023'
        });
    });

    it("Should return succes to formatResponse isMoveable", ()=>{
        jest.spyOn(validator, 'validate').mockImplementation(()=> {
            return true
        })

        let responseNational = {
            holiday: false,
            description: false,
            date: '12/02/2024'
        }   
        let responseState = {
            holiday: false,
            description: false,
            date: '12/02/2024'
        }
        let responseMoveable = {
            holiday: true,
            description: 'Carnaval',
            date: '12/02/2024'
        }

        let result = format.formatResponse({responseMoveable, responseNational, responseState}, '12/02/2024');
        expect(result).toEqual({
            holiday: true,
            description: 'Carnaval',
            date: '12/02/2024'
        });
    });

    it("Should return succes to formatResponse isMoveable", ()=>{
        jest.spyOn(validator, 'validate').mockImplementation(()=> {
            return true
        })

        let responseNational = {
            holiday: false,
            description: false,
            date: '12/01/2024'
        }   
        let responseState = {
            holiday: false,
            description: false,
            date: '12/01/2024'
        }
        let responseMoveable = {
            holiday: false,
            description: false,
            date: '12/01/2024'
        }

        let result = format.formatResponse({responseMoveable, responseNational, responseState}, '12/01/2024');
        expect(result).toEqual({
            holiday: false,
            description: false,
            date: '12/01/2024'
        });
    });
});