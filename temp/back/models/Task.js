const mongoose = require('mongoose')            //1

const TaskSchema = new mongoose.Schema({        //2
/* name: String; completed: Boolean*/			//3
  name: {                                       //4
    type: String,                               //4a
    required: [true, 'must provide name'],      //4b
    trim: true,                                 //4c
    maxlength: [20, 'name can not be more than 20 characters'],   //4d
  },                                            
  completed: {                                  //5
    type: Boolean,
    default: false,
  },
})

module.exports = mongoose.model('Task', TaskSchema) 	//6

//6a
//const Task = mongoose.model("tasks", TaskSchema);
//module.exports = Task;