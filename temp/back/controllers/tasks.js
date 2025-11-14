const Task = require('../models/Task.js')		//7

const getAllTasks =  (req, res) => {
  res.send('get all tasks')
}

//in stead of this createTask :
//const createTask = (req, res) => {
//  res.send('create task')
//}
//we will write a working command:
const createTask = async (req, res) => {			//8
  const task = await Task.create(req.body)			//9
  res.status(201).json({ task })					//10
}



const getTask = (req, res) => {
  res.send('get single task')
}


const updateTask = (req, res) => {
  res.send('update a task')
}

const deleteTask = (req, res) => {
  res.send('delete task')
}


module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
}
