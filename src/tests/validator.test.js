const { exception } = require('../common/exception');
const {validator} = require('../common/validator');

describe('validator test', ()=>{
    it('should return true to validator', ()=>{
        let result = validator.validate('01/01/2023');
        expect(result).toBe(true);
    });
    it('should return false to validator', ()=>{
        let result = validator.validate('01/01/202');
        expect(result).toBe(false);
    })
})