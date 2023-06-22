const {exception} = require('../common/exception');

describe('Exception error', ()=> {
    it("Should return exception error", ()=>{
        exception.UserException('Invalid format, please use DD/MM/YYYY');
        let result = exception.get()
        expect(result).toEqual('Invalid format, please use DD/MM/YYYY')
    });
});