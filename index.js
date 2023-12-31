

//import json server
const jsonserver=require('json-server')
//server creation
const server=jsonserver.create()
//parse json data to js - middleware
const middleware=jsonserver.defaults()
//create router
const router=jsonserver.router("db.json")
//port
const PORT=process.env.PORT || 4000
//use 
server.use(middleware)
server.use(router)
//  listen
server.listen(PORT,()=>{
    console.log(`json server started at port number ${PORT}`);
})




