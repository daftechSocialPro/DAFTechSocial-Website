
const connection = require('../../dbconnection')

 exports.contactMessageCreate = (req, res )=>{

    const fullname = req.body.fullname;
    const email = req.body.email;
    const message = req.body.message;
    

    
    console.log(req.body)
    
    
            let sqlQuery = "INSERT INTO contactmessage (fullname, email , message) VALUES (?) ";
            let VALUES = [fullname , email, message];
          
            connection.query(sqlQuery,[VALUES],(err ,result )=>{
    
                if (err) throw err;
                
                res.send("1 record created")
    
            })
    }


    

    exports.getContacts = function (req, res ){

    
    
        let sqlQuery = "SELECT * FROM contactmessage";
       
      
        connection.query(sqlQuery,(err ,result )=>{

            if (err) throw err;
            
            console.log (result)
            res.send(result)

        })
}


