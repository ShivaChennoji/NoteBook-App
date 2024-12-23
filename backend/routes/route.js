const express=require('express')
const app=express.Router()

var employeeController=require('../src/usercontroller')//single dot means referring inside only first child folder   
app.get('/Get',employeeController.Getdata);
app.post('/Create',employeeController.Createdata);
app.put('/notes/:id',employeeController.Updatedata);
app.delete('/notes/:id',employeeController.deletedata);
app.post('/register',employeeController.register);
app.post('/login',employeeController.loginUser)
app.get('/Logindata',employeeController.UserData)
module.exports=app
