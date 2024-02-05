let pathh = require('path')
let fileSystem =require('fs')
fileSystem.writeFile('reply.txt',"hey My new file is been created",(error)=>{
    if(error) throw error
    console.log(`your's file been created `)})
