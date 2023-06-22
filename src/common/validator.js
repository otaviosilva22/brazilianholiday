const validator = {
    validate(date){

        let regex = /^(\d{2})\/(\d{2})\/(\d{4})$/.test(date);
    
        if (!regex)
            return false;
    
        return true;
    }    
}

module.exports = {
    validator
}