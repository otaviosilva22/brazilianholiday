
const exception = {
    
    UserException(message){
        this.message = message,
        this.name = "UserException"
    },

    get(){
        return this.message
    }
}

module.exports = {
    exception
}