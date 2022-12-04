const mongoose = require('mongoose');


const TaskSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true, 'must provide name'],//first item is the value, the next is the custom message
        trim:true,
        maxlength:[30, 'name cannot be more than 30 characters']//validators object
    },//validators for name^
    completed:{Type:Boolean,
        default:false
    }
});


module.exports = mongoose.model('Task', TaskSchema)