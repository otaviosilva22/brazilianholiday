const { exception } = require('../common/exception');
const {validator} = require('../common/validator');

describe('validator test', ()=>{
    it('should return true to validator', ()=>{
        let result = validator.validate('01/01/2023');
        expect(result).toBe(true);
    });
    it('should return false to validator', ()=>{
        let result_date_invalid = validator.validate('01/01/202');
        let result_state_invalid = validator.validate('01/01/2023', 'AB');
        expect(result_date_invalid).toBe(false);
        expect(result_state_invalid).toBe(false);
    })
})