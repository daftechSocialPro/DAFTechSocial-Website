const mysql = require ('mysql2')
const connection = mysql.createConnection({
    user:"kirubel",
    host:"localhost",
    password:"P@ssw0rd",
    database:"daftechsocialwebsite"
})
    
    
  connection.connect((err,result)=>{
      if (err) throw err ;
      console.log("connection created")
  })

  module.exports= connection