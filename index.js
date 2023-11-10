const app=require('./app');
const db=require('./config/db');
const userModel=require('./models/user.model')
const todoModel=require('./models/todo.model')
app.listen(3000,()=>{
    console.log("Server Started");
})