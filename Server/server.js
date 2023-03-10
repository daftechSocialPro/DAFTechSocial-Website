const express = require ('express')
const app = express();
const cors = require ('cors');

const postRoutes = require('./routes/creatcontactmessageroute');
app.use(cors());
app.use(express.json());
app.use('/',postRoutes);

app.listen(2000,()=>{
    console.log ("server running on port 2000")
})