const express = require('express');
const PORT = 3000;
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());

// mongodb connection
require('./database/db')();

app.get('/',(req,res)=>{
    res.send("Hello");
})

app.use('/api',require('./routes/routes'))


app.listen(PORT,()=>{
    console.log(`Server started on http://localhost:${PORT}`);
})